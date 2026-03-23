import { eq, desc, and } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import { InsertUser, users, posts, InsertPost, notifications, InsertNotification, products, orders, InsertOrder, stripeCustomers, InsertStripeCustomer } from "../drizzle/schema";
import { ENV } from './_core/env';

let _db: ReturnType<typeof drizzle> | null = null;

// Lazily create the drizzle instance so local tooling can run without a DB.
export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) {
    throw new Error("User openId is required for upsert");
  }

  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot upsert user: database not available");
    return;
  }

  try {
    const values: InsertUser = {
      openId: user.openId,
    };
    const updateSet: Record<string, unknown> = {};

    const textFields = ["name", "email", "loginMethod"] as const;
    type TextField = (typeof textFields)[number];

    const assignNullable = (field: TextField) => {
      const value = user[field];
      if (value === undefined) return;
      const normalized = value ?? null;
      values[field] = normalized;
      updateSet[field] = normalized;
    };

    textFields.forEach(assignNullable);

    if (user.lastSignedIn !== undefined) {
      values.lastSignedIn = user.lastSignedIn;
      updateSet.lastSignedIn = user.lastSignedIn;
    }
    if (user.role !== undefined) {
      values.role = user.role;
      updateSet.role = user.role;
    } else if (user.openId === ENV.ownerOpenId) {
      values.role = 'admin';
      updateSet.role = 'admin';
    }

    if (!values.lastSignedIn) {
      values.lastSignedIn = new Date();
    }

    if (Object.keys(updateSet).length === 0) {
      updateSet.lastSignedIn = new Date();
    }

    await db.insert(users).values(values).onDuplicateKeyUpdate({
      set: updateSet,
    });
  } catch (error) {
    console.error("[Database] Failed to upsert user:", error);
    throw error;
  }
}

export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get user: database not available");
    return undefined;
  }

  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);

  return result.length > 0 ? result[0] : undefined;
}

// ===== BLOG POSTS =====

export async function getPublishedPosts(category?: string) {
  const db = await getDb();
  if (!db) return [];
  const query = db.select().from(posts)
    .where(category
      ? and(eq(posts.published, 'published'), eq(posts.category, category as any))
      : eq(posts.published, 'published'))
    .orderBy(desc(posts.createdAt));
  return query;
}

export async function getAllPosts() {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(posts).orderBy(desc(posts.createdAt));
}

export async function getPostBySlug(slug: string) {
  const db = await getDb();
  if (!db) return undefined;
  const result = await db.select().from(posts).where(eq(posts.slug, slug)).limit(1);
  return result[0] ?? undefined;
}

export async function createPost(data: InsertPost) {
  const db = await getDb();
  if (!db) throw new Error('DB not available');
  const result = await db.insert(posts).values(data);
  return result;
}

export async function updatePost(id: number, data: Partial<InsertPost>) {
  const db = await getDb();
  if (!db) throw new Error('DB not available');
  return db.update(posts).set(data).where(eq(posts.id, id));
}

export async function deletePost(id: number) {
  const db = await getDb();
  if (!db) throw new Error('DB not available');
  return db.delete(posts).where(eq(posts.id, id));
}

// ===== NOTIFICATIONS =====

export async function createNotification(data: InsertNotification) {
  const db = await getDb();
  if (!db) throw new Error('DB not available');
  return db.insert(notifications).values(data);
}

export async function getUserNotifications(userId: number) {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(notifications)
    .where(eq(notifications.userId, userId))
    .orderBy(desc(notifications.createdAt));
}

export async function markNotificationAsRead(id: number) {
  const db = await getDb();
  if (!db) throw new Error('DB not available');
  return db.update(notifications).set({ read: 'read' }).where(eq(notifications.id, id));
}

export async function updateNotificationEmailStatus(id: number, status: 'sent' | 'failed') {
  const db = await getDb();
  if (!db) throw new Error('DB not available');
  return db.update(notifications).set({ emailSent: status }).where(eq(notifications.id, id));
}

// ===== PRODUCTS =====

export async function getActiveProducts() {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(products)
    .where(eq(products.active, 'active'))
    .orderBy(desc(products.createdAt));
}

export async function getAllProducts() {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(products).orderBy(desc(products.createdAt));
}

export async function getProductById(id: number) {
  const db = await getDb();
  if (!db) return undefined;
  const result = await db.select().from(products).where(eq(products.id, id)).limit(1);
  return result[0] ?? undefined;
}

// ===== ORDERS =====

export async function createOrder(data: InsertOrder) {
  const db = await getDb();
  if (!db) throw new Error('DB not available');
  return db.insert(orders).values(data);
}

export async function getUserOrders(userId: number) {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(orders)
    .where(eq(orders.userId, userId))
    .orderBy(desc(orders.createdAt));
}

export async function updateOrderStatus(id: number, status: 'pending' | 'completed' | 'failed' | 'cancelled') {
  const db = await getDb();
  if (!db) throw new Error('DB not available');
  return db.update(orders).set({ status }).where(eq(orders.id, id));
}

// ===== STRIPE CUSTOMERS =====

export async function createStripeCustomer(data: InsertStripeCustomer) {
  const db = await getDb();
  if (!db) throw new Error('DB not available');
  return db.insert(stripeCustomers).values(data);
}

export async function getStripeCustomerByUserId(userId: number) {
  const db = await getDb();
  if (!db) return undefined;
  const result = await db.select().from(stripeCustomers)
    .where(eq(stripeCustomers.userId, userId))
    .limit(1);
  return result[0] ?? undefined;
}

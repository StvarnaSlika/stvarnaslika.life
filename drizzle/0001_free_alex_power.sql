CREATE TABLE `posts` (
	`id` int AUTO_INCREMENT NOT NULL,
	`title` varchar(255) NOT NULL,
	`slug` varchar(255) NOT NULL,
	`excerpt` text,
	`content` text NOT NULL,
	`category` enum('psihologija','parapsihologija','alternativni-pristupi','ostalo') NOT NULL DEFAULT 'ostalo',
	`imageUrl` varchar(1024),
	`seoTitle` varchar(60),
	`seoDescription` varchar(160),
	`published` enum('draft','published') NOT NULL DEFAULT 'draft',
	`authorId` int NOT NULL,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `posts_id` PRIMARY KEY(`id`),
	CONSTRAINT `posts_slug_unique` UNIQUE(`slug`)
);

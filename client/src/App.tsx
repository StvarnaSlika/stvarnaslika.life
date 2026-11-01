import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Psychology from "./pages/Psychology";
import Parapsychology from "./pages/Parapsychology";
import AlternativeApproaches from "./pages/AlternativeApproaches";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ChatbotWidget from "./components/ChatbotWidget";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import AdminBlog from "./pages/AdminBlog";
import Tools from "./pages/Tools";
import Library from "./pages/Library";
import PageSeo from "./components/PageSeo";

function Router() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/o-nama" component={About} />
        <Route path="/psihologija" component={Psychology} />
        <Route path="/parapsihologija" component={Parapsychology} />
        <Route path="/alternativni-pristupi" component={AlternativeApproaches} />
        <Route path="/kontakt" component={Contact} />
        <Route path="/alati" component={Tools} />
        <Route path="/biblioteka" component={Library} />
        <Route path="/blog" component={Blog} />
        <Route path="/blog/:slug" component={BlogPost} />
        <Route path="/admin/blog" component={AdminBlog} />
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
      <ChatbotWidget />
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <PageSeo />
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;

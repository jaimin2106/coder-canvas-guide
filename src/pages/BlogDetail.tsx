import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User, Share2, BookmarkPlus, ThumbsUp } from "lucide-react";
import { motion } from "framer-motion";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const BlogDetail = () => {
  const { id } = useParams();
  const { ref, isVisible } = useScrollAnimation(0.1);

  // Sample blog data with proper content structure
  const blogPosts = {
    "building-scalable-react-applications": {
      id: "building-scalable-react-applications",
      title: "Building Scalable React Applications with TypeScript",
      content: `
        <p>In today's rapidly evolving web development landscape, creating robust and scalable applications requires the right combination of tools and technologies. React, combined with TypeScript, provides developers with a powerful foundation for building modern web applications that can grow with your business needs.</p>

        <h2>Why Choose React and TypeScript?</h2>
        <p>React's component-based architecture allows for reusable and maintainable code, while TypeScript adds static type checking that helps catch errors early in the development process. This combination results in more reliable, professional applications that are easier to debug and maintain.</p>

        <blockquote>
          <p>"The best React applications are built with intention, structure, and a clear understanding of scalability from day one." - Industry Expert</p>
        </blockquote>

        <h2>Essential Architecture Patterns</h2>
        <p>When building scalable React applications, consider these fundamental patterns:</p>
        
        <ul>
          <li><strong>Component Composition:</strong> Break down complex UIs into smaller, reusable components</li>
          <li><strong>Custom Hooks:</strong> Encapsulate stateful logic for better reusability</li>
          <li><strong>Context API:</strong> Manage global state without prop drilling</li>
          <li><strong>Error Boundaries:</strong> Gracefully handle component failures</li>
        </ul>

        <h2>TypeScript Best Practices</h2>
        <p>Implementing TypeScript effectively requires following specific patterns:</p>
        
        <pre><code>interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user' | 'guest';
}

const UserCard: React.FC<{ user: User }> = ({ user }) => {
  return (
    &lt;div className="user-card"&gt;
      &lt;h3&gt;{user.name}&lt;/h3&gt;
      &lt;p&gt;{user.email}&lt;/p&gt;
    &lt;/div&gt;
  );
};</code></pre>

        <h2>Performance Optimization Techniques</h2>
        <p>Ensure your React application performs optimally by implementing these strategies:</p>
        
        <ul>
          <li>Use React.memo for expensive components</li>
          <li>Implement code splitting with React.lazy</li>
          <li>Optimize state updates with useMemo and useCallback</li>
          <li>Implement virtual scrolling for large lists</li>
        </ul>

        <h2>Testing Strategy</h2>
        <p>A comprehensive testing approach includes unit tests, integration tests, and end-to-end testing. Use tools like Jest, React Testing Library, and Cypress to ensure your application works reliably across different scenarios.</p>

        <h2>Conclusion</h2>
        <p>By leveraging React and TypeScript together with proper architectural patterns, developers can create applications that are not only functional but also maintainable, testable, and scalable for future growth. Remember that good architecture is an investment in your application's long-term success.</p>
      `,
      author: "John Doe",
      date: "January 15, 2024",
      readTime: "8 min read",
      views: 1247,
      tags: ["React", "TypeScript", "Architecture", "Best Practices"],
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&h=600&fit=crop",
      category: "Frontend Development"
    }
  };

  const blogPost = blogPosts[id as keyof typeof blogPosts] || blogPosts["building-scalable-react-applications"];

  const relatedPosts = [
    {
      id: "future-of-web-development",
      title: "The Future of Web Development: AI-Powered Coding",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=200&fit=crop",
      readTime: "6 min read"
    },
    {
      id: "mastering-typescript-in-react",
      title: "Mastering TypeScript in React",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=200&fit=crop",
      readTime: "10 min read"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <motion.section 
        ref={ref}
        className="pt-32 pb-8 bg-gradient-surface relative overflow-hidden"
        initial={{ opacity: 0, y: 60 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="container-responsive relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link to="/blog">
              <Button variant="ghost" className="mb-8 gap-2 hover:gap-3 transition-all">
                <ArrowLeft className="h-4 w-4" />
                Back to Blog
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Article Content */}
      <div className="container-responsive py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <motion.article 
              className="bg-card rounded-2xl shadow-large overflow-hidden border border-border"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {/* Hero Image */}
              <div className="relative h-64 md:h-80 overflow-hidden">
                <img
                  src={blogPost.image}
                  alt={blogPost.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <span className="px-3 py-1 bg-accent text-accent-foreground text-sm font-medium rounded-full">
                    {blogPost.category}
                  </span>
                </div>
              </div>
              
              <div className="p-8 md:p-12">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {blogPost.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-muted text-muted-foreground">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Title */}
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                  {blogPost.title}
                </h1>

                {/* Meta Information */}
                <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8 pb-6 border-b border-border">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span className="font-medium">{blogPost.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {blogPost.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    {blogPost.readTime}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{blogPost.views} views</span>
                  </div>
                </div>

                {/* Article Content */}
                <div 
                  className="prose prose-lg max-w-none text-foreground
                    prose-headings:text-foreground prose-headings:font-semibold
                    prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
                    prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-4
                    prose-ul:text-muted-foreground prose-li:mb-2
                    prose-strong:text-foreground prose-strong:font-semibold
                    prose-blockquote:border-l-4 prose-blockquote:border-accent prose-blockquote:pl-6 prose-blockquote:italic
                    prose-code:bg-muted prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm
                    prose-pre:bg-muted prose-pre:p-4 prose-pre:rounded-lg prose-pre:overflow-x-auto"
                  dangerouslySetInnerHTML={{ __html: blogPost.content }}
                />

                {/* Action Buttons */}
                <div className="flex items-center gap-4 mt-12 pt-8 border-t border-border">
                  <Button variant="outline" size="sm" className="gap-2">
                    <ThumbsUp className="h-4 w-4" />
                    Like
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2">
                    <BookmarkPlus className="h-4 w-4" />
                    Save
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Share2 className="h-4 w-4" />
                    Share
                  </Button>
                </div>
              </div>
            </motion.article>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Author Card */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground mb-4">About the Author</h3>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                        <User className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{blogPost.author}</p>
                        <p className="text-sm text-muted-foreground">Senior Developer</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Passionate about creating scalable web applications and sharing knowledge with the developer community.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Related Posts */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground mb-4">Related Articles</h3>
                    <div className="space-y-4">
                      {relatedPosts.map((post) => (
                        <Link 
                          key={post.id} 
                          to={`/blog/${post.id}`}
                          className="block group"
                        >
                          <div className="flex gap-3">
                            <img 
                              src={post.image} 
                              alt={post.title}
                              className="w-16 h-16 object-cover rounded-lg group-hover:scale-105 transition-transform"
                            />
                            <div className="flex-1">
                              <h4 className="text-sm font-medium text-foreground group-hover:text-accent transition-colors line-clamp-2">
                                {post.title}
                              </h4>
                              <p className="text-xs text-muted-foreground mt-1">{post.readTime}</p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogDetail;
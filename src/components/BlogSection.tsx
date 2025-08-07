import { useState } from "react";
import { Calendar, Clock, TrendingUp, ArrowRight, Bookmark, Eye } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { useScrollAnimation, useStaggeredAnimation } from "../hooks/useScrollAnimation";

const BlogSection = () => {
  const [activeTab, setActiveTab] = useState("Hot");

  const hotBlogs = [
    {
      title: "Building Scalable React Applications with TypeScript",
      excerpt: "Learn best practices for structuring large React applications with TypeScript, including advanced typing patterns and performance optimizations.",
      date: "2024-01-15",
      readTime: "8 min read",
      views: "2.4k",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop",
      tags: ["React", "TypeScript", "Architecture"],
    },
    {
      title: "The Future of Web Development: AI-Powered Coding",
      excerpt: "Exploring how artificial intelligence is revolutionizing the way we write, test, and deploy code in modern web development workflows.",
      date: "2024-01-10",
      readTime: "12 min read",
      views: "3.1k",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
      tags: ["AI", "Productivity", "Future Tech"],
    },
    {
      title: "Mastering CSS Grid: Advanced Layout Techniques",
      excerpt: "Deep dive into CSS Grid with practical examples, covering complex layouts, responsive design patterns, and browser compatibility.",
      date: "2024-01-05",
      readTime: "10 min read",
      views: "1.8k",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop",
      tags: ["CSS", "Web Design", "Layout"],
    },
  ];

  const newBlogs = [
    {
      title: "Getting Started with Supabase: The Firebase Alternative",
      excerpt: "A comprehensive guide to building full-stack applications with Supabase, covering authentication, real-time subscriptions, and database management.",
      date: "2024-01-20",
      readTime: "15 min read",
      views: "756",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop",
      tags: ["Supabase", "Backend", "Database"],
    },
    {
      title: "Modern State Management in React: Zustand vs Redux Toolkit",
      excerpt: "Comparing modern state management solutions, their use cases, performance implications, and when to choose each approach.",
      date: "2024-01-18",
      readTime: "11 min read",
      views: "923",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop",
      tags: ["React", "State Management", "Performance"],
    },
    {
      title: "Creating Stunning Animations with Framer Motion",
      excerpt: "Learn to create engaging user interfaces with smooth animations using Framer Motion, from basic transitions to complex orchestrated sequences.",
      date: "2024-01-16",
      readTime: "9 min read",
      views: "634",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=250&fit=crop",
      tags: ["Animation", "UX", "Framer Motion"],
    },
  ];

  const currentBlogs = activeTab === "Hot" ? hotBlogs : newBlogs;
  const { ref, isVisible } = useScrollAnimation(0.1);
  const { containerRef, visibleItems } = useStaggeredAnimation(currentBlogs.length, 150);

  return (
    <motion.section 
      ref={ref} 
      id="blog" 
      className="padding-responsive bg-gradient-surface relative overflow-hidden"
      initial={{ opacity: 0, y: 60 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 right-1/4 w-64 h-64 bg-accent/3 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-primary/3 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 0.8, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container-responsive relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full"
            initial={{ scale: 0 }}
            animate={isVisible ? { scale: 1 } : { scale: 0 }}
            transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
          >
            <Bookmark className="h-5 w-5 text-accent" />
            <span className="text-accent font-medium text-sm">Latest Insights</span>
          </motion.div>
          
          <h2 className="text-responsive-xl font-bold text-foreground mb-6">
            Latest Blog 
            <span className="text-accent block">Posts</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Sharing insights, tutorials, and thoughts on modern web development, 
            emerging technologies, and industry best practices.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div 
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-1 shadow-lg border border-border/50">
            {["Hot", "New"].map((tab) => (
              <Button
                key={tab}
                variant={activeTab === tab ? "hero" : "ghost"}
                size="sm"
                onClick={() => setActiveTab(tab)}
                className="mx-1 gap-2 transition-all duration-300 hover:scale-105"
              >
                {tab === "Hot" && <TrendingUp className="h-4 w-4" />}
                {tab === "New" && <Clock className="h-4 w-4" />}
                {tab}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Blog Grid - Minimalistic Cards */}
        <div 
          ref={containerRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {currentBlogs.map((blog, index) => (
            <motion.article
              key={blog.title}
              className="
                bg-card backdrop-blur-sm rounded-xl shadow-medium hover:shadow-large 
                transition-all duration-300 overflow-hidden group cursor-pointer
                border border-border hover:border-accent/30 hover:shadow-accent-glow
                hover:-translate-y-1
              "
              initial={{ opacity: 0, y: 30 }}
              animate={
                visibleItems.includes(index) 
                  ? { opacity: 1, y: 0 } 
                  : { opacity: 0, y: 30 }
              }
              transition={{ 
                duration: 0.5, 
                ease: "easeOut",
                delay: index * 0.1
              }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              onClick={() => window.location.href = `/blog/${blog.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`}
            >
              {/* Minimalistic Blog Image */}
              <div className="relative overflow-hidden h-40">
                <motion.img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-300"
                  whileHover={{ scale: 1.05 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                
                {/* Clean View Count */}
                <div className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm text-foreground text-xs px-2 py-1 rounded-md font-medium">
                  <Eye className="h-3 w-3 inline mr-1" />
                  {blog.views}
                </div>
              </div>

              {/* Minimalistic Blog Content */}
              <div className="p-4">
                {/* Clean Meta Info */}
                <div className="flex items-center text-muted-foreground text-xs mb-2">
                  <span>{new Date(blog.date).toLocaleDateString()}</span>
                  <span className="mx-2">•</span>
                  <span>{blog.readTime}</span>
                </div>

                {/* Clean Title */}
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors line-clamp-2">
                  {blog.title}
                </h3>

                {/* Clean Excerpt */}
                <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                  {blog.excerpt}
                </p>

                {/* Clean Tags */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {blog.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                  {blog.tags.length > 2 && (
                    <span className="text-xs text-muted-foreground">+{blog.tags.length - 2}</span>
                  )}
                </div>

                {/* Clean Read More */}
                <div className="flex items-center text-accent text-sm font-medium">
                  <span>Read More</span>
                  <ArrowRight className="h-3 w-3 ml-1 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Posts Button */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <Button 
            variant="outline" 
            size="lg" 
            className="gap-2 hover:scale-105 transition-transform border-accent/30 hover:border-accent hover:bg-accent/10" 
            asChild
          >
            <a href="/blog">
              View All Blog Posts
              <ArrowRight className="h-5 w-5" />
            </a>
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default BlogSection;
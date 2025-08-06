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
    <section ref={ref} id="blog" className="py-20 bg-gradient-to-br from-background via-purple-50/30 to-background relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-400/5 rounded-full blur-3xl"
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
          className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-accent/5 rounded-full blur-3xl"
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full"
            initial={{ scale: 0 }}
            animate={isVisible ? { scale: 1 } : { scale: 0 }}
            transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
          >
            <Bookmark className="h-5 w-5 text-purple-500" />
            <span className="text-purple-500 font-medium text-sm">Latest Insights</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
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

        {/* Blog Grid - Horizontal on Mobile */}
        <div 
          ref={containerRef}
          className="
            grid grid-cols-1 gap-6
            sm:grid-cols-2 sm:gap-6
            md:grid-cols-3 md:gap-8
            overflow-x-auto sm:overflow-x-visible
            pb-4 sm:pb-0
          "
          style={{
            // Mobile horizontal scroll
            gridTemplateColumns: 'repeat(3, 280px)',
            gridAutoFlow: 'column',
          }}
        >
          {currentBlogs.map((blog, index) => (
            <motion.article
              key={blog.title}
              className="
                bg-card/50 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl 
                transition-all duration-500 overflow-hidden group 
                hover:-translate-y-2 border border-border/50 cursor-pointer
                min-w-[280px] sm:min-w-0
                hover:border-accent/30 hover:shadow-accent/10
              "
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={
                visibleItems.includes(index) 
                  ? { opacity: 1, y: 0, scale: 1 } 
                  : { opacity: 0, y: 50, scale: 0.9 }
              }
              transition={{ 
                duration: 0.6, 
                ease: "easeOut",
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.02,
                rotate: [0, 1, -1, 0],
                transition: { duration: 0.3 }
              }}
            >
              {/* Blog Image */}
              <div className="relative overflow-hidden">
                <motion.img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover transition-transform duration-500"
                  whileHover={{ scale: 1.1 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Floating View Count */}
                <motion.div 
                  className="absolute top-4 right-4 bg-accent/20 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full font-medium border border-accent/30"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, type: "spring" }}
                >
                  <Eye className="h-3 w-3 inline mr-1" />
                  {blog.views}
                </motion.div>

                {/* Hover Overlay with Bookmark */}
                <motion.div
                  className="absolute top-4 left-4 opacity-0 group-hover:opacity-100"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                    <Bookmark className="h-4 w-4 text-white" />
                  </div>
                </motion.div>
              </div>

              {/* Blog Content */}
              <div className="p-6">
                <motion.div 
                  className="flex items-center text-muted-foreground text-sm mb-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{new Date(blog.date).toLocaleDateString()}</span>
                  <span className="mx-2">•</span>
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{blog.readTime}</span>
                </motion.div>

                <motion.h3 
                  className="text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors leading-tight line-clamp-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {blog.title}
                </motion.h3>

                <motion.p 
                  className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {blog.excerpt}
                </motion.p>

                {/* Tags */}
                <motion.div 
                  className="flex flex-wrap gap-2 mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  {blog.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tag}
                      className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full border border-accent/20 hover:bg-accent/20 transition-all duration-300"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.6 + tagIndex * 0.1, type: "spring" }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </motion.div>

                {/* Read More */}
                <motion.div 
                  className="flex items-center text-accent text-sm font-medium group-hover:gap-2 transition-all duration-300"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                  whileHover={{ x: 5 }}
                >
                  <span>Read More</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </motion.div>
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
    </section>
  );
};

export default BlogSection;
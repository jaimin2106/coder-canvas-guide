import { useState } from "react";
import { Calendar, Clock, TrendingUp, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

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

  return (
    <section id="blog" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Latest Blog Posts
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sharing insights, tutorials, and thoughts on modern web development, 
            emerging technologies, and industry best practices.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-surface rounded-lg p-1 shadow-soft border border-border-soft">
            {["Hot", "New"].map((tab) => (
              <Button
                key={tab}
                variant={activeTab === tab ? "hero" : "ghost"}
                size="sm"
                onClick={() => setActiveTab(tab)}
                className="mx-1 gap-2 transition-all duration-300"
              >
                {tab === "Hot" && <TrendingUp className="h-4 w-4" />}
                {tab === "New" && <Clock className="h-4 w-4" />}
                {tab}
              </Button>
            ))}
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentBlogs.map((blog, index) => (
            <article
              key={blog.title}
              className="bg-card rounded-lg shadow-medium hover:shadow-large transition-all duration-300 overflow-hidden group hover:-translate-y-2 border border-border-soft cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Blog Image */}
              <div className="relative overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-accent text-accent-foreground text-xs px-2 py-1 rounded-full font-medium">
                    {blog.views} views
                  </span>
                </div>
              </div>

              {/* Blog Content */}
              <div className="p-6">
                <div className="flex items-center text-muted-foreground text-sm mb-3">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{new Date(blog.date).toLocaleDateString()}</span>
                  <span className="mx-2">•</span>
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{blog.readTime}</span>
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors leading-tight">
                  {blog.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {blog.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {blog.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-surface text-muted-foreground px-2 py-1 rounded border border-border-soft"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Read More */}
                <div className="flex items-center text-accent text-sm font-medium group-hover:gap-2 transition-all duration-300">
                  <span>Read More</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Posts Button */}
        <div className="text-center mt-12">
          <Button variant="professional" size="lg" className="gap-2">
            View All Blog Posts
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
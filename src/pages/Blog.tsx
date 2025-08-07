import { useState } from "react";
import { ArrowLeft, Calendar, Clock, Eye, Tag, Search, Filter } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Card, CardContent, CardHeader } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Blog = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const { ref, isVisible } = useScrollAnimation(0.1);

  const allBlogs = [
    {
      id: "building-scalable-react-applications",
      title: "Building Scalable React Applications with TypeScript",
      excerpt: "Learn the best practices for building large-scale React applications that maintain performance and developer experience.",
      content: "In this comprehensive guide, we'll explore the essential patterns and practices for building React applications that can scale from small prototypes to enterprise-level systems...",
      date: "2024-01-15",
      readTime: "8 min read",
      views: 1247,
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop",
      tags: ["React", "TypeScript", "Architecture"],
      category: "Frontend"
    },
    {
      id: "future-of-web-development",
      title: "The Future of Web Development: AI-Powered Coding",
      excerpt: "Exploring how artificial intelligence is revolutionizing the way we write, test, and deploy code in modern web development workflows.",
      content: "The web development landscape is constantly evolving. From new frameworks to revolutionary approaches to state management, let's dive into what's coming next...",
      date: "2024-01-12",
      readTime: "6 min read",
      views: 892,
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
      tags: ["AI", "Productivity", "Future Tech"],
      category: "Technology"
    },
    {
      id: "mastering-typescript-in-react",
      title: "Mastering TypeScript in React",
      excerpt: "Advanced TypeScript patterns and techniques to write better, more maintainable React code.",
      content: "TypeScript has become an essential tool in modern React development. In this article, we'll explore advanced patterns that will make your code more robust...",
      date: "2024-01-10",
      readTime: "10 min read",
      views: 2156,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop",
      tags: ["TypeScript", "React", "Development"],
      category: "Frontend"
    },
    {
      id: "database-design-best-practices",
      title: "Database Design Best Practices",
      excerpt: "Essential principles for designing efficient and scalable database schemas.",
      content: "Good database design is the foundation of any successful application. Let's explore the principles that will help you create robust data structures...",
      date: "2024-01-08",
      readTime: "12 min read",
      views: 1543,
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop",
      tags: ["Database", "Design", "Backend"],
      category: "Backend"
    },
    {
      id: "api-security-fundamentals",
      title: "API Security Fundamentals",
      excerpt: "Comprehensive guide to securing your APIs against common vulnerabilities and attacks.",
      content: "API security is crucial in today's interconnected world. This guide covers essential security practices every developer should know...",
      date: "2024-01-05",
      readTime: "9 min read",
      views: 987,
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop",
      tags: ["Security", "API", "Backend"],
      category: "Security"
    },
    {
      id: "modern-css-layout-techniques",
      title: "Modern CSS Layout Techniques",
      excerpt: "Exploring Grid, Flexbox, and Container Queries for responsive web design.",
      content: "CSS has evolved significantly with powerful layout tools. Let's explore how to use Grid, Flexbox, and modern techniques to create beautiful layouts...",
      date: "2024-01-03",
      readTime: "7 min read",
      views: 1876,
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=400&fit=crop",
      tags: ["CSS", "Layout", "Frontend"],
      category: "Frontend"
    }
  ];

  const categories = ["All", "Frontend", "Backend", "Technology", "Security"];
  
  const filteredBlogs = allBlogs.filter(blog => {
    const matchesCategory = activeFilter === "All" || blog.category === activeFilter;
    const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         blog.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <motion.section 
        ref={ref}
        className="pt-32 pb-16 bg-gradient-surface relative overflow-hidden"
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
        </div>

        <div className="container-responsive relative z-10">
          <motion.div 
            className="flex items-center gap-4 mb-8"
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </motion.div>
          
          <motion.div 
            className="max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1 className="text-responsive-xl font-bold text-foreground mb-6">
              Blog & 
              <span className="text-accent block">Insights</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Thoughts, tutorials, and insights about web development, technology, 
              and the ever-evolving digital landscape.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Search and Filter Section */}
      <section className="py-8 border-b border-border bg-card/30">
        <div className="container-responsive">
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-background border-border"
              />
            </div>

            {/* Category Filters */}
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={activeFilter === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveFilter(category)}
                    className="transition-all duration-200 hover:scale-105"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="padding-responsive">
        <div className="container-responsive">
          {filteredBlogs.length === 0 ? (
            <motion.div 
              className="text-center py-16"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold text-muted-foreground mb-2">No articles found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filter criteria.</p>
            </motion.div>
          ) : (
            <div className="grid grid-responsive gap-8">
              {filteredBlogs.map((blog, index) => (
                <motion.div
                  key={blog.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="group hover:shadow-large transition-all duration-300 hover:-translate-y-2 border-border hover:border-accent/30 cursor-pointer overflow-hidden">
                    <Link to={`/blog/${blog.id}`}>
                      <CardHeader className="p-0">
                        <div className="relative overflow-hidden">
                          <img 
                            src={blog.image} 
                            alt={blog.title}
                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <div className="absolute top-4 left-4">
                            <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full">
                              {blog.category}
                            </span>
                          </div>
                          <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm text-foreground text-xs px-2 py-1 rounded-md font-medium">
                            <Eye className="h-3 w-3 inline mr-1" />
                            {blog.views}
                          </div>
                        </div>
                      </CardHeader>
                      
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors line-clamp-2">
                          {blog.title}
                        </h3>
                        
                        <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
                          {blog.excerpt}
                        </p>
                        
                        {/* Meta Information */}
                        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {new Date(blog.date).toLocaleDateString()}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {blog.readTime}
                          </div>
                        </div>
                        
                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {blog.tags.slice(0, 3).map((tag) => (
                            <span 
                              key={tag}
                              className="flex items-center gap-1 px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md"
                            >
                              <Tag className="h-2 w-2" />
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <div className="text-accent text-sm font-medium">
                          Read More →
                        </div>
                      </CardContent>
                    </Link>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
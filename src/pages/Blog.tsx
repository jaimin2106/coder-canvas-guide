import { useState } from "react";
import { ArrowLeft, Calendar, Clock, Eye, Tag } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Card, CardContent, CardHeader } from "../components/ui/card";

const Blog = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const allBlogs = [
    {
      id: 1,
      title: "Building Scalable React Applications",
      excerpt: "Learn the best practices for building large-scale React applications that maintain performance and developer experience.",
      content: "In this comprehensive guide, we'll explore the essential patterns and practices for building React applications that can scale from small prototypes to enterprise-level systems...",
      date: "2024-01-15",
      readTime: "8 min read",
      views: 1247,
      image: "/placeholder.svg",
      tags: ["React", "JavaScript", "Architecture"],
      category: "Frontend"
    },
    {
      id: 2,
      title: "The Future of Web Development",
      excerpt: "Exploring emerging technologies and trends that will shape web development in the coming years.",
      content: "The web development landscape is constantly evolving. From new frameworks to revolutionary approaches to state management, let's dive into what's coming next...",
      date: "2024-01-12",
      readTime: "6 min read",
      views: 892,
      image: "/placeholder.svg",
      tags: ["Web Development", "Trends", "Future"],
      category: "Technology"
    },
    {
      id: 3,
      title: "Mastering TypeScript in React",
      excerpt: "Advanced TypeScript patterns and techniques to write better, more maintainable React code.",
      content: "TypeScript has become an essential tool in modern React development. In this article, we'll explore advanced patterns that will make your code more robust...",
      date: "2024-01-10",
      readTime: "10 min read",
      views: 2156,
      image: "/placeholder.svg",
      tags: ["TypeScript", "React", "Development"],
      category: "Frontend"
    },
    {
      id: 4,
      title: "Database Design Best Practices",
      excerpt: "Essential principles for designing efficient and scalable database schemas.",
      content: "Good database design is the foundation of any successful application. Let's explore the principles that will help you create robust data structures...",
      date: "2024-01-08",
      readTime: "12 min read",
      views: 1543,
      image: "/placeholder.svg",
      tags: ["Database", "Design", "Backend"],
      category: "Backend"
    },
    {
      id: 5,
      title: "API Security Fundamentals",
      excerpt: "Comprehensive guide to securing your APIs against common vulnerabilities and attacks.",
      content: "API security is crucial in today's interconnected world. This guide covers essential security practices every developer should know...",
      date: "2024-01-05",
      readTime: "9 min read",
      views: 987,
      image: "/placeholder.svg",
      tags: ["Security", "API", "Backend"],
      category: "Security"
    },
    {
      id: 6,
      title: "Modern CSS Layout Techniques",
      excerpt: "Exploring Grid, Flexbox, and Container Queries for responsive web design.",
      content: "CSS has evolved significantly with powerful layout tools. Let's explore how to use Grid, Flexbox, and modern techniques to create beautiful layouts...",
      date: "2024-01-03",
      readTime: "7 min read",
      views: 1876,
      image: "/placeholder.svg",
      tags: ["CSS", "Layout", "Frontend"],
      category: "Frontend"
    }
  ];

  const categories = ["All", "Frontend", "Backend", "Technology", "Security"];
  const filteredBlogs = activeFilter === "All" 
    ? allBlogs 
    : allBlogs.filter(blog => blog.category === activeFilter);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </div>
          
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Blog & Insights
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Thoughts, tutorials, and insights about web development, technology, 
              and the ever-evolving digital landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeFilter === category
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "bg-card text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog, index) => (
              <Card 
                key={blog.id} 
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={blog.image} 
                      alt={blog.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-2 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded">
                        {blog.category}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {blog.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
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
                    <div className="flex items-center gap-1">
                      <Eye className="h-3 w-3" />
                      {blog.views}
                    </div>
                  </div>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {blog.tags.slice(0, 2).map((tag) => (
                      <span 
                        key={tag}
                        className="flex items-center gap-1 px-2 py-1 bg-accent/10 text-accent text-xs rounded"
                      >
                        <Tag className="h-2 w-2" />
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Link 
                    to={`/blog/${blog.id}`}
                    className="inline-flex items-center text-primary hover:text-primary/80 text-sm font-medium transition-colors"
                  >
                    Read More →
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
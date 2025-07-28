import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const BlogDetail = () => {
  const { id } = useParams();

  // Sample blog data - replace with actual data source
  const blogPost = {
    id,
    title: "Building Modern Web Applications with React and TypeScript",
    content: `
      <p>In today's rapidly evolving web development landscape, creating robust and scalable applications requires the right combination of tools and technologies. React, combined with TypeScript, provides developers with a powerful foundation for building modern web applications.</p>

      <h2>Why React and TypeScript?</h2>
      <p>React's component-based architecture allows for reusable and maintainable code, while TypeScript adds static type checking that helps catch errors early in the development process. This combination results in more reliable and professional applications.</p>

      <h2>Best Practices</h2>
      <ul>
        <li>Use functional components with hooks</li>
        <li>Implement proper TypeScript interfaces</li>
        <li>Follow the DRY principle</li>
        <li>Optimize performance with React.memo and useMemo</li>
      </ul>

      <h2>Conclusion</h2>
      <p>By leveraging React and TypeScript together, developers can create applications that are not only functional but also maintainable and scalable for the future.</p>
    `,
    author: "Your Name",
    date: "December 15, 2024",
    readTime: "5 min read",
    tags: ["React", "TypeScript", "Web Development"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop"
  };

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link to="/#blog">
          <Button variant="ghost" className="mb-8 gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Button>
        </Link>

        {/* Article Header */}
        <article className="bg-card rounded-lg shadow-medium overflow-hidden">
          <img
            src={blogPost.image}
            alt={blogPost.title}
            className="w-full h-64 md:h-80 object-cover"
          />
          
          <div className="p-8">
            <div className="flex flex-wrap gap-2 mb-4">
              {blogPost.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              {blogPost.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8 pb-6 border-b border-border">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                {blogPost.author}
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {blogPost.date}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {blogPost.readTime}
              </div>
            </div>

            {/* Article Content */}
            <div 
              className="prose prose-lg max-w-none text-foreground"
              dangerouslySetInnerHTML={{ __html: blogPost.content }}
            />
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogDetail;
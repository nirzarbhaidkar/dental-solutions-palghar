
import { Link } from "react-router-dom";
import { Calendar, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";

interface ArticleCardProps {
  slug: string;
  image: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
}

const ArticleCard = ({ slug, image, title, excerpt, date, readTime, category }: ArticleCardProps) => {
  return (
    <Link to={`/blog/${slug}`} className="group block">
      <Card className="overflow-hidden border-none shadow-none hover:bg-accent/10 transition-colors duration-300">
        <div className="grid md:grid-cols-5 gap-6">
          <div className="md:col-span-2 aspect-[4/3] overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="md:col-span-3 p-4 flex flex-col justify-between">
            <div>
              <span className="inline-block text-sm font-medium text-primary mb-2">
                {category}
              </span>
              <h2 className="text-2xl font-serif font-semibold mb-3 text-gray-900 group-hover:text-primary transition-colors line-clamp-2">
                {title}
              </h2>
              <p className="text-gray-600 line-clamp-2 mb-4">{excerpt}</p>
            </div>
            <div className="flex items-center text-sm text-gray-500 gap-4">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                <span>{readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default ArticleCard;

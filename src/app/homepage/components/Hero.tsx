import { CategoryConnection, FeaturedImage } from "@/app/types/post";
interface HeroProps {
  title: string;
  excerpt: string;
  date: string;
  featuredImage: FeaturedImage | null;
  categories: CategoryConnection;
}

export default function Hero({
  title,
  excerpt,
  // date,
  featuredImage,
  categories,
}: HeroProps) {
  const cleanExcerpt = excerpt.replace(/<\/?p>/g, "");
  return (
    <section className="relative w-full h-[80vh] overflow-hidden">
      <div className="w-full h-full">
        <img
          src={
            featuredImage?.node.mediaDetails.sizes?.[3]?.sourceUrl ||
            "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          }
          alt="CBDC Trade Finance"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tags */}
          <div className="mb-4 flex flex-wrap gap-2">
            {categories.edges.map(({ node }) => (
              <span
                key={node.id}
                className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-ttp-orange bg-white/20 text-white mr-2"
              >
                {node.name}
              </span>
            ))}
            ;
          
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            {title}
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl">
            {cleanExcerpt}
          </p>
        </div>
      </div>
    </section>
  );
}

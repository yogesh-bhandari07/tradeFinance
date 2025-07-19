"use client";
import { RelatedPosts } from "@/app/types/post";
import { format } from "timeago.js"; // Install this with: npm install timeago.js

interface SinglePostProps {
  data: RelatedPosts;
  onSelectSlug: (slug: string) => void;
}


function getExcerpt(html: string, wordCount: number = 20): string {
  const div = document.createElement("div");
  div.innerHTML = html;
  const text = div.textContent || div.innerText || "";
  return text.split(" ").slice(0, wordCount).join(" ") + "...";
}

export default function RelatedArticles({ data, onSelectSlug }: SinglePostProps){
  const { nodes: articles } = data;

  return (
    <section className="mt-12 mb-8 mx-2 bg-white">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Related Articles</h2>
        <button className="inline-flex items-center gap-2 text-sm font-medium text-black border border-gray-300 bg-white hover:bg-gray-100 hover:text-black rounded-md px-3 h-9 transition">
          View All
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
            className="w-3 h-3 ml-1 fill-current"
            aria-hidden="true"
          >
            <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
          </svg>
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {articles.map((article, index) => {
          const image = article.featuredImage?.node?.mediaDetails?.sizes?.find(
            (img) => img.name === "medium"
          )?.sourceUrl;

          const categoryName =
            article.categories?.nodes?.[0]?.name || "General";

          const timeAgo = format(article.date);
          const shortExcerpt = getExcerpt(article.excerpt, 20);

          return (
            <article
              key={index}
              onClick={() => onSelectSlug(article.slug)}
              className="rounded-lg bg-white text-gray-900 shadow-sm group hover:shadow-lg transition-shadow cursor-pointer"
            >
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img
                  src={image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="flex flex-col gap-2 p-6 pb-2">
                <div className="flex items-center justify-between mb-2">
                  <span className="inline-flex items-center rounded-full border border-gray-300 px-2.5 py-0.5 text-xs font-semibold text-gray-700 hover:bg-gray-100 transition">
                    {categoryName}
                  </span>
                  <span className="text-xs text-gray-500">{timeAgo}</span>
                </div>

                <h3 className="text-lg font-semibold group-hover:text-orange-600 transition-colors">
                  {article.title}
                </h3>
              </div>

              <div className="p-6 pt-0">
                <p className="text-sm text-gray-600 mb-3">{shortExcerpt}</p>
                <div className="flex items-center text-xs text-gray-500">
                  <span>{article.author?.node?.name}</span>
                  <span className="mx-2">•</span>
                  <span>{timeAgo}</span>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

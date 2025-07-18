// === Homepage.jsx ===
"use client";
import BadgeNotification from "./components/badge";
import { Maintxt } from "./components/maintxt";
import Hero from "./components/Hero";
import SidebarAdDownload from "./components/sidebardownload";
import { SubscribeCard } from "./components/subscribecard";
import Contributors from "./components/contrubutons";
import ArticleInfo from "./components/articleinfo";
import Contents from "./components/contentcart";
import RelatedArticles from "./components/article";
import CTA from "./components/cta";
import { Post } from "../types/post";
import { useEffect, useState } from "react";
import { fetchPosts } from "../lib/fetchPosts";
import { useRouter } from "next/navigation";
import Skeleton from "@/shared/components/skeleton";

export default function Homepage() {
  const router = useRouter();

  const [posts, setPosts] = useState<Post | null>(null);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetchPosts(
          "breaking-false-representation-claim-dismissed-in-singapore-bcp-fails-in-us19-million-deceit-case-against-china-aviation-oil"
        );
        console.log(data);
        setPosts(data);
      } catch (error) {
        console.log(error);
        // router.replace("/login");
      }
    };

    load();
  }, []);
  if (!posts) {
    return (
      <div className="main max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-5">
        <div className="h-64 w-full mb-6">
          <Skeleton className="h-full w-full" />
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3 space-y-4">
            <Skeleton className="h-6 w-1/3" />
            <Skeleton className="h-4 w-2/3" />
            <Skeleton className="h-96 w-full" />
          </div>

          <div className="col-span-1 space-y-4">
            <Skeleton className="h-48 w-full" />
            <Skeleton className="h-48 w-full" />
            <Skeleton className="h-24 w-full" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="main">
      <div className="sticky top-0 z-50"></div>
      <Hero
        title={posts.title}
        excerpt={posts.excerpt}
        date={posts.date}
        featuredImage={posts.featuredImage}
        categories={posts.categories}
      />{" "}
      <div className="main-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-5">
        <div className="grid lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3 mb-3">
            <div className="mb-8">
              <BadgeNotification />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
              <div className="hidden lg:flex lg:col-span-1 flex-col gap-4 sticky top-[100px] h-fit">
                <Contents />
                <SubscribeCard />
              </div>

              <div className="col-span-1 lg:col-span-3">
                <Maintxt />
              </div>
            </div>

            <RelatedArticles />
            <CTA />
          </div>

          <div className="col-span-1 flex flex-col gap-4 sticky top-[100px] h-fit mb-3">
            <ArticleInfo />
            <Contributors author={posts.author} />
            <SidebarAdDownload data={posts.singlePostPage} />
          </div>
        </div>
      </div>
    </div>
  );
}

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
import { Post, SinglePostPage } from "../types/post";
import { PostSetting } from "../types/post";
import { RelatedPosts } from "../types/post";
import { useEffect, useState } from "react";
import {
  fetchPosts,
  fetchSinglePostSettings,
  fetchRelatedPosts,
  fetchArticle,
} from "../lib/postDetail";
import Skeleton from "@/shared/components/skeleton";

export default function Homepage() {

  const [posts, setPosts] = useState<Post | null>(null);
  const [postSetting, setPostSetting] = useState<PostSetting | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<RelatedPosts | null>(null);
  const [slug, setSlug] = useState("breaking-false-representation-claim-dismissed-in-singapore-bcp-fails-in-us19-million-deceit-case-against-china-aviation-oil");

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetchPosts(slug);
        setPosts(data);
        const decodedId = atob(data.id); 
         const numericId = decodedId.split(":")[1];
          const data1= await fetchArticle(numericId);
          console.log(data1);
        
      } catch (error) {
        console.log(error);
        // router.replace("/login");
      }
    };

    const loadSinglePostSettings = async () => {
      try {
        const data = await fetchSinglePostSettings();
        setPostSetting(data);
      } catch (error) {
        console.log(error);
      }
    };
    
    const loadRelatedPosts = async () => {
      try {
        if (
          posts?.categories &&
          typeof posts.categories !== "string" &&
          "edges" in posts.categories &&
          Array.isArray(posts.categories.edges) &&
          posts.categories.edges.length
        ) {
          const categoryId = posts.categories.edges[0].node.id;
          const data = await fetchRelatedPosts([categoryId]);
          setRelatedPosts(data);
          window.scrollTo({ top: 0, behavior: "smooth" });

          console.log(data);
        } else {
          const data = await fetchRelatedPosts([]);
          console.log(data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    loadRelatedPosts();
    loadSinglePostSettings();
    load();
  }, [slug]);

  useEffect(() => {
    const loadRelated = async () => {
      try {
        if (!posts) return;

        let categoryIds: string[] = [];
        if (
          posts.categories &&
          typeof posts.categories !== "string" &&
          "edges" in posts.categories &&
          Array.isArray(posts.categories.edges)
        ) {
          categoryIds = posts.categories.edges.map((edge) => edge.node.id);
        }
        const related = await fetchRelatedPosts(categoryIds);
        setRelatedPosts(related);
      } catch (error) {
        console.error("Failed to load related posts:", error);
      }
    };

    loadRelated();
  }, [posts]);

  console.log(relatedPosts);
  if (!posts || !postSetting || !relatedPosts) {
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
    <div className="main bg-white">
      <div className="sticky top-0 z-50"></div>
      <Hero
        title={posts.title}
        excerpt={posts.excerpt}
        date={posts.date}
        featuredImage={typeof posts.featuredImage === "string" ? null : posts.featuredImage}
        categories={Array.isArray(posts.categories) ? { edges: [] } : posts.categories}
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
                <SubscribeCard data={postSetting} />
              </div>

              <div className="col-span-1 lg:col-span-3">
                <Maintxt />
              </div>
            </div>

      <RelatedArticles data={relatedPosts} onSelectSlug={(newSlug) => setSlug(newSlug)} />
            <CTA data={postSetting} />
          </div>

          <div className="col-span-1 flex flex-col gap-4 sticky top-[100px] h-fit mb-3">
            <ArticleInfo />
            <Contributors author={posts.author} />
            <SidebarAdDownload
              data={typeof posts.singlePostPage === "object" && posts.singlePostPage !== null ? posts.singlePostPage : {} as SinglePostPage}
              settingData={postSetting}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

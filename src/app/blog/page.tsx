import type { Metadata } from "next";
import { getAllPosts } from "@/lib/posts";
import BlogListClient from "./BlogListClient";

export const metadata: Metadata = {
  title: "Blog — Yoofi Quansah",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Blog</h1>
      <BlogListClient posts={posts} />
    </div>
  );
}

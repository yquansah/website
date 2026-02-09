"use client";

import { useState } from "react";
import { PostMeta } from "@/lib/posts";
import BlogCard from "@/components/BlogCard";
import CategoryFilter from "@/components/CategoryFilter";

export default function BlogListClient({ posts }: { posts: PostMeta[] }) {
  const [category, setCategory] = useState("All");

  const filtered =
    category === "All"
      ? posts
      : posts.filter((p) => p.category === category);

  return (
    <>
      <CategoryFilter active={category} onChange={setCategory} />
      <div className="mt-4 divide-y divide-gray-100">
        {filtered.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
        {filtered.length === 0 && (
          <p className="py-8 text-gray-500 text-sm">No posts in this category yet.</p>
        )}
      </div>
    </>
  );
}

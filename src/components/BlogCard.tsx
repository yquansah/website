import Link from "next/link";
import { PostMeta } from "@/lib/posts";

export default function BlogCard({ post }: { post: PostMeta }) {
  return (
    <article className="py-5">
      <div className="flex items-center gap-3 text-sm text-gray-500 mb-1">
        <time>{post.date}</time>
        <span className="text-gray-300">|</span>
        <span>{post.category}</span>
      </div>
      <Link
        href={`/blog/${post.slug}`}
        className="text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors"
      >
        {post.title}
      </Link>
      <p className="mt-1 text-gray-600 text-sm leading-relaxed">
        {post.excerpt}
      </p>
    </article>
  );
}

import { getAllSlugs, getPostBySlug } from "@/lib/posts";
import Link from "next/link";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  return { title: `${post.title} — Yoofi Quansah` };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  return (
    <article>
      <Link
        href="/blog"
        className="text-sm text-blue-600 hover:text-blue-800 transition-colors"
      >
        &larr; Back to blog
      </Link>
      <header className="mt-6 mb-8">
        <h1 className="text-3xl font-bold text-gray-900">{post.title}</h1>
        <div className="flex items-center gap-3 mt-3 text-sm text-gray-500">
          <time>{post.date}</time>
          <span className="text-gray-300">|</span>
          <span>{post.category}</span>
        </div>
      </header>
      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </article>
  );
}

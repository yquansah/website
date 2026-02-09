import Image from "next/image";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import BlogCard from "@/components/BlogCard";

export default function Home() {
  const recentPosts = getAllPosts().slice(0, 3);

  return (
    <div>
      <section className="flex flex-col items-center text-center py-8">
        <Image
          src="/images/caricature.png"
          alt="Yoofi Quansah"
          width={160}
          height={160}
          priority
          className="rounded-full mb-6"
        />
        <h1 className="text-3xl font-bold text-gray-900">Yoofi Quansah</h1>
        <p className="mt-3 text-gray-600 max-w-md">
          Software engineer, sports enthusiast, and proud Ghanaian. Writing about
          technology, football, and life.
        </p>
      </section>

      <section className="mt-12">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Recent Posts</h2>
          <Link
            href="/blog"
            className="text-sm text-blue-600 hover:text-blue-800 transition-colors"
          >
            View all &rarr;
          </Link>
        </div>
        <div className="divide-y divide-gray-100">
          {recentPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
}

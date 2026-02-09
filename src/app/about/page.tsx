import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Yoofi Quansah",
};

export default function AboutPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">About Me</h1>
      <div className="space-y-4 text-gray-600 leading-relaxed">
        <p>
          Hi, I&apos;m Yoofi Quansah — a software engineer based in Ghana with a
          passion for building things on the web.
        </p>
        <p>
          I enjoy working with modern web technologies like TypeScript, React, and
          Next.js to create fast, accessible, and well-crafted digital experiences.
        </p>
        <p>
          Outside of code, you&apos;ll find me following the latest in football —
          especially the Black Stars and the Champions League — or exploring what
          makes Ghana such a vibrant place to live and work.
        </p>
        <p>
          This blog is where I share my thoughts on technology, sports, and
          everything in between. Feel free to look around and reach out if
          something resonates.
        </p>
      </div>
    </div>
  );
}

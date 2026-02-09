import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-gray-200 py-6">
      <nav className="flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold text-gray-900">
          Yoofi Quansah
        </Link>
        <div className="flex gap-6">
          <Link
            href="/about"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            About
          </Link>
          <Link
            href="/blog"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Blog
          </Link>
        </div>
      </nav>
    </header>
  );
}

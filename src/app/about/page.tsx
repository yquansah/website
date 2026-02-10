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
          Hi, I&apos;m Yoofi Quansah — a software engineer based in the great city of Oakland, California with a
          passion for building software that solves problems.
        </p>
        <p>
          I especially enjoy working with cloud-native (whatever that term means) technologies such as Kubernetes, and the whole CNCF ecosystem, as well as
          my lifetime goal of completely understanding the Linux kernel codebase, and eventually making contributions to it.
        </p>
        <p>
          Outside of code, you&apos;ll find me most likely playing or watchign sports; football (Chicago Bears), basketball (Los Angeles Lakers), soccer (Liverpool FC), spending time with my family,
          or keeping up with the latest news in African politics and economics.
        </p>
      </div>
    </div>
  );
}

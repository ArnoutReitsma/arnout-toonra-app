"use client";
import ListItem from "./ListItem";
import { useState } from "react";
type Props = {
  posts: BlogPost[];
};

function Posts({ posts }: Props) {
  const [currentFilter, setSelectedTag] = useState("");
  const uniqueTags = Array.from(new Set(posts.flatMap((p) => p.tags)));
  function filter(tag: string) {
    if (currentFilter === tag) {
      setSelectedTag(undefined);
      return;
    }
    setSelectedTag(tag);
  }

  return (
    <section className="mt-2 mx-auto max-w-2xl min-w-full md:min-w-[50rem]">
      <p className="space-x-4 dark:text-white">
        <span className="text-2xl font-bold dark:text-white/90 mr-5 underline">
          Blog
        </span>
        <span className="text-lg italic">Tags:&nbsp;</span>
        {uniqueTags.map((tag) => (
          <button
            className={`italic hover:bg-slate-40 p-2 md:p-3 border text-sm md:text-base border-gray-500 ${
              currentFilter == tag
                ? "dark:bg-slate-900 bg-slate-600 text-gray-300 border-2 border-gray-500 dark:border-white"
                : ""
            }`}
            key={tag}
            onClick={() => filter(tag)}
          >
            {tag}
          </button>
        ))}
      </p>
      <ul className="w-full p-0">
        {posts
          .filter((post) => !currentFilter || post.tags.includes(currentFilter))
          .map((post) => (
            <ListItem key={post.id} post={post} />
          ))}
      </ul>
    </section>
  );
}

export default Posts;

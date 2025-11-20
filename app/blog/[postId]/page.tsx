import getFormattedDate from "@/lib/getFormattedDate";
import { getPostData, getSortedPostsData } from "@/lib/posts";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";

export function generateStaticParams() {
  const post = getSortedPostsData();
  return post.map((post) => ({
    postId: post.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ postId: string }> }) {
  const posts = getSortedPostsData(); //deduped!
  const { postId } = await params;
  const post = posts.find((post) => post.id === postId);

  if (!post) {
    return {
      title: "Post not found",
    };
  }

  return {
    title: post.title,
  };
}

export default async function Post({ params }: { params: Promise<{ postId: string }> }) {
  const posts = getSortedPostsData();
  const { postId } = await params;

  if (!posts.find((post) => post.id === postId)) notFound();

  const { title, date, content } = await getPostData(postId);

  const pubDate = getFormattedDate(date);

  return (
    <main className="p-6 prose prose-xl prose-slate dark:prose-invert mx-auto">
      <h1 className="text-3xl mt-4 mb-0">{title}</h1>
      <p className="mt-0">{pubDate}</p>
      <article>
        <ReactMarkdown
          components={{
            img: ({ node, ...props }) => {
              const style: any = { display: 'block', margin: '0 auto' };
              const src = props.src as string;
              if (src && src.includes('#height=')) {
                const heightParam = src.split('#height=')[1];
                if (heightParam) {
                  style.maxHeight = `${heightParam}px`;
                }
              }
              return <img style={style} {...props} />;
            }
          }}
        >
          {content}
        </ReactMarkdown>
        <p>
          <Link href="/blog">← Back</Link>
        </p>
      </article>
    </main>
  );
}

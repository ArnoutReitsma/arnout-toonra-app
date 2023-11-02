import Link from "next/link";
import getFormattedDate from "@/lib/getFormattedDate";

type Props = {
  post: BlogPost;
};

export default function ListItem({ post }: Props) {
  const { id, title, date } = post;
  const formattedDate = getFormattedDate(date);

  return (
    <li className="mt-3 text-2xl dark:text-white list-none p-0">
      <Link
        className="underline dark:text-white dark:hover:bg-white dark:hover:text-gray-500"
        href={`/blog/${id}`}
      >
        {title}
      </Link>
      <br />
      <p className="text-sm mt-1">
        {formattedDate} &ensp; <i>Tags: {post.tags.join(',')}</i>
      </p>
    </li>
  );
}

import Link from "next/link";
import { BsInstagram } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import Posts from "../components/Posts";
import ProfilePic from "./ProfilePic";
import { getSortedPostsData } from "@/lib/posts";

function Blog() {
  let posts = getSortedPostsData();
  return (
    <div className="flex flex-col items-center p-6 md:p-12">
      <h1 className="font-extrabold text-4xl">
        Blog about tech, travel and music!
      </h1>
      <ProfilePic></ProfilePic>
      <div className="prose prose-xl mx-auto flex justify-between flex-col sm:flex-row border-t-2">
        <Posts posts={posts}></Posts>
      </div>
      <p>Follow me on my socials!</p>
      <Link href="https://www.instagram.com/arnoutgram/">
        <div className="flex m-2">
          Instagram
          <BsInstagram className="text-2xl ml-1" />
        </div>
      </Link>
      <Link href="https://twitter.com/ArnoutReitsma1/">
        <div className="flex m-2">
          X
          <FaXTwitter className="text-2xl ml-1" />
        </div>
      </Link>
    </div>
  );
}
export default Blog;

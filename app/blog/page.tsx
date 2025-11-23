import Link from "next/link";
import { BsInstagram } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import Posts from "../components/Posts";
import ProfilePic from "./ProfilePic";
import { getSortedPostsData } from "@/lib/posts";

function Blog() {
  let posts = getSortedPostsData();
  return (
    <div className="min-h-screen pt-32 pb-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <div className="w-full max-w-4xl">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl mb-4 text-gray-900 dark:text-white">
            Blog & Adventures
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Blogs on tech and travel.
          </p>
        </div>

        <div className="glass p-6 rounded-3xl animate-slide-up mb-12">
          <Posts posts={posts} />
        </div>

        <div className="space-y-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <div className="glass p-6 rounded-3xl flex flex-col items-center text-center">
            <div className="mb-4">
              <ProfilePic />
            </div>
            <h3 className="font-heading font-bold text-xl mb-2">Socials:</h3>

            <div className="flex gap-4">
              <Link href="https://www.instagram.com/arnoutgram/" className="p-3 bg-gray-100 dark:bg-white/10 rounded-full hover:bg-primary hover:text-white transition-all">
                <BsInstagram className="text-xl" />
              </Link>
              <Link href="https://twitter.com/ArnoutReitsma1/" className="p-3 bg-gray-100 dark:bg-white/10 rounded-full hover:bg-black hover:text-white transition-all">
                <FaXTwitter className="text-xl" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Blog;

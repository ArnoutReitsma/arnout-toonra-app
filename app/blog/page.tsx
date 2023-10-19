import Link from "next/link";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import ProfilePic from "./ProfilePic";
import Posts from "../components/Posts";

function Blog() {
  return (
    <div className="flex flex-col items-center p-6 md:p-12">
      <h1 className="font-extrabold text-4xl mb-5">Blogs and photos about stuff!</h1>
      <p>Some random shit on this page:</p>
      <Link href="https://www.instagram.com/arnoutgram/">
        <div className="flex m-2">
          Instagram
          <BsInstagram className="text-2xl ml-1" />
        </div>
      </Link>
      <Link href="https://twitter.com/ArnoutReitsma1/">
        <div className="flex m-2">
          Twitter
          <BsTwitter className="text-2xl ml-1" />
        </div>
      </Link>

      <div className="prose prose-xl mx-auto flex justify-between flex-col sm:flex-row">
          <ProfilePic></ProfilePic>
          <Posts></Posts>
      </div>
    </div>
  );
}
export default Blog;
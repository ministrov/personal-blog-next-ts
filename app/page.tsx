import { getPosts } from "@/api/posts";
import PostCardList from "./components/PostCardList/PostCardList";
import { MainPage } from './components/MainPage/MainPage';
import { PostItem } from "@/interface/posts.interface";
import { BannerText } from './components/BannerText/BannerText';

export default async function Home() {
  const posts = await getPosts();
  const modifiedPosts: PostItem[] = Object.values(posts.posts);

  return (
    <MainPage>
      <BannerText content="The Blog" />
      <PostCardList posts={modifiedPosts} />
    </MainPage>
  );
}

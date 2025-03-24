import { fetchPostPageById } from "@/api/postPage";
import { PostPageComponent } from "@/app/components/PostPageComponent/PostPageComponent";
import { fetchCommentById } from "@/api/comment";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function PostPage({ params }: PageProps) {
  const page = await fetchPostPageById((await params).id);
  const comment = await fetchCommentById((await params).id);

  return (
    <PostPageComponent post={page} comment={comment} />
  );
}

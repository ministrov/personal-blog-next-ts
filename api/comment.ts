export async function fetchCommentById(postId: string) {
    try {
        const response = await fetch(`https://dummyjson.com/comments/${postId}`);

        return await response.json();
    } catch {
        throw new Error('An error is thrown');
    }
}
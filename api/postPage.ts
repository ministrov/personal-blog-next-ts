export async function getPost(id: string) {
    try {
        const response = await fetch(`https://dummyjson.com/posts/${id}`);

        return response.json();
    } catch {
        throw new Error('An error is thrown');
    }
}
export async function fetchPostPageById(id: string) {
    try {
        const response = await fetch(`https://dummyjson.com/posts/${id}`);

        return await response.json();
    } catch {
        throw new Error('An error is thrown');
    }
}
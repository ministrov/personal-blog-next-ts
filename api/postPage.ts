import { API } from '@/app/api'

export async function getPost(id: string) {
    try {
        const response = await fetch(API.posts.byId + id);

        return response.json();
    } catch {
        throw new Error('An error is thrown');
    }
}
import { API } from '@/app/api';

export async function getComments() {
    try {
        const response = await fetch(API.comments.all);

        if (response.ok) {
            return await response.json();
        }
    } catch (e) {
        console.log(e);
    }
}
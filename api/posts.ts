import { API } from "@/app/api";

export async function getPosts() {
  try {
    const response = await fetch(API.posts.all);

    return await response.json();
  } catch {
    throw new Error("An error occure");
  }
}

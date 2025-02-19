import { API } from '@/app/api'

export async function getPosts() {
    const response = await fetch(API.posts.all);

    return response.json();
}

// const onPatchRequestHandler = async (id: string) => {
//     try {
//       const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
//         method: 'PATCH',
//         body: JSON.stringify(
//           {
//             title: 'updated'
//           }
//         ),
//         headers: {
//           'Content-type': 'application/json'
//         }
//       });

//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

//       const data = await response.json();
//       console.log('Successful PATCH request', data);
//     } catch (error) {
//       console.log('Error making PATCH request', error);
//     }
//   }
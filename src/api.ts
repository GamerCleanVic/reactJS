export const api = {
    getAllPosts: async () => {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let json = await response.json();
    }
    /* addNewPost: () => {

    }*/
}
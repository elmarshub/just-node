import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const post = [
  { id: 1, title: "Post one" },
  { id: 2, title: "Post two" },
];

const getPost = () => post;

export const getPostLength = () => post.length;

export default getPost;

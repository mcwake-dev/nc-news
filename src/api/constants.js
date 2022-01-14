export const API = process.env.REACT_APP_BACKEND_URL;

export const VALID_SORTS = [
  { title: "Title", param: "title" },
  { title: "Topic", param: "topic" },
  { title: "Creation Date", param: "created_at" },
  { title: "Votes", param: "votes" },
  { title: "Comment Count", param: "comment_count" },
  { title: "Author", param: "author" },
];
export const VALID_ORDERS = [
  { title: "Descending", param: "desc" },
  { title: "Ascending", param: "asc" },
];

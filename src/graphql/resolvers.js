import * as userDAO from "../dao/userDAO.js";
import * as postDAO from "../dao/postDAO.js";

export const resolvers = {
  Query: {
    hello: () => "hello world",
    bye: () => 42,
    other: () => "Lorem ipsum dolor sit amet",
    users: () => userDAO.all(),
    user: (_, { id }) => userDAO.get(id),
    posts: () => postDAO.all(),
    post: (_, { id }) => postDAO.get(id),
  },

  User: {
    friends: (ctx) => userDAO.allFrom(ctx.id),
  },

  Post: {
    creator: (ctx) => userDAO.get(ctx.creator),
  },
};

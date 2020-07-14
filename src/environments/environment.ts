const baseURL = 'http://localhost:1337';

export const environment = {
  production: false,
  baseApiURL: baseURL,
  commentsApiURL: `${baseURL}/comments`,
  usersApiURL: `${baseURL}/users`,
  authApiURL: `${baseURL}/auth`,
  postsApiURL: `${baseURL}/posts`,
  uploadApiURL: `${baseURL}/upload`,
};

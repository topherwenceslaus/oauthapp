import firebase from './firebase';

export const getAuth = () => {
  return firebase.auth();
};

export const githubAuth = () => {
  return new firebase.firebase_.auth.GithubAuthProvider();
};
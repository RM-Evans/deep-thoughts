import { gql } from '@apollo/client';

//login
export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

//signup
export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
        token
        user {
        _id
        username
        }
    }
}
`;

//add a friend by id

export const ADD_FRIEND = gql`
mutation addFriend($id: ID!) {
    addFriend(friendId: $id) {
    _id
    username
    friendCount
    friends {
        _id
        username
    }
    }
}
`;

//add a thought

export const ADD_THOUGHT = gql`
mutation addThought($thoughtText: String!) {
    addThought(thoughtText: $thoughtText) {
    _id
    thoughtText
    createdAt
    username
    reactionCount
    reactions {
        _id
    }
    }
}
`;

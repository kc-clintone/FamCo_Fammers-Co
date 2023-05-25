/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      name
      image
      email
      location
      Reports {
        items {
          id
          description
          postimage
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      name
      image
      email
      location
      Reports {
        items {
          id
          description
          postimage
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      name
      image
      email
      location
      Reports {
        items {
          id
          description
          postimage
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateReport = /* GraphQL */ `
  subscription OnCreateReport {
    onCreateReport {
      id
      description
      postimage
      comments {
        items {
          id
          content
          createdAt
          updatedAt
          reportCommentsId
        }
        nextToken
      }
      userID
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateReport = /* GraphQL */ `
  subscription OnUpdateReport {
    onUpdateReport {
      id
      description
      postimage
      comments {
        items {
          id
          content
          createdAt
          updatedAt
          reportCommentsId
        }
        nextToken
      }
      userID
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteReport = /* GraphQL */ `
  subscription OnDeleteReport {
    onDeleteReport {
      id
      description
      postimage
      comments {
        items {
          id
          content
          createdAt
          updatedAt
          reportCommentsId
        }
        nextToken
      }
      userID
      createdAt
      updatedAt
    }
  }
`;
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
      id
      report {
        id
        description
        postimage
        comments {
          nextToken
        }
        userID
        createdAt
        updatedAt
      }
      content
      createdAt
      updatedAt
      reportCommentsId
    }
  }
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
      id
      report {
        id
        description
        postimage
        comments {
          nextToken
        }
        userID
        createdAt
        updatedAt
      }
      content
      createdAt
      updatedAt
      reportCommentsId
    }
  }
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
      id
      report {
        id
        description
        postimage
        comments {
          nextToken
        }
        userID
        createdAt
        updatedAt
      }
      content
      createdAt
      updatedAt
      reportCommentsId
    }
  }
`;

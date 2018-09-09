/**
 * Mocking api by exporting a function get the data
 * @module api
 */


export const getUsers = () => {
  const promise = new Promise((resolve, reject) => {
    const users = [
      { id: 1, name: 'John Doe'}, 
      { id: 2, name: 'Alice' },
      { id: 3, name: 'Bob' }
    ]

    resolve(users);
  });

  return promise;
} 

export const getRoles = () => {
  const promise = new Promise((resolve, reject) => {
    const roles = [
      { id: 1, name: 'Admin'}, 
      { id: 2, name: 'Editor' },
      { id: 3, name: 'Viewer' }
    ]

    resolve(roles);
  });

  return promise;
} 

export const getProjects = () => {
  const promise = new Promise((resolve, reject) => {
    const projects = [
      { id: 1, name: 'Trip to space'},
      { id: 2, name: 'Assembly Ikea furniture' },
      { id: 3, name: 'Datumize Zentral' }
    ]

    resolve(projects);
  });

  return promise;
} 

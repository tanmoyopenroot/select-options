/**
 * Mocking api by exporting a function get the data
 * @module api
 */


export const getUsers = () => {
  const users = [
    { id: 1, name: 'John Doe'}, 
    { id: 2, name: 'Alice' },
    { id: 3, name: 'Bob' }
  ]

  return users;
} 

export const getRoles = () => {
  const roles = [
    { id: 1, name: 'Admin'}, 
    { id: 2, name: 'Editor' },
    { id: 3, name: 'Viewer' }
  ]

  return roles;
} 

export const getProjects = () => {
  const projects = [
    { id: 1, name: 'Trip to space'},
    { id: 2, name: 'Assembly Ikea furniture' },
    { id: 3, name: 'Datumize Zentral' }
  ]

  return projects;
} 

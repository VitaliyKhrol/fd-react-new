

export const getUsers = () => { 
    return fetch('./user.json').then(res => res.json())
  }
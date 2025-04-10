export function signup(username, password) {
    const users = JSON.parse(localStorage.getItem('users')) || {};
    if (users[username]) return false;
    users[username] = { password };
    localStorage.setItem('users', JSON.stringify(users));
    return true;
  }
  
  export function login(username, password) {
    const users = JSON.parse(localStorage.getItem('users')) || {};
    return users[username]?.password === password;
  }
  
  export function setCurrentUser(username) {
    localStorage.setItem('currentUser', username);
  }
  
  export function getCurrentUser() {
    return localStorage.getItem('currentUser');
  }
interface User {
  username: string;
  bestTime: number | null;
}
const STORAGE_KEY = "users";
export function getUsers(): User[] {
  const strUsers: string | null = localStorage.getItem(STORAGE_KEY);
  if (strUsers) {
    return JSON.parse(strUsers);
  }
  const users: User[] = [];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
  return users;
}

export function getLeaderboard(): User[] {
  const users = getUsers().filter((u) => u.bestTime !== null);
  const leaderboard = users.sort((u1: User, u2: User) => u1.bestTime! - u2.bestTime!);
  return leaderboard;
}

export function updateUsers(users: User[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
}

export function getUser(username: string): User | null {
  return getUsers().find((user) => user.username === username) || null;
}

export function addUser(username: string): void | string {
  if (isUserExist(username)) {
    return "User already exists";
  }
  const user: User = { username, bestTime: null };
  const users = getUsers();
  users.push(user);
  updateUsers(users);
}

export function updateBestTime(user: User): void | string {
  const users = getUsers();
  if (!isUserExist(user.username)) {
    return "User does not exist";
  }
  if (user.bestTime === null) {
    return "No time has been set";
  }

  for (const userOfUsers of users) {
    if (userOfUsers.username === user.username) {
      if (userOfUsers.bestTime === null) {
        userOfUsers.bestTime = user.bestTime;
        break;
      } else if (userOfUsers.bestTime < user.bestTime) {
        return "Time not updated, previous time was better";
      } else {
        userOfUsers.bestTime = user.bestTime;
      }
    }
  }
  updateUsers(users);
  return "The best time has been successfully updated.";
}

function isUserExist(username: string): boolean {
  return getUsers().some((u) => u.username === username);
}

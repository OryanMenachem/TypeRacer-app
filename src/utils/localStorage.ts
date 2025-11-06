const STORAGE_KEY = "bestTimes";
export function getbestTimes(): number[] {
  const strBestTimes: string | null = localStorage.getItem(STORAGE_KEY);
  if (strBestTimes) {
    return JSON.parse(strBestTimes);
  }
  const bestTimes: number[] = [];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(bestTimes));
  return bestTimes;
}

export function getLeaderboard(): number[] {
  return getbestTimes()
    .sort((bt1: number, bt2: number) => bt2 - bt1)
    .slice(0, 5);
}

export function updateBestTimes(bestTimes: number[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(bestTimes));
}

export function addBestTime(bestTime: number): void {
  const bestTimes = getbestTimes();
  bestTimes.push(bestTime);
  updateBestTimes(bestTimes);
}

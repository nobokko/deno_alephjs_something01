const histories: HistoryInfo[] = [];

export interface HistoryInfo {
  url: string;
  title: string;
}

export function addHistory(info: HistoryInfo, to: string) {
  const pos = histories.findIndex((i) => i.url == to);
  if (pos == -1) {
    histories.push(info);
  } else {
    while (histories.length > pos) {
      histories.pop();
    }
  }
}

export function getAllHistories() {
  return [...histories];
}

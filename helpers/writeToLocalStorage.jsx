function writeToLocalStorage(data) {
  const key = 'calc';
  localStorage.setItem(key, JSON.stringify(data));
}

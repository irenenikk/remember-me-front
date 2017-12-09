export default (tip, showRead, showUnread) => {
    if (showRead) {
      return tip.read;
    }
    if (showUnread) {
      return !tip.read;
    }
    return true;
}

export default (tip, showRead, showUnread, searchString) => {
  if (searchString && searchString !== "") {
    const search = searchString.trim().toLowerCase();
    let returnValue = false
    Object.values(tip).forEach(field => {
      if (typeof field === "string") {
        const content = field.trim().toLowerCase();
        if (content.includes(search)) {
          returnValue = true;
        }
      }
    });
    return returnValue;
  }
    if (showRead) {
      return tip.read;
    }
    if (showUnread) {
      return !tip.read;
    }
  return true;
}

const storage = (id) => {
  const previousItem = localStorage.getItem("id");
  if (previousItem) {
    let newIte = parseInt(previousItem) + 1;
    localStorage.setItem("id", newIte);
  } else {
    localStorage.setItem("id", id);
    // console.log(previousItem);
  }
};
export { storage };

function deleteCard(id) {
  const filterArray = titles.filter((iteam) => iteam.id !== id);
  setTitles(filterArray);
  localStorage.setItem("titles", JSON.stringify(filterArray));
}

// map function

function UpdateCard(id, updatedTitle) {
  const updatedTitles = titles.map((item) => {
    if (item.id === id) {
      return { ...item, title: updatedTitle };
    }
    return item;
  });

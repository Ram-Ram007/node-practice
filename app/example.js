function deleteCard(id) {
  const filterArray = titles.filter((iteam) => iteam.id !== id);
  setTitles(filterArray);
  localStorage.setItem("titles", JSON.stringify(filterArray));
}

// map function

const newArray = array.map((currentValue, index, array) => {
  
});

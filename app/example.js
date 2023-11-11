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
}

//local storage

localStorage.setItem("titles", JSON.stringify(newTitles));

// using useeffect to store value locally
// display the value in the local storage when the page loads
useEffect(() => {
  const storedTitles = JSON.parse(localStorage.getItem("titles"));
  if (storedTitles) {
    setTitles(storedTitles);
  }
}, []);

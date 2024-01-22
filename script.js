//your code here!
document.addEventListener('DOMContentLoaded', function () {
  const infiList = document.getElementById('infi-list');
  const loadMoreItems = 2;

  // Function to add list items
  function addListItems(count) {
    for (let i = 1; i <= count; i++) {
      const listItem = document.createElement('li');
      listItem.textContent = `Item ${i}`;
      infiList.appendChild(listItem);
    }
  }

  // Add initial list items
  addListItems(10);

  // Function to handle scroll event
  function handleScroll() {
    const scrollTop = infiList.scrollTop;
    const scrollHeight = infiList.scrollHeight;
    const clientHeight = infiList.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight - 10) {
      // User has reached the end of the list
      addListItems(loadMoreItems);
    }
  }

  // Attach scroll event listener to the list
  infiList.addEventListener('scroll', handleScroll);
});


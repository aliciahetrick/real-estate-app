const removeHomeInput = document.querySelector('.remove-home-input')
const removeHomeButton = document.querySelector('.remove-home-button')
removeHomeButton.addEventListener('click', function () {
  removeHome()
})

function removeHome() {
  const searchQuery = removeHomeInput.value.toLowerCase()

  arrOfHomes = arrOfHomes.filter(
    (home) => !home.address.toLowerCase().includes(searchQuery)
    //  || home.comments[0].toLowerCase().includes(searchQuery)
  )

  renderHomes()
  // function removeAllChildNodes(parent) {
  //   while (parent.firstChild) {
  //     parent.removeChild(parent.firstChild)
  //   }
  // }
  // //removes all li children of ul parent
  // const houseList = document.querySelector('.house-list')
  // removeAllChildNodes(houseList)
  // renderHomes()
}

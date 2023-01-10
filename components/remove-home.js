const removeHomeInput = document.querySelector('.remove-home-input')
const removeHomeButton = document.querySelector('.remove-home-button')

// filters homes based on user's input when "remove home" button clicked
removeHomeButton.addEventListener('click', function () {
  const searchQuery = removeHomeInput.value.toLowerCase()

  arrOfHomes = arrOfHomes.filter(
    (home) =>
      !home.address.toLowerCase().includes(searchQuery) &&
      !home.type.toLowerCase().includes(searchQuery)
  )

  renderHomes()
})

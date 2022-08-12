function imgSlider(anything) {
  document.querySelector(".pepse").src = anything;
}
function changeColor(color) {
  const sec = document.querySelector(".sec");
        sec.style.background = color;
  }
  function toggleMenu() {
    const toggleMenu = document.querySelector(".taggleMenu");
    const navigation = document.querySelector(".navigation");
      toggleMenu.classList.toggle('active');
      navigation.classList.toggle('active');
    }

  
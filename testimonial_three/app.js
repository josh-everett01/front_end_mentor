var btn_next = document.querySelector('.next');
var btn_prev = document.querySelector('.prev');
var btn_nextTwo = document.querySelector('.next-two');
var btn_prevTwo = document.querySelector('.prev-two');
var sliders = document.querySelector('.sliders');
var sliderOne = document.getElementById('slider-container-one');
var sliderTwo = document.getElementById('slider-container-two');
var currentSliderIndex = 0;

function next() {

  if (currentSliderIndex == 0) {
    sliderTwo.style.display = 'block';
    sliderOne.style.display = 'none';
    currentSliderIndex += 1 ;
  } else {
    sliderTwo.style.display = 'none';
    sliderOne.style.display = 'block';
    currentSliderIndex = 0;
  }
  console.log(currentSliderIndex)
};

function previous() {
  if (currentSliderIndex == 0) {
    sliderOne.style.display = 'none';
    sliderTwo.style.display = 'block';
    currentSliderIndex += 1;
  } else {
    sliderTwo.style.display = 'none';
    sliderOne.style.display = 'block';
    currentSliderIndex = 0;
  }
}




btn_next.addEventListener('click', () => {

  next();
});

btn_prev.addEventListener('click', () => {

  previous();
});
btn_nextTwo.addEventListener('click', () => {

  next();
});

btn_prevTwo.addEventListener('click', () => {

  previous();
});
var btn_next = document.querySelector('.next');
var btn_prev = document.querySelector('.prev')
var btn_nexttwo = document.querySelector('.nexttwo');
var btn_prevtwo = document.querySelector('.prevtwo')
var sliders = document.querySelectorAll('.slider-container')
var sliderOne = document.getElementById('slider-container-one');
var sliderTwo = document.getElementById('slider-container-two');
var currentSliderIndex = 0;

function next() {


  if (currentSliderIndex == 0) {
    sliderTwo.style.display = 'block';
    sliderOne.style.display = 'none';
    currentSliderIndex += 1;
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
btn_nexttwo.addEventListener('click', () => {

  next();
});

btn_prevtwo.addEventListener('click', () => {

  previous();
});



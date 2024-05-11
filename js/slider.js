import{priceInput,pristine} from './form.js';
import{MAX_PRICE_ROOM} from './constants.js';
const sliderContainer = document.querySelector('.ad-form__slider');

noUiSlider.create(sliderContainer, {
  range: {
    min: 0,
    max: MAX_PRICE_ROOM,
  },
  start: 0,
  step: 1000,
  connect: 'lower',
  format:
  {
    to: function (value) {
      return Number.isInteger(value)
        ? value.toFixed(0)
        : value.toFixed(1);
    },
    from: function (value) {
      return parseFloat(value);
    }
  }
});

sliderContainer.noUiSlider.on('slide', () => {
  const sliderInput = sliderContainer.noUiSlider.get();
  priceInput.value = sliderInput;
  pristine.validate(priceInput);
  console.log(priceInput.value)
});


priceInput.addEventListener('change', (evt) => {
  if (priceInput.value > MAX_PRICE_ROOM) {
    sliderContainer.noUiSlider.reset();
  }
  // if (!priceInput.value) {
  //   sliderContainer.noUiSlider.set('0');
  //   console.log('тута')
  // }
  sliderContainer.noUiSlider.set(evt.target.value);
});

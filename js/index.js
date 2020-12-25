const buttons = document.querySelectorAll('.access');
const form = document.querySelector('.newsletter-form-input');
const formInput = document.querySelector('.newsletter-form-email');
const validForm = document.querySelector('.valid-form');
const validFormText = document.querySelector('.valid-form-text');
const lang = document.querySelector('.lang');
const langText = document.querySelector('.lang-text');
const langChoice = document.querySelector('.lang-choice');
const langEN = document.querySelector('.en');
const langRU = document.querySelector('.ru');

const validate_form = () => {
  valid = true;

  if ( formInput.value == "" ) {
    validForm.style.display = "flex";
    validFormText.innerHTML = "Enter your email please";
    valid = false;
  }
  else {
    at=formInput.value.indexOf("@");
    dot=formInput.value.indexOf(".");
    if (at<1 || dot <1){
      validForm.style.display = "flex";
      validFormText.innerHTML = "Your email is incorrect";
      valid = false;
    }
  }

  return valid;
}

buttons.forEach(item => {
  item.addEventListener('click', () => {
    form.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });
  });
});

formInput.addEventListener('focus', () => {
  validForm.style.display = "none";
});

document.addEventListener('click', event => {
  const choiceLangText = event.path[0].classList.contains('lang-choice-text'); 
  const choiceLangChoice = event.path[0].classList.contains('lang-text') || event.path[0].classList.contains('lang') || event.path[0].classList.contains('lang-icon-more');
  if(!choiceLangText && !choiceLangChoice) {
    langChoice.classList.remove('lang-active');
  }
});

lang.addEventListener('click', () => {
  langChoice.classList.toggle('lang-active');
});

langEN.addEventListener('click', () => {
  langText.innerHTML = "EN";
  langChoice.classList.remove('lang-active');
});

langRU.addEventListener('click', () => {
  langText.innerHTML = "RU";
  langChoice.classList.remove('lang-active');
});

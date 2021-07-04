function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const form = document.querySelector("form");
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeModal = document.querySelector(".close");
const btnSubmit = document.querySelectorAll(".btn-submit");
const firstMessage = document.getElementById("firstMessage");
const lastMessage = document.getElementById("lastMessage");
const emailMessage = document.getElementById("emailMessage");
const birthMessage = document.getElementById("birthMessage");
const quantityMessage = document.getElementById("quantityMessage");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// valid event
btnSubmit.forEach((btn) => btn.addEventListener("click", valid));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// formulaire display no
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Yes !");
});


// Valid form
function validate() {
  // console.log('test');
  let firstValid = checkFirst();
  let lastValid = checkLast();
  let emailValid = checkEmail();
  let birthdateValid = checkbirthdate();
  let quantityValid = checkquantity();
  let locationValid = checklocation();
  let checkbox1Valid = checkcheckbox1();
  if (valid == true) {
    console.log("ok");
  } else {
    console.log("no");
  }
  // let checkbox2Valid = checkcheckbox2();
  // return true;
}

function checkFirst() {
  const first = document.getElementById("first");
  if (first.length > 2) {
    first.closest(".formData").setAttribute("data-error-visible", false);
  } else {
    first.closest(".formData").setAttribute("data-error", "Veuillez indiquer votre prénom !");
    first.closest(".formData").setAttribute("data-error-visible", true);
    }
  // console.log("firstfalse");
  // if (first.length > 2) {return true}
  // else {return false}
}

function checkLast() {
  const last = document.getElementById("last");
  if (last.length > 2) {
    last.closest(".formData").setAttribute("data-error-visible", false);
  } else {
    last.closest(".formData").setAttribute("data-error", "Veuillez indiquer votre nom !");
    last.closest(".formData").setAttribute("data-error-visible", true);
  }
  // if (last.length > 2) console.log("lasttrue");
  // else console.log("lastfalse");
  // if (last.length > 2) {return true}
  // else {return false}
}

function checkEmail() {
  // const email = document.getElementById("email").value;
  const email = document.getElementById("email").Value;
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email.match(regexEmail)) { console.log("truefalse");
    // email.closest(".formData").setAttribute("data-error-visible", false);
  } else { console.log("mailfalse");
    // email.closest(".formData").setAttribute("data-error", "Veuillez indiquer votre email !");
    // email.closest(".formData").setAttribute("data-error-visible", true);
  }
  // if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.value)) console.log("mailtrue");
  // else console.log("mailfalse");
  // if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.value)) {return true}
  // else {return false}
}

function checkbirthdate() {
  const birthDate = document.getElementById("birthdate");
  let regexBirth = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/;
  if (birthDate.match(regexBirth)) {
    birthDate.closest(".formData").setAttribute("data-error-visible", false);
  } else {
    birthDate.closest(".formData").setAttribute("data-error", "Veuillez indiquer votre date de naissance !");
    birthDate.closest(".formData").setAttribute("data-error-visible", true);
  }
  // if (!/^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/.test(birthDate.value)) console.log("birthtrue");
  // else console.log("birthfalse");
}

function checkquantity() {
  const quantity = document.getElementById("quantity");
  let regexQuantity = /^[0-9]$|^[1-9][0-9]$|^(99)$/;
  if (quantity.match (regexQuantity)) {
    quantity.closest(".formData").setAttribute("data-error-visible", false);
  } else {
    quantity.closest(".formData").setAttribute("data-error", "Veuillez rentrer votre prénom !");
    quantity.closest(".formData").setAttribute("data-error-visible", true);
  }
}

function checklocation() {
  const location = document.querySelectorAll("input[type=radio]:checked").length;
  // erreur le premier ne valide pas les autres oui ?
  if (location === 1) console.log("locationftrue");
  else console.log("locationfalse");
}

function checkcheckbox1() {
  const checkBox1 = document.getElementById("checkbox1");
  // j ai supprime le .value a la fin pour que cela fonctionne
  if (checkBox1.checked == true) console.log("boxtrue");
  else console.log("boxfalse");
  // if (checkbox1.checked) console.log("boxtrue");
  // else console.log("boxfalse");
  // else (checkbox1 == null);
  // console.log("boxfalse");
}

// Function pour afficher les messages erreurs
function showMessageError(el) {
  el.setAttribute('data-error-visible', true);
  el.setAttribute('data-error', 'true');
}

function hideMessageError(el) {
  el.setAttribute('data-error-visible', false)
}

// Function pour activer le bouton valid
function disableSubmitBtn () {
  submitBtn.disabled = true;
  submitBtn.style.opacity = '0.5';
  submitBtn.style.cursor = 'not-allowed';
}

function enableSubmitBtn () {
  submitBtn.disabled = false;
  submitBtn.style.opacity = '1';
  submitBtn.style.cursor = 'pointer';
}

// close modal form
closeModal.addEventListener("click", () => {
  modalbg.style.display = "none";
});
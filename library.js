console.log("screen is running");

function library(name, auther, type) {
  this.name = name;
  this.auther = auther;
  this.type = type;
}

function Display() {}
// (getbook) is having all the library prototype "line no. 4" so that we will define it as argument in add function.
Display.prototype.add = function (getbook) {
  let table = document.getElementById("gettable");
  let uiString = `  <tr>
                                <td>${getbook.name}</td>
                                <td>${getbook.auther}</td>
                                <td>${getbook.type}</td>
      </tr>`;
  table.innerHTML += uiString;
};

// this function is for clear the input after submitting it. Function is call in line 62.
Display.prototype.clear = function () {
  let formListner = document.getElementById("formListner");
  formListner.reset();
};
Display.prototype.varify = function (getbook) {
  console.log("clicked varify");
  if (getbook.name.length < 2 || getbook.auther.length < 2) {
    return false;
  } else {
    return true;
  }
};
Display.prototype.show = function (type, message) {
  let msg = document.getElementById("msg");
  msg.innerHTML = `     <div class="alert alert- ${type} alert-dismissible fade show" role="alert">
                            <strong>Messag:</strong> ${message}
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                           </div>`;
        setTimeout(() => {
          msg.innerHTML = '';
        }, 3000);
};

// Add addEventListener for formListner
let formListner = document.getElementById("formListner");
formListner.addEventListener("submit", formSubmit);
function formSubmit(e) {
  // here we will checked function is running or not->
  //   console.log('you have clicked')
  console.log("you have clicked");
  e.preventDefault();
  //   2. here we will define all the arguments of prototype
  let bookName = document.getElementById("book").value;
  let Auther = document.getElementById("auther").value;
  let type;
  // "type" prototype having different variable and checked function also , so that will define it first.
  let fitness = document.getElementById("fitness");
  let programming = document.getElementById("programming");
  let faishon = document.getElementById("faishon");
  if (fitness.checked) {
    type = fitness.value;
  } else if (programming.checked) {
    type = programming.value;
  } else if (faishon.checked) {
    type = faishon.value;
  }
  //1. here we will call the prototype
  let getbook = new library(bookName, Auther, type);
  // Now , we will checked in console window.
  // console.log(getbook)
  console.log(getbook);
  // After checking the program in console we will make it to show in display with display function "Display()" on line 11.
  let display = new Display();
  //   now we are going to varified our website.
  if (display.varify(getbook)) {
    display.add(getbook);
    display.clear();
    display.show("success", "Your details submited successfully");
  } else {
    display.show("danger", "You have to fill the details first");
  }
  //  display.add(getbook);
  //  display.clear();
  e.preventDefault();

}
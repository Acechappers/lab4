console.log("hello");

const = myButton document.querySelector("menuButton");
console.log(myButton);
const myNav = document.querySelector("nav");

myButton.addEventListener("click", toggleMenu);

function toggleMenu() {
  if(myNav.classList.contains("hide")) {
    myNav.classList.remove("hide");
  } else {
    myNav.classList.add("hide");
  }
  myNav.classList.toggle("hide");
  myNav.style.display: none;
  }

  const = myButton2 = document.querySelector("pLfirst-of-type");
  console.log(myButton2);

  const = myButton3 = document.getElementsByClassName("my_button")
  console.log(myButton3);
  console.log(myButton3[0]);
  }
}

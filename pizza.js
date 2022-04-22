let buttonTex = document.querySelector(".tex_button");
buttonTexClick = buttonTex.addEventListener("click", updateTexHtml);
function updateTexHeading(newTexHeading) {
  let headingTex = document.querySelector("h1");
  headingTex.innerHTML = newTexHeading;
}
let buttonCar = document.querySelector(".carbonara_button");
buttonCarClick = buttonCar.addEventListener("click", updateCarHtml);
function updateCarHeading(newCarHeading) {
  let headingCar = document.querySelector("h1");
  headingCar.innerHTML = newCarHeading;
}
let buttonGr = document.querySelector(".greek_button");
buttonGrClick = buttonGr.addEventListener("click", updateGrHtml);
function updateGrHeading(newGrHeading) {
  let headingGr = document.querySelector("h1");
  headingGr.innerHTML = newGrHeading;
}
let buttonSer = document.querySelector(".cheddar_button");
buttonSerClick = buttonSer.addEventListener("click", updateSerHtml);
function updateSerHeading(newSerHeading) {
  let headingSer = document.querySelector("h1");
  headingSer.innerHTML = newSerHeading;
}
let buttonKeb = document.querySelector(".kebab_button");
buttonKebClick = buttonKeb.addEventListener("click", updateKebHtml);
function updateKebHeading(newKebHeading) {
  let headingKeb = document.querySelector("h1");
  headingKeb.innerHTML = newKebHeading;
}
let buttonWiej = document.querySelector(".village_button");
buttonWiejClick = buttonWiej.addEventListener("click", updateWiejHtml);
function updateWiejHeading(newWiejHeading) {
  let headingWiej = document.querySelector("h1");
  headingWiej.innerHTML = newWiejHeading;
}

function updateTexHtml() {
  let components = prompt("Jakie składniki ma ta pizza?");
  let souce = prompt("Na jakim jest sosie?");
  if (components === "" && souce === "") {
    updateTexHeading(`Nie no wpisz coś PLS`);
  } else if (souce === "bbq") {
    if (
      components === "kukurydza, mozzarella, czerwona cebula, grill kurczak"
    ) {
      updateTexHeading(`😁<br /> Wybrałeś pizzę Teksas, znasz ją na wylot`);
    } else {
      updateTexHeading(
        `😁<br /> Wybrałeś pizzę Teksas, ale nie znasz jeszcze jej wszystkich składników.`
      );
    }
  } else {
    updateTexHeading(
      `😁<br /> Wybrałeś pizzę Teksas, nawet nie wiesz na jakim jest sosie.`
    );
  }
}
function updateGrHtml() {
  let components = prompt("Jakie składniki ma ta pizza?");
  let souce = prompt("Na jakim jest sosie?");
  if (components === "" && souce === "") {
    updateGrHeading(`Nie no wpisz coś PLS`);
  } else if (souce === "biały") {
    if (components === "oliwki, mozzarella, pomidorki, ser śródziemnomorski") {
      updateGrHeading(`😁<br /> Wybrałeś pizzę Grecką, znasz ją BDB`);
    } else {
      updateGrHeading(
        `😁<br /> Wybrałeś pizzę Grecką, ale nie znasz jeszcze jej wszystkich składników.`
      );
    }
  } else {
    updateGrHeading(`😁<br /> Wybrałeś pizzę Grecką, ale powtórz chociaż sos.`);
  }
}
function updateCarHtml() {
  let components = prompt("Jakie składniki ma ta pizza?");
  let souce = prompt("Na jakim jest sosie?");
  if (components === "" && souce === "") {
    updateCarHeading(`Nie no wpisz coś PLS`);
  } else if (
    components ===
    "boczek, pomidorki, mozzarella, corregio, pieczarki, czerwona cebula"
  ) {
    updateCarHeading(`😁<br /> Wybrałeś pizzę Carbonarę, znasz ją całkiem git`);
  } else if (
    souce === "czosnkowy" &&
    components !==
      "boczek, pomidorki, mozzarella, corregio, pieczarki, czerwona cebula"
  ) {
    updateCarHeading(`😁<br /> Wybrałeś pizzę Carbonarę, znasz ją całkiem git`);
  } else {
    updateCarHeading(
      `😁<br /> Wybrałeś pizzę Carbonarę, ale nie znasz jeszcze jej wszystkich składników.`
    );
  }
}
function updateKebHtml() {
  let components = prompt("Jakie składniki ma ta pizza?");
  let souce = prompt("Na jakim jest sosie?");
  if (components === "" && souce === "") {
    updateKebHeading(`Nie no wpisz coś PLS`);
  } else if (souce === "czosnkowy") {
    if (components === "kurczak kebab, mozzarella, czerwona cebula") {
      updateKebHeading(`😁<br /> Wybrałeś pizzę Kebab, zaliczone`);
    } else {
      updateKebHeading(
        `😁<br /> Wybrałeś pizzę Kebab, ale podałeś złe składniki`
      );
    }
  } else {
    updateKebHeading(`😁<br /> Wybrałeś pizzę Kebab, ale nie znasz sosu`);
  }
}
function updateSerHtml() {
  let components = prompt("Jakie składniki ma ta pizza?");
  let souce = prompt("Na jakim jest sosie?");
  if (components === "" && souce === "") {
    updateSerHeading(`Nie no wpisz coś PLS`);
  } else if (
    components === "ser mozarrela świeży, mozzarella, corregio, cheddar"
  ) {
    updateSerHeading(
      `😁<br /> Wybrałeś pizzę  Serową, znasz ją całkiem całkiem`
    );
  } else {
    updateKebHeading(`😁<br /> Wybrałeś pizzę Serową, ale powtórz składniki`);
  }
}
function updateWiejHtml() {
  let components = prompt("Jakie składniki ma ta pizza?");
  let souce = prompt("Na jakim jest sosie?");
  if (components === "" && souce === "") {
    updateWiejHeading(`Nie no wpisz coś PLS`);
  } else if (
    components === "mozzarella, kiełbasa, pieczarki, kukurydza, czerwona cebula"
  ) {
    updateHeading(`😁<br /> Wybrałeś pizzę  Wiejską, znasz ją całkiem całkiem`);
  } else {
    updateHeading(
      `😁<br /> Wybrałeś pizzę na sosie Wiejską, ale wpisuj dokładnie.`
    );
  }
}

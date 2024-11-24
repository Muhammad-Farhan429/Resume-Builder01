function addNewWEField() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("weField");

  // newNode.setAttribute("rows",3)
  newNode.setAttribute("placeholder", "Enter here");

  let weOb = document.getElementById("we");
  let weAddButtonOb = document.getElementById("weAddButton");

  weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewAQField() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("aqField");

  // newNode.setAttribute("rows",3)
  newNode.setAttribute("placeholder", "Enter here");

  let aqOb = document.getElementById("aq");
  let aqAddButtonOb = document.getElementById("aqAddButton");

  aqOb.insertBefore(newNode, aqAddButtonOb);
}
// generating CV
function generateCV() {
  // console.log("generating CV");
  let nameField = document.getElementById("nameField").value;
  let nameT1 = document.getElementById("nameT1");
  nameT1?.innerHTML = nameField;
  // let nameT2 = document.getElementById("nameT2");
  // nameT2?.innerHTML = nameField;
  document.getElementById("nameT2")?.innerHTML = nameField;

  document.getElementById("contactT")?.innerHTML =
    document.getElementById("contactField").value;

  document.getElementById("addressT")?.innerHTML =
    document.getElementById("addressField").value;

  document.getElementById("fbT")?.innerHTML =
    document.getElementById("fbField").value;

  document.getElementById("instaT")?.innerHTML =
    document.getElementById("instaField").value;

  document.getElementById("linkedT")?.innerHTML =
    document.getElementById("linkedField").value;

  //Objective

  document.getElementById("objectiveT")?.innerHTML =
    document.getElementById("objectiveField").value;

  //(we) Work Experience
  let wes = document.getElementsByClassName("weField");
  let str = "";
  for (let e of wes) {
    str = str + `<li> ${e.value} </li>`;
  }
  document.getElementById("weT").innerHTML = str;

  //(aq) Academic Qualification
  let aqs = document.getElementsByClassName("aqField");
  let str1 = "";
  for (let a of aqs) {
    str1 = str1 + `<li> ${a.value} </li>`;
  }
  document.getElementById("aqT")?.innerHTML = str1;

  // Code For Setting Image
  let file = document.getElementById("imageField").files[0];
  console.log(file);
  let reader = new FileReader();
  reader.readAsDataURL(file);
  console.log(reader.result);
  // set the image to template
  reader.onloadend = function () {
    document.getElementById("imageTemplate").src = reader.result;
  };

  document.getElementById("cv-form")?.style.display = "none";
  document.getElementById("cv-template")?.style.display = "block";
}
//print CV
function printCV() {
  document.getElementById("btn-template").style.display = "none";
  window.print();
}

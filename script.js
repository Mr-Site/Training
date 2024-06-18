function addList() {
  let fName = document.getElementById("fName").value;

  let lName = document.getElementById("lName").value;

  let phoneNumber = document.getElementById("phoneNumber").value;

  let age = document.getElementById("age").value;

  let height = document.getElementById("height").value;

  let homeAddress = document.getElementById("homeAddress").value;

  let city = document.getElementById("city");
  let cityText = city.options[city.selectedIndex].text;

  const male = document.getElementById("male");
  const female = document.getElementById("female");

  // for console log

  const maleText = document.getElementById("male").value;
  const femaleText = document.getElementById("female").value;

  let userInfo = [];

  if (
    fName == "" ||
    lName == "" ||
    phoneNumber == "" ||
    age == "" ||
    height == "" ||
    homeAddress == "" ||
    cityText == "استان"
  ) {
    alert("لطفا فرم را پر کنید");
  } else if (male.checked) {
    document.getElementById("formContainer").style.height = "0";
    document.getElementById("formContainer").style.opacity = "0";

    document.getElementById("infoContainer").style.height = "700px";
    document.getElementById("infoContainer").style.opacity = "1";

    document.getElementById("infoAge").innerHTML = age;

    document.getElementById("infoName").innerHTML = fName + " " + lName;

    document.getElementById("infoNumber").innerHTML = phoneNumber;

    document.getElementById("infoGender").innerHTML = male.value;

    document.getElementById("infoHeight").innerHTML = height;

    document.getElementById("infoCity").innerHTML = cityText;

    document.getElementById("infoHomeAddress").innerHTML = homeAddress;

    userInfo.push({
      fName,
      lName,
      phoneNumber,
      age,
      height,
      homeAddress,
      cityText,
      maleText,
    });

    console.log(userInfo);
  } else if (female.checked) {
    document.getElementById("formContainer").style.height = "0";
    document.getElementById("formContainer").style.opacity = "0";

    document.getElementById("infoContainer").style.height = "700px";
    document.getElementById("infoContainer").style.opacity = "1";

    document.getElementById("infoAge").innerHTML = age;

    document.getElementById("infoName").innerHTML = fName + " " + lName;

    document.getElementById("infoNumber").innerHTML = phoneNumber;

    document.getElementById("infoGender").innerHTML = female.value;

    document.getElementById("infoHeight").innerHTML = height;

    document.getElementById("infoCity").innerHTML = cityText;

    document.getElementById("infoHomeAddress").innerHTML = homeAddress;

    userInfo.push({
      fName,
      lName,
      phoneNumber,
      age,
      height,
      homeAddress,
      cityText,
      femaleText,
    });

    console.log(userInfo);
  }
}

function goBack() {
  document.getElementById("formContainer").style.height = "700px";
  document.getElementById("formContainer").style.opacity = "1";

  document.getElementById("infoContainer").style.height = "0";
  document.getElementById("infoContainer").style.opacity = "0";

  console.log((userInfo = []));
}

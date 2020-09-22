function welcome(firstName, lastName) {
  let fullName;
  if (typeof(firstName) === "string" && typeof(lastName) === "string") {
    fullName = firstName + ' ' + lastName;
  } else {
    return alert("lasName and firstName must be a string");
  }
  function displayFullName() {
    alert('Welcome ' + fullName + '!');
  }
  displayFullName();
}
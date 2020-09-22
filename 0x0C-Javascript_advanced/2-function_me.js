function welcomeMessage (fullName) {
  if (typeof(fullName) === "string") {
    let closure = (function () {
      return alert('Welcome ' + fullName)
    })();
  } else {
    alert('fullName should be a "string"');
  }
}
let guillaume = (function () {
  return welcomeMessage("Guillaume")
});
let alex = (function () {
  return welcomeMessage("Alex")
});
let fred = (function () {
  return welcomeMessage("Fred")
});
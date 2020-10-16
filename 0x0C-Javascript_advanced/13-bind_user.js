const user = {
    hobby: "Calligraphy",
    favoriteSport: "Hockey",
    astrologicalSign: "Aries",
    firstName: "Buillaume",
    lastName: "Ialva",
    location: "Tunisia",
    occupation: "Engineer",
}
  
function logWelcomeUser(welcomeString) {
console.log(`${welcomeString}, ${this.firstName}. Your occupation is: ${this.occupation}`);
}

const bindLogWelcomeUser = logWelcomeUser.bind(user)

bindLogWelcomeUser("Welcome");
bindLogWelcomeUser("Hello");
function fetchUser(callback) {
  setTimeout(() => {
    const user = {
      name: "sidit srivastava",
    }; // Should fetch a valid user object
    callback(user.name); // Bug: Cannot read property 'name'
  }, 1000);
}

fetchUser((name) => console.log(name));

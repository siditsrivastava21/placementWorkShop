async function fetchData() {
  try {
    const response = fetch("invalid-url");
    console.log(await response.json());
  } catch (err) {
    console.log(err.message);
  }
}
fetchData();

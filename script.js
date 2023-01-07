const URL = "https://api.thecatapi.com/v1/images/search";
const KEY =
  "live_BvivPUxBGDhdkvo0Xk0P5Ji4jjoLSQtqmeUjE3UePkpKpg0y8d7c3CdTN5Ae2te2";

function selectComponent(elementId) {
  let component = document.getElementById(elementId);
  return component;
}

selectComponent("breed-btn").addEventListener("click", function () {
  fetch(`${URL}?has_breeds=1&api_key=${KEY}`)
    .then((response) => response.json())
    .then((data) => {
      selectComponent("breed-name").textContent = `The ${data[0].breeds[0].name}`;
      selectComponent("breed-txt").textContent = data[0].breeds[0].description;
      selectComponent("breed-img").innerHTML = `<img class="breed-img" src=${data[0].url} />`;
    });
});

const URL = "https://api.thecatapi.com/v1/images/search";
const KEY = "live_BvivPUxBGDhdkvo0Xk0P5Ji4jjoLSQtqmeUjE3UePkpKpg0y8d7c3CdTN5Ae2te2"

function selectComponent(elementId) {
    let component = document.getElementById(elementId);
    return component;
  }

selectComponent("fact-btn").addEventListener("click", function () {
  fetch(`${URL}?has_breeds=1&api_key=${KEY}`)
    .then((response) => response.json())
    .then((data) => {
      selectComponent('fact-txt').textContent = (data[0].breeds[0].description);
      selectComponent('fact-img').innerHTML = `<img src=${data[0].url} />`
    });
});

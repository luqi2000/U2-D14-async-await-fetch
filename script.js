// k85syiQbsCanNui4AIjovxeNJz65ohkTozq7QpqNJ0gW1mJQZckRtI2E
const API = "k85syiQbsCanNui4AIjovxeNJz65ohkTozq7QpqNJ0gW1mJQZckRtI2E";
const URL = "https://api.pexels.com/v1/search?query=nature";
const PARAM = {
  headers: {
    Authorization: "k85syiQbsCanNui4AIjovxeNJz65ohkTozq7QpqNJ0gW1mJQZckRtI2E"
  }
};

fetch(URL).then(response => {
  if (response.ok) {
    return response.json();
  } else {
    throw new Error("qualcosa e andato storto");
  }
});

function hide() {
  var btn = document.querySelectorAll("#edit");
  btn.innerText = "Hide";
}
hide();

function del() {
  const element = document.querySelector(".col-md-4");
  element.remove();
}

del();

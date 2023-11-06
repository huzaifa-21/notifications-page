// selectors
let counter = document.querySelector(".counter");
let target = document.querySelector(".target");
let container = document.querySelector(".container");
let notifications = document.querySelectorAll(".noti-box");
let markAll = document.querySelector('.mark')
//end selectors

notifications.forEach(noti => {
  noti.addEventListener("click", () => {
    noti.classList.toggle("un-read");
  });
});

document.addEventListener("click", () => {
  let watchedList = [];
  notifications.forEach(noti => {
    if (noti.classList.contains("un-read")) {
      watchedList.push(noti);
    }
  });
  counter.innerHTML = watchedList.length;
});
markAll.onclick = () => {
  readAll()
}

function readAll() {
  notifications.forEach(noti => {
    noti.classList.remove("un-read")
  })
}

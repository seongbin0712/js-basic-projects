const showBtn = document.querySelector('.showbtn');

function getLocalStorage() {
  return localStorage.getItem("trainTickets")
  ? JSON.parse(localStorage.getItem("trainTickets"))
  : []
};

function setupItems() {
  const container = document.querySelector('.container');

  let trains = getLocalStorage()

  const trainList = trains.map((items) => {
    return `
      <!-- information -->
      <div class="info-box">
        <div class="train">${items.train}</div>
        <div class="date">${items.date}</div>
        <div class="station-container">
          <div>${items.firstStation}</div>
          <span class="material-symbols-outlined arrow">east</span>
          <div>${items.secondStation}</div>
        </div>
        <div class="time-container">
          <div>${items.firstTime}</div>
          <span class="material-symbols-outlined arrow">east</span>
          <div>${items.secondTime}</div>
        </div>
        <span class="material-symbols-outlined showbtn">keyboard_arrow_down</span>
      </div>
      <!-- details -->
      <div class="details show hide">
        <div class="train-container">
          <div>호차번호</div>
          <div>:</div>
          <div>${items.trainNumber}호</div>
        </div>
        <div class="seat-container">
          <div>좌석번호</div>
          <div>:</div>
          <div>${items.seatNumber}</div>
        </div>
        <div class="price-container">
          <div>금액</div>
          <div>:</div>
          <div>${items.price}원</div>
        </div>
      </div>
    `
  }).join("");

  container.innerHTML = trainList;

  const showBtn = document.querySelectorAll('.showbtn');

  showBtn.forEach(btn => {
    btn.addEventListener("click", function (e) {
      const detailElement = btn.parentElement.nextElementSibling;
      // console.log(detailElement);

      detailElement.classList.toggle('hide');

      if (detailElement.classList.contains('hide')) {
        btn.textContent = 'keyboard_arrow_down';
      } else {
        btn.textContent = 'keyboard_arrow_up';
      }
    });
  });
};

window.addEventListener("DOMContentLoaded", setupItems);
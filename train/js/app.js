const formBtn = document.querySelector(".form");
const resetBtn = document.querySelector(".reset");

formBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const date = document.querySelector(".day");
  const train = document.querySelector(".traintype");
  const firstStation = document.getElementById("start");
  const secondStation = document.getElementById("end");
  const firstTime = document.querySelector(".time1");
  const secondTime = document.querySelector(".time2");
  const trainNumber = document.querySelector(".trainNumber");
  const seatNumber = document.querySelector(".seatNumber");
  const price = document.querySelector(".price");

  const value = 
    {
      date: date.value,
      train: train.value,
      firstStation: firstStation.value,
      secondStation: secondStation.value,
      firstTime: firstTime.value,
      secondTime: secondTime.value,
      trainNumber: trainNumber.value,
      seatNumber: seatNumber.value,
      price: price.value
    }

  data.push(value);

  localStorage.setItem("trainTickets", JSON.stringify(data));
});

resetBtn.addEventListener("click", function (e) {
  e.preventDefault();

  date.value = "";
  train.value = "";
  firstStation.value = "";
  secondStation.value = "";
  firstTime.value = "";
  secondTime.value = "";
  trainNumber.value = "";
  seatNumber.value = "";
  price.value = "";
});
dd
const items = document.querySelectorAll('.number');

const updateCount = (el) => {
  const value = parseInt(el.dataset.value); // 문자열 => 정수 반환
  const increment = Math.ceil(value / 1000); // 숫자 카운트 값의 소수점 올림
  
  let initialValue = 0; // 초기값

  const increaseCount = setInterval(() => {
    initialValue += increment;

    if (initialValue > value) {
      el.textContent = `${value}+`;
      clearInterval(increaseCount); // 카운트 중단
      return;
    }

    el.textContent = `${initialValue}+`
  }, 1)
}

items.forEach((item) => {
  updateCount(item)
})
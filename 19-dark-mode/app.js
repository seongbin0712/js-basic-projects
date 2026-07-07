const toggleBtn = document.querySelector('.btn');
const articlesContainer = document.querySelector('.articles');

toggleBtn.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark-theme')
});

const articlesData = articles.map((article) => {
  const { title, date, length, snippet } = article;
  // 받은 date의 값에 월 일, 연도 형식으로 저장
  const formatDate = moment(date).format('MMMM Do, YYYY');
  return `<article class="post">
            <h2>${title}</h2>
            <div class="post-info">
              <span>${formatDate}</span>
              <span>${length} min read</span>
            </div>
            <p>
              ${snippet}
            </p>
          </article>`;
}).join('');

articlesContainer.innerHTML = articlesData
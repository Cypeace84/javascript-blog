'use strict';

const titleClickHandler = function (event) {
  event.preventDefault(); //wyłącza domyśną zmianę hasha strony przez przeglądarkę
  const clickedElement = this;
  console.log('Link was clicked!');
  console.log(event);

  /* [Done] remove class 'active' from all article links  */

  const activeLinks = document.querySelectorAll('.titles a.active');

  for (let activeLink of activeLinks) {
    activeLink.classList.remove('active');
  }

  /* [DONE] add class 'active' to the clicked link */

  clickedElement.classList.add('active');
  console.log('clickedElement:', clickedElement);
  //   console.log('clickedElement (with plus): ' + clickedElement);

  /* [DONE] remove class 'active' from all articles */

  const activeArticles = document.querySelectorAll('.posts .active');

  for (let activeArticle of activeArticles) {
    activeArticle.classList.remove('active');
  }

  /* [DONE] get 'href' attribute from the clicked link */

  const articleSelector = clickedElement.getAttribute('href');
  console.log('clicked article:', articleSelector);

  /* [DONE] find the correct article using the selector (value of 'href' attribute) */

  const targetArticle = document.querySelector(articleSelector);
  console.log('article:', targetArticle);

  /* [Done] add class 'active' to the correct article */

  targetArticle.classList.add('active');

  const optArticleSelector = '.post',
    optTitleSelector = '.post-title',
    optTitleListSelector = '.titles';

  function generateTitleLinks() {
    /* [DONE] remove contents of titleList */

    const titleList = document.querySelector(optTitleListSelector);
    titleList.innerHTML = '';
    console.log('remove:', titleList);

    /* for each article */
    let html = '';
    const articles = document.querySelector(optArticleSelector);
    for (let article of articles) {
      // for (let articles of optArticleSelector) {

      /* get the article id */

      const articleId = optArticleSelector.getAttribute('id');
      console.log('articleId:', articleId);

      /* find the title element */
      /* get the title from the title element */
      const articleTitle = article.querySelector(optTitleSelector).innerHTML;

      /* create HTML of the link */

      const linkHTML =
        '<li><a href="#' +
        articleId +
        '"><span>' +
        articleTitle +
        '</span></a></li>';
      console.log('linkHtml:', linkHTML);
      /* insert link into titleList */

      html = html + linkHTML;
    }
    titleList.innerHTML = html;
  }

  generateTitleLinks();
};

const links = document.querySelectorAll('.titles a');

for (let link of links) {
  link.addEventListener('click', titleClickHandler);
}

/* eslint-disable indent */
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
};
const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles',
  optArticleTagsSelector = '.post-tags .list';

function generateTitleLinks() {
  /* [DONE] remove contents of titleList */

  const titleList = document.querySelector(optTitleListSelector);
  titleList.innerHTML = '';
  console.log('remove:', titleList);

  /* for each article */

  let html = '';

  const articles = document.querySelectorAll(optArticleSelector);
  for (let article of articles) {
    // for (let articles of optArticleSelector) {

    /* get the article id */

    const articleId = article.getAttribute('id');
    console.log('articleId:', articleId);

    //   /* find the title element */
    //   /* get the title from the title element */

    const articleTitle = article.querySelector(optTitleSelector).innerHTML;

    //   /* create HTML of the link */

    const linkHTML =
      '<li><a href="#' +
      articleId +
      '"><span>' +
      articleTitle +
      '</span></a></li>';
    //console.log('linkHtml:', html);

    /* insert link into titleList */

    html = html + linkHTML;
  }
  titleList.innerHTML = html;

  const links = document.querySelectorAll('.titles a');
  console.log('links:', links);
  for (let link of links) {
    link.addEventListener('click', titleClickHandler);
  }
}

generateTitleLinks();

function generateTags() {
  /* find all articles */

  const articles = document.querySelectorAll(optArticleSelector);

  /* START LOOP: for every article: */

  for (let article of articles) {
    /* find tags wrapper */
    const titleList = article.querySelector(optArticleTagsSelector);
    //console.log('remove:', titleList);
    /* make html variable with empty string */
    let html = '';
    /* get tags from data-tags attribute */
    const articleTags = article.getAttribute('data-tags');
    console.log('data-tags:', articleTags);
    /* split tags into array */
    const articleTagsArray = articleTags.split(' ');
    console.log('tablica', articleTagsArray);
    /* START LOOP: for each tag */
    /* generate HTML of the link */
    /* add generated code to html variable */
    /* END LOOP: for each tag */
    /* insert HTML of all the links into the tags wrapper */
    /* END LOOP: for every article: */
  }
}

generateTags();

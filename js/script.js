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
  optArticleTagsSelector = '.post-tags .list',
  optArticleAuthorSelector = '.post-author';

//function generateTitleLinks() {
function generateTitleLinks(customSelector = '') {
  /* [DONE] remove contents of titleList */

  const titleList = document.querySelector(optTitleListSelector);
  titleList.innerHTML = '';
  console.log('remove:', titleList);

  /* [DONE] for each article */
  let html = '';

  const articles = document.querySelectorAll(
    optArticleSelector + customSelector
  );
  for (let article of articles) {
    // for (let articles of optArticleSelector) {

    /* [DONE] get the article id */

    const articleId = article.getAttribute('id');
    console.log('articleId:', articleId);

    /* [DONE] find the title element */
    /* DONE get the title from the title element */

    const articleTitle = article.querySelector(optTitleSelector).innerHTML;

    /* [DONE] create HTML of the link */

    const linkHTML =
      '<li><a href="#' +
      articleId +
      '"><span>' +
      articleTitle +
      '</span></a></li>';
    //console.log('linkHtml:', html);

    /* [DONE] insert link into titleList */

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
  /* [DONE] find all articles */

  const articles = document.querySelectorAll(optArticleSelector);
  console.log('artykuły', articles);

  /* [DONE] START LOOP: for every article: */

  for (let article of articles) {
    /* [DONE] find tags wrapper */
    const titleList = article.querySelector(optArticleTagsSelector);
    console.log('titleList2', titleList);
    /* [DONE] make html variable with empty string */
    let html = '';
    /* [DONE] get tags from data-tags attribute */
    const articleTags = article.getAttribute('data-tags');
    console.log('articleTags:', articleTags);
    /* [DONE] split tags into array */
    const articleTagsArray = articleTags.split(' ');
    console.log('tablica', articleTagsArray);
    /* [DONE] START LOOP: for each tag */
    for (let tag of articleTagsArray) {
      console.log('tag!!!!!!!!!', tag);
      /* [DONE] generate HTML of the link */
      const linkHTML =
        '<li><a href= "#tag-' +
        tag +
        '"><span>' +
        tag +
        '</span></a></li><span> </span>';
      console.log('linkTag', linkHTML);

      /* [DONE] add generated code to html variable */
      html = html + linkHTML;

      /* [DONE] END LOOP: for each tag */
    }
    /* [DONE] insert HTML of all the links into the tags wrapper */
    titleList.innerHTML = html;
    /* [DONE] END LOOP: for every article: */
  }
}

generateTags();

function tagClickHandler(event) {
  /* prevent default action for this event */
  event.preventDefault();

  /* make new constant named "clickedElement" and give it the value of "this" */
  const clickedElement = this;

  /* make a new constant "href" and read the attribute "href" of the clicked element */
  const href = clickedElement.getAttribute('href');
  console.log('href', href);

  /* make a new constant "tag" and extract tag from the "href" constant */
  const tag = href.replace('#tag-', '');
  console.log('tag', tag);

  /* find all tag links with class active */
  const activeTagLinks = document.querySelectorAll('a.active[href^="#tag-"]');
  console.log('activeTagLinks', activeTagLinks);

  /* START LOOP: for each active tag link */
  for (let activeTagLink of activeTagLinks) {
    /* remove class active */
    activeTagLink.classList.remove('active');

    /* END LOOP: for each active tag link */
  }
  /* find all tag links with "href" attribute equal to the "href" constant */
  const tagLinks = document.querySelectorAll('a[href="' + href + '"]');
  console.log('tagLinks', tagLinks);
  /* START LOOP: for each found tag link */
  for (let tagLink of tagLinks) {
    /* add class active */
    tagLink.classList.add('active');
    /* END LOOP: for each found tag link */
  }
  /* execute function "generateTitleLinks" with article selector as argument */
  generateTitleLinks('[data-tags~="' + tag + '"]');
}

function addClickListenersToTags() {
  /* find all links to tags */
  const linksToTags = document.querySelectorAll('a[href^="#tag-"]');
  console.log('linksToTags', linksToTags);
  /* START LOOP: for each link */
  for (let linkToTag of linksToTags) {
    /* add tagClickHandler as event listener for that link */
    linkToTag.addEventListener('click', tagClickHandler);
    /* END LOOP: for each link */
  }
}

addClickListenersToTags();

function generateAuthors() {
  /* find all articles */
  const articles = document.querySelectorAll('optArticleSelector');
  /* START LOOP: for every article: */
  for (let article of articles) {
    /* find authors wrapper */
    const author = article.querySelector(optArticleAuthorSelector);
    console.log('author', author);
    /* make html variable with empty string */
    let html = '';
    /* get author from data-author attribute */
    const authorName = article.getAttribute('data-author');
    console.log('authorName', authorName);
    /* generate HTML of the link */
    const linkHTML =
      '<a href= "#' + authorName + '"><span>' + authorName + '</span></a>';
    console.log('linkAuuthor', linkHTML);
    /* add generated code to html variable */
    html = html + linkHTML;
    /* END LOOP */
    author.innerHTML = html;
  }
}

generateAuthors();

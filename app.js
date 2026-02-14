const articleAuthor = document.getElementById("articleAuthor");
const btnShare = document.getElementById("btnShare");

btnShare.addEventListener("click", () => {
  /* the css controls show / hide elements article author content and article nav, childs of article author */
  articleAuthor.classList.toggle("active");
});

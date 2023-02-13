function render(array) {
  const mainList = document.querySelector(".ul__container");
  mainList.innerHTML = "";

  array.forEach((post) => {
    const card = createCard(post, mainList);
  });

  
}

function createCard(post, ul) {
  const listContainer = document.createElement("li");
  const listItem = document.createElement("div");
  const figure = document.createElement("figure");
  const postImage = document.createElement("img");
  const list = document.createElement("div");
  const textTitle = document.createElement("h3");
  const paragraphTitle = document.createElement("p");
  const paragraphTextTitle = document.createElement("div");
  const paragraphText = document.createElement("h3");
  const paragraphTexttitle2 = document.createElement("div");
  const paragraphText2 = document.createElement("p");
  const postItem = document.createElement("div");
  const buttonPost = document.createElement("button");
  const imgg = document.createElement("img");
  const number = document.createElement("h6");

  listItem.classList.add("first__item");
  figure.classList.add("figure__container");
  list.classList.add("head__item");
  textTitle.classList.add("text__title");
  paragraphTitle.classList.add("paragraph__title");
  paragraphTextTitle.classList.add("paragraph__texttitle");
  paragraphText.classList.add("paragraph__text");
  paragraphTexttitle2.classList.add("paragraph__texttitle2");
  paragraphText2.classList.add("paragraph__text2");
  postItem.classList.add("post__item");
  buttonPost.classList.add("button__post");
  imgg.classList.add("imgg");
  number.classList.add("number");

  list.append(textTitle, paragraphTitle);
  figure.append(postImage, list);
  listItem.appendChild(figure);
  textTitle.innerText = post.user;
  paragraphTitle.innerText = post.stack;
  postImage.src = post.img;
  paragraphTextTitle.appendChild(paragraphText);
  paragraphText.innerText = post.title;
  paragraphTexttitle2.appendChild(paragraphText2);
  paragraphText2.innerText = post.text;
  postItem.append(buttonPost, imgg, number);
  buttonPost.innerText = "Abrir Post";
  buttonPost.id = post.id;
  imgg.src = "./src/assets/img/Ellipse 1.svg";
  number.innerText = post.likes;
  listContainer.append(
    listItem,
    paragraphTextTitle,
    paragraphTexttitle2,
    postItem
  );
  ul.appendChild(listContainer);
}

render(posts);

//escrever uma funçao que captura um imput titulo e texto
// inserir um objeto na lista de post e rendenizar a lista de post
function preventForm() {
  const buttom = document.querySelector(".button__submit");

  buttom.addEventListener("click", (event) => {
    event.preventDefault();

    const name = document.querySelector("#uname");

    const value = name.value;
    // render();
  });
}

preventForm();

function createUser() {
  const mainListItem = document.querySelector(".user__info");

  const divClass = document.createElement("div");
  const figure = document.createElement("figure");
  const image = document.createElement("img");
  const divClassItem = document.createElement("div");
  const textclass = document.createElement("h3");
  const paragraphCLass = document.createElement("p");

  divClassItem.classList.add("head__item");
  textclass.classList.add("text__title");
  paragraphCLass.classList.add("paragraph__title");

  image.src = "./src/assets/img/eclipse01.svg";
  textclass.innerText = "Samuel Leão";
  paragraphCLass.innerText = "Front end Engineer";

  figure.appendChild(image);
  divClassItem.append(textclass, paragraphCLass);
  divClass.append(figure, divClassItem);
  mainListItem.append(divClass);

  return mainListItem;
}

createUser();

function criarPost() {
  posts.push;
}

function render2(suggestUser) {
  const mainListSugUser = document.querySelector(".list__container");
  mainListSugUser.innerHTML = "";

  suggestUser.forEach((userSug) => {
    const card = createSugUser(userSug, mainListSugUser);
  });
}

function createSugUser(userSug, ul) {
  const listItem = document.createElement("li");
  const figure = document.createElement("figure");
  const image = document.createElement("img");
  const headItem = document.createElement("div");
  const textTitle = document.createElement("h3");
  const paragraphTitle = document.createElement("p");
  const paragraphTitle2 = document.createElement("p");

  listItem.classList.add("list__item");
  headItem.classList.add("head__item");
  textTitle.classList.add("text__title");
  paragraphTitle.classList.add("paragraph__title");
  paragraphTitle2.classList.add("paragraph__title2");

  headItem.append(textTitle, paragraphTitle);
  figure.append(image, headItem);
  textTitle.innerText = userSug.user;
  paragraphTitle.innerText = userSug.stack;
  image.src = userSug.img;
  paragraphTitle2.innerText = "Seguindo";
  listItem.append(figure, paragraphTitle2);

  ul.append(listItem);
}

render2(suggestUsers);

function modalRender(array) {
  const modal = document.querySelector("#modalController");
  console.log(modal);
  const buttons = document.querySelectorAll(".button__post");
  //console.log(buttons)
  let myButtons = [...buttons]; //operador spread virando o nodelist para array
  // console.log(myButtons)
  myButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      //   console.log(event.target);
      const modalContent = createModal(button.character.id , array)
      modal.innerHTML = ''
      modal.appendChild(modalContent)
      modal.showModal();
      closeModal();
    });
  });
}

// const dialog = document.getElementById("modalController");
// console.log(dialog)

function closeModal() {
  const button = document.querySelector("#closeModal");
  const modalContainer = document.querySelector("#modalController");

  button.addEventListener("click", () => {
    modalContainer.close();
  });
}

modalRender(posts);

function createModal(id, array) {
  const modalContainer = document.createElement("li");
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

  const characterFund = array.find((character) => character.id === Number(id));

  //   console.log(characterFund);

  listItem.classList.add("first__item");
  figure.classList.add("figure__container");
  postItem.classList.add("post__item");
  postImage.src = characterFund.img;
  list.classList.add("head__item");
  textTitle.innerText = characterFund.user;
  textTitle.classList.add("text__title");
  paragraphText.innerText = characterFund.stack;
  paragraphTitle.classList.add("paragraph__title");
  paragraphTextTitle.classList.add("paragraph__texttitle");
  paragraphText2.innerText = characterFund.text;
  paragraphText.classList.add("paragraph__text");
  paragraphTexttitle2.classList.add("paragraph__texttitle2");
  paragraphText2.classList.add("paragraph__text2");

  list.append(textTitle, paragraphTitle);
  figure.append(postImage, list);
  listItem.appendChild(figure);
  //   textTitle.innerText = characterFund.user;
  //   paragraphTitle.innerText = characterFund.stack;
  paragraphTextTitle.appendChild(paragraphText);
  //   paragraphText.innerText = characterFund.title;
  paragraphTexttitle2.appendChild(paragraphText2);
  //   paragraphText2.innerText = characterFund.text;
  // //   postItem.appendChild(buttonPost);

  modalContainer.append(listItem, paragraphTextTitle, paragraphTexttitle2);
  return modalContainer;
}

modalRender(posts);

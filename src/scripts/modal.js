function modalRender() {
  const buttons = document.querySelectorAll(".button__post");

  let myButtons = [...buttons]; //operador spread virando o nodelist para array

  myButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const modal = document.getElementById("overlay");
      modal.style.display = "flex";

      const post = getPostById(button.id);

      modal.querySelector("h2").innerText = post.title;
      modal.querySelector("h1").innerText = post.user;
      modal.querySelector("p").innerText = post.text;
      modal.querySelector("small").innerText = post.stack;
      modal.querySelector("img").src = post.img;
    });
  });
}

function getPostById(id) {
  const post = posts.filter((post) => post.id == id);

  return post[0];
}

function closeModal() {
  const button = document.getElementById("closeModal");

  console.log(button);

  button.addEventListener("click", (event) => {
    const modal = document.getElementById("overlay");
    modal.style.display = "none";
  });
}

modalRender(posts);
closeModal();

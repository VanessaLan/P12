const cardProject1 = document.querySelector(".card_1");
cardProject1.addEventListener("click", () => {

  const modal1 = document.querySelector(".modal_1");
  modal1.showModal();

  const buttonCloseModal1 = document.querySelector(".icon_close_1");
  buttonCloseModal1.addEventListener("click", () => {
    modal1.close();
  });

  modal1.addEventListener("click", (event) => {
    if (event.target === modal1) {
      modal1.close();
    }
  });
});


const cardProject2 = document.querySelector(".card_2");
cardProject2.addEventListener("click", () => {

  const modal2 = document.querySelector(".modal_2");
  modal2.showModal();

  const buttonCloseModal2 = document.querySelector(".icon_close_2");
  buttonCloseModal2.addEventListener("click", () => {
    modal2.close();
  });

  modal2.addEventListener("click", (event) => {
    if (event.target === modal2) {
      modal2.close();
    }
  });
});


const cardProject3 = document.querySelector(".card_3");
cardProject3.addEventListener("click", () => {

  const modal3 = document.querySelector(".modal_3");
  modal3.showModal();

  const buttonCloseModal3 = document.querySelector(".icon_close_3");
  buttonCloseModal3.addEventListener("click", () => {
    modal3.close();
  });

  modal3.addEventListener("click", (event) => {
    if (event.target === modal3) {
      modal3.close();
    }
  });
});


const cardProject4 = document.querySelector(".card_4");
cardProject4.addEventListener("click", () => {

  const modal4 = document.querySelector(".modal_4");
  modal4.showModal();

  const buttonCloseModal4 = document.querySelector(".icon_close_4");
  buttonCloseModal4.addEventListener("click", () => {
    modal4.close();
  });

  modal4.addEventListener("click", (event) => {
    if (event.target === modal4) {
      modal4.close();
    }
  });
});
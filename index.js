const cards = document.querySelectorAll(".project_card");

cards.forEach(card => {
  card.addEventListener("click", () => {

    const modalOpen = document.querySelector(card.dataset.modal);

    modalOpen.showModal();
  
    const buttonCloseModal = modalOpen.querySelector(".icon_close");
    
    buttonCloseModal.addEventListener("click", () => {
      modalOpen.close();
    });
  
    modalOpen.addEventListener("click", (event) => {
      if (event.target === modalOpen) {
        modalOpen.close();
      }
    });
  });
});

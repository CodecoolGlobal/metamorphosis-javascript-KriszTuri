initDragAndDrop();

function initDragAndDrop() {
    shuffleCards();
    // Initialize drag & drop elements here

    //get all elements by tag
    const draggables = document.querySelectorAll('.card');
    const containers = document.querySelectorAll('.card-slot');

    //apply event listener to everything in 'draggables' (looping draggables)
    draggables.forEach(draggable => {
      //dragstart: when we start dragging, neccessary
      draggable.addEventListener('dragstart', () => {
        //adding new class to differenciate the ones we're dragging from the rest
        draggable.classList.add('dragging')
      })
      //removing class as soon as we stopped dragging (so it won't stay half opaque)
      draggable.addEventListener('dragend', () =>{
        draggable.classList.remove('dragging')
      })
    });
    containers.forEach(container => {
      container.addEventListener('dragover', () => {
        console.log('drag over')
      })
    })
}

function shuffleCards() {
    let mixedCardsContainer = document.querySelector(".mixed-cards");
    for (let i = mixedCardsContainer.children.length; i >= 0; i--) {
        mixedCardsContainer.appendChild(mixedCardsContainer.children[Math.random() * i | 0]);
    }
}

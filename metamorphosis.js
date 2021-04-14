initDragAndDrop();

function initDragAndDrop() {
    shuffleCards();
    // Initialize drag & drop elements here

    //get all elements by tag
    const draggables = document.querySelectorAll('.card');
    const containers = document.querySelectorAll('.card-slot');
    const deck = document.querySelectorAll('.mixed-cards');
    const frogCardIDs = ['f1','f2','f3','f4'];
    const butterflyCardIDs = ['b1','b2','b3','b4'];
    //const frogSlots = document.querySelectorAll('.frog metamorphosis-container');
    //const butterflySlots = document.querySelectorAll('.butterfly metamorphosis-container');

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
        const draggable = document.querySelector('.dragging')
        const elementID = draggable.id.toString()
        parent = container.parentNode
        containerMainclassName = parent.parentNode.className
        if (containerMainclassName == "frog metamorphosis-container"){
          if (frogCardIDs.indexOf(elementID) > -1){
            container.appendChild(draggable)
          }
        }
        if (containerMainclassName == "butterfly metamorphosis-container"){
          if (butterflyCardIDs.indexOf(elementID) > -1){
            container.appendChild(draggable)
          }
        }
      })
    });

    deck.forEach(deckOfCards => {
      deckOfCards.addEventListener('dragover',() => {
        const draggable = document.querySelector('.dragging')
        deckOfCards.appendChild(draggable)
      })
    });
}

function shuffleCards() {
    let mixedCardsContainer = document.querySelector(".mixed-cards");
    for (let i = mixedCardsContainer.children.length; i >= 0; i--) {
        mixedCardsContainer.appendChild(mixedCardsContainer.children[Math.random() * i | 0]);
    }
}

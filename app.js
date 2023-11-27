function adjustLayoutForMobile() {
  const screenWidth = window.innerWidth;

  if (screenWidth <= 768) {
    // Example: Apply specific styles for mobile
    const elements = document.querySelectorAll('shopify-Icon-Control-Mobile');
    elements.forEach((element) => {
      adjustLayoutForMobile.style.display = 'block';

    });
  } 
}
window.onload = adjustLayoutForMobile;
window.onresize = adjustLayoutForMobile;

function adjustPadding(input) {
    const paddingValue = '70px'; // Set the desired padding value
  
    if (input.value.length > 0) {
      input.style.paddingLeft = paddingValue;
    } else {
      input.style.paddingLeft = '50px'; // Default padding when there's no text
    }
  }
  
  function focusInput() {
    const inputField = document.querySelector('.search-Input-Desktop');
    inputField.focus();
  }
  document.addEventListener('DOMContentLoaded', function() {
    // Event delegation for handling click on the close button image
    document.addEventListener('click', function(event) {
      const closeButton = event.target.closest('.extend-Your-Trial-Div-Desktop-Close-Button');
      if (closeButton) {
        const parentContainer = document.querySelector('.extend-Your-Trial-Div-Desktop-Parent-Container');
        parentContainer.style.display = 'none';
      }
    });
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    const selectPlanButton = document.querySelector('.select-A-Plan-Button-Desktop');
  
    selectPlanButton.addEventListener('click', function() {
      window.location.href = 'https://www.shopify.com/pricing';
    });
  });
    
document.addEventListener("DOMContentLoaded", function () {
    const arrowDown = document.getElementById('arrowDown');
    const arrowUp = document.getElementById('arrowUp');
    const stepsDiv = document.querySelector('.steps-Div');
  
    arrowDown.addEventListener('click', function () {
      stepsDiv.style.display = 'block';
      arrowDown.style.display = 'none';
      arrowUp.style.display = 'inline-block';
    });
  
    arrowUp.addEventListener('click', function () {
      stepsDiv.style.display = 'none';
      arrowDown.style.display = 'inline-block';
      arrowUp.style.display = 'none';
    });
  });
  


document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll('img[id^="option"]');
  const progressBar = document.querySelector(".progress");
  const selectedCount = document.getElementById("selectedCount");
  const progressStep = 20;
  const spinnerURL = "https://crushingit.tech/hackathon-assets/icon-spinner.svg";
  const checkmarkURL = "https://crushingit.tech/hackathon-assets/icon-checkmark-circle.svg";

  let count = 0;
  let selectedDiv = document.querySelector('.option-Div'); // Select the first option-Div by default

  // Show the first option-Div by default
  if (selectedDiv) {
    selectedDiv.style.display = 'block';
  }

  function handleCheckboxSelection(img) {
    const totalImages = images.length;
    const currentIndex = Array.from(images).indexOf(img);
    const currentDiv = document.querySelectorAll('.option-Div')[currentIndex];

    if (img.classList.contains('selected')) {
      img.classList.remove('selected');
      img.classList.add('spin-animation');
      img.src = spinnerURL; // Show spinner when unselecting
      img.style.filter = "brightness(90%) contrast(10%)";

      setTimeout(() => {
        img.src = "https://crushingit.tech/hackathon-assets/icon-dashed-circle.svg";
        img.style.filter = ''; // Remove any filters applied

        // Toggle the corresponding option-Div visibility when the image is deselected
        if (currentDiv) {
          currentDiv.style.display = 'block'; // Show the associated div
        }
      }, 800); // Adjust the delay time as needed (in milliseconds)

      count--;
    } else {
      img.classList.add('selected');
      img.src = spinnerURL; // Show spinner when selecting
      img.style.filter = "brightness(90%) contrast(10%)";

      // Apply rotation animation to spinner image
      img.classList.add('spin-animation'); // Add class to apply spin animation

      setTimeout(() => {
        img.src = checkmarkURL;
        img.style.filter = "brightness(90%) contrast(100%)";

        // Find the next uncompleted option-Div to display
        for (let i = currentIndex + 1; i < totalImages; i++) {
          const nextDiv = document.querySelectorAll('.option-Div')[i];
          if (images[i].classList.contains('selected')) {
            continue;
          } else {
            if (currentDiv) {
              currentDiv.style.display = 'none';
            }
            if (nextDiv) {
              nextDiv.style.display = 'block';
              break;
            }
          }
        }

        // Check if all checkboxes are selected and hide all divs
        if (count === totalImages) {
          document.querySelectorAll('.option-Div').forEach(div => {
            div.style.display = 'none';
          });
        }
      }, 800); // Adjust the delay time as needed (in milliseconds)

      count++;
    }

    selectedCount.textContent = `${count}/5 completed`;
    progressBar.style.width = `${count * progressStep}px`;
  }

  images.forEach((img, index) => {
    img.addEventListener("click", function () {
      handleCheckboxSelection(img);
    });

    img.addEventListener("keydown", function (event) {
      if (event.code === "Space" || event.code === "Enter") {
        event.preventDefault();
        handleCheckboxSelection(img);
      }
    });

    img.addEventListener("focus", function () {
      img.style.outline = "2px solid blue"; // Just for visual indication
    });

    img.addEventListener("blur", function () {
      img.style.outline = ""; // Remove outline when not focused
    });
  });

  document.addEventListener("keydown", function (event) {
    const focusedElement = document.activeElement;
    const focusedIndex = Array.from(images).indexOf(focusedElement);

    if (event.code === "ArrowDown") {
      event.preventDefault();
      const nextIndex = focusedIndex < images.length - 1 ? focusedIndex + 1 : 0;
      images[nextIndex].focus();
    } else if (event.code === "ArrowUp") {
      event.preventDefault();
      const prevIndex = focusedIndex > 0 ? focusedIndex - 1 : images.length - 1;
      images[prevIndex].focus();
    }
  });
});

function toggleDropdown() {
  const dropdownContainer = document.querySelector('.dc-Menu-DropdownContainer');

  // Toggle the visibility of the dropdown container
  if (dropdownContainer.style.display === 'none' || dropdownContainer.style.display === '') {
    dropdownContainer.style.display = 'block';
  } else {
    dropdownContainer.style.display = 'none';
  }
}
function notificationMessage() {
  const notificationMessage = document.querySelector('.notification-Icon-Message-Desktop');

  // Toggle the visibility of the dropdown container
  if (notificationMessage.style.display === 'none' || notificationMessage.style.display === '') {
    notificationMessage.style.display = 'block';
  } else {
    notificationMessage.style.display = 'none';
  }
}

  







  
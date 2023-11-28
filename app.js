function adjustPadding(input) {
  const paddingValue = '70px';

  if (input.value.length > 0) {
    input.style.paddingLeft = paddingValue;
  } else {
    input.style.paddingLeft = '50px';
  }
}

function focusInput() {
  const inputField = document.querySelector('.search-Input-Desktop');
  inputField.focus();
}
document.addEventListener('DOMContentLoaded', function () {
  document.addEventListener('click', function (event) {
    const closeButton = event.target.closest('.extend-Your-Trial-Div-Desktop-Close-Button');
    if (closeButton) {
      const parentContainer = document.querySelector('.extend-Your-Trial-Div-Desktop-Parent-Container');
      parentContainer.style.display = 'none';
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const selectPlanButton = document.querySelector('.select-A-Plan-Button-Desktop');

  selectPlanButton.addEventListener('click', function () {
    window.location.href = 'https://www.shopify.com/pricing';
  });
});
document.addEventListener('DOMContentLoaded', function () {
  const selectPlanButtonMobile = document.querySelector('.select-A-Plan-Button-mobile');

  selectPlanButtonMobile.addEventListener('click', function () {
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
  let selectedDiv = document.querySelector('.option-Div');

  if (selectedDiv) {
    selectedDiv.style.display = 'block';
    selectedDiv.style.background = '#F3F3F3';

    const prevSibling = selectedDiv.previousElementSibling;
    if (prevSibling) {
      prevSibling.style.background = '#F3F3F3';
    }
  }
  function handleImageSelection(img) {
    const totalImages = images.length;
    const currentIndex = Array.from(images).indexOf(img);
    const currentDiv = document.querySelectorAll('.option-Div')[currentIndex];

    for (let i = 0; i < images.length; i++) {
      const currentDiv = document.querySelectorAll('.option-Div')[i];
      const currentImg = images[i];

      if (!currentDiv) {
        continue;
      }

      if (currentImg === img) {
        if (img.classList.contains('selected')) {
          img.classList.remove('selected');
          img.classList.add('spin-animation');
          img.src = spinnerURL;
          img.style.filter = "brightness(90%) contrast(10%)";

          setTimeout(() => {
            img.src = "https://crushingit.tech/hackathon-assets/icon-dashed-circle.svg";
            img.style.filter = '';

            if (currentDiv) {
              currentDiv.style.display = 'block';
              currentDiv.style.background = '#F3F3F3';

              const prevSibling = currentDiv.previousElementSibling;
              if (prevSibling) {
                prevSibling.style.background = '#F3F3F3';
              }
            }
          }, 800);

          count--;
        } else {
          img.classList.add('selected');
          img.src = spinnerURL;
          img.style.filter = "brightness(90%) contrast(10%)";
          img.classList.add('spin-animation');

          setTimeout(() => {
            img.src = checkmarkURL;
            img.style.filter = "brightness(90%) contrast(100%)";

            for (let i = currentIndex + 1; i < totalImages; i++) {
              const nextDiv = document.querySelectorAll('.option-Div')[i];
              if (images[i].classList.contains('selected')) {
                continue;
              } else {
                if (currentDiv) {
                  currentDiv.style.display = 'none';

                  const prevSibling = currentDiv.previousElementSibling;
                  if (prevSibling) {
                  }
                }
                if (nextDiv) {
                  nextDiv.style.display = 'block';
                  nextDiv.style.background = '#F3F3F3';

                  const prevSibling = nextDiv.previousElementSibling;
                  if (prevSibling) {
                    prevSibling.style.background = '#F3F3F3';
                  }
                  break;
                }
              }
            }
          }, 800);

          count++;
        }
      } else {
        if (currentDiv.style.display !== 'block') {
          currentDiv.style.background = ''; previousElementSibling;
          if (prevSibling) {
            prevSibling.style.background = '';
          }
        }
      }
    }

    selectedCount.textContent = `${count}/5 completed`;
    progressBar.style.width = `${count * progressStep}px`;
  }


  function handleImageEvents(img) {
    img.setAttribute('role', 'option');
    img.setAttribute('aria-selected', 'false');

    function handleEvents() {
      handleImageSelection(img);
      img.style.outline = "none";

      const totalImages = images.length;
      const currentIndex = Array.from(images).indexOf(img);
      let nextIndex = (currentIndex + 1) % totalImages;

      while (images[nextIndex].classList.contains('selected')) {
        nextIndex = (nextIndex + 1) % totalImages;
        if (nextIndex === currentIndex) break;
      }

      images[nextIndex].focus();
    }

    img.addEventListener("click", handleEvents);

    img.addEventListener("keydown", function (event) {
      if (event.code === "Space" || event.code === "Enter") {
        event.preventDefault();
        handleEvents();
      }
    });

    img.addEventListener("focus", function () {
      img.style.outline = "2px solid blue";
    });

    img.addEventListener("blur", function () {
      img.style.outline = "none";
    });
  }

  images.forEach((img, index) => {
    handleImageEvents(img);
  });

  document.addEventListener('keydown', function (event) {
    const activeElement = document.activeElement;
    if (activeElement && activeElement.tagName.toLowerCase() === 'img' && event.code === 'Escape') {
      activeElement.blur();
    }
  });
});







function toggleDropdown() {
  const dropdownContainer = document.querySelector('.dc-Menu-DropdownContainer');
  if (dropdownContainer.style.display === 'none' || dropdownContainer.style.display === '') {
    dropdownContainer.style.display = 'block';
  } else {
    dropdownContainer.style.display = 'none';
  }
}
function notificationMessage() {
  const notificationMessage = document.querySelector('.notification-Icon-Message-Desktop');
  if (notificationMessage.style.display === 'none' || notificationMessage.style.display === '') {
    notificationMessage.style.display = 'block';
  } else {
    notificationMessage.style.display = 'none';
  }
}
function notificationMessageMobile() {
  const notificationMessageMobile = document.getElementById('notification-Icon-Message-Mobile');
  if (notificationMessageMobile.style.display === 'none' || notificationMessageMobile.style.display === '') {
    notificationMessageMobile.style.display = 'block';
  } else {
    notificationMessageMobile.style.display = 'none';
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const list = document.getElementById('list');
  const listItems = Array.from(document.querySelectorAll('#list li'));
  let selectedIndex = -1;

  function highlightItem(index) {
    listItems.forEach((item, i) => {
      const isSelected = i === index;
      item.setAttribute('aria-selected', isSelected ? 'true' : 'false');
      item.classList.toggle('selected', isSelected);
      if (isSelected) {
        item.focus();
        announceChange(item.textContent);
        if (!isElementInViewport(item)) {
          item.scrollIntoView({ block: 'nearest' });
        }
      }
    });
  }

  function announceChange(message) {
    const liveRegion = document.getElementById('live-region');
    liveRegion.textContent = message;
  }

  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  list.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      if (event.key === 'ArrowDown') {
        selectedIndex = (selectedIndex + 1) % listItems.length;
      } else if (event.key === 'ArrowUp') {
        selectedIndex = selectedIndex <= 0 ? listItems.length - 1 : selectedIndex - 1;
      }
      highlightItem(selectedIndex);
    } else if (event.key === 'Enter' && selectedIndex > -1) {
      event.preventDefault();
      const anchor = listItems[selectedIndex].querySelector('a');
      if (anchor) {
        anchor.click();
      }
    }
  });

  listItems.forEach((item, index) => {
    item.addEventListener('click', function () {
      selectedIndex = index;
      highlightItem(selectedIndex);
    });

    item.addEventListener('keydown', function (event) {
      if (event.key === 'Enter') {
        event.preventDefault();
        selectedIndex = index;
        highlightItem(selectedIndex);
        const anchor = listItems[selectedIndex].querySelector('a');
        if (anchor) {
          anchor.click();
        }
      }
    });
  });
});









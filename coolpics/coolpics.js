function viewerTemplate(pic, alt) {
    return `
      <div class="viewer">
        <button class="close-viewer">X</button>
        <img src="${pic}" alt="${alt}">
      </div>`;
  }
  
  function viewHandler(event) {
    const clickedElement = event.target;
  
    if (clickedElement.tagName === "IMG") {
      const srcParts = clickedElement.src.split("-");
      const newSrc = `${srcParts[0]}-full.jpeg`;
      const modalHTML = viewerTemplate(newSrc, clickedElement.alt);
      document.body.insertAdjacentHTML("afterbegin", modalHTML);
  
      document.body.style.overflow = "hidden";
  
      const viewer = document.querySelector(".viewer");
      viewer.classList.add("active");
  
      document.querySelector(".close-viewer").addEventListener("click", closeViewer);
    }
  }
  
  function closeViewer() {
    const viewer = document.querySelector(".viewer");
    if (viewer) {
      viewer.classList.remove("active");
      viewer.remove(); 
  
      document.body.style.overflow = "auto";
    }
  }
  
  document.querySelector(".gallery").addEventListener("click", viewHandler);
  
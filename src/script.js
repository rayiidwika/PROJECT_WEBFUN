
    const scrollContainer = document.getElementById("scrollContainer");
    let isDown = false;
    let startX;
    let scrollLeft;

    scrollContainer.addEventListener("mousedown", (e) => {
      isDown = true;
      scrollContainer.classList.add("active");
      startX = e.pageX - scrollContainer.offsetLeft;
      scrollLeft = scrollContainer.scrollLeft;
    });

    scrollContainer.addEventListener("mouseleave", () => {
      isDown = false;
    });

    scrollContainer.addEventListener("mouseup", () => {
      isDown = false;
    });

    scrollContainer.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - scrollContainer.offsetLeft;
      const walk = (x - startX) * 1.5; // speed factor
      scrollContainer.scrollLeft = scrollLeft - walk;
    });

  const scrolldiv = document.getElementById('scrolldiv');

  scrolldiv.addEventListener('wheel', (evt) => {
    const isScrollingHorizontally = Math.abs(evt.deltaX) > Math.abs(evt.deltaY);
    
    if (isScrollingHorizontally || evt.shiftKey) {
      evt.preventDefault();
      scrolldiv.scrollBy({
        left: evt.deltaX * 100, // ⬅ Tambah kecepatan scroll horizontal
        behavior: 'smooth'
      });
    }
  }, { passive: false });

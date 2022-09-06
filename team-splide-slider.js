document.addEventListener("DOMContentLoaded", function () {
    var centeredPaddingSlider = new Splide(".splide", {
      type: "loop",
      perMove: 1,
      perPage: 2,
      focus: "center",
      gap: "2%",
      padding: "2%",
      speed: 1000,
      easing: "cubic-bezier(0.25, 1, 0.5, 1)",
      //fixedWidth : '20rem',
      pagination: true,
      autoplay: "play",
      breakpoints: {
        // Webflow Max Width { 1920px-992px }
        1919: {
          perMove: 1,
          perPage: 1,
          gap: "4%",
          padding: "20%"
        },
  
        // Webflow Max Width { 768px-990px }
        991: {
          padding: "15%"
        },
  
        // Webflow Max Width { 478px - 767px }
        767: {
          padding: "10%"
        },
  
        // Webflow Max Width { 0 - 476px }
        477: {
          padding: "10%"
        }
      },
      classes: {
        prev: "splide__arrow--prev",
        next: "splide__arrow--next",
        pagination: "splide__pagination",
        page: "splide__pagination__page is-outlined"
      }
    });
  
    centeredPaddingSlider.mount();
  });  
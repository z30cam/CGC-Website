

// JavaScript code for fade transition between hero images
window.addEventListener('DOMContentLoaded', function() {
    var images = [
      './images/mainimage.jpg',
      './images/mainimage1.jpg',
      './images/mainimage2.jpg',
      './images/mainimage3.jpg',
      './images/mainimage4.jpg',
    ];
  
    var currentIndex = 0;
    var prevIndex = images.length - 1;
    var initialDelay = 3000; // Delay for the initial image in milliseconds
  
    function fadeInNextImage() {
      var nextIndex = (currentIndex + 1) % images.length;
  
      var currentImage = document.getElementById('hero-image-' + currentIndex);
      var nextImage = document.getElementById('hero-image-' + nextIndex);
  
      currentImage.classList.remove('active');
      nextImage.classList.add('active');
  
      currentIndex = nextIndex;
      prevIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    }
  
    function startImageSlider() {
      setTimeout(function() {
        fadeInNextImage();
        setInterval(fadeInNextImage, 5000); // Change image every 5 seconds
      }, initialDelay);
    }
  
    startImageSlider();
  });

  const openButton = document.querySelector('.twitter-button');
  const overlay = document.getElementById('overlay');
  const closeButton = document.getElementById('close-button');
  const spinner = document.getElementById('twitter-spinner');
  
  openButton.addEventListener('click', () => {
    overlay.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Disable scrolling on the background
    spinner.style.display = 'block'; // Show the loading spinner
  
    // Wait for the Twitter widget script to load
    window.twttr.ready((twitter) => {
      // Remove the loading spinner and display the Twitter feed
      spinner.style.display = 'none';
      twitter.widgets.load().then(() => {
        // Widget has finished loading
        spinner.style.display = 'none';
      });
    });
  });
  
  closeButton.addEventListener('click', () => {
    closeOverlay();
  });
  
  overlay.addEventListener('click', (event) => {
    if (event.target === overlay) {
      closeOverlay();
    }
  });
  
  function closeOverlay() {
    overlay.style.display = 'none';
    document.body.style.overflow = 'auto'; // Enable scrolling on the background
  }
  
  
  

  
  

  
  

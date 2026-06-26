---
---

<style>
  /* 1. FIX IMAGE ALIGNMENT: Strip padding from all Framework wrappers */
  #observablehq-main,
  #observablehq-center,
  .observablehq {
    padding: 0 !important;
    margin: 0 !important;
    max-width: 100% !important;
  }

  /* 2. TRANSPARENT HEADER: Float the header over the image */
  #observablehq-header {
    position: absolute; /* Pulls header out of the normal layout flow */
    top: 0;
    left: 0;
    width: 100%;
    background: transparent !important; /* Removes the solid background */
    border-bottom: none !important;     /* Removes the separator line */
    z-index: 10;                        /* Ensures links are clickable above the image */
  }

  /* 3. READABLE TEXT: Add contrast so the header links are visible over the image */
  #observablehq-header a, 
  #observablehq-header .nav-title {
    color: white !important; /* Forces the text to be white */
    text-shadow: 0px 2px 8px rgba(0,0,0,0.8); /* Adds a dark shadow behind the text */
  }

  /* 4. BANNER CONTAINER (Your existing code) */
  .banner-container {
    width: 100%;
    /* We removed the height limits here! */
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000;
  }

  .banner-image {
    width: 100%;
    height: auto; /* This tells the browser to keep the original aspect ratio perfectly */
    display: block;
  }
</style>

<div class="banner-container">
  <img src="ACC_Banner_Slides.png" alt="ACC Banner" class="banner-image" />
</div>
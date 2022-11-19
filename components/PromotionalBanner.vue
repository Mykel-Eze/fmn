<template>
  <div class="carousel carousel-slider center full-height" hidden>
      <!-- Take-out the hidden attribute to display section -->
      <div class="carousel-item" href="#one!" id="cat-1"></div>
      <!-- <div class="carousel-item" href="#two!" id="cat-2"></div> -->

      <div class="carousel-fixed-item flex-div">
          <div class="rotate-txt-right">
              Food and Agro Allied Group
          </div>
          <hr class="rotate-hr-right" />
          <div class="home-social-links">
              <a
                  href="https:/instagram.com/thefmngroup"
                  target="_blank"
                  rel="noopener"
              >
                  <img
                      src="https://flourmills.s3.eu-central-1.amazonaws.com/images/instagram-white.svg"
                      alt="instagram"
                      class="soc-logo-1"
                  />
                  <img
                      src="https://flourmills.s3.eu-central-1.amazonaws.com/images/instagram-c.svg"
                      alt="instagram"
                      class="soc-logo-2"
                  />
              </a>
              <a
                  href="https:/facebook.com/FMNGroup"
                  target="_blank"
                  rel="noopener"
              >
                  <img
                      src="https://flourmills.s3.eu-central-1.amazonaws.com/images/facebook-white.svg"
                      alt="facebook"
                      class="soc-logo-1"
                  />
                  <img
                      src="https://flourmills.s3.eu-central-1.amazonaws.com/images/facebook-c.svg"
                      alt="facebook"
                      class="soc-logo-2"
                  />
              </a>
              <a
                  href="https:/twitter.com/thefmngroup"
                  target="_blank"
                  rel="noopener"
              >
                  <img
                      src="https://flourmills.s3.eu-central-1.amazonaws.com/images/twitter-white.svg"
                      alt="twitter"
                      class="soc-logo-1"
                  />
                  <img
                      src="https://flourmills.s3.eu-central-1.amazonaws.com/images/twitter-c.svg"
                      alt="twitter"
                      class="soc-logo-2"
                  />
              </a>
              <a
                  href="https:/linkedin.com/company/the-fmn-group"
                  target="_blank"
                  rel="noopener"
              >
                  <img
                      src="https://flourmills.s3.eu-central-1.amazonaws.com/images/linkedin-white.svg"
                      alt="linkedin"
                      class="soc-logo-1"
                  />
                  <img
                      src="https://flourmills.s3.eu-central-1.amazonaws.com/images/linkedin-c.svg"
                      alt="linkedin"
                      class="soc-logo-2"
                  />
              </a>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "PromotionalBanners"
}
</script>

<style scoped>
/* Please comment off/ delete when reverting to other banners */
#cat-1 {
    background-image: url('https://flourmills.s3.eu-central-1.amazonaws.com/images/web-banner-02.png');
}
#cat-2 {
    background-image: url('https://flourmills.s3.eu-central-1.amazonaws.com/images/web-banner-01.png');
}
.link-overlay {
    position: absolute;
    width: 30%;
    height: 30%;
    right: 0;
    bottom: 0;
    /* background: #111111; */
    z-index: 2;
}
@media (max-width: 992px) {
    #cat-1 {
        background-image: url('https://flourmills.s3.eu-central-1.amazonaws.com/images/mobile-banner-02.png');
    }
    #cat-2 {
        background-image: url('https://flourmills.s3.eu-central-1.amazonaws.com/images/mobile-banner-01.png');
    }
    .link-overlay {
        width: 50%;
    }
}
</style>

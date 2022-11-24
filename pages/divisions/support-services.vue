<template>
  <div>
    <!--=== Page Banner Section ===-->
      <PageBanner
          pageTitle="Support Services"
          pageCrumbName="Support Services"
          class="logistics-page divisionsSubpage"
      />
      <!--=== end of Page Banner Section ===-->

      <!--=== Sub Navigation Section ===-->
      <DivisionsPageSubNav class="supportServices-page" />
      <!--=== end of Sub Navigation Section ===-->

      <section class="more-txt-sec">
          <div class="row sec1">
              <div class="container">
                  <div class="col s12 txt-secc-wrapper1 pad0">
                      <div class="col s12 pad0">
                          <div class="text-justify txt-secc">
                              <p class="" style="padding-right: 0">
                                  Apart from Food Business and the Agro Allied Industry, we own a segment in the
                                  logistics and support nerve that connects businesses and industries. Our investment
                                  and contribution to the smooth running of the various chains and webs of businesses
                                  in the economy chains and networks is several companies strong.
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      <section id="sub-brands">
          <div class="row">
              <div class="container">
                  <div class="col s12 subs-img-wrapper">
                      <div class="subs-img">
                          <a rel="noopener" href="https://apapabulk.com/" target="_blank" style="background-image: url(https://flourmills.s3.eu-central-1.amazonaws.com/Group_16_843f8e469d.svg)">
                          </a>
                      </div>
                      <div class="subs-img">
                          <a rel="noopener" href="/" target="_blank" style="background-image: url(https://flourmills.s3.eu-central-1.amazonaws.com/Group_17_4ab2dfebae.svg)">
                          </a>
                      </div>
                      <div class="subs-img">
                          <a rel="noopener" href="https://bagco-ng.com/" target="_blank" style="background-image: url(https://flourmills.s3.eu-central-1.amazonaws.com/Bagco_fa4dce4267.svg)">
                          </a>
                      </div>
                  </div>
              </div>
          </div>
      </section>

  </div>
</template>

<script>
import Vue from 'vue';
import PageBanner from '~/components/PageBanner.vue';
import DivisionsPageSubNav from '~/components/DivisionsPageSubNav';

export default Vue.extend({
    name: 'SupportServices',
    components: {
        PageBanner,
        DivisionsPageSubNav
    }
});
</script>

<style scoped>
section#sub-brands {
    padding-bottom: 30px;
    padding-top: 10px;
}
.subs-img-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 30px;
    text-align: center;
    /* grid-template-columns: 25% 25% 25% 25%; */
}
.subs-img {
    background: white;
    box-shadow: 0px 0px 8px lightgrey;
    border-radius: 6px;
    padding: 10px;
    height: 122px;
    transition: transform 1.2s;
}
.subs-img:hover {
  transform: scale(1.05);
}

section#sub-brands a {
    display: block;
    text-align: center;
    height: 100%;
    width: 100%;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
}
/* section#sub-brands a img {
    width: 90%;
    max-height: 122px;
} */


@media (max-width: 992px) {
    section#sub-brands a img.agri-palm-img {
        width: 60%;
        position: relative;
        top: 45px;
    }
}
@media (max-width: 600px) {
    section#sub-brands a img {
        width: 100%;
        max-height: 43px;
    }
    .subs-img {
      height: 55px;
    }
    .subs-img-wrapper {
        grid-gap: 30px 10px;
        grid-template-columns: calc(33.3% - 10px) calc(33.3% - 10px) calc(33.3% - 10px);
    }
}
</style>

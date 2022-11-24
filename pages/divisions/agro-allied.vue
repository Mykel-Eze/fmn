<template>
  <div>
    <!--=== Page Banner Section ===-->
      <PageBanner
          pageTitle="Agro Allied"
          pageCrumbName="Agro Allied"
          class="agro-allied-page divisionsSubpage"
      />
      <!--=== end of Page Banner Section ===-->

      <!--=== Sub Navigation Section ===-->
      <DivisionsPageSubNav class="agroAllied-page" />
      <!--=== end of Sub Navigation Section ===-->

      <section class="more-txt-sec">
          <div class="row sec1">
              <div class="container">
                  <div class="col s12 txt-secc-wrapper1 pad0">
                      <div class="col s12 pad0">
                          <div class="text-justify txt-secc">
                              <p class="" style="padding-right: 0">
                                Our journey into the agriculture sector, as a group can be traced back to 1978,
                                with the acquisition of a 10,000-hectare farm in Kaboji, Niger state. Since then,
                                we have continued to make substantial investments in several other farms, and
                                downstream activities to support our 5 key value chains of Grains; oils & Fats;
                                Sugar; Feeds & Proteins, and Cassava Starches.
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
                          <a rel="noopener" href="https://www.peopltd.com/" target="_blank" style="background-image: url(https://flourmills.s3.eu-central-1.amazonaws.com/Group_5_c2da9cb2b0.svg)">
                          </a>
                      </div>
                      <div class="subs-img">
                          <a rel="noopener" href="https://goldensugarng.com/" target="_blank" style="background-image: url(https://flourmills.s3.eu-central-1.amazonaws.com/Group_10_6b26bf8b26.svg)">
                          </a>
                      </div>
                      <div class="subs-img">
                          <a rel="noopener" href="https://www.fmnagro.com/" target="_blank" style="background-image: url(https://flourmills.s3.eu-central-1.amazonaws.com/Group_9_11e1f85f05.svg)">
                          </a>
                      </div>
                      <div class="subs-img">
                          <a rel="noopener" href="https://goldensugarng.com/" target="_blank" style="background-image: url(https://flourmills.s3.eu-central-1.amazonaws.com/Group_4_c18e7f631b.svg)">
                          </a>
                      </div>
                      <div class="subs-img">
                          <a rel="noopener" href="https://premierfeedsltd.com/" target="_blank" style="background-image: url(https://flourmills.s3.eu-central-1.amazonaws.com/Group_11_087154f220.svg)">
                          </a>
                      </div>
                      <div class="subs-img">
                          <a rel="noopener" href="https://goldenagriinputs.com/" target="_blank" style="background-image: url(https://flourmills.s3.eu-central-1.amazonaws.com/Group_15_7170243818.svg)">
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
    name: 'AgroAllied',
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

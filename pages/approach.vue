<template>
  <div>
    <!--=== Page Banner Section ===-->
      <PageBanner
          pageTitle="Our Approach"
          pageCrumbName="Approach"
          class="approach-page"
      />

      <section class="more-txt-sec">
          <div class="row sec1">
              <div class="container">
                  <div class="col s12 txt-secc-wrapper1 pad0">
                      <div class="col s12 pad0">
                          <div class="text-justify txt-secc">
                              <p class="" style="padding-right: 0">
                                  FMN’s Sustainability approach is based on respect for our people, cultures
                                  and the natural environment. We are committed to preserving biodiversity,
                                  reducing water usage, waste and the emission of Greenhouse gases. We care
                                  for the livelihood of the local communities and our employees in terms
                                  of health and welfare.
                              </p>
                              <p class="" style="padding-right: 0">
                                  We continually strive to improve the governance, economic,  environmental,
                                  and social aspects of our operations. Our vision becomes reality by putting
                                  into action programs and practices that optimize the use of natural
                                  resources, by developing energy efficient products and technologies, and
                                  by fostering innovations and creative solutions adding value for our clients,
                                  communities and the environment.
                              </p>
                              <p class="" style="padding-right: 0">
                                  Our approach to embedding sustainability across the business is driven through
                                  FMN’s “Tropos”  - 4 Pillar Framework comprising Governance, Economic, Environmental
                                  and Social pillars. These four pillars set out the areas where our knowledge
                                  and resources are enabling us to make a positive change and give structure for
                                  consolidation of all our sustainably efforts.
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      <section class="more-txt-sec">
          <div class="row sec1">
              <div class="container">
                  <div class="col s12 txt-secc-wrapper1 pad0">
                      <div class="approach-img-wrapper">
                        <img src="../assets/images/picture1.png" alt="picture1" class="approach-img">
                        <img src="../assets/images/picture2.png" alt="picture2" class="approach-img">
                      </div>
                  </div>
              </div>
          </div>
      </section>
      <!--=== end of Page Banner Section ===-->


  </div>
</template>

<script>
import Vue from 'vue';
import PageBanner from '~/components/PageBanner.vue';

export default Vue.extend({
    name: 'approach',
    components: {
        PageBanner,
    }
});
</script>

<style scoped>
.approach-img-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin: 30px 0;
}
img.approach-img {
  width: 100%;
}
</style>

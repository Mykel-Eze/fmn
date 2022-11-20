<template>
  <div>
    <!--=== Page Banner Section ===-->
      <PageBanner
          pageTitle="Foods"
          pageCrumbName="Foods"
          class="food3-page"
      />
      <!--=== end of Page Banner Section ===-->

      <!-- <section class="more-txt-sec">
          <div class="row sec1">
              <div class="container">
                  <div class="col s12 txt-secc-wrapper1 pad0">
                      <div class="col s12 pad0">
                          <div class="text-justify txt-secc">
                              <p class="" style="padding-right: 0">
                                  Our priority areas represent the issues that matter most to us, to our
                                  stakeholders and to the communities where we operate.
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section> -->

      <!--=== Sub Navigation Section ===-->
      <DivisionsPageSubNav class="foods-page" />
      <!--=== end of Sub Navigation Section ===-->

      <section class="more-txt-sec">
          <div class="row sec1">
              <div class="container">
                  <div class="col s12 txt-secc-wrapper1 pad0">
                      <div class="col s12 pad0">
                          <div class="text-justify txt-secc">
                              <p class="" style="padding-right: 0">
                                  Since the early sixties, when FMN was incorporated as the premier flour miller in Nigeria,
                                  our Golden Penny Food brand has remained a household name, providing great tasting and
                                  nourishing food to millions of Nigerian families. For over 60 years, we continue to
                                  bring families together at the dining table with smiles and a great food. Explore a
                                  selection of some of our products.
                              </p>
                          </div>
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
    name: 'Foods',
    components: {
        PageBanner,
        DivisionsPageSubNav
    }
});
</script>

<style>

</style>

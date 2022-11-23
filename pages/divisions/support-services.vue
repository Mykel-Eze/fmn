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

<style>

</style>

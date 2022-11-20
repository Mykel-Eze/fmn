<template>
  <div>
    <!--=== Page Banner Section ===-->
      <PageBanner
          pageTitle="Agro Allied"
          pageCrumbName="Agro Allied"
          class="agro-allied-page"
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

<style>

</style>

<template>
  <div>
    <!--=== Page Banner Section ===-->
      <PageBanner
          pageTitle="Purpose"
          pageCrumbName="Purpose"
          class="purpose-page"
      />

      <section class="more-txt-sec">
          <div class="row sec1">
              <div class="container">
                  <div class="col s12 txt-secc-wrapper1 pad0">
                      <div class="col s12 pad0">
                          <div class="text-justify txt-secc">
                              <p class="" style="padding-right: 0">
                                  Our business sustainability is rooted in backward integration and local
                                  content development, with core focus on processing of agricultural raw
                                  materials into superior quality within five value chains of grains; sweeteners;
                                  fats & oils; starches and proteins.
                              </p>
                              <p class="" style="padding-right: 0">
                                  We understand that we live in a resource finite world and depletion of
                                  resources beyond sustainable limits will cause harm to people and planet
                                  as well as undermine shared prosperity.
                              </p>
                              <p class="" style="padding-right: 0">
                                  We are committed to sustainable, restorative and regenerative agricultural
                                  production through integration of circular economy principles in our business
                                  model, to ensure that our core purpose of feeding the nation everyday with
                                  safe and nutritious food are within the planetary limit and in line with
                                  sustainable development goals (SGDs).
                              </p>
                          </div>
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
    name: 'purpose',
    components: {
        PageBanner,
    }
});
</script>

<style>

</style>

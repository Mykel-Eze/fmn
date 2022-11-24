<template>
  <div>
    <!--=== Page Banner Section ===-->
      <PageBanner
          pageTitle="Purpose"
          pageCrumbName="Purpose"
          class="gallery-page"
      />
      <!--=== end of Page Banner Section ===-->

      <section class="more-txt-sec">
          <div class="row sec1">
              <div class="container">
                <div class="short-desc-txt flex-div-lg col s12">
                      <div class="col s12 m4 pad0-xs">
                          <div class="sdt-img-div">
                              <img src="~/assets/images/sdg-logo.png" alt="sdg" class="sdt-img">
                          </div>
                      </div>
                      <div class="col s12 m8 pad0-xs">
                          <div class="text-justify-xs">
                              <p>
                                  Our business sustainability is rooted in backward integration and local
                                  content development, with core focus on processing of agricultural raw
                                  materials into superior quality within five value chains of grains; sweeteners;
                                  fats & oils; starches and proteins.
                              </p>
                              <p>
                                We understand that we live in a resource finite world and depletion of
                                resources beyond sustainable limits will cause harm to people and planet
                                as well as undermine shared prosperity.
                              </p>
                              <p>
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

<style scoped>
@media (min-width: 993px) {
  .flex-div-lg {
    display: flex;
    align-items: center;
  }
}
</style>

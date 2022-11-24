<template>
  <div>
    <!--=== Page Banner Section ===-->
      <PageBanner
          pageTitle="Food"
          pageCrumbName="Food"
          class="food3-page divisionsSubpage"
      />
      <!--=== end of Page Banner Section ===-->

      <!--=== Sub Navigation Section ===-->
      <DivisionsPageSubNav class="foods-page" />
      <!--=== end of Sub Navigation Section ===-->

      <section>
        <div class="row">
          <div class="container">
            <div class="short-desc-txt flex-div-lg col s12">
                <div class="col s12 m4 pad0-xs">
                    <div class="sdt-img-div center">
                        <img src="~/assets/images/golden-penny-logo.png" alt="golden penny" class="sdt-img">
                    </div>
                </div>
                <div class="col s12 m8 pad0-xs">
                    <div class="text-justify-xs">
                        <p>
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

<style scoped>
.sdt-img-div > div {
    background-color: white;
    float: left;
    width: 100%;
    background-image: url("/assets/images/golden-penny-logo.png");
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    padding-bottom: 100%;
    margin-top: 20px;
    border-radius: 18px;
}
@media (min-width: 993px) {
  .flex-div-lg {
    display: flex;
    align-items: center;
  }
}
</style>

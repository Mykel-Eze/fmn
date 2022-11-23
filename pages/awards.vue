<template>
  <div>
    <!--=== Page Banner Section ===-->
      <PageBanner
          pageTitle="Awards"
          pageCrumbName="Awards"
          class="accolades-page"
      />
      <!--=== end of Page Banner Section ===-->

      <!--=== Awards List Section ===-->
      <section id="awards">
        <div class="row">
          <div class="container">
            <div class="award-images-wrapper">
              <div class="award-image-block">
                <img src="~/assets/images/awards/award-1.jpg" alt="award" class="award-image materialboxed">
              </div>
              <div class="award-image-block">
                <img src="~/assets/images/awards/award-2.jpg" alt="award" class="award-image materialboxed">
              </div>
              <div class="award-image-block">
                <img src="~/assets/images/awards/award-3.jpg" alt="award" class="award-image materialboxed">
              </div>
              <div class="award-image-block">
                <img src="~/assets/images/awards/award-4.jpg" alt="award" class="award-image materialboxed">
              </div>
              <div class="award-image-block">
                <img src="~/assets/images/awards/award-5.jpg" alt="award" class="award-image materialboxed">
              </div>
              <div class="award-image-block">
                <img src="~/assets/images/awards/award-6.jpg" alt="award" class="award-image materialboxed">
              </div>
              <div class="award-image-block">
                <img src="~/assets/images/awards/award-7.jpg" alt="award" class="award-image materialboxed">
              </div>
              <div class="award-image-block">
                <img src="~/assets/images/awards/award-8.jpg" alt="award" class="award-image materialboxed">
              </div>
              <div class="award-image-block">
                <img src="~/assets/images/awards/award-9.jpg" alt="award" class="award-image materialboxed">
              </div>
              <div class="award-image-block">
                <img src="~/assets/images/awards/award-10.jpg" alt="award" class="award-image materialboxed">
              </div>
              <div class="award-image-block">
                <img src="~/assets/images/awards/award-11.jpg" alt="award" class="award-image materialboxed">
              </div>
              <div class="award-image-block">
                <img src="~/assets/images/awards/award-12.jpg" alt="award" class="award-image materialboxed">
              </div>
              <div class="award-image-block">
                <img src="~/assets/images/awards/award-13.jpg" alt="award" class="award-image materialboxed">
              </div>
              <div class="award-image-block">
                <img src="~/assets/images/awards/award-14.jpg" alt="award" class="award-image materialboxed">
              </div>
              <div class="award-image-block">
                <img src="~/assets/images/awards/award-15.jpg" alt="award" class="award-image materialboxed">
              </div>
              <div class="award-image-block">
                <img src="~/assets/images/awards/award-16.jpg" alt="award" class="award-image materialboxed">
              </div>
              <div class="award-image-block">
                <img src="~/assets/images/awards/award-17.jpg" alt="award" class="award-image materialboxed">
              </div>
              <div class="award-image-block">
                <img src="~/assets/images/awards/award-18.jpg" alt="award" class="award-image materialboxed">
              </div>
            </div>
          </div>
        </div>
      </section>
      <!--=== end of Awards List Section ===-->

  </div>
</template>

<script>
import Vue from 'vue';
import PageBanner from '~/components/PageBanner.vue';

export default Vue.extend({
    name: 'Awards',
    components: {
        PageBanner,
    },
    mounted() {
      var elemsMaterialbox = document.querySelectorAll('.materialboxed');
      M.Materialbox.init(elemsMaterialbox);
    }
});
</script>

<style scoped>
.award-images-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  margin: 40px 0 30px;
}
.award-image-block {
  width: 100%;
  padding-bottom: 75%;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
}
img.award-image {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>

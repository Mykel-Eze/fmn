<template>
  <div>
    <!--=== Page Banner Section ===-->
      <PageBanner
          pageTitle="Sugar"
          pageCrumbName="Sugar"
          class="sugar-page"
      />
      <!--=== end of Page Banner Section ===-->

      <!--=== Sub Navigation Section ===-->
      <SugarPageSubNav2 class="hse-page" />
      <!--=== end of Sub Navigation Section ===-->

      <section id="products-wrapper-2">
          <div class="row">
              <div class="container">
                <div class="col s12 pad0">
                    <div class="text-justify txt-secc">
                        <p class="" style="padding-right: 0">
                            Golden Sugar Company (GSC) has successfully implemented and received accreditation for the
                            Energy Management System (ISO 50001 EMS), which increased our energy efficiency and
                            ultimately lowered our carbon footprint.
                        </p>
                        <p class="" style="padding-right: 0">
                            In the nearest future, we intend to also implement within our facilities and get accreditation
                            for Environmental Management System (ISO 14001) and Occupational Health and Safety (ISO 45001).
                        </p>
                        <p class="" style="padding-right: 0">
                            We adhere to FMN Life Saving Rules (LSR) and other Health & Safety management systems and
                            polices with our facilities.
                        </p>
                    </div>

                    <div class="factory-images-wrapper">
                      <div>
                        <img src="~/assets/images/hse-1.jpg" alt="hse images" class="factory-image">
                      </div>
                      <div>
                        <img src="~/assets/images/hse-2.jpg" alt="hse images" class="factory-image">
                      </div>
                      <div>
                        <img src="~/assets/images/hse-3.jpg" alt="hse images" class="factory-image">
                      </div>
                      <div>
                        <img src="~/assets/images/hse-4.jpg" alt="hse images" class="factory-image">
                      </div>
                      <div>
                        <img src="~/assets/images/hse-5.jpeg" alt="hse images" class="factory-image">
                      </div>
                      <div>
                        <img src="~/assets/images/hse-6.jpeg" alt="hse images" class="factory-image">
                      </div>
                    </div>

                    <h3 class="sub-main-title">Certifications</h3>

                    <div class="factory-images-wrapper certifications-wrapper">
                      <div>
                        <img src="~/assets/images/CertificadoGE-EMS Certificate.jpg" alt="certificate" class="factory-image materialboxed">
                      </div>
                      <div>
                        <img src="~/assets/images/IQNetES-GE-EMS Certificate.jpg" alt="certificate" class="factory-image materialboxed">
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
import SugarPageSubNav2 from '~/components/SugarPageSubNav2';

export default Vue.extend({
    name: 'HSE',
    components: {
        PageBanner,
        SugarPageSubNav2
    },
    mounted() {
      var elemsMaterialbox = document.querySelectorAll('.materialboxed');
      M.Materialbox.init(elemsMaterialbox);
    },
    async asyncData({ $axios }) {
        const product = await $axios.get('products?brand=sugar');
        return {
            products: product.data,
        };
    },
});
</script>


<style scoped>
@import url('~/assets/css/brands.css');
.green-bg {
    background-color: #428452;
}

.product-details {
    border-bottom-color: #428452;
    min-height: 150px;
}
.pr-div {
    margin-bottom: 20px;
}

@media (max-width: 600px) {
    .product-details {
        min-height: 180px;
    }
}

#products-wrapper-2 {
  margin-top: 30px;
}
.factory-images-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
  margin: 40px 0 30px;
}
.factory-images-wrapper > div {
  width: 100%;
  padding-bottom: 100%;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
}
img.factory-image {
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: cover;
}
.certifications-wrapper > div {
  background-color: gainsboro;
}
.certifications-wrapper img.factory-image {
  object-fit: contain;
}
h3.sub-main-title {
    margin: 50px 0 -10px;
}

@media (max-width: 600px) {
    .sdt-img-div > div {
        margin-top: 0;
    }
    .factory-images-wrapper {
      grid-template-columns: 1fr;
    }
    .pr-wrapper {
        grid-template-columns: 1fr;
    }
}
</style>


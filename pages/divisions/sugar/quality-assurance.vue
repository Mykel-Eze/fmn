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
      <SugarPageSubNav2 class="qualityAssurance-page" />
      <!--=== end of Sub Navigation Section ===-->

      <section id="products-wrapper-2">
          <div class="row">
              <div class="container">
                <div class="col s12 pad0">
                    <div class="text-justify txt-secc">
                        <p class="" style="padding-right: 0">
                            GSC is committed to produce quality and safe refined crystallized granulated and cube
                            sugar that exceeds customers’ and regulatory requirements. We ensure that production
                            is always carried out under hygienic environment. To sustain our quality & food safety
                            commitments, GSC operations are in line with various management systems standards such
                            as Quality Management System (ISO 9001:2015), Food Safety (FSSC 22000 Version 5.1: 2013),
                            and Halal (2016).
                        </p>
                        <p class="" style="padding-right: 0">
                            Our approach to quality assurance involves focus on the continual improvement of operation
                            through the execution of detailed Root Cause Analysis (RCA) to address operational deviations.
                            Also, we conduct quality & food safety risk assessment and develop actions to mitigate all
                            identified risks.
                        </p>
                        <p class="" style="padding-right: 0">
                            Our reputation in the sugar value chain is not just a result of our commercial performance
                            but also a reflection of a sound strategy supported by best practices and the highest
                            industry operational standard. Consequently, Golden Sugar Company is certified and has
                            successfully renewed over the years its Food Safety Certification (FSSC 22000 Version 5.1),
                            Quality Management System (ISO 9001:2015), and Halal certification.
                        </p>
                    </div>

                    <div class="factory-images-wrapper">
                      <div>
                        <img src="~/assets/images/qa-1.jpg" alt="qa images" class="factory-image">
                      </div>
                      <div>
                        <img src="~/assets/images/qa-2.jpg" alt="qa images" class="factory-image">
                      </div>
                      <div>
                        <img src="~/assets/images/qa-3.jpg" alt="qa images" class="factory-image">
                      </div>
                    </div>

                    <h3 class="sub-main-title">Certifications</h3>

                    <div class="factory-images-wrapper certifications-wrapper">
                      <div>
                        <img src="~/assets/images/FSSC Certificate.jpg" alt="certificate" class="factory-image materialboxed">
                      </div>
                      <div>
                        <img src="~/assets/images/QMS Certificate.jpg" alt="certificate" class="factory-image materialboxed">
                      </div>
                      <div>
                        <img src="~/assets/images/Halal Cert 2021.jpg" alt="certificate" class="factory-image materialboxed">
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
    name: 'QualityAssurance',
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


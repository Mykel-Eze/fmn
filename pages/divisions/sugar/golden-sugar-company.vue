<template>
  <div>
    <!--=== Page Banner Section ===-->
      <PageBanner
          pageTitle="Sugar"
          pageCrumbName="Golden Sugar Company"
          class="sugar-page sugarSubpage"
      />
      <!--=== end of Page Banner Section ===-->

       <!--=== Sub Navigation Section ===-->
      <DivisionsPageSubNav class="sugar-page" />
      <!--=== end of Sub Navigation Section ===-->

      <section id="products-wrapper">
          <div class="row">
              <div class="container">
                  <!-- <div class="title-bar blue-bg">
                      <h5>Golden Sugar Company Limited</h5>
                  </div> -->
                  <div class="short-desc-txt col s12">
                      <div class="col s12 m4 pad0-xs">
                          <div class="sdt-img-div">
                              <div></div>
                          </div>
                      </div>
                      <div class="col s12 m8 pad0-xs">
                          <div class="text-justify-xs">
                              <ul class="dotted-list">
                                  <li>
                                      Golden Sugar Company is one of Nigeria’s biggest producers of refined premium sugar
                                      with state-of-the art sugar refinery in Apapa, Lagos State and sugar mill in Sunti,
                                      Niger State.
                                  </li>
                                  <li>
                                      We are one of the leading suppliers of sugar to various local & international
                                      corporate customers.
                                  </li>
                                  <li>
                                      Our product portfolio includes Premium White Granulated Sugar, Granulated Brown Sugar,
                                      and Premium White Sugar Cubes
                                  </li>
                              </ul>
                              <p>
                                  Our Sugar division is fully aligned with the purpose of Flour Mills of Nigeria Plc (FMN),
                                  “Feeding the Nation, Everyday”, as well as the vision, mission and goals.
                              </p>
                              <p>
                                GSC sustainability commitment is to consciously and continuously build a framework for
                                embedding and mainstreaming sustainability culture into every aspect of our operations and
                                functions, as stated in our Group Sustainability Policy. Our environmental goal and objectives
                                involve entrenching environmental sustainability by identifying, measuring, and mitigating
                                actual and potential negative environmental impacts that may resulting from our operations.
                                It also promotes the way we take care of our environment by creating sustainable practices
                                to address the challenges of climate change, optimizing our operational efficiency, energy
                                efficiency, water usage and emissions control.
                              </p>
                              <p>
                                Whilst aligning with the FMN Group Sustainability Policy objectives and goals, we intend to
                                benchmark our sustainability progress with global peers and international best practices
                                standards and regulations
                              </p>
                              <p>
                                Read more on FMN Group’s Sustainability Policy and Approach
                                <a rel="noopener" href="#" target="_blank" class="pry-color bold-txt lm-link">
                                  <u>here</u>
                                </a>
                              </p>
                          </div>
                      </div>
                  </div>
                  <div class="col s12 pad0 pr-wrapper">
                      <div
                          class="pr-div"
                          v-for="item in products"
                          :key="item.id"
                      >
                          <div class="product-img">
                            <div :style="{ backgroundImage: 'url(' + item.image.url + ')' }"></div>
                              <!-- <img
                                  :src="item.image.url"
                                  :alt="item.name"
                                  class="full-width"
                              /> -->
                          </div>
                          <div class="product-details">
                              <div class="product-title bold-txt">
                                  {{ item.name }}
                              </div>
                              <div
                                  class="product-desc"
                                  v-html="item.description"
                              ></div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      <!--=== Sub Navigation Section ===-->
      <SugarPageSubNav class="goldenSugar-page" />
      <!--=== end of Sub Navigation Section ===-->

      <section id="products-wrapper-2">
          <div class="row">
              <div class="container">
                <div class="col s12 pad0">
                    <div class="text-justify txt-secc">
                        <p class="" style="padding-right: 0">
                            Golden Sugar Company (GSC), Apapa Refinery has an installed annual production capacity of
                            750,000 tons which commenced operation in June 2013.
                        </p>
                        <p class="" style="padding-right: 0">
                            The refinery refines brown sugar to white crystallized sugar packaged in various SKUs such
                            as 50kg bags, 1kg, 500g, 250g and 500g cube sugar sold to numerous corporate and
                            retailer/open market customers.
                        </p>
                    </div>

                    <div class="factory-images-wrapper">
                      <div class="factory-image-block">
                        <img src="~/assets/images/refinery1.jpeg" alt="refinery" class="factory-image materialboxed">
                      </div>
                      <div class="factory-image-block">
                        <img src="~/assets/images/refinery.jpeg" alt="refinery" class="factory-image materialboxed">
                      </div>
                      <div class="factory-image-block">
                        <img src="~/assets/images/refinery2.jpeg" alt="refinery" class="factory-image materialboxed">
                      </div>
                    </div>
                </div>
              </div>
          </div>
      </section>

      <div class="more-about-gsc-wrapper center">
        <nuxt-link to="/divisions/sugar/quality-assurance" id="more-about-gsc">
          More About GSC Sustainability and ESG Disclosures
        </nuxt-link>
      </div>

  </div>
</template>

<script>
import Vue from 'vue';
import PageBanner from '~/components/PageBanner.vue';
import DivisionsPageSubNav from '~/components/DivisionsPageSubNav';
import SugarPageSubNav from '~/components/SugarPageSubNav';

export default Vue.extend({
    name: 'Sugar',
    components: {
        PageBanner,
        DivisionsPageSubNav,
        SugarPageSubNav
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

.more-about-gsc-wrapper {
    margin: 30px 0 50px;
}
a#more-about-gsc {
    background: var(--pry-color);
    color: white;
    padding: 20px 30px;
    border-radius: 2px;
    font-weight: bold;
    transition: transform 1.2s;
    display: inline-block;
}
a#more-about-gsc:hover {
  transform: scale(1.05);
}

@media (max-width: 600px) {
    .product-details {
        min-height: 180px;
    }
}

#products-wrapper {
  margin-bottom: 30px;
}
.teal-bg {
    background-color: #65b3b5;
}

.pr-wrapper {
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 30px;
    margin-top: 10px;
}

.title-bar {
    float: left;
    width: 100%;
    margin: 10px auto 20px;
    padding: 0 20px;
}

.sdt-img-div > div {
    background-color: white;
    float: left;
    width: 100%;
    background-image: url(https://flourmills.s3.eu-central-1.amazonaws.com/Group_14_2c07b38893.svg);
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    padding-bottom: 100%;
    margin-top: 20px;
    border-radius: 18px;
}
ul.dotted-list > li {
    font-size: 14px;
}

#products-wrapper-2 {
  margin-top: 30px;
}
.factory-images-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  margin: 40px 0 30px;
}
.factory-image-block {
  width: 100%;
  padding-bottom: 75%;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
}
img.factory-image {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
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


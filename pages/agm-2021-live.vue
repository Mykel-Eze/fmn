<template>
    <div>
        <!--=== Page Banner Section ===-->
        <PageBanner
            pageTitle="AGM 2021 (Live)"
            pageCrumbName="61st Annual General Meeting 2021"
            class="investorRelations-page"
        />
        <!--=== end of Page Banner Section ===-->

        <section id="stream-sec">
            <div class="row">
                <div class="container">
                    <div class="stream-deck">
                      <!-- <iframe width="100%" height="100%" src="https://www.youtube.com/embed/6Ta5gRVP_lI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
                      <iframe width="100%" height="100%" src="https://www.youtube.com/embed/7tdd5NMgWi0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import PageBanner from '~/components/PageBanner.vue';

export default {
  name: 'LiveStream',
  components: {
    PageBanner
  }
};
</script>

<style scoped>
@import url('~assets/css/investor-relations.css');

section#stream-sec {
  padding: 25px 0 30px;
}
.stream-deck {
  width: 100%;
  float: left;
  position: relative;
  height: 50vh;
}
@media(min-width: 993px){
  .stream-deck {
    height: 550px;
  }
}
@media(max-width: 600px){
  .stream-deck {
    max-height: 300px;
  }
}
</style>

<style></style>

import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _069812a7 = () => interopDefault(import('../pages/63-campaign.vue' /* webpackChunkName: "pages/63-campaign" */))
const _3de45658 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _02adf53c = () => interopDefault(import('../pages/abtl.vue' /* webpackChunkName: "pages/abtl" */))
const _2d38683d = () => interopDefault(import('../pages/agm-2021-live.vue' /* webpackChunkName: "pages/agm-2021-live" */))
const _7af8938a = () => interopDefault(import('../pages/agro-allied/index.vue' /* webpackChunkName: "pages/agro-allied/index" */))
const _f465329e = () => interopDefault(import('../pages/approach.vue' /* webpackChunkName: "pages/approach" */))
const _05a4d1ff = () => interopDefault(import('../pages/awards.vue' /* webpackChunkName: "pages/awards" */))
const _33c9e12a = () => interopDefault(import('../pages/awards-and-accolades.vue' /* webpackChunkName: "pages/awards-and-accolades" */))
const _d9e66724 = () => interopDefault(import('../pages/blog/index.vue' /* webpackChunkName: "pages/blog/index" */))
const _5dab68a6 = () => interopDefault(import('../pages/board.vue' /* webpackChunkName: "pages/board" */))
const _b92f9388 = () => interopDefault(import('../pages/careers.vue' /* webpackChunkName: "pages/careers" */))
const _512e77b2 = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _6926df0e = () => interopDefault(import('../pages/cookies-policy.vue' /* webpackChunkName: "pages/cookies-policy" */))
const _87a4aa4a = () => interopDefault(import('../pages/d-a-i.vue' /* webpackChunkName: "pages/d-a-i" */))
const _4cd48039 = () => interopDefault(import('../pages/diversity-and-inclusion.vue' /* webpackChunkName: "pages/diversity-and-inclusion" */))
const _d0c03920 = () => interopDefault(import('../pages/divisions/index.vue' /* webpackChunkName: "pages/divisions/index" */))
const _037057d5 = () => interopDefault(import('../pages/feeding-the-nation.vue' /* webpackChunkName: "pages/feeding-the-nation" */))
const _5e9fe2c2 = () => interopDefault(import('../pages/foods/index.vue' /* webpackChunkName: "pages/foods/index" */))
const _54dd2e59 = () => interopDefault(import('../pages/gallery.vue' /* webpackChunkName: "pages/gallery" */))
const _523454c6 = () => interopDefault(import('../pages/gtc.vue' /* webpackChunkName: "pages/gtc" */))
const _5f878521 = () => interopDefault(import('../pages/history-heritage.vue' /* webpackChunkName: "pages/history-heritage" */))
const _8499706a = () => interopDefault(import('../pages/investor-relations.vue' /* webpackChunkName: "pages/investor-relations" */))
const _9336c7b6 = () => interopDefault(import('../pages/investor-relations-old.vue' /* webpackChunkName: "pages/investor-relations-old" */))
const _4efeae4c = () => interopDefault(import('../pages/logistics.vue' /* webpackChunkName: "pages/logistics" */))
const _0834432e = () => interopDefault(import('../pages/management-team.vue' /* webpackChunkName: "pages/management-team" */))
const _410e31e3 = () => interopDefault(import('../pages/post-page.vue' /* webpackChunkName: "pages/post-page" */))
const _110b8b72 = () => interopDefault(import('../pages/press-release/index.vue' /* webpackChunkName: "pages/press-release/index" */))
const _0c448c2e = () => interopDefault(import('../pages/priority-areas/index.vue' /* webpackChunkName: "pages/priority-areas/index" */))
const _e3eaec40 = () => interopDefault(import('../pages/privacy-policy.vue' /* webpackChunkName: "pages/privacy-policy" */))
const _5d4623b6 = () => interopDefault(import('../pages/purpose.vue' /* webpackChunkName: "pages/purpose" */))
const _d385e116 = () => interopDefault(import('../pages/reporting.vue' /* webpackChunkName: "pages/reporting" */))
const _7829de1b = () => interopDefault(import('../pages/search-page.vue' /* webpackChunkName: "pages/search-page" */))
const _8b3ef958 = () => interopDefault(import('../pages/subsidiaries.vue' /* webpackChunkName: "pages/subsidiaries" */))
const _3a2501fd = () => interopDefault(import('../pages/sugar.vue' /* webpackChunkName: "pages/sugar" */))
const _9bfcd720 = () => interopDefault(import('../pages/sustainability.vue' /* webpackChunkName: "pages/sustainability" */))
const _a9579120 = () => interopDefault(import('../pages/vision-mission.vue' /* webpackChunkName: "pages/vision-mission" */))
const _22735b88 = () => interopDefault(import('../pages/agro-allied/agro-inputs.vue' /* webpackChunkName: "pages/agro-allied/agro-inputs" */))
const _4c989472 = () => interopDefault(import('../pages/agro-allied/oil-and-fats.vue' /* webpackChunkName: "pages/agro-allied/oil-and-fats" */))
const _94b8c828 = () => interopDefault(import('../pages/agro-allied/Starches.vue' /* webpackChunkName: "pages/agro-allied/Starches" */))
const _2ff68398 = () => interopDefault(import('../pages/agro-allied/Sweeteners.vue' /* webpackChunkName: "pages/agro-allied/Sweeteners" */))
const _2931df62 = () => interopDefault(import('../pages/divisions/agro-allied.vue' /* webpackChunkName: "pages/divisions/agro-allied" */))
const _f2c5fe1a = () => interopDefault(import('../pages/divisions/foods.vue' /* webpackChunkName: "pages/divisions/foods" */))
const _62790d57 = () => interopDefault(import('../pages/divisions/sugar/index.vue' /* webpackChunkName: "pages/divisions/sugar/index" */))
const _2166f06e = () => interopDefault(import('../pages/divisions/support-services.vue' /* webpackChunkName: "pages/divisions/support-services" */))
const _37a33aec = () => interopDefault(import('../pages/foods/ball-foods.vue' /* webpackChunkName: "pages/foods/ball-foods" */))
const _b6041eda = () => interopDefault(import('../pages/foods/flour.vue' /* webpackChunkName: "pages/foods/flour" */))
const _16f27f6c = () => interopDefault(import('../pages/foods/impulse-foods.vue' /* webpackChunkName: "pages/foods/impulse-foods" */))
const _10f94907 = () => interopDefault(import('../pages/foods/oil-and-spread.vue' /* webpackChunkName: "pages/foods/oil-and-spread" */))
const _093f41ba = () => interopDefault(import('../pages/priority-areas/backward-integration.vue' /* webpackChunkName: "pages/priority-areas/backward-integration" */))
const _a3c72620 = () => interopDefault(import('../pages/priority-areas/community-investment.vue' /* webpackChunkName: "pages/priority-areas/community-investment" */))
const _1cfc9689 = () => interopDefault(import('../pages/priority-areas/diversity-and-inclusion.vue' /* webpackChunkName: "pages/priority-areas/diversity-and-inclusion" */))
const _5ef0e0f6 = () => interopDefault(import('../pages/priority-areas/feeding-the-nation.vue' /* webpackChunkName: "pages/priority-areas/feeding-the-nation" */))
const _41f12c99 = () => interopDefault(import('../pages/priority-areas/index2.vue' /* webpackChunkName: "pages/priority-areas/index2" */))
const _cd666fa6 = () => interopDefault(import('../pages/divisions/sugar/golden-sugar-company.vue' /* webpackChunkName: "pages/divisions/sugar/golden-sugar-company" */))
const _a001c702 = () => interopDefault(import('../pages/divisions/sugar/hse.vue' /* webpackChunkName: "pages/divisions/sugar/hse" */))
const _66845a64 = () => interopDefault(import('../pages/divisions/sugar/quality-assurance.vue' /* webpackChunkName: "pages/divisions/sugar/quality-assurance" */))
const _edf49900 = () => interopDefault(import('../pages/divisions/sugar/sunti-golden-sugar-estate.vue' /* webpackChunkName: "pages/divisions/sugar/sunti-golden-sugar-estate" */))
const _f36e671c = () => interopDefault(import('../pages/divisions/sugar/sustainability.vue' /* webpackChunkName: "pages/divisions/sugar/sustainability" */))
const _e2c1db54 = () => interopDefault(import('../pages/blog/_id.vue' /* webpackChunkName: "pages/blog/_id" */))
const _4b10226f = () => interopDefault(import('../pages/press-release/_id.vue' /* webpackChunkName: "pages/press-release/_id" */))
const _00c5af99 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/63-campaign",
    component: _069812a7,
    name: "63-campaign"
  }, {
    path: "/about",
    component: _3de45658,
    name: "about"
  }, {
    path: "/abtl",
    component: _02adf53c,
    name: "abtl"
  }, {
    path: "/agm-2021-live",
    component: _2d38683d,
    name: "agm-2021-live"
  }, {
    path: "/agro-allied",
    component: _7af8938a,
    name: "agro-allied"
  }, {
    path: "/approach",
    component: _f465329e,
    name: "approach"
  }, {
    path: "/awards",
    component: _05a4d1ff,
    name: "awards"
  }, {
    path: "/awards-and-accolades",
    component: _33c9e12a,
    name: "awards-and-accolades"
  }, {
    path: "/blog",
    component: _d9e66724,
    name: "blog"
  }, {
    path: "/board",
    component: _5dab68a6,
    name: "board"
  }, {
    path: "/careers",
    component: _b92f9388,
    name: "careers"
  }, {
    path: "/contact",
    component: _512e77b2,
    name: "contact"
  }, {
    path: "/cookies-policy",
    component: _6926df0e,
    name: "cookies-policy"
  }, {
    path: "/d-a-i",
    component: _87a4aa4a,
    name: "d-a-i"
  }, {
    path: "/diversity-and-inclusion",
    component: _4cd48039,
    name: "diversity-and-inclusion"
  }, {
    path: "/divisions",
    component: _d0c03920,
    name: "divisions"
  }, {
    path: "/feeding-the-nation",
    component: _037057d5,
    name: "feeding-the-nation"
  }, {
    path: "/foods",
    component: _5e9fe2c2,
    name: "foods"
  }, {
    path: "/gallery",
    component: _54dd2e59,
    name: "gallery"
  }, {
    path: "/gtc",
    component: _523454c6,
    name: "gtc"
  }, {
    path: "/history-heritage",
    component: _5f878521,
    name: "history-heritage"
  }, {
    path: "/investor-relations",
    component: _8499706a,
    name: "investor-relations"
  }, {
    path: "/investor-relations-old",
    component: _9336c7b6,
    name: "investor-relations-old"
  }, {
    path: "/logistics",
    component: _4efeae4c,
    name: "logistics"
  }, {
    path: "/management-team",
    component: _0834432e,
    name: "management-team"
  }, {
    path: "/post-page",
    component: _410e31e3,
    name: "post-page"
  }, {
    path: "/press-release",
    component: _110b8b72,
    name: "press-release"
  }, {
    path: "/priority-areas",
    component: _0c448c2e,
    name: "priority-areas"
  }, {
    path: "/privacy-policy",
    component: _e3eaec40,
    name: "privacy-policy"
  }, {
    path: "/purpose",
    component: _5d4623b6,
    name: "purpose"
  }, {
    path: "/reporting",
    component: _d385e116,
    name: "reporting"
  }, {
    path: "/search-page",
    component: _7829de1b,
    name: "search-page"
  }, {
    path: "/subsidiaries",
    component: _8b3ef958,
    name: "subsidiaries"
  }, {
    path: "/sugar",
    component: _3a2501fd,
    name: "sugar"
  }, {
    path: "/sustainability",
    component: _9bfcd720,
    name: "sustainability"
  }, {
    path: "/vision-mission",
    component: _a9579120,
    name: "vision-mission"
  }, {
    path: "/agro-allied/agro-inputs",
    component: _22735b88,
    name: "agro-allied-agro-inputs"
  }, {
    path: "/agro-allied/oil-and-fats",
    component: _4c989472,
    name: "agro-allied-oil-and-fats"
  }, {
    path: "/agro-allied/Starches",
    component: _94b8c828,
    name: "agro-allied-Starches"
  }, {
    path: "/agro-allied/Sweeteners",
    component: _2ff68398,
    name: "agro-allied-Sweeteners"
  }, {
    path: "/divisions/agro-allied",
    component: _2931df62,
    name: "divisions-agro-allied"
  }, {
    path: "/divisions/foods",
    component: _f2c5fe1a,
    name: "divisions-foods"
  }, {
    path: "/divisions/sugar",
    component: _62790d57,
    name: "divisions-sugar"
  }, {
    path: "/divisions/support-services",
    component: _2166f06e,
    name: "divisions-support-services"
  }, {
    path: "/foods/ball-foods",
    component: _37a33aec,
    name: "foods-ball-foods"
  }, {
    path: "/foods/flour",
    component: _b6041eda,
    name: "foods-flour"
  }, {
    path: "/foods/impulse-foods",
    component: _16f27f6c,
    name: "foods-impulse-foods"
  }, {
    path: "/foods/oil-and-spread",
    component: _10f94907,
    name: "foods-oil-and-spread"
  }, {
    path: "/priority-areas/backward-integration",
    component: _093f41ba,
    name: "priority-areas-backward-integration"
  }, {
    path: "/priority-areas/community-investment",
    component: _a3c72620,
    name: "priority-areas-community-investment"
  }, {
    path: "/priority-areas/diversity-and-inclusion",
    component: _1cfc9689,
    name: "priority-areas-diversity-and-inclusion"
  }, {
    path: "/priority-areas/feeding-the-nation",
    component: _5ef0e0f6,
    name: "priority-areas-feeding-the-nation"
  }, {
    path: "/priority-areas/index2",
    component: _41f12c99,
    name: "priority-areas-index2"
  }, {
    path: "/divisions/sugar/golden-sugar-company",
    component: _cd666fa6,
    name: "divisions-sugar-golden-sugar-company"
  }, {
    path: "/divisions/sugar/hse",
    component: _a001c702,
    name: "divisions-sugar-hse"
  }, {
    path: "/divisions/sugar/quality-assurance",
    component: _66845a64,
    name: "divisions-sugar-quality-assurance"
  }, {
    path: "/divisions/sugar/sunti-golden-sugar-estate",
    component: _edf49900,
    name: "divisions-sugar-sunti-golden-sugar-estate"
  }, {
    path: "/divisions/sugar/sustainability",
    component: _f36e671c,
    name: "divisions-sugar-sustainability"
  }, {
    path: "/blog/:id",
    component: _e2c1db54,
    name: "blog-id"
  }, {
    path: "/press-release/:id?",
    component: _4b10226f,
    name: "press-release-id"
  }, {
    path: "/",
    component: _00c5af99,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}

import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _65505f8c = () => interopDefault(import('../pages/12-hands-campaign.vue' /* webpackChunkName: "pages/12-hands-campaign" */))
const _e14b497c = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _4e9af934 = () => interopDefault(import('../pages/abtl.vue' /* webpackChunkName: "pages/abtl" */))
const _5706a0ab = () => interopDefault(import('../pages/agm-2021-live.vue' /* webpackChunkName: "pages/agm-2021-live" */))
const _708407a9 = () => interopDefault(import('../pages/agro-allied/index.vue' /* webpackChunkName: "pages/agro-allied/index" */))
const _3dc5bcfa = () => interopDefault(import('../pages/approach.vue' /* webpackChunkName: "pages/approach" */))
const _20e91951 = () => interopDefault(import('../pages/awards.vue' /* webpackChunkName: "pages/awards" */))
const _c5c1c186 = () => interopDefault(import('../pages/awards-and-accolades.vue' /* webpackChunkName: "pages/awards-and-accolades" */))
const _59591ac0 = () => interopDefault(import('../pages/blog/index.vue' /* webpackChunkName: "pages/blog/index" */))
const _7f76d21b = () => interopDefault(import('../pages/board.vue' /* webpackChunkName: "pages/board" */))
const _1ea64dac = () => interopDefault(import('../pages/careers.vue' /* webpackChunkName: "pages/careers" */))
const _24ad6715 = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _4935346a = () => interopDefault(import('../pages/cookies-policy.vue' /* webpackChunkName: "pages/cookies-policy" */))
const _6a7a3149 = () => interopDefault(import('../pages/d-a-i.vue' /* webpackChunkName: "pages/d-a-i" */))
const _0e818727 = () => interopDefault(import('../pages/diversity-and-inclusion.vue' /* webpackChunkName: "pages/diversity-and-inclusion" */))
const _f27c8f44 = () => interopDefault(import('../pages/divisions/index.vue' /* webpackChunkName: "pages/divisions/index" */))
const _157a3427 = () => interopDefault(import('../pages/feeding-the-nation.vue' /* webpackChunkName: "pages/feeding-the-nation" */))
const _5824eae6 = () => interopDefault(import('../pages/foods/index.vue' /* webpackChunkName: "pages/foods/index" */))
const _bbbc5d72 = () => interopDefault(import('../pages/gallery.vue' /* webpackChunkName: "pages/gallery" */))
const _65dd1f8b = () => interopDefault(import('../pages/gtc.vue' /* webpackChunkName: "pages/gtc" */))
const _54a04df3 = () => interopDefault(import('../pages/history-heritage.vue' /* webpackChunkName: "pages/history-heritage" */))
const _6085b7c6 = () => interopDefault(import('../pages/investor-relations.vue' /* webpackChunkName: "pages/investor-relations" */))
const _86b80112 = () => interopDefault(import('../pages/investor-relations-old.vue' /* webpackChunkName: "pages/investor-relations-old" */))
const _31af6f70 = () => interopDefault(import('../pages/logistics.vue' /* webpackChunkName: "pages/logistics" */))
const _1153cfc8 = () => interopDefault(import('../pages/management-team.vue' /* webpackChunkName: "pages/management-team" */))
const _4fb5d151 = () => interopDefault(import('../pages/post-page.vue' /* webpackChunkName: "pages/post-page" */))
const _26abe835 = () => interopDefault(import('../pages/press-release/index.vue' /* webpackChunkName: "pages/press-release/index" */))
const _9e3c6c8a = () => interopDefault(import('../pages/priority-areas/index.vue' /* webpackChunkName: "pages/priority-areas/index" */))
const _c3f9419c = () => interopDefault(import('../pages/privacy-policy.vue' /* webpackChunkName: "pages/privacy-policy" */))
const _1ea19113 = () => interopDefault(import('../pages/purpose.vue' /* webpackChunkName: "pages/purpose" */))
const _b636a23a = () => interopDefault(import('../pages/reporting.vue' /* webpackChunkName: "pages/reporting" */))
const _7b675a09 = () => interopDefault(import('../pages/search-page.vue' /* webpackChunkName: "pages/search-page" */))
const _1ed28526 = () => interopDefault(import('../pages/subsidiaries.vue' /* webpackChunkName: "pages/subsidiaries" */))
const _2f1cef2a = () => interopDefault(import('../pages/sugar.vue' /* webpackChunkName: "pages/sugar" */))
const _7c0b2c7c = () => interopDefault(import('../pages/sustainability.vue' /* webpackChunkName: "pages/sustainability" */))
const _8965e67c = () => interopDefault(import('../pages/vision-mission.vue' /* webpackChunkName: "pages/vision-mission" */))
const _9f194dac = () => interopDefault(import('../pages/agro-allied/agro-inputs.vue' /* webpackChunkName: "pages/agro-allied/agro-inputs" */))
const _7ee72978 = () => interopDefault(import('../pages/agro-allied/oil-and-fats.vue' /* webpackChunkName: "pages/agro-allied/oil-and-fats" */))
const _6ca7abbe = () => interopDefault(import('../pages/agro-allied/Starches.vue' /* webpackChunkName: "pages/agro-allied/Starches" */))
const _2377bcf4 = () => interopDefault(import('../pages/agro-allied/Sweeteners.vue' /* webpackChunkName: "pages/agro-allied/Sweeteners" */))
const _14e4fabd = () => interopDefault(import('../pages/divisions/agro-allied.vue' /* webpackChunkName: "pages/divisions/agro-allied" */))
const _75bed5e1 = () => interopDefault(import('../pages/divisions/foods.vue' /* webpackChunkName: "pages/divisions/foods" */))
const _e8121076 = () => interopDefault(import('../pages/divisions/sugar/index.vue' /* webpackChunkName: "pages/divisions/sugar/index" */))
const _67c05ac0 = () => interopDefault(import('../pages/divisions/support-services.vue' /* webpackChunkName: "pages/divisions/support-services" */))
const _4d71a948 = () => interopDefault(import('../pages/foods/ball-foods.vue' /* webpackChunkName: "pages/foods/ball-foods" */))
const _af8926fe = () => interopDefault(import('../pages/foods/flour.vue' /* webpackChunkName: "pages/foods/flour" */))
const _23b86e38 = () => interopDefault(import('../pages/foods/impulse-foods.vue' /* webpackChunkName: "pages/foods/impulse-foods" */))
const _70054e4e = () => interopDefault(import('../pages/foods/oil-and-spread.vue' /* webpackChunkName: "pages/foods/oil-and-spread" */))
const _71847111 = () => interopDefault(import('../pages/priority-areas/backward-integration.vue' /* webpackChunkName: "pages/priority-areas/backward-integration" */))
const _24407ede = () => interopDefault(import('../pages/priority-areas/community-investment.vue' /* webpackChunkName: "pages/priority-areas/community-investment" */))
const _4c7f15db = () => interopDefault(import('../pages/priority-areas/diversity-and-inclusion.vue' /* webpackChunkName: "pages/priority-areas/diversity-and-inclusion" */))
const _3279761a = () => interopDefault(import('../pages/priority-areas/feeding-the-nation.vue' /* webpackChunkName: "pages/priority-areas/feeding-the-nation" */))
const _6b6f1707 = () => interopDefault(import('../pages/priority-areas/index2.vue' /* webpackChunkName: "pages/priority-areas/index2" */))
const _30aa1802 = () => interopDefault(import('../pages/divisions/sugar/golden-sugar-company.vue' /* webpackChunkName: "pages/divisions/sugar/golden-sugar-company" */))
const _419e6b26 = () => interopDefault(import('../pages/divisions/sugar/hse.vue' /* webpackChunkName: "pages/divisions/sugar/hse" */))
const _7cc00fd2 = () => interopDefault(import('../pages/divisions/sugar/quality-assurance.vue' /* webpackChunkName: "pages/divisions/sugar/quality-assurance" */))
const _4c241aee = () => interopDefault(import('../pages/divisions/sugar/sunti-golden-sugar-estate.vue' /* webpackChunkName: "pages/divisions/sugar/sunti-golden-sugar-estate" */))
const _5b3e8478 = () => interopDefault(import('../pages/divisions/sugar/sustainability.vue' /* webpackChunkName: "pages/divisions/sugar/sustainability" */))
const _2c2265b0 = () => interopDefault(import('../pages/blog/_id.vue' /* webpackChunkName: "pages/blog/_id" */))
const _0ddf1846 = () => interopDefault(import('../pages/press-release/_id.vue' /* webpackChunkName: "pages/press-release/_id" */))
const _a1db93f2 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/12-hands-campaign",
    component: _65505f8c,
    name: "12-hands-campaign"
  }, {
    path: "/about",
    component: _e14b497c,
    name: "about"
  }, {
    path: "/abtl",
    component: _4e9af934,
    name: "abtl"
  }, {
    path: "/agm-2021-live",
    component: _5706a0ab,
    name: "agm-2021-live"
  }, {
    path: "/agro-allied",
    component: _708407a9,
    name: "agro-allied"
  }, {
    path: "/approach",
    component: _3dc5bcfa,
    name: "approach"
  }, {
    path: "/awards",
    component: _20e91951,
    name: "awards"
  }, {
    path: "/awards-and-accolades",
    component: _c5c1c186,
    name: "awards-and-accolades"
  }, {
    path: "/blog",
    component: _59591ac0,
    name: "blog"
  }, {
    path: "/board",
    component: _7f76d21b,
    name: "board"
  }, {
    path: "/careers",
    component: _1ea64dac,
    name: "careers"
  }, {
    path: "/contact",
    component: _24ad6715,
    name: "contact"
  }, {
    path: "/cookies-policy",
    component: _4935346a,
    name: "cookies-policy"
  }, {
    path: "/d-a-i",
    component: _6a7a3149,
    name: "d-a-i"
  }, {
    path: "/diversity-and-inclusion",
    component: _0e818727,
    name: "diversity-and-inclusion"
  }, {
    path: "/divisions",
    component: _f27c8f44,
    name: "divisions"
  }, {
    path: "/feeding-the-nation",
    component: _157a3427,
    name: "feeding-the-nation"
  }, {
    path: "/foods",
    component: _5824eae6,
    name: "foods"
  }, {
    path: "/gallery",
    component: _bbbc5d72,
    name: "gallery"
  }, {
    path: "/gtc",
    component: _65dd1f8b,
    name: "gtc"
  }, {
    path: "/history-heritage",
    component: _54a04df3,
    name: "history-heritage"
  }, {
    path: "/investor-relations",
    component: _6085b7c6,
    name: "investor-relations"
  }, {
    path: "/investor-relations-old",
    component: _86b80112,
    name: "investor-relations-old"
  }, {
    path: "/logistics",
    component: _31af6f70,
    name: "logistics"
  }, {
    path: "/management-team",
    component: _1153cfc8,
    name: "management-team"
  }, {
    path: "/post-page",
    component: _4fb5d151,
    name: "post-page"
  }, {
    path: "/press-release",
    component: _26abe835,
    name: "press-release"
  }, {
    path: "/priority-areas",
    component: _9e3c6c8a,
    name: "priority-areas"
  }, {
    path: "/privacy-policy",
    component: _c3f9419c,
    name: "privacy-policy"
  }, {
    path: "/purpose",
    component: _1ea19113,
    name: "purpose"
  }, {
    path: "/reporting",
    component: _b636a23a,
    name: "reporting"
  }, {
    path: "/search-page",
    component: _7b675a09,
    name: "search-page"
  }, {
    path: "/subsidiaries",
    component: _1ed28526,
    name: "subsidiaries"
  }, {
    path: "/sugar",
    component: _2f1cef2a,
    name: "sugar"
  }, {
    path: "/sustainability",
    component: _7c0b2c7c,
    name: "sustainability"
  }, {
    path: "/vision-mission",
    component: _8965e67c,
    name: "vision-mission"
  }, {
    path: "/agro-allied/agro-inputs",
    component: _9f194dac,
    name: "agro-allied-agro-inputs"
  }, {
    path: "/agro-allied/oil-and-fats",
    component: _7ee72978,
    name: "agro-allied-oil-and-fats"
  }, {
    path: "/agro-allied/Starches",
    component: _6ca7abbe,
    name: "agro-allied-Starches"
  }, {
    path: "/agro-allied/Sweeteners",
    component: _2377bcf4,
    name: "agro-allied-Sweeteners"
  }, {
    path: "/divisions/agro-allied",
    component: _14e4fabd,
    name: "divisions-agro-allied"
  }, {
    path: "/divisions/foods",
    component: _75bed5e1,
    name: "divisions-foods"
  }, {
    path: "/divisions/sugar",
    component: _e8121076,
    name: "divisions-sugar"
  }, {
    path: "/divisions/support-services",
    component: _67c05ac0,
    name: "divisions-support-services"
  }, {
    path: "/foods/ball-foods",
    component: _4d71a948,
    name: "foods-ball-foods"
  }, {
    path: "/foods/flour",
    component: _af8926fe,
    name: "foods-flour"
  }, {
    path: "/foods/impulse-foods",
    component: _23b86e38,
    name: "foods-impulse-foods"
  }, {
    path: "/foods/oil-and-spread",
    component: _70054e4e,
    name: "foods-oil-and-spread"
  }, {
    path: "/priority-areas/backward-integration",
    component: _71847111,
    name: "priority-areas-backward-integration"
  }, {
    path: "/priority-areas/community-investment",
    component: _24407ede,
    name: "priority-areas-community-investment"
  }, {
    path: "/priority-areas/diversity-and-inclusion",
    component: _4c7f15db,
    name: "priority-areas-diversity-and-inclusion"
  }, {
    path: "/priority-areas/feeding-the-nation",
    component: _3279761a,
    name: "priority-areas-feeding-the-nation"
  }, {
    path: "/priority-areas/index2",
    component: _6b6f1707,
    name: "priority-areas-index2"
  }, {
    path: "/divisions/sugar/golden-sugar-company",
    component: _30aa1802,
    name: "divisions-sugar-golden-sugar-company"
  }, {
    path: "/divisions/sugar/hse",
    component: _419e6b26,
    name: "divisions-sugar-hse"
  }, {
    path: "/divisions/sugar/quality-assurance",
    component: _7cc00fd2,
    name: "divisions-sugar-quality-assurance"
  }, {
    path: "/divisions/sugar/sunti-golden-sugar-estate",
    component: _4c241aee,
    name: "divisions-sugar-sunti-golden-sugar-estate"
  }, {
    path: "/divisions/sugar/sustainability",
    component: _5b3e8478,
    name: "divisions-sugar-sustainability"
  }, {
    path: "/",
    component: _b337bd9a,
    name: "index"
  }, {
    path: "/blog/:id",
    component: _2c2265b0,
    name: "blog-id"
  }, {
    path: "/press-release/:id?",
    component: _0ddf1846,
    name: "press-release-id"
  }, {
    path: "/",
    component: _a1db93f2,
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

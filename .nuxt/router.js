import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _ceb34d34 = () => interopDefault(import('..\\pages\\12-hands-campaign.vue' /* webpackChunkName: "pages/12-hands-campaign" */))
const _f2a77324 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _2508f888 = () => interopDefault(import('..\\pages\\abtl.vue' /* webpackChunkName: "pages/abtl" */))
const _89fec052 = () => interopDefault(import('..\\pages\\agm-2021-live.vue' /* webpackChunkName: "pages/agm-2021-live" */))
const _49e4d720 = () => interopDefault(import('..\\pages\\agro-allied\\index.vue' /* webpackChunkName: "pages/agro-allied/index" */))
const _71d95252 = () => interopDefault(import('..\\pages\\approach.vue' /* webpackChunkName: "pages/approach" */))
const _13d493a5 = () => interopDefault(import('..\\pages\\awards.vue' /* webpackChunkName: "pages/awards" */))
const _b52812de = () => interopDefault(import('..\\pages\\awards-and-accolades.vue' /* webpackChunkName: "pages/awards-and-accolades" */))
const _54e02211 = () => interopDefault(import('..\\pages\\blog\\index.vue' /* webpackChunkName: "pages/blog/index" */))
const _76c8bd47 = () => interopDefault(import('..\\pages\\board.vue' /* webpackChunkName: "pages/board" */))
const _5b30a956 = () => interopDefault(import('..\\pages\\careers.vue' /* webpackChunkName: "pages/careers" */))
const _e19d917e = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _12a967c2 = () => interopDefault(import('..\\pages\\cookies-policy.vue' /* webpackChunkName: "pages/cookies-policy" */))
const _61cc1c75 = () => interopDefault(import('..\\pages\\d-a-i.vue' /* webpackChunkName: "pages/d-a-i" */))
const _16d1015a = () => interopDefault(import('..\\pages\\diversity-and-inclusion.vue' /* webpackChunkName: "pages/diversity-and-inclusion" */))
const _4f68ff5b = () => interopDefault(import('..\\pages\\divisions\\index.vue' /* webpackChunkName: "pages/divisions/index" */))
const _98065f0a = () => interopDefault(import('..\\pages\\feeding-the-nation.vue' /* webpackChunkName: "pages/feeding-the-nation" */))
const _30c53d0c = () => interopDefault(import('..\\pages\\foods\\index.vue' /* webpackChunkName: "pages/foods/index" */))
const _0ca5a173 = () => interopDefault(import('..\\pages\\gallery.vue' /* webpackChunkName: "pages/gallery" */))
const _6cc7e5b7 = () => interopDefault(import('..\\pages\\gtc.vue' /* webpackChunkName: "pages/gtc" */))
const _93f42172 = () => interopDefault(import('..\\pages\\history-heritage.vue' /* webpackChunkName: "pages/history-heritage" */))
const _6e3fc071 = () => interopDefault(import('..\\pages\\investor-relations.vue' /* webpackChunkName: "pages/investor-relations" */))
const _35cf5c6a = () => interopDefault(import('..\\pages\\investor-relations-old.vue' /* webpackChunkName: "pages/investor-relations-old" */))
const _800e8518 = () => interopDefault(import('..\\pages\\logistics.vue' /* webpackChunkName: "pages/logistics" */))
const _44ccfc48 = () => interopDefault(import('..\\pages\\management-team.vue' /* webpackChunkName: "pages/management-team" */))
const _2886467d = () => interopDefault(import('..\\pages\\post-page.vue' /* webpackChunkName: "pages/post-page" */))
const _53ac0064 = () => interopDefault(import('..\\pages\\press-release\\index.vue' /* webpackChunkName: "pages/press-release/index" */))
const _09338b76 = () => interopDefault(import('..\\pages\\priority-areas\\index.vue' /* webpackChunkName: "pages/priority-areas/index" */))
const _8d6d74f4 = () => interopDefault(import('..\\pages\\privacy-policy.vue' /* webpackChunkName: "pages/privacy-policy" */))
const _edb53d82 = () => interopDefault(import('..\\pages\\purpose.vue' /* webpackChunkName: "pages/purpose" */))
const _7db5240f = () => interopDefault(import('..\\pages\\reporting.vue' /* webpackChunkName: "pages/reporting" */))
const _61ef3435 = () => interopDefault(import('..\\pages\\search-page.vue' /* webpackChunkName: "pages/search-page" */))
const _0945f07a = () => interopDefault(import('..\\pages\\subsidiaries.vue' /* webpackChunkName: "pages/subsidiaries" */))
const _407918d2 = () => interopDefault(import('..\\pages\\sugar.vue' /* webpackChunkName: "pages/sugar" */))
const _457f5fd4 = () => interopDefault(import('..\\pages\\sustainability.vue' /* webpackChunkName: "pages/sustainability" */))
const _52da19d4 = () => interopDefault(import('..\\pages\\vision-mission.vue' /* webpackChunkName: "pages/vision-mission" */))
const _579bf4b1 = () => interopDefault(import('..\\pages\\agro-allied\\agro-inputs.vue' /* webpackChunkName: "pages/agro-allied/agro-inputs" */))
const _03117ec6 = () => interopDefault(import('..\\pages\\agro-allied\\oil-and-fats.vue' /* webpackChunkName: "pages/agro-allied/oil-and-fats" */))
const _497d1597 = () => interopDefault(import('..\\pages\\agro-allied\\Starches.vue' /* webpackChunkName: "pages/agro-allied/Starches" */))
const _29330dc2 = () => interopDefault(import('..\\pages\\agro-allied\\Sweeteners.vue' /* webpackChunkName: "pages/agro-allied/Sweeteners" */))
const _7fef600c = () => interopDefault(import('..\\pages\\divisions\\agro-allied.vue' /* webpackChunkName: "pages/divisions/agro-allied" */))
const _3e661cde = () => interopDefault(import('..\\pages\\divisions\\foods.vue' /* webpackChunkName: "pages/divisions/foods" */))
const _48bd5de3 = () => interopDefault(import('..\\pages\\divisions\\sugar\\index.vue' /* webpackChunkName: "pages/divisions/sugar/index" */))
const _a2fc78ba = () => interopDefault(import('..\\pages\\divisions\\support-services.vue' /* webpackChunkName: "pages/divisions/support-services" */))
const _fbb39f86 = () => interopDefault(import('..\\pages\\foods\\ball-foods.vue' /* webpackChunkName: "pages/foods/ball-foods" */))
const _05131f00 = () => interopDefault(import('..\\pages\\foods\\flour.vue' /* webpackChunkName: "pages/foods/flour" */))
const _469d9c92 = () => interopDefault(import('..\\pages\\foods\\impulse-foods.vue' /* webpackChunkName: "pages/foods/impulse-foods" */))
const _2e1d053a = () => interopDefault(import('..\\pages\\foods\\oil-and-spread.vue' /* webpackChunkName: "pages/foods/oil-and-spread" */))
const _0ae5a1f6 = () => interopDefault(import('..\\pages\\priority-areas\\backward-integration.vue' /* webpackChunkName: "pages/priority-areas/backward-integration" */))
const _84bca07a = () => interopDefault(import('..\\pages\\priority-areas\\community-investment.vue' /* webpackChunkName: "pages/priority-areas/community-investment" */))
const _41b7fed6 = () => interopDefault(import('..\\pages\\priority-areas\\diversity-and-inclusion.vue' /* webpackChunkName: "pages/priority-areas/diversity-and-inclusion" */))
const _e7d529d0 = () => interopDefault(import('..\\pages\\priority-areas\\feeding-the-nation.vue' /* webpackChunkName: "pages/priority-areas/feeding-the-nation" */))
const _1d558cac = () => interopDefault(import('..\\pages\\priority-areas\\index2.vue' /* webpackChunkName: "pages/priority-areas/index2" */))
const _58b863be = () => interopDefault(import('..\\pages\\divisions\\sugar\\golden-sugar-company.vue' /* webpackChunkName: "pages/divisions/sugar/golden-sugar-company" */))
const _9013bfea = () => interopDefault(import('..\\pages\\divisions\\sugar\\hse.vue' /* webpackChunkName: "pages/divisions/sugar/hse" */))
const _687838f0 = () => interopDefault(import('..\\pages\\divisions\\sugar\\quality-assurance.vue' /* webpackChunkName: "pages/divisions/sugar/quality-assurance" */))
const _55a8460c = () => interopDefault(import('..\\pages\\divisions\\sugar\\sunti-golden-sugar-estate.vue' /* webpackChunkName: "pages/divisions/sugar/sunti-golden-sugar-estate" */))
const _0fef4d34 = () => interopDefault(import('..\\pages\\divisions\\sugar\\sustainability.vue' /* webpackChunkName: "pages/divisions/sugar/sustainability" */))
const _b337bd9a = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _00fd168e = () => interopDefault(import('..\\pages\\blog\\_id.vue' /* webpackChunkName: "pages/blog/_id" */))
const _cb726868 = () => interopDefault(import('..\\pages\\press-release\\_id.vue' /* webpackChunkName: "pages/press-release/_id" */))

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
    component: _ceb34d34,
    name: "12-hands-campaign"
  }, {
    path: "/about",
    component: _f2a77324,
    name: "about"
  }, {
    path: "/abtl",
    component: _2508f888,
    name: "abtl"
  }, {
    path: "/agm-2021-live",
    component: _89fec052,
    name: "agm-2021-live"
  }, {
    path: "/agro-allied",
    component: _49e4d720,
    name: "agro-allied"
  }, {
    path: "/approach",
    component: _71d95252,
    name: "approach"
  }, {
    path: "/awards",
    component: _13d493a5,
    name: "awards"
  }, {
    path: "/awards-and-accolades",
    component: _b52812de,
    name: "awards-and-accolades"
  }, {
    path: "/blog",
    component: _54e02211,
    name: "blog"
  }, {
    path: "/board",
    component: _76c8bd47,
    name: "board"
  }, {
    path: "/careers",
    component: _5b30a956,
    name: "careers"
  }, {
    path: "/contact",
    component: _e19d917e,
    name: "contact"
  }, {
    path: "/cookies-policy",
    component: _12a967c2,
    name: "cookies-policy"
  }, {
    path: "/d-a-i",
    component: _61cc1c75,
    name: "d-a-i"
  }, {
    path: "/diversity-and-inclusion",
    component: _16d1015a,
    name: "diversity-and-inclusion"
  }, {
    path: "/divisions",
    component: _4f68ff5b,
    name: "divisions"
  }, {
    path: "/feeding-the-nation",
    component: _98065f0a,
    name: "feeding-the-nation"
  }, {
    path: "/foods",
    component: _30c53d0c,
    name: "foods"
  }, {
    path: "/gallery",
    component: _0ca5a173,
    name: "gallery"
  }, {
    path: "/gtc",
    component: _6cc7e5b7,
    name: "gtc"
  }, {
    path: "/history-heritage",
    component: _93f42172,
    name: "history-heritage"
  }, {
    path: "/investor-relations",
    component: _6e3fc071,
    name: "investor-relations"
  }, {
    path: "/investor-relations-old",
    component: _35cf5c6a,
    name: "investor-relations-old"
  }, {
    path: "/logistics",
    component: _800e8518,
    name: "logistics"
  }, {
    path: "/management-team",
    component: _44ccfc48,
    name: "management-team"
  }, {
    path: "/post-page",
    component: _2886467d,
    name: "post-page"
  }, {
    path: "/press-release",
    component: _53ac0064,
    name: "press-release"
  }, {
    path: "/priority-areas",
    component: _09338b76,
    name: "priority-areas"
  }, {
    path: "/privacy-policy",
    component: _8d6d74f4,
    name: "privacy-policy"
  }, {
    path: "/purpose",
    component: _edb53d82,
    name: "purpose"
  }, {
    path: "/reporting",
    component: _7db5240f,
    name: "reporting"
  }, {
    path: "/search-page",
    component: _61ef3435,
    name: "search-page"
  }, {
    path: "/subsidiaries",
    component: _0945f07a,
    name: "subsidiaries"
  }, {
    path: "/sugar",
    component: _407918d2,
    name: "sugar"
  }, {
    path: "/sustainability",
    component: _457f5fd4,
    name: "sustainability"
  }, {
    path: "/vision-mission",
    component: _52da19d4,
    name: "vision-mission"
  }, {
    path: "/agro-allied/agro-inputs",
    component: _579bf4b1,
    name: "agro-allied-agro-inputs"
  }, {
    path: "/agro-allied/oil-and-fats",
    component: _03117ec6,
    name: "agro-allied-oil-and-fats"
  }, {
    path: "/agro-allied/Starches",
    component: _497d1597,
    name: "agro-allied-Starches"
  }, {
    path: "/agro-allied/Sweeteners",
    component: _29330dc2,
    name: "agro-allied-Sweeteners"
  }, {
    path: "/divisions/agro-allied",
    component: _7fef600c,
    name: "divisions-agro-allied"
  }, {
    path: "/divisions/foods",
    component: _3e661cde,
    name: "divisions-foods"
  }, {
    path: "/divisions/sugar",
    component: _48bd5de3,
    name: "divisions-sugar"
  }, {
    path: "/divisions/support-services",
    component: _a2fc78ba,
    name: "divisions-support-services"
  }, {
    path: "/foods/ball-foods",
    component: _fbb39f86,
    name: "foods-ball-foods"
  }, {
    path: "/foods/flour",
    component: _05131f00,
    name: "foods-flour"
  }, {
    path: "/foods/impulse-foods",
    component: _469d9c92,
    name: "foods-impulse-foods"
  }, {
    path: "/foods/oil-and-spread",
    component: _2e1d053a,
    name: "foods-oil-and-spread"
  }, {
    path: "/priority-areas/backward-integration",
    component: _0ae5a1f6,
    name: "priority-areas-backward-integration"
  }, {
    path: "/priority-areas/community-investment",
    component: _84bca07a,
    name: "priority-areas-community-investment"
  }, {
    path: "/priority-areas/diversity-and-inclusion",
    component: _41b7fed6,
    name: "priority-areas-diversity-and-inclusion"
  }, {
    path: "/priority-areas/feeding-the-nation",
    component: _e7d529d0,
    name: "priority-areas-feeding-the-nation"
  }, {
    path: "/priority-areas/index2",
    component: _1d558cac,
    name: "priority-areas-index2"
  }, {
    path: "/divisions/sugar/golden-sugar-company",
    component: _58b863be,
    name: "divisions-sugar-golden-sugar-company"
  }, {
    path: "/divisions/sugar/hse",
    component: _9013bfea,
    name: "divisions-sugar-hse"
  }, {
    path: "/divisions/sugar/quality-assurance",
    component: _687838f0,
    name: "divisions-sugar-quality-assurance"
  }, {
    path: "/divisions/sugar/sunti-golden-sugar-estate",
    component: _55a8460c,
    name: "divisions-sugar-sunti-golden-sugar-estate"
  }, {
    path: "/divisions/sugar/sustainability",
    component: _0fef4d34,
    name: "divisions-sugar-sustainability"
  }, {
    path: "/",
    component: _b337bd9a,
    name: "index"
  }, {
    path: "/blog/:id",
    component: _00fd168e,
    name: "blog-id"
  }, {
    path: "/press-release/:id?",
    component: _cb726868,
    name: "press-release-id"
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

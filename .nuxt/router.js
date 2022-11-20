import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _d68d9082 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _9c3fcdd2 = () => interopDefault(import('..\\pages\\abtl.vue' /* webpackChunkName: "pages/abtl" */))
const _5333b028 = () => interopDefault(import('..\\pages\\agm-2021-live.vue' /* webpackChunkName: "pages/agm-2021-live" */))
const _427d0ebf = () => interopDefault(import('..\\pages\\agro-allied\\index.vue' /* webpackChunkName: "pages/agro-allied/index" */))
const _498cd034 = () => interopDefault(import('..\\pages\\approach.vue' /* webpackChunkName: "pages/approach" */))
const _71346718 = () => interopDefault(import('..\\pages\\awards.vue' /* webpackChunkName: "pages/awards" */))
const _2233cdc0 = () => interopDefault(import('..\\pages\\awards-and-accolades.vue' /* webpackChunkName: "pages/awards-and-accolades" */))
const _248d12a2 = () => interopDefault(import('..\\pages\\blog\\index.vue' /* webpackChunkName: "pages/blog/index" */))
const _f654a2d0 = () => interopDefault(import('..\\pages\\board.vue' /* webpackChunkName: "pages/board" */))
const _19c68a67 = () => interopDefault(import('..\\pages\\careers.vue' /* webpackChunkName: "pages/careers" */))
const _4dc71852 = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _64da45ee = () => interopDefault(import('..\\pages\\cookies-policy.vue' /* webpackChunkName: "pages/cookies-policy" */))
const _6fd90dc6 = () => interopDefault(import('..\\pages\\d-a-i.vue' /* webpackChunkName: "pages/d-a-i" */))
const _ded9c338 = () => interopDefault(import('..\\pages\\diversity-and-inclusion.vue' /* webpackChunkName: "pages/diversity-and-inclusion" */))
const _247e7d2c = () => interopDefault(import('..\\pages\\divisions\\index.vue' /* webpackChunkName: "pages/divisions/index" */))
const _1b6c4aca = () => interopDefault(import('..\\pages\\feeding-the-nation.vue' /* webpackChunkName: "pages/feeding-the-nation" */))
const _56b65e9b = () => interopDefault(import('..\\pages\\foods\\index.vue' /* webpackChunkName: "pages/foods/index" */))
const _6988faf8 = () => interopDefault(import('..\\pages\\gallery.vue' /* webpackChunkName: "pages/gallery" */))
const _7152f748 = () => interopDefault(import('..\\pages\\gtc.vue' /* webpackChunkName: "pages/gtc" */))
const _545db156 = () => interopDefault(import('..\\pages\\history-heritage.vue' /* webpackChunkName: "pages/history-heritage" */))
const _54a18a80 = () => interopDefault(import('..\\pages\\investor-relations.vue' /* webpackChunkName: "pages/investor-relations" */))
const _8ed7e6cc = () => interopDefault(import('..\\pages\\investor-relations-old.vue' /* webpackChunkName: "pages/investor-relations-old" */))
const _309a9e45 = () => interopDefault(import('..\\pages\\logistics.vue' /* webpackChunkName: "pages/logistics" */))
const _c705874e = () => interopDefault(import('..\\pages\\management-team.vue' /* webpackChunkName: "pages/management-team" */))
const _cdafb164 = () => interopDefault(import('..\\pages\\post-page.vue' /* webpackChunkName: "pages/post-page" */))
const _c5b3ba1a = () => interopDefault(import('..\\pages\\press-release\\index.vue' /* webpackChunkName: "pages/press-release/index" */))
const _22048a72 = () => interopDefault(import('..\\pages\\priority-areas\\index.vue' /* webpackChunkName: "pages/priority-areas/index" */))
const _27783f55 = () => interopDefault(import('..\\pages\\privacy-policy.vue' /* webpackChunkName: "pages/privacy-policy" */))
const _47bb4250 = () => interopDefault(import('..\\pages\\purpose.vue' /* webpackChunkName: "pages/purpose" */))
const _2351f640 = () => interopDefault(import('..\\pages\\reporting.vue' /* webpackChunkName: "pages/reporting" */))
const _319c24c6 = () => interopDefault(import('..\\pages\\search-page.vue' /* webpackChunkName: "pages/search-page" */))
const _2f371209 = () => interopDefault(import('..\\pages\\subsidiaries.vue' /* webpackChunkName: "pages/subsidiaries" */))
const _245f3630 = () => interopDefault(import('..\\pages\\sugar.vue' /* webpackChunkName: "pages/sugar" */))
const _4b6f49e5 = () => interopDefault(import('..\\pages\\sustainability.vue' /* webpackChunkName: "pages/sustainability" */))
const _44c1ece5 = () => interopDefault(import('..\\pages\\vision-mission.vue' /* webpackChunkName: "pages/vision-mission" */))
const _3b1437c0 = () => interopDefault(import('..\\pages\\agro-allied\\agro-inputs.vue' /* webpackChunkName: "pages/agro-allied/agro-inputs" */))
const _ebf14124 = () => interopDefault(import('..\\pages\\agro-allied\\oil-and-fats.vue' /* webpackChunkName: "pages/agro-allied/oil-and-fats" */))
const _2f4744e8 = () => interopDefault(import('..\\pages\\agro-allied\\Starches.vue' /* webpackChunkName: "pages/agro-allied/Starches" */))
const _f13bcfa0 = () => interopDefault(import('..\\pages\\agro-allied\\Sweeteners.vue' /* webpackChunkName: "pages/agro-allied/Sweeteners" */))
const _d8f7ea6e = () => interopDefault(import('..\\pages\\divisions\\agro-allied.vue' /* webpackChunkName: "pages/divisions/agro-allied" */))
const _46844226 = () => interopDefault(import('..\\pages\\divisions\\foods.vue' /* webpackChunkName: "pages/divisions/foods" */))
const _368e0618 = () => interopDefault(import('..\\pages\\divisions\\sugar\\index.vue' /* webpackChunkName: "pages/divisions/sugar/index" */))
const _d2f51b98 = () => interopDefault(import('..\\pages\\divisions\\support-services.vue' /* webpackChunkName: "pages/divisions/support-services" */))
const _a2729fe4 = () => interopDefault(import('..\\pages\\foods\\ball-foods.vue' /* webpackChunkName: "pages/foods/ball-foods" */))
const _2b04408f = () => interopDefault(import('..\\pages\\foods\\flour.vue' /* webpackChunkName: "pages/foods/flour" */))
const _262b5446 = () => interopDefault(import('..\\pages\\foods\\impulse-foods.vue' /* webpackChunkName: "pages/foods/impulse-foods" */))
const _13e7348b = () => interopDefault(import('..\\pages\\foods\\oil-and-spread.vue' /* webpackChunkName: "pages/foods/oil-and-spread" */))
const _828272f6 = () => interopDefault(import('..\\pages\\priority-areas\\backward-integration.vue' /* webpackChunkName: "pages/priority-areas/backward-integration" */))
const _717ad452 = () => interopDefault(import('..\\pages\\priority-areas\\community-investment.vue' /* webpackChunkName: "pages/priority-areas/community-investment" */))
const _63dd5be7 = () => interopDefault(import('..\\pages\\priority-areas\\diversity-and-inclusion.vue' /* webpackChunkName: "pages/priority-areas/diversity-and-inclusion" */))
const _0dbc6767 = () => interopDefault(import('..\\pages\\priority-areas\\feeding-the-nation.vue' /* webpackChunkName: "pages/priority-areas/feeding-the-nation" */))
const _1e5d710a = () => interopDefault(import('..\\pages\\priority-areas\\index2.vue' /* webpackChunkName: "pages/priority-areas/index2" */))
const _1473ea20 = () => interopDefault(import('..\\pages\\divisions\\sugar\\golden-sugar-company.vue' /* webpackChunkName: "pages/divisions/sugar/golden-sugar-company" */))
const _c47f6148 = () => interopDefault(import('..\\pages\\divisions\\sugar\\hse.vue' /* webpackChunkName: "pages/divisions/sugar/hse" */))
const _1bb0c681 = () => interopDefault(import('..\\pages\\divisions\\sugar\\quality-assurance.vue' /* webpackChunkName: "pages/divisions/sugar/quality-assurance" */))
const _06729ac6 = () => interopDefault(import('..\\pages\\divisions\\sugar\\sunti-golden-sugar-estate.vue' /* webpackChunkName: "pages/divisions/sugar/sunti-golden-sugar-estate" */))
const _7c901d75 = () => interopDefault(import('..\\pages\\divisions\\sugar\\sustainability.vue' /* webpackChunkName: "pages/divisions/sugar/sustainability" */))
const _7023558a = () => interopDefault(import('..\\pages\\blog\\_id.vue' /* webpackChunkName: "pages/blog/_id" */))
const _01b6461b = () => interopDefault(import('..\\pages\\press-release\\_id.vue' /* webpackChunkName: "pages/press-release/_id" */))
const _971ddaf8 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _d68d9082,
    name: "about"
  }, {
    path: "/abtl",
    component: _9c3fcdd2,
    name: "abtl"
  }, {
    path: "/agm-2021-live",
    component: _5333b028,
    name: "agm-2021-live"
  }, {
    path: "/agro-allied",
    component: _427d0ebf,
    name: "agro-allied"
  }, {
    path: "/approach",
    component: _498cd034,
    name: "approach"
  }, {
    path: "/awards",
    component: _71346718,
    name: "awards"
  }, {
    path: "/awards-and-accolades",
    component: _2233cdc0,
    name: "awards-and-accolades"
  }, {
    path: "/blog",
    component: _248d12a2,
    name: "blog"
  }, {
    path: "/board",
    component: _f654a2d0,
    name: "board"
  }, {
    path: "/careers",
    component: _19c68a67,
    name: "careers"
  }, {
    path: "/contact",
    component: _4dc71852,
    name: "contact"
  }, {
    path: "/cookies-policy",
    component: _64da45ee,
    name: "cookies-policy"
  }, {
    path: "/d-a-i",
    component: _6fd90dc6,
    name: "d-a-i"
  }, {
    path: "/diversity-and-inclusion",
    component: _ded9c338,
    name: "diversity-and-inclusion"
  }, {
    path: "/divisions",
    component: _247e7d2c,
    name: "divisions"
  }, {
    path: "/feeding-the-nation",
    component: _1b6c4aca,
    name: "feeding-the-nation"
  }, {
    path: "/foods",
    component: _56b65e9b,
    name: "foods"
  }, {
    path: "/gallery",
    component: _6988faf8,
    name: "gallery"
  }, {
    path: "/gtc",
    component: _7152f748,
    name: "gtc"
  }, {
    path: "/history-heritage",
    component: _545db156,
    name: "history-heritage"
  }, {
    path: "/investor-relations",
    component: _54a18a80,
    name: "investor-relations"
  }, {
    path: "/investor-relations-old",
    component: _8ed7e6cc,
    name: "investor-relations-old"
  }, {
    path: "/logistics",
    component: _309a9e45,
    name: "logistics"
  }, {
    path: "/management-team",
    component: _c705874e,
    name: "management-team"
  }, {
    path: "/post-page",
    component: _cdafb164,
    name: "post-page"
  }, {
    path: "/press-release",
    component: _c5b3ba1a,
    name: "press-release"
  }, {
    path: "/priority-areas",
    component: _22048a72,
    name: "priority-areas"
  }, {
    path: "/privacy-policy",
    component: _27783f55,
    name: "privacy-policy"
  }, {
    path: "/purpose",
    component: _47bb4250,
    name: "purpose"
  }, {
    path: "/reporting",
    component: _2351f640,
    name: "reporting"
  }, {
    path: "/search-page",
    component: _319c24c6,
    name: "search-page"
  }, {
    path: "/subsidiaries",
    component: _2f371209,
    name: "subsidiaries"
  }, {
    path: "/sugar",
    component: _245f3630,
    name: "sugar"
  }, {
    path: "/sustainability",
    component: _4b6f49e5,
    name: "sustainability"
  }, {
    path: "/vision-mission",
    component: _44c1ece5,
    name: "vision-mission"
  }, {
    path: "/agro-allied/agro-inputs",
    component: _3b1437c0,
    name: "agro-allied-agro-inputs"
  }, {
    path: "/agro-allied/oil-and-fats",
    component: _ebf14124,
    name: "agro-allied-oil-and-fats"
  }, {
    path: "/agro-allied/Starches",
    component: _2f4744e8,
    name: "agro-allied-Starches"
  }, {
    path: "/agro-allied/Sweeteners",
    component: _f13bcfa0,
    name: "agro-allied-Sweeteners"
  }, {
    path: "/divisions/agro-allied",
    component: _d8f7ea6e,
    name: "divisions-agro-allied"
  }, {
    path: "/divisions/foods",
    component: _46844226,
    name: "divisions-foods"
  }, {
    path: "/divisions/sugar",
    component: _368e0618,
    name: "divisions-sugar"
  }, {
    path: "/divisions/support-services",
    component: _d2f51b98,
    name: "divisions-support-services"
  }, {
    path: "/foods/ball-foods",
    component: _a2729fe4,
    name: "foods-ball-foods"
  }, {
    path: "/foods/flour",
    component: _2b04408f,
    name: "foods-flour"
  }, {
    path: "/foods/impulse-foods",
    component: _262b5446,
    name: "foods-impulse-foods"
  }, {
    path: "/foods/oil-and-spread",
    component: _13e7348b,
    name: "foods-oil-and-spread"
  }, {
    path: "/priority-areas/backward-integration",
    component: _828272f6,
    name: "priority-areas-backward-integration"
  }, {
    path: "/priority-areas/community-investment",
    component: _717ad452,
    name: "priority-areas-community-investment"
  }, {
    path: "/priority-areas/diversity-and-inclusion",
    component: _63dd5be7,
    name: "priority-areas-diversity-and-inclusion"
  }, {
    path: "/priority-areas/feeding-the-nation",
    component: _0dbc6767,
    name: "priority-areas-feeding-the-nation"
  }, {
    path: "/priority-areas/index2",
    component: _1e5d710a,
    name: "priority-areas-index2"
  }, {
    path: "/divisions/sugar/golden-sugar-company",
    component: _1473ea20,
    name: "divisions-sugar-golden-sugar-company"
  }, {
    path: "/divisions/sugar/hse",
    component: _c47f6148,
    name: "divisions-sugar-hse"
  }, {
    path: "/divisions/sugar/quality-assurance",
    component: _1bb0c681,
    name: "divisions-sugar-quality-assurance"
  }, {
    path: "/divisions/sugar/sunti-golden-sugar-estate",
    component: _06729ac6,
    name: "divisions-sugar-sunti-golden-sugar-estate"
  }, {
    path: "/divisions/sugar/sustainability",
    component: _7c901d75,
    name: "divisions-sugar-sustainability"
  }, {
    path: "/blog/:id",
    component: _7023558a,
    name: "blog-id"
  }, {
    path: "/press-release/:id?",
    component: _01b6461b,
    name: "press-release-id"
  }, {
    path: "/",
    component: _971ddaf8,
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

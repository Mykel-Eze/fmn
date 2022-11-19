export { default as AboutPageSubNav } from '../..\\components\\AboutPageSubNav.vue'
export { default as AgroAlliedPageSubNav } from '../..\\components\\AgroAlliedPageSubNav.vue'
export { default as BrandsPageSubNav } from '../..\\components\\BrandsPageSubNav.vue'
export { default as CareersModals } from '../..\\components\\CareersModals.vue'
export { default as CookiesPolicy } from '../..\\components\\CookiesPolicy.vue'
export { default as Default } from '../..\\components\\Default.vue'
export { default as DivisionsPageSubNav } from '../..\\components\\DivisionsPageSubNav.vue'
export { default as ExploreBrands } from '../..\\components\\ExploreBrands.vue'
export { default as Footer } from '../..\\components\\Footer.vue'
export { default as GalleryModals } from '../..\\components\\GalleryModals.vue'
export { default as ImageSliderBanner } from '../..\\components\\ImageSliderBanner.vue'
export { default as LandingSection } from '../..\\components\\LandingSection.vue'
export { default as LandingSection2 } from '../..\\components\\LandingSection2.vue'
export { default as LogisticsPageSubNav } from '../..\\components\\LogisticsPageSubNav.vue'
export { default as Navbar } from '../..\\components\\Navbar.vue'
export { default as PageBanner } from '../..\\components\\PageBanner.vue'
export { default as PageVideoBanner } from '../..\\components\\PageVideoBanner.vue'
export { default as PriorityPageSubNav } from '../..\\components\\PriorityPageSubNav.vue'
export { default as PromotionalBanner } from '../..\\components\\PromotionalBanner.vue'
export { default as SearchItem } from '../..\\components\\SearchItem.vue'
export { default as SendMeUpdatesModal } from '../..\\components\\SendMeUpdatesModal.vue'
export { default as VideoBanner } from '../..\\components\\VideoBanner.vue'
export { default as BlogOne } from '../..\\components\\blog\\BlogOne.vue'
export { default as BlogTwo } from '../..\\components\\blog\\BlogTwo.vue'
export { default as PressOne } from '../..\\components\\press-release\\PressOne.vue'
export { default as PressTwo } from '../..\\components\\press-release\\PressTwo.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}

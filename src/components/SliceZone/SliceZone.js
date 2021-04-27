import React from 'react'
import { CTASplitWithScreenshot } from '../_slices/CTASplitWithScreenshot/CTASplitWithScreenshot'
import { CTASimpleCentered } from '../_slices/CTASimpleCentered/CTASimpleCentered'
import { CustomerLogos } from '../_slices/CustomerLogos/CustomerLogos'
import { Features } from '../_slices/Features/Features'
import { FeaturedBlogList } from '../_slices/FeaturedBlogList/FeaturedBlogList'
import { Testimonial } from '../_slices/Testimonial/Testimonial'
import { NewsletterForm } from '../_article/_slices/Newsletter/Newsletter'

export const SliceZone = ({ sliceZone }) => {
  const sliceComponents = {
    customer_logos: CustomerLogos,
    feature_grid: Features,
    call_to_action_split: CTASplitWithScreenshot,
    call_to_action_centered: CTASimpleCentered,
    testimonial: Testimonial,
    newsletter: NewsletterForm,
    featured_blog_list: FeaturedBlogList,
  }

  const sliceZoneContent = sliceZone.map((slice, index) => {
    const SliceComponent = sliceComponents[slice.slice_type]
    if (SliceComponent) {
      //Slices contain a static section (primary), and a repeating group (items) if available
      return <SliceComponent key={`slice-${index}`} {...slice} />
    }
    return null
  })

  return <div>{sliceZoneContent}</div>
}

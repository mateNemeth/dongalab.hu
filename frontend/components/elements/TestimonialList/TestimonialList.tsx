import { TestimonialListElement } from 'model/sections'
import Testimonials from '@/components/elements/Testimonials/Testimonials'

const TestimonialList = ({ content }: { content: TestimonialListElement }): JSX.Element => {
  return (
    <>
      <h3 className="my-8 mx-auto text-center text-xl font-bold">{content.title}</h3>
      <Testimonials testimonials={content.testimonials} />
    </>
  )
}

export default TestimonialList

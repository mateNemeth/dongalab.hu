import { HeroElement } from 'model/sections'
import Image from 'next/image'

const Hero = ({ content }: { content: HeroElement }): JSX.Element => {
  return (
    <div
      className="bg-fixed bg-center bg-no-repeat bg-cover h-screen opacity-75 text-cream-hero flex flex-col justify-center"
      style={{ backgroundImage: `url(${content.background.formats.large.url})` }}
    >
      <div className="bg-black bg-opacity-75 flex justify-center w-full align-bottom">
        <Image src={content.logo.url} alt={content.logo.alternativeText} width={750} height={205} layout="intrinsic" />
      </div>
      <h3 className="text-2xl md:text-4xl bg-black bg-opacity-75 text-center font-annie pb-4">{content.text}</h3>
    </div>
  )
}

export default Hero

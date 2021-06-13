import SectionComponent from '@/components/layout/SectionComponent/SectionComponent'
import { Section } from 'model/sections'
import { GetStaticProps } from 'next'
import { getData } from 'utils/api'

export default function Home({ sections }: { sections: Section[] }): JSX.Element {
  return (
    <main>
      {sections.map((section) => (
        <SectionComponent key={section.id} section={section} />
      ))}
    </main>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const sections = await getData<Section[]>('/sections')
  return {
    props: {
      sections,
    },
  }
}

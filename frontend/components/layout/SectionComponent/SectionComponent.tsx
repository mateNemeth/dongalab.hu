import ArticleList from '@/components/elements/ArticleList/ArticleList'
import Hero from '@/components/elements/Hero/Hero'
import Parallax from '@/components/elements/Parallax/Parallax'
import { Section, SectionContent } from 'model/sections'

const SectionComponent = ({ section }: { section: Section }): JSX.Element => {
  const renderContent = (content: SectionContent) => {
    console.log(content)
    switch (content.__component) {
      case 'elements.hero':
        return <Hero key={content.__component + content.id} content={content} />
      case 'elements.article-list':
        return <ArticleList key={content.__component + content.id} content={content} />
      case 'elements.parallax':
        return <Parallax key={content.__component + content.id} content={content} />
    }
  }
  return <section id={section.sectionId}>{section.content.map((content) => renderContent(content))}</section>
}

export default SectionComponent

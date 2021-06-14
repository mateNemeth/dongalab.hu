import ArticleList from '@/components/elements/ArticleList/ArticleList'
import Hero from '@/components/elements/Hero/Hero'
import { Section, SectionContent } from 'model/sections'

const SectionComponent = ({ section }: { section: Section }): JSX.Element => {
  const renderContent = (content: SectionContent) => {
    switch (content.__component) {
      case 'elements.hero':
        return <Hero key={content.id} content={content} />
      case 'elements.article-list':
        return <ArticleList key={content.id} content={content} />
    }
  }
  return <section id={section.sectionId}>{section.content.map((content) => renderContent(content))}</section>
}

export default SectionComponent

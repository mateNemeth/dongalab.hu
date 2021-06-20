import ArticleList from '@/components/elements/ArticleList/ArticleList';
import Hero from '@/components/elements/Hero/Hero';
import Parallax from '@/components/elements/Parallax/Parallax';
import SectionTitle from '@/components/elements/SectionTitle/SectionTitle';
import SimpleText from '@/components/elements/SimpleText/SimpleText';
import TestimonialList from '@/components/elements/TestimonialList/TestimonialList';
import IconLink from '@/components/elements/IconLink/IconLink';
import { Section, SectionContent } from 'model/sections';

const SectionComponent = ({ section }: { section: Section }): JSX.Element => {
  const renderContent = (content: SectionContent) => {
    switch (content.__component) {
      case 'elements.hero':
        return <Hero key={content.__component + content.id} content={content} />;
      case 'elements.article-list':
        return <ArticleList key={content.__component + content.id} content={content} />;
      case 'elements.parallax':
        return <Parallax key={content.__component + content.id} content={content} />;
      case 'elements.simple-text':
        return <SimpleText key={content.__component + content.id} content={content} />;
      case 'elements.testimonial-list':
        return <TestimonialList key={content.__component + content.id} content={content} />;
      case 'elements.iconlink':
        return <IconLink key={content.__component + content.id} content={content} />;
      default:
        return null;
    }
  };
  return (
    <section id={section.sectionId}>
      {section.title ? <SectionTitle title={section.title} /> : null}
      {section.content.map((content) => renderContent(content))}
    </section>
  );
};

export default SectionComponent;

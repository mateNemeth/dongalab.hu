import Navbar from '@/components/layout/Navbar/Navbar';
import SectionComponent from '@/components/layout/SectionComponent/SectionComponent';
import ContactForm from '@/components/elements/ContactForm/ContactForm';
import Footer from '@/components/layout/Footer/Footer';
import { ImageProps, GlobalProps } from 'model/global';
import { NavLinkProps } from 'model/navbar';
import { Section } from 'model/sections';
import { GetStaticProps } from 'next';
import { getData } from 'utils/api';
import { Toaster } from 'react-hot-toast';

export default function Home({ sections, logo }: { sections: Section[]; logo: ImageProps }): JSX.Element {
  const navData: NavLinkProps[] = sections.map((section) => {
    const { sectionId, name, id, order } = section;

    return { sectionId, name, id, order };
  });
  return (
    <>
      <Navbar navData={{ navlinks: navData, logo }} />
      <main>
        {sections.map((section) => (
          <SectionComponent key={section.id} section={section} />
        ))}
        <ContactForm />
      </main>
      <Footer />
      <Toaster position="bottom-right" />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const sections = await getData<Section[]>('/sections');
  const global = await getData<GlobalProps>('/global');
  return {
    props: {
      sections,
      logo: global.logo,
    },
  };
};

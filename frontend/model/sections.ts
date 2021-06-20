import { ImageProps } from './global';

export interface IconLinkElement {
  id: number;
  iconcode: string;
  text: string;
  url: string;
  __component: 'elements.iconlink';
}

export interface TestimonialElement {
  id: number;
  quote: string;
  quote_from: string;
}

export interface TestimonialListElement {
  id: number;
  title: string;
  testimonials: TestimonialElement[];
  __component: 'elements.testimonial-list';
}

export interface SimpleTextElement {
  id: number;
  text: string;
  __component: 'elements.simple-text';
}

export interface ParallaxElement {
  id: number;
  image: ImageProps;
  __component: 'elements.parallax';
}

export interface HeroElement {
  id: number;
  text: string;
  logo: ImageProps;
  background: ImageProps;
  __component: 'elements.hero';
}

export interface ArticleElement {
  id: number;
  title: string;
  summary: string;
  article_image: ImageProps;
  body: string;
}

export interface ArticleListElement {
  id: number;
  title: string;
  articles: ArticleElement[];
  __component: 'elements.article-list';
}

export type SectionContent =
  | HeroElement
  | ArticleListElement
  | ParallaxElement
  | SimpleTextElement
  | TestimonialListElement
  | IconLinkElement;

export interface Section {
  id: number;
  created_at: string;
  published_at: string;
  updated_at: string;
  name: string;
  sectionId: string;
  order: number;
  content: SectionContent[];
  title?: string;
}

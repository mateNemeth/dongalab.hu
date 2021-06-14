import { ImageProps } from './global'

export interface HeroElement {
  id: number
  text: string
  logo: ImageProps
  background: ImageProps
  __component: 'elements.hero'
}

export interface ArticleElement {
  id: number
  title: string
  summary: string
  article_image: ImageProps
  body: string
}

export interface ArticleListElement {
  id: number
  title: string
  articles: ArticleElement[]
  __component: 'elements.article-list'
}

export type SectionContent = HeroElement | ArticleListElement

export interface Section {
  id: number
  created_at: string
  published_at: string
  updated_at: string
  name: string
  sectionId: string
  order: number
  content: SectionContent[]
}

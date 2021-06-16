import { ArticleElement } from 'model/sections'
import { useRef, useState } from 'react'
import { scrollTo } from 'utils/scrollTo'

import styles from './article.module.scss'

const Article = ({ article, articleIndex }: { article: ArticleElement; articleIndex: number }): JSX.Element => {
  const [showDetails, setShowDetails] = useState<boolean>(false)
  const [animating, setAnimating] = useState<boolean>(false)

  const ref = useRef<HTMLDivElement>(null)

  const renderArticleDetails = (): JSX.Element => {
    return (
      <>
        <div className={styles.dynamicContainer} dangerouslySetInnerHTML={{ __html: article.body }}></div>
        <button
          onClick={handleToggleDetails}
          disabled={animating}
          className="my-4 mx-auto bg-cream-dark text-white py-2 px-4 rounded-lg focus:outline-none focus:ring focus:ring-yellow-600 focus:ring-opacity-30 border-cream-dark-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </button>
      </>
    )
  }

  const handleToggleDetails = () => {
    const element = ref.current
    if (!element || !document.scrollingElement || !element.parentElement) return
    setAnimating(true)

    if (!showDetails) {
      element.style.display = 'block'
      element.style.height = element.scrollHeight + 'px'

      setTimeout(() => {
        setShowDetails((prev) => !prev)
        setAnimating(false)
      }, 350)
    } else {
      element.style.height = '0'
      scrollTo(document.scrollingElement, element.parentElement, 600)

      setTimeout(() => {
        element.style.display = 'none'
        setShowDetails((prev) => !prev)
        setAnimating(false)
      }, 350)
    }
  }

  return (
    <>
      {articleIndex !== 0 ? <hr className="border-none h-px bg-gradient-to-r from-white via-gray-600 to-white" /> : null}
      <article className="md:flex justify-center items-center flex-wrap md:px-4 md:py-8 md:w-5/6 md:mx-auto">
        <div className={'md:w-2/4' + (articleIndex % 2 === 0 ? ' md:order-2' : '')}>
          <img
            src={article.article_image.url}
            alt={article.article_image.alternativeText}
            className="w-11/12 max-w-article-img md:max-w-full md:h-auto mx-auto my-4 rounded-lg shadow-article-img"
          />
        </div>
        <div className="md:w-2/4">
          <h3 className="text-cream-dark font-bold text-lg md:text-3xl md:p-4">{article.title}</h3>
          <p className="md:text-lg">{article.summary}</p>
          <button
            onClick={handleToggleDetails}
            disabled={animating}
            className="my-4 mx-auto bg-cream-dark text-white py-2 px-4 rounded-lg focus:outline-none focus:ring focus:ring-yellow-600 focus:ring-opacity-30 border-cream-dark-2"
          >
            {!showDetails ? 'Részletek' : 'Bezárás'}
          </button>
        </div>
        <div
          className="order-3 w-full"
          style={{ display: 'none', height: '0', transition: 'height 350ms ease-in-out' }}
          ref={ref}
        >
          {renderArticleDetails()}
        </div>
      </article>
    </>
  )
}

export default Article

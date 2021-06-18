import { useEffect, useState } from 'react'
import { throttle } from 'utils/throttle'
import { NavbarProps, NavLinkProps } from 'model/navbar'
import { scrollTo } from 'utils/scrollTo'
import Image from 'next/image'
import Link from 'next/link'

const NavLink = ({
  navLink,
  active,
  toggleNavbar,
}: {
  navLink: NavLinkProps
  active: boolean
  toggleNavbar: () => void
}): JSX.Element => {
  const handleClick = () => {
    const target = document.getElementById(navLink.sectionId)
    const { scrollingElement } = document
    if (!target || !scrollingElement) return
    scrollTo(scrollingElement, target, 600)
    toggleNavbar()
  }

  return (
    <li>
      <button className="focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-20" onClick={handleClick}>
        <span
          className={
            'px-3 py-2 flex items-center font-bold leading-snug hover:opacity-75' +
            (active ? ' border-b-2 border-cream-dark' : '')
          }
        >
          {navLink.name}
        </span>
      </button>
    </li>
  )
}

const Navbar = ({ navData }: { navData: NavbarProps }): JSX.Element => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const sectionIds = navData.navlinks.map((l) => l.sectionId)
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? null)

  const handleScrollPositionChanged = throttle(() => {
    const sections: HTMLElement[] = []
    sectionIds.forEach((sectionId) => {
      const elem = document.getElementById(sectionId)
      if (elem) sections.push(elem)
    })
    let currentSectionId = activeSection
    for (let i = 0; i < sections.length; i++) {
      const section = sections[i]
      // GetBoundingClientRect returns values relative to viewport
      if (section.getBoundingClientRect().top - 500 < 0) {
        currentSectionId = section.id
        continue
      }
      // No need to continue loop, if last element has been detected
      break
    }

    setActiveSection(currentSectionId)
  })

  const toggleNavbar = () => {
    setNavbarOpen((prev) => !prev)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScrollPositionChanged)
    return () => window.removeEventListener('scroll', handleScrollPositionChanged)
  })

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 flex flex-wrap items-center justify-between px-4 py-3 bg-cream-light z-50">
        <Link href="/">
          <a>
            <Image src={navData.logo?.formats.small.url} alt={navData.logo?.alternativeText} width={140} height={30} />
          </a>
        </Link>

        <div className="md:hidden">
          <button onClick={toggleNavbar}>
            {navbarOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
        <div className={'md:flex w-full pt-4 md:w-auto md:pt-0 flex-grow items-center' + (navbarOpen ? ' flex' : ' hidden')}>
          <ul className="flex flex-col md:flex-row list-none md:ml-auto">
            {navData.navlinks.map((link) => (
              <NavLink navLink={link} key={link.id} active={activeSection === link.sectionId} toggleNavbar={toggleNavbar} />
            ))}
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar

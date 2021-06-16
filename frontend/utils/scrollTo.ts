export const scrollTo = (scrollingElement: Element, target: HTMLElement, duration = 600): void => {
  if (duration <= 0) return
  const difference = target.offsetTop - scrollingElement.scrollTop
  const perTick = (difference / duration) * 10

  setTimeout(function () {
    scrollingElement.scrollTop = scrollingElement.scrollTop + perTick
    if (scrollingElement.scrollTop === target.offsetTop) return
    scrollTo(scrollingElement, target, duration - 10)
  }, 10)
}
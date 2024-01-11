import React, { useState, useEffect } from 'react'

const ScrollToTopButton = ({ scrollContainerRef }) => {
  const [isVisible, setIsVisible] = useState(false)
  const handleScroll = () => {
    const scrollY = scrollContainerRef?.current?.scrollTop;
    setIsVisible(scrollY > 100) // Adjust the value based on when you want the button to appear
  }

  const scrollToTop = () => {
     scrollContainerRef?.current?.scrollTo({
       top: 0,
       behavior: 'smooth',
     })
  }

  useEffect(() => {
    const container = scrollContainerRef.current
    container?.addEventListener('scroll', handleScroll)
    return () => {
      container?.removeEventListener('scroll', handleScroll)
    }
  }, [scrollContainerRef])

  useEffect(()  => {
    scrollToTop();
  },[])

  return (
    <img
      className={`pointer position-fixed scroll-to-top ${
        isVisible ? 'd-block' : 'd-none'
      }`}
      onClick={scrollToTop}
      style={{
        transform: 'rotate(-90deg)',
        bottom: 50,
        right: 150,
      }}
      src="/images/right-arrow.svg"
      alt="Scroll to Top"
      width={40}
      height={40}
    />
  )
}

export default ScrollToTopButton

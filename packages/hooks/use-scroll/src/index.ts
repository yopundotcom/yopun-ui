"use client"

import * as React from "react"

export const useScroll = (threshold: number) => {
  const [scrolled, setScrolled] = React.useState<boolean>(false)

  const onScroll = React.useCallback(() => {
    setScrolled(window.pageYOffset > threshold)
  }, [threshold])

  React.useEffect(() => {
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [onScroll])

  return scrolled
}

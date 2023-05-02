import { useEffect, useState } from 'react'

export const useGetSelectedSectionScroll = () => {
  const [selectedSection, setSelectedSelection] = useState('')

  const handleSelectSection = () => {
    const position = window.pageYOffset

    switch (true) {
      case position < 500:
        setSelectedSelection('#home')
        break
      case position >= 500 && position < 1400:
        setSelectedSelection('#about')
        break
      case position >= 1400 && position < 2300:
        setSelectedSelection('#experience')
        break
      case position >= 2300 && position < 3000:
        setSelectedSelection('#articles')
        break
      case position >= 3000 && position < 3900:
        setSelectedSelection('#contact')
        break
      default:
        break
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleSelectSection, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleSelectSection)
    }
  }, [])

  useEffect(() => {
    handleSelectSection()
  }, [])

  return [selectedSection]
}

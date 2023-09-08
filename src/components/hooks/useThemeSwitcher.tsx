import React, { useEffect, useState } from 'react'

const useThemeSwitcher = () => {
  const preferDarkQuery = '(prefer-color-scheme: dark)'
  const [mode, setMode] = useState('')

  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery)
    const userPref = window.localStorage.getItem('theme')

    const changeHandler = () => {
      let check
      if (userPref) {
        check = userPref === 'dark' ? 'dark' : 'light'
        setMode(check)
      } else {
        check = mediaQuery.matches ? 'dark' : 'light'
        setMode(check)
      }
      if (check === 'dark') {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }
    changeHandler()
    mediaQuery.addEventListener('change', changeHandler)

    return () => mediaQuery.removeEventListener('change', changeHandler)
  }, [])

  useEffect(() => {
    if (mode === 'dark') {
      window.localStorage.setItem('theme', 'dark')
      document.documentElement.classList.add('dark')
    }
    if (mode === 'light') {
      window.localStorage.setItem('theme', 'light')
      document.documentElement.classList.remove('dark')
    }
  }, [mode])

  return [mode, setMode]
}

export default useThemeSwitcher

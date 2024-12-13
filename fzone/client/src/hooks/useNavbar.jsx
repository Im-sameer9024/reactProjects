import { useEffect, useState } from "react"
import { assets } from '../assets/assets.js'

const useNavbar = () => {

  const [visible, setVisible] = useState(false)
  const [bgColor, setBgColor] = useState(" bg-transparent")



  useEffect(() => {

    const scrollWindow = () => {

      if (window.scrollY > 0) {
        setBgColor("shadow-md bg-white")
      } else {
        setBgColor("bg-transparent")
      }

    }
    window.addEventListener('scroll', scrollWindow)

    return () => {
      window.removeEventListener('scroll', scrollWindow)
    }
  }, [])

  return {
    visible, assets, bgColor,
    open: () => setVisible(true),
    close: () => setVisible(false),
    toggle: () => setVisible(!visible)
  }
}

export default useNavbar

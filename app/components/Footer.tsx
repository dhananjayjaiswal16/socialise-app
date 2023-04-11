"use client"
import { theme } from "@nextui-org/react"

const Footer = () => {
  return (
    <footer style={{ backgroundColor: `${theme.colors.gray50}` }} className="fixed z-10 left-0 bottom-0 w-full text-center">
      Made with ❤️ by  
      <a className="ml-1 text-blue-500" href="https://dhananjayjaiswal16.dev/" target="_blank"> DJ </a>
    </footer>
  )
}

export default Footer;

"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

const Toggle = () => {
  const { theme, setTheme, systemTheme } = useTheme() // Destructure systemTheme
  const [mounted, setMounted] = useState(false)

  // Ensure component is mounted before accessing the theme
  useEffect(() => {
    setMounted(true)
  }, [])

  // Don't render anything before mounting to avoid SSR issues
  if (!mounted) return null 

  // Determine the current theme. Use 'system' if set to system theme.
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <button
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full bg-slate-800 dark:bg-gray-300 text-gray-800 dark:text-white transition-colors duration-300"
    >
      {currentTheme === "dark" ? (
        <span role="img" aria-label="sun">🌞</span> // Show sun if system theme is dark
      ) : (
        <span role="img" aria-label="moon">🌙</span> // Show moon if system theme is light
      )}
    </button>
  )
}

export default Toggle

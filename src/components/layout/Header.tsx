import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const NAV_ITEMS = [
  { label: 'サービス', href: '/#services' },
  { label: '相談の流れ', href: '/#flow' },
  { label: '事例', href: '/#cases' },
  { label: '会社概要', href: '/#company' },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    if (href.startsWith('/#') && location.pathname === '/') {
      const id = href.replace('/#', '')
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-warm-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 no-underline">
          <div className="w-8 h-8 bg-navy-700 rounded-lg flex items-center justify-center">
            <span className="text-white text-sm font-semibold tracking-tight">AI</span>
          </div>
          <span className="text-lg font-semibold text-warm-900 tracking-tight">
            AIの相談所
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => {
                e.preventDefault()
                handleNavClick(item.href)
              }}
              className="text-sm text-warm-600 hover:text-warm-900 transition-colors no-underline"
            >
              {item.label}
            </a>
          ))}
          <Link
            to="/booking"
            className="text-sm font-medium text-white bg-navy-700 hover:bg-navy-800 px-5 py-2.5 rounded-lg transition-colors no-underline"
          >
            無料相談を予約
          </Link>
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-warm-600"
          aria-label="メニュー"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-warm-100 px-6 py-4 space-y-3">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => {
                e.preventDefault()
                handleNavClick(item.href)
              }}
              className="block text-sm text-warm-600 hover:text-warm-900 py-2 no-underline"
            >
              {item.label}
            </a>
          ))}
          <Link
            to="/booking"
            onClick={() => setIsOpen(false)}
            className="block text-center text-sm font-medium text-white bg-navy-700 px-5 py-2.5 rounded-lg no-underline"
          >
            無料相談を予約
          </Link>
        </div>
      )}
    </header>
  )
}

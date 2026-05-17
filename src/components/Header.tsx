/** 顶部导航：锚点跳转各区块 */
const navItems = [
  { href: '#hero', label: '首页' },
  { href: '#about', label: '关于' },
  { href: '#projects', label: '项目' },
  { href: '#contact', label: '联系' },
] as const

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#hero" className="bg-gradient-to-r from-accent-from to-accent-to bg-clip-text text-lg font-semibold text-transparent">
          Portfolio
        </a>
        <ul className="flex gap-6 text-sm text-muted">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

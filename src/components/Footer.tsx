/** 页脚 */
export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-muted">
      <p>© {year} 你的名字. All rights reserved.</p>
    </footer>
  )
}

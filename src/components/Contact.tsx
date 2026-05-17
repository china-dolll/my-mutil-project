import { motion } from 'framer-motion'

/** 联系方式：邮箱、GitHub、社交媒体 */
const links = [
  { label: '邮箱', href: 'mailto:you@example.com' },
  { label: 'GitHub', href: 'https://github.com/china-dolll' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/yourname' },
] as const

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <motion.div
        className="mx-auto max-w-5xl text-center"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="mb-4 text-3xl font-bold">联系我</h2>
        <p className="mb-8 text-muted">欢迎通过以下方式与我交流。</p>
        <ul className="flex flex-wrap justify-center gap-6">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="rounded-full border border-white/10 px-6 py-3 text-sm transition-colors hover:border-accent-from hover:text-accent-from"
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  )
}

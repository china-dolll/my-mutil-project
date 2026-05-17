import { motion } from 'framer-motion'

export interface HeroProps {
  /** 显示在「你好，我是」之后的主标题 */
  name?: string
  /** 副标题 / 职业定位 */
  tagline?: string
  /** 个人简介 */
  bio?: string
  /** 头像地址 */
  avatarSrc?: string
  avatarAlt?: string
}

const defaultProps: Required<HeroProps> = {
  name: '你的名字',
  tagline: '前端开发者 · UI 爱好者',
  bio: '专注于用 React 与 TypeScript 构建简洁、高性能的 Web 体验。热爱设计与代码的交汇，欢迎浏览我的作品与技能。',
  avatarSrc: '/avatar-placeholder.svg',
  avatarAlt: '个人头像',
}

/** 首页 Hero：大标题、简介、头像（深色主题 + 渐变强调） */
export default function Hero({
  name = defaultProps.name,
  tagline = defaultProps.tagline,
  bio = defaultProps.bio,
  avatarSrc = defaultProps.avatarSrc,
  avatarAlt = defaultProps.avatarAlt,
}: HeroProps) {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-background px-6 pt-28 pb-16"
    >
      {/* 背景渐变光晕 */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-accent-from/25 to-accent-to/10 blur-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute right-0 bottom-0 h-64 w-64 translate-x-1/3 translate-y-1/3 rounded-full bg-gradient-to-tl from-accent-to/15 to-transparent blur-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ duration: 1, delay: 0.2 }}
      />

      <div className="relative z-10 mx-auto grid w-full max-w-5xl gap-12 md:grid-cols-[1fr_auto] md:items-center md:gap-16">
        {/* 文案区 */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-4 text-sm font-medium tracking-[0.2em] text-muted uppercase">
            你好，我是
          </p>

          <h1 className="mb-3 text-4xl leading-[1.1] font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="bg-gradient-to-r from-accent-from via-violet-400 to-accent-to bg-clip-text text-transparent">
              {name}
            </span>
          </h1>

          <p className="mb-6 bg-gradient-to-r from-foreground/90 to-muted bg-clip-text text-lg font-medium text-transparent sm:text-xl">
            {tagline}
          </p>

          <p className="max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {bio}
          </p>

          <motion.a
            href="#projects"
            className="mt-10 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent-from/50 hover:bg-white/10"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            查看作品
            <span className="bg-gradient-to-r from-accent-from to-accent-to bg-clip-text text-transparent">
              →
            </span>
          </motion.a>
        </motion.div>

        {/* 头像区：渐变描边环 */}
        <motion.div
          className="flex justify-center md:justify-end"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-1 rounded-full bg-gradient-to-br from-accent-from via-violet-500 to-accent-to opacity-80 blur-sm"
            />
            <motion.div
              className="relative rounded-full bg-gradient-to-br from-accent-from to-accent-to p-[3px]"
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <div className="rounded-full bg-background p-1">
                <img
                  src={avatarSrc}
                  alt={avatarAlt}
                  width={224}
                  height={224}
                  loading="lazy"
                  decoding="async"
                  className="h-44 w-44 rounded-full object-cover sm:h-52 sm:w-52 md:h-56 md:w-56"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

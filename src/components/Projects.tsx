import { motion } from 'framer-motion'
import { projects, type Project } from '../data/projects'
import ProjectCard from './ProjectCard'

export interface ProjectsProps {
  /** 自定义项目列表，默认读取 data/projects.ts */
  items?: Project[]
  /** 区块标题 */
  title?: string
  /** 区块副标题 */
  subtitle?: string
}

/** 项目展示：卡片列表（截图、标题、描述、技术栈） */
export default function Projects({
  items = projects,
  title = '项目展示',
  subtitle = '精选个人作品与练习项目，涵盖前端工程化与界面实现。',
}: ProjectsProps) {
  return (
    <section id="projects" className="relative bg-background px-6 py-24 sm:py-28">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute top-0 left-1/2 h-px w-full max-w-5xl -translate-x-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      />

      <div className="relative z-10 mx-auto max-w-5xl">
        <motion.header
          className="mb-12 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-2 text-sm font-medium tracking-[0.15em] text-muted uppercase">
            Portfolio
          </p>
          <h2 className="mb-3 text-3xl font-bold text-foreground sm:text-4xl">
            <span className="bg-gradient-to-r from-accent-from to-accent-to bg-clip-text text-transparent">
              {title}
            </span>
          </h2>
          <p className="text-base leading-relaxed text-muted sm:text-lg">{subtitle}</p>
        </motion.header>

        {items.length > 0 ? (
          <ul className="grid gap-8 sm:grid-cols-2">
            {items.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </ul>
        ) : (
          <p className="rounded-2xl border border-dashed border-white/15 py-16 text-center text-muted">
            暂无项目，请在 src/data/projects.ts 中添加。
          </p>
        )}
      </div>
    </section>
  )
}

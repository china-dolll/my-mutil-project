import { motion } from 'framer-motion'
import type { Project } from '../data/projects'

interface ProjectCardProps {
  project: Project
  index: number
}

/** 单个项目卡片：截图、标题、描述、技术栈标签 */
export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.li
      className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-colors hover:border-accent-from/30 hover:bg-white/[0.06]"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-48px' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* 项目截图 */}
      <div className="relative aspect-video overflow-hidden bg-white/5">
        <img
          src={project.image}
          alt={`${project.name} 预览图`}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="mb-2 text-xl font-semibold text-foreground transition-colors group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-accent-from group-hover:to-accent-to group-hover:bg-clip-text">
          {project.name}
        </h3>

        <p className="mb-4 flex-1 text-sm leading-relaxed text-muted sm:text-base">
          {project.description}
        </p>

        {/* 技术栈标签 */}
        <ul className="mb-5 flex flex-wrap gap-2" aria-label="技术栈">
          {project.techStack.map((tech) => (
            <li key={tech}>
              <span className="inline-block rounded-full border border-white/10 bg-gradient-to-r from-accent-from/10 to-accent-to/10 px-3 py-1 text-xs font-medium text-foreground/90">
                {tech}
              </span>
            </li>
          ))}
        </ul>

        {(project.demoUrl ?? project.repoUrl) ? (
          <div className="flex flex-wrap gap-4 border-t border-white/10 pt-4 text-sm">
            {project.demoUrl ? (
              <a
                href={project.demoUrl}
                className="font-medium text-accent-from underline-offset-4 transition-colors hover:text-accent-to hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                在线预览
              </a>
            ) : null}
            {project.repoUrl ? (
              <a
                href={project.repoUrl}
                className="text-muted underline-offset-4 transition-colors hover:text-foreground hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                查看源码
              </a>
            ) : null}
          </div>
        ) : null}
      </div>
    </motion.li>
  )
}

import { motion } from 'framer-motion'
import { skills } from '../data/skills'

const levelLabel = {
  beginner: '入门',
  intermediate: '熟练',
  advanced: '精通',
} as const

/** 关于我：介绍与技能列表 */
export default function About() {
  return (
    <section id="about" className="px-6 py-24">
      <motion.div
        className="mx-auto max-w-5xl"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="mb-6 text-3xl font-bold">关于我</h2>
        <p className="mb-10 max-w-2xl leading-relaxed text-muted">
          Java 后端开发工程师，专注于企业级应用架构与 AI 智能体落地。具备高并发系统设计经验，熟悉 Spring Boot 微服务生态，同时深耕大模型应用开发——涵盖 RAG、Agent、Spring AI 等技术栈，致力于将 AI 能力融入业务系统。
        </p>
        <h3 className="mb-4 text-xl font-semibold">技能</h3>
        <ul className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <li
              key={skill.name}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm"
            >
              {skill.name}
              {skill.level ? (
                <span className="ml-2 text-muted">· {levelLabel[skill.level]}</span>
              ) : null}
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  )
}

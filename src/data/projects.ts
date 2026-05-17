/** 项目展示数据 */
export interface Project {
  id: string
  name: string
  description: string
  image: string
  techStack: string[]
  demoUrl?: string
  repoUrl?: string
}

export const projects: Project[] = [
  {
    id: 'portfolio',
    name: '个人作品集',
    description:
      '基于 React、TypeScript 与 Tailwind CSS 构建的响应式作品集站点，支持深色主题与滚动动画。',
    image: '/placeholder-project.svg',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    demoUrl: '#',
    repoUrl: '#',
  },
  {
    id: 'drawboard',
    name: '在线画板',
    description:
      '支持画笔、橡皮、撤销重做与导出的 Canvas 画板应用，注重交互流畅与本地持久化。',
    image: '/placeholder-project.svg',
    techStack: ['JavaScript', 'Canvas API', 'HTML5'],
    demoUrl: '#',
    repoUrl: '#',
  },
  {
    id: 'dashboard',
    name: '数据看板',
    description:
      '可视化数据面板示例，包含图表组件、筛选与暗色布局，适用于运营数据展示场景。',
    image: '/placeholder-project.svg',
    techStack: ['React', 'Vite', 'ECharts'],
    demoUrl: '#',
  },
]

/** 技能列表，便于后续增删改 */
export interface Skill {
  name: string
  level?: 'beginner' | 'intermediate' | 'advanced'
}

export const skills: Skill[] = [
  { name: 'React', level: 'advanced' },
  { name: 'TypeScript', level: 'advanced' },
  { name: 'Tailwind CSS', level: 'advanced' },
  { name: 'Node.js', level: 'intermediate' },
]

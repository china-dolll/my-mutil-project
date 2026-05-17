/** 技能列表，便于后续增删改 */
export interface Skill {
  name: string
  level?: 'beginner' | 'intermediate' | 'advanced'
}

export const skills: Skill[] = [
  { name: 'Java', level: 'advanced' },
  { name: 'Spring Boot', level: 'advanced' },
  { name: 'MyBatis / JPA', level: 'advanced' },
  { name: 'MySQL', level: 'advanced' },
  { name: 'Redis', level: 'intermediate' },
  { name: 'RabbitMQ / Kafka', level: 'intermediate' },
  { name: 'Spring AI / LangChain4j', level: 'advanced' },
  { name: 'LLM 应用开发', level: 'advanced' },
  { name: 'RAG / Agent', level: 'intermediate' },
  { name: 'Docker', level: 'intermediate' },
  { name: 'Linux', level: 'intermediate' },
  { name: 'Vue / React (基础)', level: 'beginner' },
]

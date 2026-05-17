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
    id: 'ai-agent-platform',
    name: 'AI 智能体中台',
    description:
      '基于 Spring AI + LangChain4j 的企业级 Agent 编排平台，支持多模型接入、RAG 检索增强、工具调用链编排，内置对话记忆与多轮推理。',
    image: '/placeholder-project.svg',
    techStack: ['Java 21', 'Spring Boot 3', 'Spring AI', 'LangChain4j', 'Redis', 'Docker'],
    repoUrl: '#',
  },
  {
    id: 'knowledge-base',
    name: '企业知识库 RAG 系统',
    description:
      '面向企业文档的智能问答系统，集成向量数据库与语义检索，支持 PDF/Word 等多格式解析，提供 RESTful API 与 WebSocket 实时对话。',
    image: '/placeholder-project.svg',
    techStack: ['Spring Boot', 'Elasticsearch', 'Qdrant', 'RabbitMQ', 'MySQL'],
    repoUrl: '#',
  },
  {
    id: 'microservice-platform',
    name: '微服务基础平台',
    description:
      '基于 Spring Cloud 的微服务脚手架，包含统一认证网关、分布式配置中心、服务熔断降级、链路追踪与 CI/CD 流水线。',
    image: '/placeholder-project.svg',
    techStack: ['Spring Cloud', 'Gateway', 'Nacos', 'Sentinel', 'SkyWalking', 'Docker'],
    repoUrl: '#',
  },
]

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

export function ProjectsSection() {
  const projects = [
    {
      title: "E-commerce API Platform",
      description:
        "Scalable microservices architecture handling 10M+ requests daily with real-time inventory management, payment processing, and order fulfillment.",
      technologies: ["Node.js", "PostgreSQL", "Redis", "Docker", "AWS"],
      github: "https://github.com",
      demo: "https://example.com",
      image: "/e-commerce-api-dashboard-with-charts-and-metrics.jpg",
      featured: true,
    },
    {
      title: "Real-time Chat System",
      description:
        "High-performance WebSocket-based chat application supporting 50K+ concurrent users with message persistence and file sharing capabilities.",
      technologies: ["Go", "WebSocket", "MongoDB", "Kubernetes"],
      github: "https://github.com",
      demo: "https://example.com",
      image: "/chat-application.png",
      featured: true,
    },
    {
      title: "Analytics Data Pipeline",
      description:
        "ETL pipeline processing 1TB+ daily data with automated reporting, anomaly detection, and real-time dashboards for business intelligence.",
      technologies: ["Python", "Apache Kafka", "Elasticsearch", "Docker"],
      github: "https://github.com",
      image: "/data-analytics-dashboard-with-graphs-and-pipeline-.jpg",
      featured: false,
    },
    {
      title: "Authentication Service",
      description:
        "OAuth2/JWT-based authentication microservice with multi-factor authentication, rate limiting, and comprehensive audit logging.",
      technologies: ["Java", "Spring Boot", "MySQL", "Redis"],
      github: "https://github.com",
      image: "/authentication-service-admin-panel-with-user-manag.jpg",
      featured: false,
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of backend systems and APIs I've built to solve real-world problems
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 group ${
                project.featured ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {project.image && (
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={`${project.title} screenshot`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
              )}

              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold text-balance">{project.title}</h3>
                  {project.featured && <Badge className="bg-primary text-primary-foreground">Featured</Badge>}
                </div>

                <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3 pt-2">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  {project.demo && (
                    <Button size="sm" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

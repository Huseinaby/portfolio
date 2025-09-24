import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

export function ProjectsSection() {
  const projects = [
    {
      title: "TUMBUH Backend System",
      description:
        "Powering TUMBUH, the super-app for Indonesia's plant enthusiasts, this backend system integrates four core pillars into one digital ecosystem. It features a dynamic educational module using Gemini AI, a full-featured marketplace with Midtrans & RajaOngkir, location-based community forums, and an advanced IoT system for automated plant care.",
      technologies: ["Laravel", "MySQL", "REST API", "Gemini AI", "Midtrans", "RajaOngkir", "IoT"],
      github: "https://github.com/Huseinaby/TUMBUH-Backend",
      demo: "https://documenter.getpostman.com/view/22821702/2sB2qgeyNX",
      image: "/tumbuh.png",
      featured: true,
    },
    {
      title: "SIPEKA - Sistem Peminjaman & Kelola Arsip",
      description:
        "SIPEKA is a web-based system for managing Building Permit (IMB) archives, providing digital PDF storage by year and a borrowing feature where users must register, verify their email and ID, submit a request with personal details and purpose, then collect the approved archive at the office within a set loan period.",
      technologies: ["Laravel", "MySQL", "Tailwind CSS", "Mailgun"],
      github: "https://github.com/mmaulidinabdi/pinjam_arsip_magang",      
      image: "/sipeka.png",
      featured: false,
    },
    {
      title: "SI - Kaligrafi",
      description:
        "SI-Kaligrafi is a dynamic profile website and Content Management System (CMS) built for a professional calligraphy service. The application is designed to professionally showcase services, gallery, and testimonials to potential clients. All content on the public-facing homepage is fully manageable through a secure and user-friendly admin panel, demonstrating a monolithic Laravel architecture with distinct frontend frameworks for public and admin interfaces.",
      technologies: ["Laravel", "MySQL", "Tailwind CSS", "Bootstrap"],
      github: "https://github.com/Huseinaby/si-kaligrafi",
      image: "/si-kaligrafi.png",
      featured: false,
    },
    {
      title: "ARSIP - IMB Digital Archive System",
      description:
        "A web-based application designed for the digital archiving and management of IMB (Izin Mendirikan Bangunan - Building Permit) documents. Developed for government agencies or departments, this system aims to modernize record-keeping by centralizing archives, enabling quick and powerful searches, and providing integrated tools for PDF document management.",
      technologies: ["Laravel", "MySQL", "Tailwind CSS", "Flowbite"],
      github: "https://github.com/Huseinaby/Arsip",
      image: "/arsip.png",
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
                        Doc
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

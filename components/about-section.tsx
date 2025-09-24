import { Card } from "@/components/ui/card"

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am a backend developer specializing in building efficient and scalable applications with the Laravel framework. My focus is on writing clean, maintainable code to solve complex business problems through robust API and database design.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I have a growing interest in DevOps, actively building my skills in tools like Docker and the principles of CI/CD. While I have solidified this knowledge through several training certifications, I'm excited by the opportunity to apply it to real world challenges.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My goal is to be a developer who not only builds features but also understands how to ship and maintain them effectively. I am a curious learner, always ready to tackle new challenges in both software architecture and operational efficiency.
            </p>
          </div>

          <Card className="p-8 bg-card border-border">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Quick Facts</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>
                    <span className="text-foreground font-medium">Location:</span> Banjarmasin, Indonesia
                  </p>
                  <p>
                    <span className="text-foreground font-medium">Experience:</span> 1+ years, fresh graduate
                  </p>
                  <p>
                    <span className="text-foreground font-medium">Focus:</span> Backend Development, DevOps Enthusiast
                  </p>
                  <p>
                    <span className="text-foreground font-medium">Availability:</span> Open to opportunities
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Interests</h3>
                <div className="flex flex-wrap gap-2">
                  {["Laravel", "Node.js", "DevOps", "Docker", "CI/CD Automation", "Linux Administration"].map((interest) => (
                    <span
                      key={interest}
                      className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}

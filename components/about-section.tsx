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
              I'm a passionate backend developer with expertise in building robust, scalable server-side applications.
              My focus is on creating efficient APIs, designing database architectures, and implementing secure
              authentication systems.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With experience across multiple programming languages and frameworks, I enjoy solving complex problems and
              optimizing system performance. I believe in writing clean, maintainable code that stands the test of time.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or
              sharing knowledge with the developer community.
            </p>
          </div>

          <Card className="p-8 bg-card border-border">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Quick Facts</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>
                    <span className="text-foreground font-medium">Location:</span> San Francisco, CA
                  </p>
                  <p>
                    <span className="text-foreground font-medium">Experience:</span> 5+ years
                  </p>
                  <p>
                    <span className="text-foreground font-medium">Focus:</span> API Development & System Design
                  </p>
                  <p>
                    <span className="text-foreground font-medium">Availability:</span> Open to opportunities
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Interests</h3>
                <div className="flex flex-wrap gap-2">
                  {["Microservices", "Cloud Architecture", "DevOps", "Open Source"].map((interest) => (
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

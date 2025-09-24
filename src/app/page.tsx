import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export const dynamic = 'force-dynamic'

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="relative z-50 px-6 py-4">
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 border-2 border-primary-foreground rounded-sm"></div>
            </div>
            <span className="text-xl font-bold">CREATIVE NEXUS</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">HOME</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">SERVICES</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">PROJECTS</a>
            <Button variant="outline" size="sm">CONTACT</Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative px-6 py-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background"></div>
        <div className="absolute top-20 left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          {/* Floating 3D Elements */}
          <div className="absolute top-10 left-1/4 w-16 h-16 border border-primary/30 rounded-lg transform rotate-45 animate-float"></div>
          <div className="absolute top-20 right-1/4 w-12 h-12 border border-secondary/30 rounded-full animate-float delay-1000"></div>
          <div className="absolute bottom-10 left-1/3 w-8 h-8 bg-accent/30 rounded-sm transform rotate-12 animate-float delay-2000"></div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            UNLEASH YOUR VISION.
            <br />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              LIMITLESS CREATION.
            </span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Transform your ideas into innovative designs and cutting-edge solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/25 transition-all duration-300">
              START A PROJECT
            </Button>
            <Button variant="outline" size="lg" className="border-primary/50 hover:bg-primary/10">
              VIEW PORTFOLIO
            </Button>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-16">OUR CAPABILITIES</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 group">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="w-8 h-8 border-2 border-primary rounded-lg"></div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-primary">DIGITAL ARTISTRY</h3>
              <p className="text-muted-foreground">
                Create stunning visual experiences with cutting-edge design techniques and innovative digital solutions.
              </p>
            </Card>

            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-secondary/50 transition-all duration-300 group">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="w-8 h-8 rounded-full border-2 border-secondary"></div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-secondary">VIRTUAL ARCHITECTURE</h3>
              <p className="text-muted-foreground">
                Build immersive 3D environments and architectural visualizations that bring concepts to life.
              </p>
            </Card>

            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-accent/50 transition-all duration-300 group">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="w-8 h-8 border-2 border-accent rounded-sm transform rotate-45"></div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-accent">INTERACTIVE EXPERIENCES</h3>
              <p className="text-muted-foreground">
                Develop engaging interactive experiences that captivate audiences and drive meaningful engagement.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="px-6 py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-8">WHY CHOOSE US?</h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-primary rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="font-semibold mb-2">Cutting-Edge Technology</h3>
                    <p className="text-muted-foreground">Latest tools and techniques for superior results</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-secondary rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="font-semibold mb-2">Expert Team</h3>
                    <p className="text-muted-foreground">Experienced professionals dedicated to excellence</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-accent rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="font-semibold mb-2">Rapid Delivery</h3>
                    <p className="text-muted-foreground">Fast turnaround without compromising quality</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-primary rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="font-semibold mb-2">Custom Solutions</h3>
                    <p className="text-muted-foreground">Tailored approaches for unique challenges</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50">
                <h3 className="text-xl font-semibold mb-6 text-center">WHY CHOOSE US?</h3>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Innovation Scaling</span>
                    <span className="text-sm font-mono">95%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full w-[95%]"></div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm">Creative Process</span>
                    <span className="text-sm font-mono">88%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-gradient-to-r from-secondary to-accent h-2 rounded-full w-[88%]"></div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm">Quality Delivery</span>
                    <span className="text-sm font-mono">92%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-gradient-to-r from-accent to-primary h-2 rounded-full w-[92%]"></div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm">Client Satisfaction</span>
                    <span className="text-sm font-mono">97%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full w-[97%]"></div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <Card className="p-12 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border-primary/20">
            <h2 className="text-3xl font-bold mb-4">READY TO BEGIN YOUR JOURNEY?</h2>
            <p className="text-muted-foreground mb-8">
              Let's transform your vision into reality with cutting-edge design and technology.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:shadow-xl hover:shadow-primary/30 transition-all duration-300">
              GET A FREE CONSULTATION
            </Button>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-border/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <div className="w-4 h-4 border-2 border-primary-foreground rounded-sm"></div>
                </div>
                <span className="text-xl font-bold">CREATIVE NEXUS</span>
              </div>
              <p className="text-muted-foreground">
                Transforming ideas into innovative digital experiences.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">SERVICES</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Digital Design</li>
                <li>3D Visualization</li>
                <li>Interactive Development</li>
                <li>Brand Strategy</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">CONTACT US</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>hello@creativenexus.com</p>
                <p>+1 (555) 123-4567</p>
                <p>New York, NY</p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-border/50 text-center text-muted-foreground">
            <p>&copy; 2024 Creative Nexus. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
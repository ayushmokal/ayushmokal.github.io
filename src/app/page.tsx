import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import Link from "next/link"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <span className="sr-only">Ayush Mokal</span>
          <span className="font-bold text-lg">AM</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#tech-stack">
            Tech Stack
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#projects">
            Projects
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#blogs">
            Blogs
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#about">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#contact">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Ayush Mokal
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  I desgin and write code
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild>
                  <Link href="#contact">Contact Me</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="#projects">View Projects</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section id="tech-stack" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Tech Stack</h2>
            <div className="flex flex-wrap gap-4">
              {["Javascript", "Java", "C++", "Flutter", "ReactJS", "SQL", "Linux", "Blockchain", "Technical Content", "Figma", "UI/UX", "Google Cloud", "vue.js", "HTML", "CSS", "MongoDB", "Cyber Security", "API"].map((tech) => (
                <Badge key={tech} variant="secondary" className="text-lg py-2 px-4">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </section>
        <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Projects</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Project One</CardTitle>
                  <CardDescription>A brief description of Project One</CardDescription>
                </CardHeader>
                <CardContent>
                  <image
                    alt="Project One"
                    className="w-full h-48 object-cover rounded-lg"
                    height="200"
                    src="https://framerusercontent.com/images/pAMdyx4slfGhTe5wRTVPXG6YPN8.png width={500} height={300}"
                    style={{
                      aspectRatio: "300/200",
                      objectFit: "cover",
                    }}
                    width="300"
                  />
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link href="#">View Project</Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Project Two</CardTitle>
                  <CardDescription>A brief description of Project Two</CardDescription>
                </CardHeader>
                <CardContent>
                  <image
                    alt="Project Two"
                    className="w-full h-48 object-cover rounded-lg"
                    height="200"
                    src="https://framerusercontent.com/images/pAMdyx4slfGhTe5wRTVPXG6YPN8.png width={500} height={300}"
                    style={{
                      aspectRatio: "300/200",
                      objectFit: "cover",
                    }}
                    width="300"
                  />
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link href="#">View Project</Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Project Three</CardTitle>
                  <CardDescription>A brief description of Project Three</CardDescription>
                </CardHeader>
                <CardContent>
                  <image
                    alt="Project Three"
                    className="w-full h-48 object-cover rounded-lg"
                    height="200"
                    src="https://framerusercontent.com/images/pAMdyx4slfGhTe5wRTVPXG6YPN8.png width={500} height={300}"
                    style={{
                      aspectRatio: "300/200",
                      objectFit: "cover",
                    }}
                    width="300"
                  />
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link href="#">View Project</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section id="strava-stats" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6 flex justify-center">
            <div className="w-full max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">Strava Statistics</h2>
              <p> I Like Running i Track my runs via Strava</p>
              <div className="flex justify-center">
                <iframe 
                  style={{ width: "100%", maxWidth: "600px", height: "auto", aspectRatio: "300 / 454", overflow: "hidden" }}
                  frameBorder={0}
                  allowTransparency={true}
                  src="https://www.strava.com/athletes/90973666/latest-rides/6d43d74bd58316cd403e77781f3c116d232b762a"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
        <section id="blogs" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Blogs</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>The Art of Participating in College Clubs</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Explore the benefits and strategies for engaging in college clubs and extracurricular activities.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link href="https://medium.com/@ayushmokal/the-art-of-participating-in-college-clubs-1f7de4935f4b" target="_blank" rel="noopener noreferrer">
                      Read More
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>All About Hackathons</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Dive into the world of hackathons, their importance, and how to make the most of these coding events.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link href="https://medium.com/@ayushmokal/all-about-hackathons-5b6ec5aada64" target="_blank" rel="noopener noreferrer">
                      Read More
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Top 20 Advantages of Having an .edu Email Address</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Discover the numerous benefits and perks that come with having an educational email address.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link href="https://medium.com/@ayushmokal/the-following-are-the-top-20-advantages-of-having-an-a-edu-email-address-d5591605a650" target="_blank" rel="noopener noreferrer">
                      Read More
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section id="spotify" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Spotify Profile</h2>
            <div className="flex flex-col items-center space-y-4">
              <Link
                href="https://open.spotify.com/user/0cadk6gln3z142mrv23rytapf?si=5f78cfafe5c74295"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold hover:underline"
              >
                View My Spotify Profile
              </Link>
              <h3 className="text-2xl font-bold mt-8 mb-4">Favorite Playlists</h3>
              <div className="w-full max-w-3xl space-y-4">
                <iframe
                  style={{borderRadius: '12px'}}
                  src="https://open.spotify.com/embed/playlist/4w0duCEfNmVckqUSeV2Xgt?utm_source=generator&theme=0"
                  width="100%"
                  height="152"
                  frameBorder="0"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                ></iframe>
                <iframe
                  style={{borderRadius: '12px'}}
                  src="https://open.spotify.com/embed/playlist/4iBiuHWt9YPXgGJcb5NjY0?utm_source=generator"
                  width="100%"
                  height="152"
                  frameBorder="0"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">About Me</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Iam a passionate web developer with a keen eye for design. With years of experience in creating
              responsive and user-friendly websites, I strive to bring ideas to life through clean code and
              intuitive interfaces.
            </p>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Get in Touch</h2>
            <div className="flex flex-col items-center space-y-4">
              <p className="text-gray-500 dark:text-gray-400">
                Feel free to reach out for collaborations or just a friendly hello
              </p>
              <div className="flex space-x-4">
                <Button variant="outline" size="icon" asChild>
                  <Link href="#" aria-label="Twitter">
                    <Twitter className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <Link href="#" aria-label="GitHub">
                    <Github className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <Link href="#" aria-label="LinkedIn">
                    <Linkedin className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <Link href="mailto:your.email@example.com" aria-label="Email">
                    <Mail className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Ayush Mokal. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}
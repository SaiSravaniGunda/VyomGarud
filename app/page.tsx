import Hero from '@/components/Hero'
import About from '@/components/About'
import Capabilities from '@/components/Capabilities'
import Highlights from '@/components/Highlights'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Capabilities />
      <Highlights />
      <Contact />
    </main>
  )
}


// app/page.js
import { Navigation } from './components/Navigation'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Features />
      <Contact />
      <Footer />
    </main>
  )
}
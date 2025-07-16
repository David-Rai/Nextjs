import Nav from '../components/ui/own/Nav'
import Hero from '../components/ui/own/Hero'

export default function Page() {
  return (
    <main className='h-screen w-full flex flex-col bg-black'>

      {/* Navigation Bar */}
      <Nav />

      {/* Main content */}
      <Hero />


    </main>
  );
}
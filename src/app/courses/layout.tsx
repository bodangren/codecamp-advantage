import Footer from '../../components/Footer'

import Footer from '../../components/Footer'

export default function CoursesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
      <Footer />
    </>
  )
}

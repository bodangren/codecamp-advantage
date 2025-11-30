import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Courses: React.FC = () => {
  const courses = [
    {
      code: 'NJ01FS',
      title: 'Next.js Camp',
      description: 'Full-stack JavaScript with Next.js API Routes, React, Prisma, and NextAuth.js. Deployed on Vercel.',
      image: '/next-js-logo.png',
      slug: 'nextjs',
      badge: 'Hot',
    },
    {
      code: 'NU02FS',
      title: 'Nuxt.js Camp',
      description: 'Full-stack JavaScript with Nuxt.js Server Middleware, Vue.js, Prisma/TypeORM, and Nuxt Auth. Deployed on Netlify/Vercel.',
      image: '/nuxt-js-logo.png',
      slug: 'nuxtjs',
    },
    {
      code: 'DJ03FS',
      title: 'Django + React Camp',
      description: 'Python backend with Django, React frontend, Django ORM, and Django Authentication. Deployed on AWS.',
      image: '/django-react-logo.png',
      slug: 'django-react',
    },
    {
      code: 'RR04FS',
      title: 'Ruby on Rails + React Camp',
      description: 'Ruby backend with Rails, React frontend, Active Record, and Devise authentication. Deployed on Heroku.',
      image: '/rails-react-logo.png',
      slug: 'ruby-on-rails-react',
    },
    {
      code: 'LV05FS',
      title: 'Laravel + Vue.js Camp',
      description: 'PHP backend with Laravel, Vue.js frontend, Eloquent ORM, and Laravel Sanctum. Deployed on Laravel Forge.',
      image: '/laravel-vue-logo.png',
      slug: 'laravel-vuejs',
    },
    {
      code: 'AN06FS',
      title: 'ASP.NET Core + Angular Camp',
      description: 'C# backend with ASP.NET Core, Angular frontend, Entity Framework Core, and ASP.NET Core Identity. Deployed on Azure.',
      image: '/aspnet-angular-logo.png',
      slug: 'aspnet-core-angular',
      badge: 'New',
    },
    {
      code: 'ME07FS',
      title: 'MERN Stack Camp',
      description: 'Full JavaScript stack with Express.js, React, MongoDB, and JWT authentication. Deployed on Heroku/MongoDB Atlas.',
      image: '/mern-stack-logo.jpeg',
      slug: 'mern',
      badge: 'Popular',
    },
    {
      code: 'SB08FS',
      title: 'Spring Boot + React Camp',
      description: 'Java backend with Spring Boot, React frontend, Spring Data JPA, and Spring Security. Deployed on AWS/GCP.',
      image: '/spring-react-logo.png',
      slug: 'spring-react',
    },
    {
      code: 'PH09FS',
      title: 'Phoenix + React Camp',
      description: 'Elixir backend with Phoenix, React frontend, Ecto, and Phoenix Authentication. Deployed on Gigalixir.',
      image: '/phoenix-react-logo.png',
      slug: 'phoenix-react',
      badge: 'Recommended',
    },
    {
      code: 'FS10FS',
      title: 'FastAPI + Svelte Camp',
      description: 'Python backend with FastAPI, Svelte frontend, SQLAlchemy, and FastAPI JWT. Deployed on Deta/Heroku.',
      image: '/fastapi-svelte-logo.png',
      slug: 'fastapi-svelte',
      badge: 'Recommended',
    },
  ]

  return (
    <section className="bg-gray-200 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Choose Your Tech Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
          {courses.map((course, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg relative w-full max-w-sm">
              {course.badge && (
                <span className={`absolute top-2 right-2 px-2 py-1 text-xs font-bold rounded ${
                  course.badge === 'Hot' ? 'bg-red-500 text-white' : 
                  course.badge === 'Popular' ? 'bg-blue-500 text-white' : 
                  course.badge === 'New' ? 'bg-purple-500 text-white' : 'bg-green-500 text-white'
                }`}>
                  {course.badge}
                </span>
              )}
              <div className="mb-4 flex justify-center">
                <Image
                  src={course.image}
                  alt={course.title}
                  width={100}
                  height={100}
                  className="h-24 w-auto object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
              <p className="text-sm font-medium text-gray-600 mb-2">{course.code}</p>
              <p className="mb-4 text-sm">{course.description}</p>
              <Link href={`/courses/${course.slug}`} className="text-blue-500 hover:underline">Learn More</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Courses

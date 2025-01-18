import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'

const CallToAction = () => {
  return (
    <section className="relative py-16 bg-primary/80 text-white">
        <img src="/public/assets/cta.jpg" className='absolute top-0 -z-20 object-cover w-full h-full' alt="cta" />
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
            Be on Your Way to Feeling Better with Dinisu Clinic
            </h2>
            <p className="mb-8 text-white/90">
            Click that button and embark on a new chapter in your health story.
            </p>
            <Link to="/booking">
                <Button variant="outline" size="lg" className="bg-white hover:bg-white/90 text-primary">
                    Book an Appointment Now
                </Button>
            </Link>
        </div>
    </section>
  )
}

export default CallToAction

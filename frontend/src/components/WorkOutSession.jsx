import React from 'react'

const WorkOutSession = () => {
  return (
    <section className='workout_session'>
      <div className="wrapper">
        <h1>Top Workout Session</h1>
        <p>Join our top workout sessions designed to challenge your limits and boost your fitness. Experience high-energy classes led by expert trainers to reach your peak performance.</p>
        <img src="/img5.jpg" alt="workout" />
      </div>
      <div className="wrapper"> 
        <h1>Featured Bootcamps</h1>
        <p>Discover our featured bootcamps that offer intensive, results-driven workouts tailored to all fitness levels. Push your boundaries and achieve your goals with our dynamic training programs</p>
        <div className="bootcamps">
            <div>
              <h4>Personalized Training Plans</h4>
              <p>Get custom workout routines tailored to your fitness goals, whether you're a beginner or a pro.</p>
            </div>
            <div>
              <h4>Expert Coaches and Trainers</h4>
              <p>Learn from certified trainers who provide guidance, motivation, and support every step of the way.</p>
            </div>
            <div>
              <h4>State-of-the-Art Equipment</h4>
              <p>Access top-notch gym equipment that enhances your workouts and maximizes results.</p>
            </div>
            <div>
              <h4> Community and Support</h4>
              <p>Join a vibrant community focused on health, fitness, and achieving goals together.</p>
            </div>
        </div>
      </div>
    </section>
  )
}

export default WorkOutSession

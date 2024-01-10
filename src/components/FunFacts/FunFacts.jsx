import React from 'react'
import './FunFacts.css'
import img from '../../assets/Images/2.png'
const FunFacts = () => {
  return (
    <>
    <section id='funfacts' className="fun-facts container">
      <div className="f-f-col col-left">
        <img src={img} alt="" />
      </div>
      <div className="f-f-col col-right">
        <div className="f-f-row1 row">
          <div className="f-f-heading">
            <h1>Fun <span>Facts </span></h1>
          </div>
          <div className="f-f-discription">
            <p>
            Introducing our innovative mobile app designed to revolutionize your daily routines. With a user-friendly interface and cutting-edge features, our app seamlessly integrates into your lifestyle. From intuitive task management to personalized insights, it's your go-to companion for productivity and enjoyment. Experience the future of mobile applications with our app — where efficiency meets simplicity.
            </p>
          </div>
        </div>
        <div className="f-f-row2 row">
          <div className="f-f-box f-f-box1">
            <h1>Downloads</h1>
            <h3>99999+</h3>
          </div>
          <div className="f-f-box f-f-box2">
            <h1>Likes</h1>
            <h3>2226</h3>
          </div>
          <div className="f-f-box f-f-box3">
            <h1>Reviews</h1>
            <h3>3264</h3>
          </div>
          <div className="f-f-box f-f-box4">
            <h1>Awards</h1>
            <h3>362</h3>
          </div>
        </div>
      </div>
    </section>

    </>
  )
}

export default FunFacts
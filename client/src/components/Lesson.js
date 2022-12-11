import React, {useState, useEffect} from 'react'
import "./all.css";
function Lesson() {
  const [packageCard, setPackageCard] = useState([]);
  const [tutorCard, setTutorCard]= useState([]);
    useEffect(() => {
      fetch('/lessons')
        .then((response) => response.json())
        .then((data) =>  setPackageCard(data)
        );
        fetch('/tutors')
        .then((resp) => resp.json())
        .then((data) =>  setTutorCard(data)
        );
    }, []);
  return (
    <div className='Main_lesson'>
      <h3>Book a Lesson</h3>
      <h3>Our Tutors</h3>
      <div className='tutor'>
        {tutorCard.map((tuta)=>(
        <div className='our_tutor'>
          <div>
            <img className='picha' src={tuta.image} alt='tutor'/>
            <p>{tuta.name}</p>
          </div>
          <div className='rating'>
                <div>
                  <p>{tuta.rating}</p>
                  <p>{tuta.review}</p>
                </div>
                <div>
                  <img alt='students'/>
                  <p>{tuta.no_of_student}</p>
                </div>
          </div>
          <div className='about_tutor'>
                <p>About tutor</p>
                <img alt='arrow'/>
              </div>
              <button>Book</button>
        </div>))} 
      </div>
      <div className='lesson'>
        <h3>Lesson Offer!</h3>
      <div className='card-container'>
      {packageCard.map((tuta)=>(
          <div className='card'> 
          <h4>{tuta.title}</h4>
                <img className='picha' src={tuta.image} alt='code'/>
                <div className='description'>
                  <p>{tuta.body}</p>
                <button>book</button>
                </div>
                <div className='learn'>
                  <p>learn more</p>
                  <img alt='arrow'/>
                </div>
              <p>By:</p>
        </div> ))}        
      </div></div>
    </div>
  )
}

export default Lesson
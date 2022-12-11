import React, {useState, useEffect} from 'react'
import pic from "../images/coding.jpeg"
function Home() {
  const [packageCard, setPackageCard] = useState([]);
    useEffect(() => {
      fetch("/packages")
        .then((response) => response.json())
        .then((data) => {
          setPackageCard(data);
        });
    }, []);
  return (
    <div className='back'>
      <div className='top'>
        <div className='right'>
          <div className='title_desc'>
            <h1>Private Online Classes</h1>
            <p>asdfasdf adfasf asdf sdfafasfas
              asdfasdf
            </p>
          </div>
          <button>Book a lesson</button>
        </div>
        <img src={pic} alt='picha'/>
      </div>
      <div className='middle_content'>
        <div className='right'>
            <h2>What Do We Teach?</h2>
            <p>I'm a paragraph. Click here to 
              add your own text and edit me. 
              It’s easy. Just click “Edit Text” 
              or double click me to add your 
              own content and make changes.
            </p>
            <button>About Us</button>
        </div>
          <div className='left'>
            <h3>Existing lessons</h3>
            <div className='basic1'>
               {/* we used map method to dynamicaly create cards in relation to the data available */}
               {packageCard.map((packs)=>(
                <div className='card'>
                <h4>{packs.title}</h4>
                <img className='picha' src={packs.image} alt='code'/>
                <div className='description'>
                  <p>{packs.body}</p>
                <button>book</button>
                </div>
                <div className='learn'>
                  <p>learn more</p>
                  <img alt='arrow'/>
                </div>
              </div>
               ))} 
            </div>
          </div>
      </div>
      <div className='middle_review'>
        <h4>Reviews</h4>
        <div className='review'>
          <img alt='arrow'/>
          <p>Just click “Edit Text” 
              or double click me to add your 
              own content and make changes</p>
              <img alt='arrow'/>
        </div>
      </div>
      <div className='middle_contact'>
        <h4>Contact Us</h4>
      </div>
      
    </div>
  )
}

export default Home
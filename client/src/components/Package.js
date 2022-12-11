import React, {useState, useEffect} from "react"
function Package() {
  const [packageCard, setPackageCard] = useState([]);
    useEffect(() => {
      fetch("/packages")
        .then((response) => response.json())
        .then((data) => {
          setPackageCard(data);
        });
    }, []);  
  return (
    <div className='package'>
      <div className='basic'>
        <h3>Basic Package</h3>
         <div className='basic1'>
            {/* we used map method to dynamicaly create cards in relation to the data available */}
            {packageCard.map((packs)=>(
            <div className='card'>
              <h4>{packs.title}</h4>
              <img className='picha' src={packs.image} alt='code'/>
                <div className='description'>
                  <p>{packs.description}</p>
                  <button>book</button>
                </div>
              <div className='learn'>
                <p>learn more</p>
                <img alt='arrow'/>
              </div>
              <p>By:</p>
            </div>
             ))}
         </div>
      </div>
      <div className='advance'>
        <h3>Advance Package</h3>
        <div className='advanc'>
      {/* we used map method to dynamicaly create cards in relation to the data available */}
      {packageCard.map((packs)=>(
            <div className='card'>
              <h4>{packs.title}</h4>
              <img className='picha' src={packs.image} alt='code'/>
                <div className='description'>
                  <p>{packs.description}</p>
                  <button>book</button>
                </div>
              <div className='learn'>
                <p>learn more</p>
                <img alt='arrow'/>
              </div>
              <p>By:</p>
            </div>
             ))}
      </div></div>
    </div>
  )
}

export default Package
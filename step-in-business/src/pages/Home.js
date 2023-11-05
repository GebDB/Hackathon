import React from 'react';
import './Home.css';
import restaurantImage from './images/jay-wennington-N_Y88TWmGwA-unsplash.jpg';
import healthcareImage from './images/jeshoots-com-l0j0DHVWcIE-unsplash.jpg';
import goodsImage from './images/luma-candles-K1Xi_R_mfpk-unsplash.jpg'
import servicesImage from './images/emmanuel-ikwuegbu-_2AlIm-F6pw-unsplash.jpg'

export const Home = () => {
  const CardsData = [
    {
      title: 'Restaurant',
      image: restaurantImage,
      link: '/restaurant-risk',
    },
    {
      title: 'Healthcare',
      image: healthcareImage,
      link: '/healthcare-risk',
    },
    {
      title: 'Goods',
      image: goodsImage,
      link: '/goods-risk',
    },
    {
      title: 'Services',
      image: servicesImage,
      link: '/services-risk',
    }
  ];

  return (
  <div className="Home-container">
  <div className="Zip-prompt">
  <form>
  <label>
    State:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>

<form>
  <label>
    County:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>

<form>
  <label>
    Zip Code:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>

</div>
  <div className="Home-right-container">
    <h1 className="Click-an-industry"> Click an industry!</h1>
    <div className="card-container">
      {CardsData.map((card,index)=> (
        <a href={card.link} key={index} div className="industry-card">
          <h4 className="industry-title">{card.title}</h4>
          <img className="industry-image" src={card.image}alt={card.title} />
    </a>
    
  ))}
  </div>
</div>
  </div>

  );
};
export default Home;
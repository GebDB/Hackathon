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
    },
    {
      title: 'Healthcare',
      image: healthcareImage,
    },
    {
      title: 'Goods',
      image: goodsImage,
    },
    {
      title: 'Services',
      image: servicesImage,
    }
  ];

  return (
  <div className="Home-right-container">
    <h1 className="Click-an-industry"> Click an industry!</h1>
    <div className="card-container">
      {CardsData.map((card,index)=> (
        <div className="industry-card" key={index}>
          <h4 className="industry-title">{card.title}</h4>
          <img className="industry-image" src={card.image}alt={card.title} />
    </div>
  ))}
  </div>
</div>
  );
};
export default Home;
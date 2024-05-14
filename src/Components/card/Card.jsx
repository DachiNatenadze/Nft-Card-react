import Nft from "/images/image-equilibrium.jpg";
import Etherium from "/images/icon-ethereum.svg";
import Time from "/images/icon-clock.svg";
import Profile from "/images/image-avatar.png";
import "./card.css";

export default function Card() {
  return (
    <>
    <div className="Container">
      <img className="nftt" src={Nft} alt="nft" />
      <h1>Equilibrium #3429</h1>
      <p>Our Equilibrium collection promotes balance and calm. </p>
      <div className="info-container">
        <div className="eth">
          <img src={Etherium} alt="eth" />
          <span>0.041 ETH</span>
        </div>
        <div className="Time">
          <img src={Time} alt="Clock" />
          <span>3 days left</span>
        </div>
      </div>
      <div className="Profile">
        <img src={Profile} alt="profile" />
        <p>
          Creation of <span>Jules Wyvern</span>
        </p>
      </div>
    </div>
    </>
  );
}

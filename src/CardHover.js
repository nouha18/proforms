import React from 'react';
import './App.css';
import icon from './images/mobicon.png';
function Cards(props){
return(
<div className="box-card">
<div className="head-card">
<span className="num-cards">
&nbsp;&nbsp;12
</span>
<h2>Development Web</h2>
</div>
<div className="content-card">
<p>{props.children}
</p>
<span> Website : "https://****.com"</span>
  <img src={icon} className="icon-card" alt="icon"/>
</div>
</div>
);
}

function CardsWrap(){
  return(
    <div>
<Cards>
This browser support data is from Caniuse, which has more detail. A number indicates that browser supports the feature at that version and up.
</Cards>

    </div>
  );
}
export default CardsWrap;

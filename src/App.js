import React, { useState } from 'react';
import Gallery from "./components/Gallery";
import { Landscape, Models } from "./components/Data";
import Card from "./components/Card";


import './App.css';

function App() {

    const [model, setModel] = useState(false);
    const [temperingImgSrc, setTemperingImgSrc] = useState('');

    const getImg = (imgSrc) => {
        setTemperingImgSrc(imgSrc);
        setModel(true);
    }

    return (
      <div className="App">
        <section>
          <div>
            <h1>Photo Gallery</h1>
            <p>Some text content goes here</p>
          </div>
        </section>

{/* Landscape Section */}

        <section>
          <h3>Landscape Images</h3>
          <Card model={model} temperingImgSrc={temperingImgSrc} setModel={setModel}/>
          <div className="gallery"> 
            {Landscape.map((item, index) => {
              return (
                <div className="pics" index={index}>
                  <Gallery item={item.imgSrc} index={index} key={item.id} getImg={getImg}/>
                </div>
              )
            })}
          </div>
        </section>

{/* Model section */}

        <section>
          <h3>Model Images</h3>
          <Card model={model} temperingImgSrc={temperingImgSrc} setModel={setModel}/>
          <div className="gallery"> 
            {Models.map((item, index) => {
              return (
                <div className="pics" index={index}>
                  <Gallery item={item.imgSrc} index={index} key={item.id} getImg={getImg} />
                </div>
              )
            })}
          </div>
        </section>
      </div>
    );
}

export default App;

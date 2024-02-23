/* jshint ignore:start */
import './App.css';
import MyNavbar from './components/navbar';

import mainPic from './images/main-picture.png';
import aslPic from './images/asl logo.png';
import islPic from './images/isl logo.png';

function App() {
  return (
    <div className="App">
      <div>
        <MyNavbar></MyNavbar>
      </div> 

      <div className='topContainer'>  
        <div className='contents'>    
          <div className='titles'>
            Sign Language Translator
          </div>
        </div>
        <div className='image1'>    
          <img className='mainImage' src={mainPic} alt=''></img>
        </div> 
      </div> 
      
      <div className='middleContainer'>
        <div className='container1'>
          <div className='aslContainer'>
            <div className='imageContainer'>
              <img className='logo' src={aslPic} alt=''></img>
            </div>
            <div className='contents1'>
              <div className='text'>
                <p className='mainTitle'>American Sign Language</p>
                <p className='line'>Translate between ASL and text with the following links..</p>
              </div>
              <div className='links'>
                <a class="btn btn-info link1" href="/asl2text" role="button">ASL to Text</a>
                <a class="btn btn-info link1" href="/text2asl" role="button">Text to ASL</a>
              </div>
            </div>
          </div>
        </div>
        <div className='container2'>
          <div className='islContainer'>
            <div className='imageContainer'>
              <img className='logo' src={islPic} alt=''></img>
            </div>
            <div className='contents1'>
              <div className='text'>
                <p className='mainTitle'>Indian Sign Language</p>
                <p className='line'>Translate between ISL and text with the following links..</p>
              </div>
              <div className='links'>
                <a class="btn btn-info link1" href="/isl2text" role="button">ISL to Text</a>
                <a class="btn btn-info link1" href="/text2isl" role="button">Text to ISL</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

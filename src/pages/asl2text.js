/* jshint ignore:start */
import MyNavbar from '../components/navbar';
import Camera from './aslCamera';
import './asl2text.css';

function Asl2Text() {  
  return (
      <div className="App">
        <div calssName="navbar">
          <MyNavbar />
        </div>
        <div calssName="camera">
          <Camera />
        </div>
      </div>
    );
}

export default Asl2Text;
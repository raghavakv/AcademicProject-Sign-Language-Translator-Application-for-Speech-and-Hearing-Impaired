/* jshint ignore:start */
import MyNavbar from '../components/navbar';
import Camera from './islCamera';
import './isl2text.css';

function Isl2Text() {
  return (
    <div className="App">
      <div calssName="navbar">
        <MyNavbar />
      </div>
      <div calssName="Cam">
        <Camera />
      </div>
    </div>
  );
}

export default Isl2Text;
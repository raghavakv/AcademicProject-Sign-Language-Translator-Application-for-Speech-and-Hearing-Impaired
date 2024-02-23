/* jshint ignore:start */
import React from 'react';
import { useRef, useEffect, useState, useCallback } from 'react';
import * as tf from '@tensorflow/tfjs';
import '@tensorflow/tfjs-backend-webgl';
import './islCamera.css';

function Camera() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const context = useRef(null);
  const [cameraStarted, setCameraStarted] = useState(false);
  const [imageDataURL, setImageDataURL] = useState(null);
  const images = [...Array(26).keys()].map(i => require(`../images/isl/${i+1}.jpg`));
  

  useEffect(() => {
    if (cameraStarted) {
      navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      });
    }
  }, [cameraStarted]);

  useEffect(() => {
    context.current = canvasRef.current.getContext('2d');

    function draw() {
      if (cameraStarted) {
        context.current.save();
        context.current.scale(-1, 1);
        context.current.drawImage(videoRef.current, 0, 0, -canvasRef.current.width, canvasRef.current.height);
        context.current.restore();

        // highlight 3/4 area from top-right corner of the camera frame
        context.current.fillStyle = 'rgba(255, 0, 0, 0.5)';
        //context.current.fillRect(canvasRef.current.width / 2, 0, canvasRef.current.width / 2, (3 / 4) * canvasRef.current.height);
        context.current.fillRect(0, 0, canvasRef.current.width-200, canvasRef.current.height);
        context.current.fillRect(canvasRef.current.width-200, canvasRef.current.height-200, 200, 200);


        requestAnimationFrame(draw);
      }
    }

    requestAnimationFrame(draw);
  }, [cameraStarted]);

  const handleStartClick = () => {
    setCameraStarted(true);
  };

  const handleStopClick = () => {
    setCameraStarted(false);
    if (videoRef.current.srcObject) {
      videoRef.current.srcObject.getTracks().forEach(track => track.stop());
    }
  };

  async function predict() {
    const loadedModel = await tf.loadLayersModel('.//files/asl/model.json');
    const model = loadedModel;
    // Retrieve the pixel data of the highlighted area
    const imageData = context.current.getImageData(canvasRef.current.width-200, 0, 200, 200);
    
    // Preprocess the image data
    const tensor = tf.browser.fromPixels(imageData).toFloat();
    console.log(tensor)
    const resized = tf.image.resizeBilinear(tensor, [200, 200]);
    console.log(resized)
    const offset = tf.scalar(127.5);
    const normalized = resized.div(offset).sub(tf.scalar(1.0));
    const batched = normalized.expandDims(0);
  
    // Make the prediction
    const prediction = await model.predict(batched).data();
    console.log('Prediction:', prediction);
  
    // Set the predicted text in the state
    const predictedText = String.fromCharCode(65 + prediction.indexOf(Math.max(...prediction)));
    document.querySelector(".predicted-text").value = predictedText;
  }
  

  const handleCaptureClick = useCallback(async () => {

    await predict();

    // Retrieve the pixel data of the highlighted area
    const imageData = context.current.getImageData(canvasRef.current.width-200, 0, 200, 200);
    console.log(`Image size: ${imageData.width} x ${imageData.height} pixels`);

    
    
    const tempCanvas = document.createElement("canvas");
    tempCanvas.width = 200;
    tempCanvas.height = 200;
    tempCanvas.getContext("2d").putImageData(imageData, 0, 0);

    // Convert the canvas to a data URL
    const dataURL = tempCanvas.toDataURL();
    setImageDataURL(dataURL);
  }, []);

  return (
    <div className='islCamera-container'>
    <div className="row row1">
        <div className='col'>
            <div className="left-side">
                <div className="camera">
                        <video ref={videoRef} style={{ display: 'none' }} />
                        <canvas className='canvas' ref={canvasRef} width={640} height={480} />
                    <div className='buttons'>
                        <button className="btn btn-info btn-lg button1" onClick={handleStartClick}>Start</button>
                        <button className="btn btn-info btn-lg button2" onClick={handleStopClick}>Stop</button>
                        <button className="btn btn-success btn-lg button3" onClick={handleCaptureClick}>Capture</button>
                    </div>
                </div>
            </div>
        </div>
    <div className='col'>
      <div className="right-side">
        <div className="row">
          <div className='upper-side'>
            <div className="images">
                {images.map((image, i) => (
                    <div className="image" key={i}>
                        <img src={image} alt={`${i}`} />
                        <div className="label">{String.fromCharCode(65 + i)}</div>
                    </div>
                ))}
            </div>
          </div>
        </div>
        <div className="row">
            <div className='col'>
                <div className='cam-img'>
                  <h3>Captured Image</h3>
                    <img src={imageDataURL} alt="Captured" />
                </div>
            </div>
            <div className='col'>
                <div className='predicted'>
                     <h3>Predicted text</h3>
                     <textarea className="predicted-text" readOnly />
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  );
}

export default Camera;
/* eslint-disable no-template-curly-in-string */
/* jshint ignore:start */
import React, { useState } from 'react';
import MyNavbar from '../components/navbar';
import './text2asl.css'

import a from '../images/aslLabled/a.png';
import b from '../images/aslLabled/b.png';
import c from '../images/aslLabled/c.png';
import d from '../images/aslLabled/d.png';
import e from '../images/aslLabled/e.png';
import f from '../images/aslLabled/f.png';
import g from '../images/aslLabled/g.png';
import h from '../images/aslLabled/h.png';
import i from '../images/aslLabled/i.png';
import j from '../images/aslLabled/j.png';
import k from '../images/aslLabled/k.png';
import l from '../images/aslLabled/l.png';
import m from '../images/aslLabled/m.png';
import n from '../images/aslLabled/n.png';
import o from '../images/aslLabled/o.png';
import p from '../images/aslLabled/p.png';
import q from '../images/aslLabled/q.png';
import r from '../images/aslLabled/r.png';
import s from '../images/aslLabled/s.png';
import t from '../images/aslLabled/t.png';
import u from '../images/aslLabled/u.png';
import v from '../images/aslLabled/v.png';
import w from '../images/aslLabled/w.png';
import x from '../images/aslLabled/x.png';
import y from '../images/aslLabled/y.png';
import z from '../images/aslLabled/z.png';

function Text2Asl() {
  const [text, setText] = useState('');

    const images = {
      a,
      b,
      c,
      d,
      e,
      f,
      g,
      h,
      i,
      j,
      k,
      l,
      m,
      n,
      o,
      p,
      q,
      r,
      s,
      t,
      u,
      v,
      w,
      x,
      y,
      z,
    };

    const displayImages = () => {
      const letters = text.toLowerCase().split('');
      let imageElements = [];
      for (let i = 0; i < letters.length; i++) {
        if (letters[i] === ' ') {
          // add a space element
          imageElements.push(<span key={i}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>);
        } else {
          // add an image element
          imageElements.push(
            <img 
              key={i} 
                src={images[letters[i]]} 
                alt={letters[i]}
                className="text2asl-image"
            />
          );
        }
      }
      return imageElements;
    };
  return (
    <div className="text2asl-container">
      <MyNavbar />
      <div className="text2asl-input-container">
        <h3>Enter to Translate..</h3>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          aria-label="Enter your text:"
          className="text2asl-input"
        />
      </div>
      <div className="text2asl-image-container">
        {displayImages()}
      </div>
    </div>
  );
}

export default Text2Asl;
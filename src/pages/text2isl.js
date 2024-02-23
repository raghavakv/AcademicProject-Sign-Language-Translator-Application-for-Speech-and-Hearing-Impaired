/* jshint ignore:start */
import React, { useState } from 'react';
import MyNavbar from '../components/navbar';
import './text2isl.css'

import a from '../images/islLabled/a.jpg';
import b from '../images/islLabled/b.jpg';
import c from '../images/islLabled/c.jpg';
import d from '../images/islLabled/d.jpg';
import e from '../images/islLabled/e.jpg';
import f from '../images/islLabled/f.jpg';
import g from '../images/islLabled/g.jpg';
import h from '../images/islLabled/h.jpg';
import i from '../images/islLabled/i.jpg';
import j from '../images/islLabled/j.jpg';
import k from '../images/islLabled/k.jpg';
import l from '../images/islLabled/l.jpg';
import m from '../images/islLabled/m.jpg';
import n from '../images/islLabled/n.jpg';
import o from '../images/islLabled/o.jpg';
import p from '../images/islLabled/p.jpg';
import q from '../images/islLabled/q.jpg';
import r from '../images/islLabled/r.jpg';
import s from '../images/islLabled/s.jpg';
import t from '../images/islLabled/t.jpg';
import u from '../images/islLabled/u.jpg';
import v from '../images/islLabled/v.jpg';
import w from '../images/islLabled/w.jpg';
import x from '../images/islLabled/x.jpg';
import y from '../images/islLabled/y.jpg';
import z from '../images/islLabled/z.jpg';

function Text2Isl() {
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
                className="text2isl-image"
            />
          );
        }
      }
      return imageElements;
    };

  return (
    <div className="text2isl-container">
      <MyNavbar />
      <div className="text2isl-input-container">
        <h3>Enter to Translate..</h3>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          aria-label="Enter your text:"
          className="text2isl-input"
        />
      </div>
      <div className="text2isl-image-container">
        {displayImages()}
      </div>
    </div>
  );
}

export default Text2Isl;
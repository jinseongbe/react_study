import React, {useState, useEffect} from 'react';
import SketchPaper from '../components/SketchPaper';

function Canvas() {
  return (
    <SketchPaper width={window.innerWidth} height={window.innerHeight}/>
  );
}

export default Canvas;

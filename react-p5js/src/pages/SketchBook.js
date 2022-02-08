import React, {useState, useEffect} from 'react';
import SketchPaper from '../components/SketchPaper';

function SketchBook() {
  
  return (
  <div >
    <SketchPaper width={window.innerWidth} height={window.innerHeight}/>
  </div>
  );
}

export default SketchBook;

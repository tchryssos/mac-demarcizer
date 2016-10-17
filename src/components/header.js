import React from 'react';
import {Link} from 'react-router'

export default function Header(props){
  return(
    <div className="mac-header">
      <Link to="/"><h1>Mac Demarcizer</h1></Link>
    </div>
  )
}

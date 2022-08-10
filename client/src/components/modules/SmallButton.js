import React from 'react'
import '../../styles/components/modules/Button.css';

export default function Button(props) {

  return (
    <button className='go_button_small' onClick={props.onClick}>{props.title}</button>
  )
}

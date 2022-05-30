import React from 'react'
import style from '../Clothing/style.module.css'

export default function Clothing(props) {
    const {urlImage, name, text1, text2, text3, text4} = props
  return (
    <div className={style.wrapper}>
        <div className={style.image}>
            <img src={require('' + urlImage)} alt="name" />
        </div>

        <div className={style.infor}>
            <h1>{name}</h1>
            <p>{text1}</p>
            <p>{text2}</p>
            <p>{text3}</p>
            <p>{text4}</p>
        </div>
    </div>
  )
}

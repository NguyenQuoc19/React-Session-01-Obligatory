import React from 'react'
import style from './style.module.css'

export default function Technology(props) {
    const {urlImage, type, name, date, by} = props
  return (
      <div className={style.wrapper}>
          <div className={style.image}>
              <img src={require('' + urlImage)} alt="" />
          </div>

          <p>{type}</p>
          <h1>{name}</h1>
          <div className={style.auth}>
              <p>{date}</p>
              <p>by</p>
              <p className={style.by}>{by}</p>
          </div>
      </div>
  )
}

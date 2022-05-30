import React from 'react'
import style from './style.module.css'

export default function TV(props) {
    const {urlImage, nameShop, nameTV, number, unit, price} = props
  return (
      <div className={style.wrapper}>
          <div className={style.image}>
              <img src={require('' + urlImage)} alt="" />
          </div>

          <div className={style.infor}>
              <div className={style.nameShop}>
                <p>{nameShop}</p>
              </div>

              <h1>{nameTV}</h1>

              <div className={style.report}>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <p>{number}</p>
              </div>

              <div className={style.price}>
                  <span>{unit}</span>
                  <p>{price}</p>
              </div>
          </div>
      </div>
  )
}

import React from 'react'
import { BUY_NOW } from '../../shared/Contants'
import './menu-item.styles.scss'

const MenuItem = ({ title, imageUrl, size }) => (
    <div className={`${size} menu-item`}>
        <div
            className='background-image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        />
        <div className='content'>
            <div className='title'>{title}</div>
            <span className='subtitle'>{BUY_NOW}</span>
        </div>
    </div>
)

export default MenuItem
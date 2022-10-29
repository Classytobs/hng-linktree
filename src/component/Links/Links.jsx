import React from 'react'
import './Links.css'
import { Data } from '../Data/Data'

export default function Links() {
  return (
    <div className="Links">
      {Data.map((data, key) => (
        <div className="frame" key={key}>
          <a href={data.url} id={data.id} target="_blank" rel="none">
            {data.name}
          </a>
        </div>
      ))}
    </div>
  )
}

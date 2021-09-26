import * as React from "react"
import { Link } from "gatsby"

const Deatil = ({message, index}) => {
  return (
    <div tabindex={index} className="collapse w-auto">
      <div className="collapse-title text-sm" style={{minHeight: '2px', padding: '2px'}}>
        詳細
      </div>
      <div className="collapse-content">
        <p>{message}</p>
      </div>
    </div>
  )
}

const Timeline = ({items}) => {
  return (
    <div className="container bg-gray-200 mx-auto w-full h-full">
      <div className="relative wrap overflow-hidden p-1 h-full">
        <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border ml-6"></div>
        {
          items.map((item, index) => {
            return (
              <div className="mb-8 flex items-center w-full right-timeline" key={index}>
                <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-12 h-12 rounded-full">
                  <h1 className="mx-auto font-semibold text-xs text-white">{item.time}</h1>
                </div>
                <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-10/12 px-6 py-4">
                  <h3 className="mb-3 font-bold text-gray-800 text-xl">
                    <div className="flex">
                      {item.name}
                      <img src={ `https://tpf.weathernews.jp/wxicon/152/${item.status}.png` } alt={ `item-weather-${item.name}-${index}` } className="w-10 ml-2" />
                    </div>
                  </h3>
                  <Deatil message={item.content} index={index} />
                  <img src={item.image_url} alt={ `item-${item.name}-${index}` } className="w-full" />
                  <Link className="btn btn-sm m-1" to={item.google_map_url} >マップ</Link>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Timeline;

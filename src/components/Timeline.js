import * as React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown, faUtensils, faUniversity } from '@fortawesome/free-solid-svg-icons'


const Detail = ({message}) => {
  return (
    <div tabindex="0" class="collapse w-auto">
      <div class="collapse-title text-sm" style={{minHeight: '2px', padding: '2px'}}>
        詳細
      </div>
      <div class="collapse-content">
        <p>{message}</p>
      </div>
    </div>
  )
}

const icon = (item) => {
  switch(item.category) {
    case 'visitPlace':
      return faUniversity
    case 'foodPlace':
      return faUtensils
  }  
}

const TimelineContent = ({item, index}) => {
  const [good, setGood] = React.useState(false)
  const [bad, setBad] = React.useState(false)
  return (
    <div className="mb-8 flex items-center w-full right-timeline" key={index}>
      <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-12 h-12 rounded-full">
        <h1 className="mx-auto font-semibold text-xs text-white">{item.time}</h1>
      </div>
      <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-10/12 px-6 py-4">
        <h3 className="mb-3 font-bold text-gray-800 text-xl">
          <div className="flex justify-between">
            <div>
              {item.name}
            </div>
            <div>
              <img src={ `https://tpf.weathernews.jp/wxicon/152/${item.status}.png` } alt={ `item-weather-${item.name}-${index}` } className="w-10 ml-2" />
            </div>
          </div>
        </h3>
        <img src={item.image_url} alt={ `item-${item.name}-${index}` } className="w-full" />
        <Detail message={item.content} />
        <div class="flex justify-between">
          <div className="flex">
            <button className={`btn btn-sm ${good && 'btn-info'} m-1`} onClick={() => { setGood(!good)} }><FontAwesomeIcon class="h-5" icon={faThumbsUp} /></button>
            <button className={`btn btn-sm ${bad && 'btn-error'} m-1`} onClick={() => { setBad(!bad)} }><FontAwesomeIcon class="h-5" icon={faThumbsDown} /></button>
          </div>
          <div>
            <Link className="btn btn-sm m-1" to={item.google_map_url} >マップ</Link>
          </div>
        </div>
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
            return <TimelineContent item={item} index={index} />
          })
        }
      </div>
    </div>
  )
}

export default Timeline;

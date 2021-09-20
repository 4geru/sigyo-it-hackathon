import * as React from "react"
import Layout from '@components/Layout'
import Card from '@components/Card'
import Breadcrumbs from '@components/Breadcrumbs'
import axios from 'axios'

const useWeatherAPI = () => {
  const [weatherAPIData, setWeatherAPIData] = React.useState(undefined)

  const searchWeatherAPI = (location) => {
    return () => {
      if(location.lat === '' || location.lon === '') return;

      // 緯度経度があるときは処理する
      let config = { 'X-API-Key': 'ciCs66mDVE6OUlonzEs6R95ouMHi5sV7jiAPV0Hf' };
      axios.get(`https://wxtech.weathernews.com/api/v1/ss1wx?lat=${location.lat}&lon=${location.lon}`,{
        headers: config
      }).then(result => {
        console.log({result})
        setWeatherAPIData(result.data.wxdata[0]);
      }).catch(e => {
        // error の時は何もしない
      })
    }
  }

  return { weatherAPIData, searchWeatherAPI, loading: weatherAPIData === undefined }
}

const WeatherAPIComponent = () => {
  const [location, setLocation] = React.useState({lat: '', lon: ''})
  const [activeTab, setActiveTab] = React.useState('mrf')
  const { weatherAPIData, searchWeatherAPI } = useWeatherAPI({lat: location.lat, lon: location.lon})

  const setWeatherAPIByGps = () => {
    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    }

    navigator.geolocation.getCurrentPosition((pos) => {
      const _location = {
        lat: pos.coords.latitude,
        lon: pos.coords.longitude,
      }
      setLocation(_location)
      searchWeatherAPI(_location)()
    }, () => {}, options);
  }
  console.log({weatherAPIData})
  return (
    <div className="grid gap-6">
      <Card>
        <div className="form-control">
          <div className="grid grid-cols-3 gap-4">
            <div>
              <div className="flex space-x-2">
                <input type="number" step="0.0000001" value={location.lat} onChange={(e) => { setLocation({...location, lat: e.target.value}) }} placeholder="緯度: 35.xxxx" className="w-full input input-primary input-bordered" />
              </div>
            </div>
            <div>
              <div className="flex space-x-2">
                <input type="number" step="0.0000001" value={location.lon} onChange={(e) => { setLocation({...location, lon: e.target.value}) }} placeholder="経度: 135.xxx" className="w-full input input-primary input-bordered" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <button className="btn btn-primary" onClick={searchWeatherAPI(location)}>go</button>
              <button className="btn btn-primary" onClick={setWeatherAPIByGps}>get gps</button>
            </div>
          </div>
        </div>
      </Card>
      {
        weatherAPIData?.mrf &&
          <Card title={activeTab}>
            <div className="tabs w-full">
              <a className={`tab tab-lifted ${ activeTab === 'mrf' && 'tab-active' }`} onClick={() => {setActiveTab('mrf')}}>mrf</a>
              <a className={`tab tab-lifted ${ activeTab === 'srf' && 'tab-active' }`} onClick={() => {setActiveTab('srf')}}>srf</a>
              <a className="flex-grow tab tab-lifted"></a>
            </div>
            {
              activeTab === 'mrf' &&
              <table className="table w-full">
                <thead>
                  <tr>
                    <td>wx icon</td>
                    {
                      Object.keys(weatherAPIData.mrf[0]).map((key) =>
                        (<th key={`title-${key}`}>{key}</th> ))
                    }
                  </tr>
                </thead>
                <tbody>
                  {Object.keys(weatherAPIData.mrf).map((index) => (
                    <tr key={`tr-mrf-${index}`} className="hover">
                      <td>
                        <img
                          src={`https://tpf.weathernews.jp/wxicon/152/${weatherAPIData.mrf[index].wx}.png`}
                          alt="icon"
                          className='w-15 h-10'
                        />
                      </td>
                      {Object.values(weatherAPIData.mrf[index]).map((text, tdIndex) =>
                        (
                          <td key={`td-mrf-${index}-${tdIndex}`}>{text}</td>
                        ))
                      }
                    </tr>
                  ))}
                </tbody>
              </table>
            }

            {
              activeTab === 'srf' &&
              <table className="table w-full">
                <thead>
                  <tr>
                    <td>wx icon</td>
                    {
                      Object.keys(weatherAPIData.srf[0]).map((key) =>
                        (<th key={`title-${key}`}>{key}</th> ))
                    }
                  </tr>
                </thead>
                <tbody>
                  {Object.keys(weatherAPIData.srf).map((index) => (
                    <tr key={`tr-srf-${index}`} className="hover">
                      <td>
                        <img
                          src={`https://tpf.weathernews.jp/wxicon/152/${weatherAPIData.srf[index].wx}.png`}
                          alt="icon"
                          className='w-15 h-10'
                        />
                      </td>
                      {Object.values(weatherAPIData.srf[index]).map((text, tdIndex) =>
                        (
                          <td key={`td-srf-${index}-${tdIndex}`}>{text}</td>
                        ))
                      }
                    </tr>
                  ))}
                </tbody>
              </table>
            }
          </Card>
      }
    </div>
  )
}

const Page = () => {
  return (
    <Layout pageTitle="Weathernews API">
      <Breadcrumbs
        breadcrumbs={
          [
            {link: '/', title: 'home'},
            {link: '/playground', title: 'PlayGround'},
            {link: '/playground/api/weathernews', title: 'weathernews'}
          ]
        }
      />
      <WeatherAPIComponent />
    </Layout>
  )
}

export default Page

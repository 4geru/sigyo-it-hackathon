import * as React from "react"
import Layout from '@components/Layout'
import Map from '@components/Map'
import InfoAlert from '@components/InfoAlert'
import Modal from '@components/Modal'
import SideModal from '@components/SideModal'
import Card from '@components/Card'
import Breadcrumbs from '@components/Breadcrumbs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { Link } from "gatsby"

const StepsCard = () => {
  return (
    <Card>
      <div className="overflow-x-auto">
        <ul className="w-full steps">
          <li data-content="☂️" className="step">1</li>
          <li data-content="❄️" className="step step-secondary">2</li>
          <li data-content="🌧️" className="step step-secondary">3</li>
          <li data-content="☀️" className="step step-secondary">4</li>
          <li data-content="☁️" className="step">5</li>
          <li data-content="⛈️" className="step step-accent">6</li>
          <li data-content="🍱" className="step step-accent">7</li>
          <li data-content="🍱" className="step">8</li>
          <li data-content="🍱" className="step step-error">9</li>
          <li data-content="🍱" className="step step-error">10</li>
          <li data-content="🍱" className="step">11</li>
          <li data-content="🍱" className="step">12</li>
          <li data-content="🍱" className="step step-warning">13</li>
          <li data-content="🍱" className="step step-warning">14</li>
          <li data-content="🍱" className="step">15</li>
          <li data-content="🍱" className="step step-neutral">16</li>
          <li data-content="🍱" className="step step-neutral">17</li>
          <li data-content="🍱" className="step step-neutral">18</li>
          <li data-content="🍱" className="step step-neutral">19</li>
          <li data-content="🍱" className="step step-neutral">20</li>
          <li data-content="🍱" className="step step-neutral">21</li>
          <li data-content="🍱" className="step step-neutral">22</li>
          <li data-content="🍱" className="step step-neutral">23</li>
        </ul>
      </div>
    </Card>
  )
}

const PlayGroundCard = () => {
  return <Card
    title={'Playground'}
  >
    <div className="grid w-full gap-6">
      <InfoAlert>
        class="" must be change className=""
      </InfoAlert>
      <div className="grid grid-cols-4 gap-6">
        <Card title="Icon">
          <table className="table table-auto">
            <thead>
              <tr style={{textAlign: 'left'}}>
                <th>font awesome</th>
                <th>image</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                </td>
                <td>
                  <img src={'/images/pin_red.png'} alt="Logo" className="h-10 w-10" />
                </td>
              </tr>
            </tbody>
          </table>
        </Card>
        <Card title="Modal">
          <div className="flex">
            <Modal
              modalId={'my-modal-2'}
              buttonText={'open modal'}
            >
              <p>Enim dolorem dolorum omnis atque necessitatibus. Consequatur aut adipisci qui iusto illo eaque. Consequatur repudiandae et. Nulla ea quasi eligendi. Saepe velit autem minima.</p>
              <div className="modal-action">
                <label htmlFor='my-modal-2' className="btn btn-primary">Accept</label>
                <label htmlFor='my-modal-2' className="btn">Close</label>
              </div>
            </Modal>
            <SideModal
              title={'Panel title'}
              buttonText={'open side modal'}
            >
              <p>Enim dolorem dolorum omnis atque necessitatibus. Consequatur aut adipisci qui iusto illo eaque. Consequatur repudiandae et. Nulla ea quasi eligendi. Saepe velit autem minima.</p>
            </SideModal>
          </div>
        </Card>
        <Card title="API sample">
          <div className="flex gap-6">
            <Link className="btn btn-outline" to="/playground/api/google_spread_sheet">GAS</Link>
            <Link className="btn btn-outline" to="/playground/api/weathernews">WeatherNews</Link>
          </div>
        </Card>
        <Card title="Reference" className="col-span-2">
          <div className="flex gap-6">
            <Link className="btn btn-outline" to="https://www.gatsbyjs.com/docs/reference/" target="_blank">Gatsby</Link>
            <Link className="btn btn-outline btn-primary" to="https://tailwindcss.com/docs/grid-template-columns" target="_blank">Tailwind CSS</Link>
            <Link className="btn btn-outline btn-primary" to="https://tailwindcomponents.com/" target="_blank">Tailwind Components</Link>
            <Link className="btn btn-outline btn-accent" to="https://daisyui.com/components/divider" target="_blank">daisyUI</Link>
          </div>
        </Card>
        <Card title="Map" className="col-span-2">
          <Map />
        </Card>
      </div>
    </div>
  </Card>
}

const IndexPage = () => {
  return (
    <Layout pageTitle="PlayGround">
      <div className="grid gap-6">
        <Breadcrumbs
          breadcrumbs={
            [
              {link: '/', title: 'home'},
              {link: '/playground', title: 'PlayGround'}
            ]
          }
        />
        <StepsCard />
        <PlayGroundCard />
      </div>
    </Layout>
  )
}

export default IndexPage

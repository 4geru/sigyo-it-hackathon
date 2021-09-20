import * as React from "react"
import Layout from '@components/Layout'
import Map from '@components/Map'
import InfoAlert from '@components/InfoAlert'
import Modal from '@components/Modal'
import SideModal from '@components/SideModal'
import Card from '@components/Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { Link } from "gatsby"

const StepsCardComponent = () => {
  return (
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
  )
}

const IndexPage = () => {
  return (
    <Layout pageTitle="PlayGround">
      <div data-theme="light">
        <div className="grid gap-6">
          <Card>
            <StepsCardComponent />
          </Card>
          <div className="grid grid-cols-2 gap-6">
            <Card>
              <Map />
            </Card>
            <div className="grid grid-row-2 w-full gap-6">
              <Card
                title={'playground'}
              >
                <div className="grid w-full gap-6">
                  <InfoAlert>
                    class="" must be change className=""
                  </InfoAlert>
                  <div className="grid grid-cols-2 gap-6">
                    <Card>
                      <h3>font awesome</h3>
                      <FontAwesomeIcon icon={faMapMarkerAlt} />
                    </Card>
                    <Card>
                      <h3>image</h3>
                      <img src={'/images/pin_red.png'} alt="Logo" className="h-10 w-10" />
                    </Card>
                  </div>
                  <div className="flex-auto gap-6">
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
                </div>
              </Card>
              <Card
                title="reference"
              >
                <div className="flex flex-row gap-6">
                  <Link className="btn btn-outline" to="https://www.gatsbyjs.com/docs/reference/">Gatsby</Link>
                  <Link className="btn btn-outline btn-primary" to="https://tailwindcss.com/docs/grid-template-columns">Tailwind CSS</Link>
                  <Link className="btn btn-outline btn-accent" to="https://daisyui.com/components/divider">daisyUI</Link>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage

import * as React from "react"
import Layout from '../components/Layout'

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#663399",
}

const StepsComponent = () => {
  return (
  <div class="overflow-x-auto">
    <ul class="w-full steps">
      <li data-content="☂️" class="step">1</li> 
      <li data-content="❄️" class="step step-secondary">2</li> 
      <li data-content="🌧️" class="step step-secondary">3</li> 
      <li data-content="☀️" class="step step-secondary">4</li> 
      <li data-content="☁️" class="step">5</li> 
      <li data-content="⛈️" class="step step-accent">6</li> 
      <li data-content="🍱" class="step step-accent">7</li> 
      <li data-content="🍱" class="step">8</li> 
      <li data-content="🍱" class="step step-error">9</li> 
      <li data-content="🍱" class="step step-error">10</li> 
      <li data-content="🍱" class="step">11</li> 
      <li data-content="🍱" class="step">12</li> 
      <li data-content="🍱" class="step step-warning">13</li> 
      <li data-content="🍱" class="step step-warning">14</li> 
      <li data-content="🍱" class="step">15</li> 
      <li data-content="🍱" class="step step-neutral">16</li> 
      <li data-content="🍱" class="step step-neutral">17</li> 
      <li data-content="🍱" class="step step-neutral">18</li> 
      <li data-content="🍱" class="step step-neutral">19</li> 
      <li data-content="🍱" class="step step-neutral">20</li> 
      <li data-content="🍱" class="step step-neutral">21</li> 
      <li data-content="🍱" class="step step-neutral">22</li> 
      <li data-content="🍱" class="step step-neutral">23</li> 
    </ul>
  </div>
  )
}

const IndexPage = () => {
  return (
    <Layout pageTitle="About Me">
          <main style={pageStyles}>
      <title>Home Page</title>
      <h1 style={headingStyles}>
        Congratulations
        <br />
      </h1>
      <div data-theme="light">
      <StepsComponent />
    </div>

    
    </main>
    </Layout>
  )
}

export default IndexPage

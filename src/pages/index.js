import * as React from "react"
import Layout from '@components/Layout'
import { Link } from "gatsby"

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const IndexPage = () => {
  return (
    <Layout pageTitle="Top">
      <main style={pageStyles}>
        <title>Home Page</title>
        <div className="grid place-items-center">
          <Link className="btn btn-wide" to="/playground">PlayGround</Link>
        </div>
      </main>
    </Layout>
  )
}

export default IndexPage

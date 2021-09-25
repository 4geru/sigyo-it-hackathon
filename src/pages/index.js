import * as React from "react"
import Layout from '@components/Layout'
import { Link } from "gatsby"

const IndexPage = () => {
  return (
    <Layout pageTitle="Top">
      <title>Home Page</title>
      <div className="grid place-items-center">
        <Link className="btn btn-wide" to="/playground">PlayGround</Link>
        <Link className="btn btn-wide" to="/search_result">検索結果</Link>
      </div>
    </Layout>
  )
}

export default IndexPage

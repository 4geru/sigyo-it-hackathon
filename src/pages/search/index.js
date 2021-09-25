import * as React from "react"
import Layout from '@components/Layout'
import { Link } from "gatsby"

const IndexPage = () => {
  return (
    <Layout pageTitle="Top">
      <title>旅ネーター</title>
      <div className="grid place-items-center">
        <div>
          誰と一緒に行く？
        </div>
        <div className="search-answer">
          <Link className="btn btn-wide" to="/search2">恋人</Link>
        </div>
        <div className="search-answer">
          <Link className="btn btn-wide" to="/search2">家族</Link>
        </div>
        <div className="search-answer">
          <Link className="btn btn-wide" to="/search2">友達</Link>
        </div>
        <div className="search-answer">
          <Link className="btn btn-wide" to="/search2">ひとりで</Link>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage

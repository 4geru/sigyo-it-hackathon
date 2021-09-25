import * as React from "react"
import Layout from '@components/Layout'
import { Link } from "gatsby"

const IndexPage = () => {
  return (
    <Layout pageTitle="Top">
      <title>旅ネーター</title>
      <div className="grid place-items-center">
        <div>
          ビショビショになりたい？
        </div>
        <div className="search-answer">
          <Link className="btn btn-wide" to="/result">はい</Link>
        </div>
        <div className="search-answer">
          <Link className="btn btn-wide" to="/result">いいえ</Link>
        </div>
        <div className="search-answer">
          <Link className="btn btn-wide" to="/result">わからない</Link>
        </div>
        <div className="search-answer">
          <Link className="btn btn-wide" to="/result">たぶんそう/部分的にそう</Link>
        </div>
        <div className="search-answer">
          <Link className="btn btn-wide" to="/result">たぶん違う/そうでもない</Link>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
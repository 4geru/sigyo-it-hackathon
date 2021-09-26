import * as React from "react"
import Layout from '@components/Layout'
import { Link } from "gatsby"
import Card from '@components/Card'

const IndexPage = () => {
  return (
    <Layout pageTitle="カテゴリー">
      <title>カテゴリー</title>
      <div className="grid place-items-center">
        {/* <Link className="btn btn-wide" to="/playground">PlayGround</Link>
        <Link className="btn btn-wide" to="/search_result">検索結果</Link> */}

        <Card title={'カテゴリー'}>
          <div className="search-answer">
            <Link className="btn btn-wide" to="/search/1">カテゴリから探す</Link>
          </div>
          <div className="search-answer">
            <Link className="btn btn-wide" to="/search/1">現在地から探す</Link>
          </div>
          <div className="search-answer">
            <Link className="btn btn-wide" to="/search/1">観光地から探す</Link>
          </div>
        </Card>
      </div>
    </Layout>
  )
}

export default IndexPage

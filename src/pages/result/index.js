import * as React from "react"
import Layout from '@components/Layout'
import { Link } from "gatsby"

const IndexPage = () => {
  return (
    <Layout pageTitle="Top">
      <title>旅ネーター</title>
      <div className="grid place-items-center">
        あなたにおすすめの旅はこちら
      </div>
    </Layout>
  )
}

export default IndexPage
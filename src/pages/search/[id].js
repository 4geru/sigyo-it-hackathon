import * as React from "react"
import Card from '@components/Card'
import Layout from '@components/Layout'
import { Link } from "gatsby"

const qas = [
  { id: 1, title: '女の子がいる？'},
  { id: 2, title: '車は使える？'},
  { id: 3, title: 'ドキドキしたい？'},
  { id: 4, title: '雷の音はノスタルジーだと思う？'},
  { id: 5, title: 'びしょびしょになりたい？'},
];

function Button(props) {
    return  <div className="search-answer">
        <Link className="btn btn-wide" to={props.url}>{props.name}</Link>
    </div>;
}

function Selector(title,url){
    return <Layout pageTitle="Top">
      <title>タビネーター</title>
      <Card title={title}>
        <div className="grid place-items-center">
          <Button name= 'はい' url = {url}/>
          <Button name= 'いいえ' url = {url}/>
          <Button name= 'わからない' url = {url}/>
          <Button name= 'たぶんそう/部分的にそう' url = {url}/>
          <Button name= "たぶん違う/そうでもない"  url = {url}/>
        </div>
      </Card>
    </Layout>
}

const IndexPage = ({params}) => {
  var id = Number(params.id)
  var nextPage = id + 1
  var qa = qas.filter(e => e.id === id)[0]
  var nextQa = qas.filter(e => e.id === id + 1)
  console.log(nextQa)
  if (id == qas.length){
    return Selector(qa.title, "/result")
  } else {
    return Selector(qa.title, "/search/" + nextPage)
  }
}

export default IndexPage

import * as React from "react"
import Layout from '@components/Layout'
import Timeline from '@components/Timeline'
import Loading from '@components/Loading'
import { Link } from "gatsby"

const sleep = msec => new Promise(resolve => setTimeout(resolve, msec));

const modelRoute = [
  [ // 晴れルート
    {
      time: '10:00',
      name: '厳島神社',
      content: '「神を斎（いつ）き祀（まつ）る島」という語源のように、古くから島そのものが神として信仰されていたという厳島（宮島）。その海上に神秘的に建っている嚴島神社は、1996年世界遺産に登録された。',
      lat: 34.174568,
      log: 132.191162,
      status: 100,
      image_url: 'https://www.be-en.co.jp/upload/save_image/M81-596.jpg',
      google_map_url: 'https://goo.gl/maps/qK7AAsEtiJ6y6xZe6',
    },
    {
      time: '13:00',
      name: '牡蠣屋',
      content: '宮島で新鮮な牡蠣を心ゆくまでご堪能ください。',
      lat: 34.174568,
      log: 132.191162,
      status: 200,
      image_url: 'https://www.begladstore.com/blog/wp-content/uploads/2015/07/IMG_8776.jpg',
      google_map_url: 'https://goo.gl/maps/qK7AAsEtiJ6y6xZe6',
    },
    {
      time: '15:00',
      name: '原爆ドーム',
      content: '世界平和の祈りを込めたヒロシマの象徴は世界平和を訴えようと市民が一丸となって働きかけたことで、1996年世界遺産に登録された。',
      lat: 34.174568,
      log: 132.191162,
      status: 200,
      image_url: 'https://www.begladstore.com/blog/wp-content/uploads/2015/07/IMG_8776.jpg',
      google_map_url: 'https://goo.gl/maps/qK7AAsEtiJ6y6xZe6',
    },
    {
      time: '18:00',
      name: '電光石火駅前広場店',
      content: '地元の人にも人気のお好み焼き屋。アクセスの抜群でいつも賑わう。',
      lat: 34.174568,
      log: 132.191162,
      status: 200,
      image_url: 'https://www.begladstore.com/blog/wp-content/uploads/2015/07/IMG_8776.jpg',
      google_map_url: 'https://goo.gl/maps/qK7AAsEtiJ6y6xZe6',
    },












  ],













  [
    // 雨ルート
  ]
]

// https://xxx/search_result?route=1
const items = modelRoute[0]

const Page = () => {
  const [isLodaing, setLoading] = React.useState(true)
  React.useEffect(async () => {
    await sleep(1500)
    setLoading(false)
  });
  if(isLodaing) return <Layout pageTitle="検索中">
    <title>検索中</title>
    <Loading />
  </Layout>

function ReSearch() {
  return  <div className="research-wrap">
    <div className="research">
        <Link className="btn btn-error research-btn" aria-pressed="true" to='/'>やり直す</Link>
      </div>
      <div className="research">
        <Link className="btn btn-success research-btn" aria-pressed="true" to='/search_result'>別プランをみる</Link>
    </div>

    <div className="research">
        <Link className="btn btn-info research-btn" aria-pressed="true" to='/'>保存</Link>
    </div>
   </div>
}

  return (
    <Layout pageTitle="検索結果">
      <title>検索結果</title>
      <h1 className="text-2xl">検索結果</h1>
      <Timeline items={items} />

      <ReSearch/>
    </Layout>
  )
}

export default Page

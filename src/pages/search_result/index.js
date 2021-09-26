import * as React from "react"
import Layout from '@components/Layout'
import Timeline from '@components/Timeline'
import Loading from '@components/Loading'

const sleep = msec => new Promise(resolve => setTimeout(resolve, msec));

const Page = () => {
  const items = [
    {
      time: '12:00',
      name: '厳島神社',
      content: '「神を斎（いつ）き祀（まつ）る島」という語源のように、古くから島そのものが神として信仰されていたという厳島（宮島）。その海上に神秘的に建っている嚴島神社は、1996年世界遺産に登録された。',
      lat: 34.174568,
      log: 132.191162,
      status: 100,
      image_url: 'https://www.be-en.co.jp/upload/save_image/M81-596.jpg',
      google_map_url: 'https://goo.gl/maps/qK7AAsEtiJ6y6xZe6',
    },
    {
      time: '18:00',
      name: '猫の細道',
      content: '猫の細道いいよ〜',
      lat: 34.174568,
      log: 132.191162,
      status: 200,
      image_url: 'https://www.begladstore.com/blog/wp-content/uploads/2015/07/IMG_8776.jpg',
      google_map_url: 'https://goo.gl/maps/qK7AAsEtiJ6y6xZe6',
    },
  ]

  const [isLodaing, setLoading] = React.useState(true)
  React.useEffect(async () => {
    await sleep(1500)
    setLoading(false)
  });
  if(isLodaing) return <Layout pageTitle="検索中">
    <title>検索中</title>
    <Loading />
  </Layout>

  return (
    <Layout pageTitle="検索結果">
      <title>検索結果</title>
      <h1 className="text-2xl">検索結果</h1>
      <Timeline items={items} />
    </Layout>
  )
}

export default Page

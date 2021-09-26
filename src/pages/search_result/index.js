import * as React from "react"
import Layout from '@components/Layout'
import Timeline from '@components/Timeline'
import Loading from '@components/Loading'
import { Link } from "gatsby"

const sleep = msec => new Promise(resolve => setTimeout(resolve, msec));

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
}

const ReSearch = ({reload}) => {
  const nextRoute = getRandomInt(4)
  return  <div className="research-wrap">
    <div className="research">
        <Link className="btn btn-error research-btn" aria-pressed="true" to='/'>やり直す</Link>
      </div>
      <div className="research">
        <Link className="btn btn-success research-btn" aria-pressed="true" to={ `/search_result?route=${nextRoute}` } onClick={reload}>別プランをみる</Link>
    </div>

    <div className="research">
        <Link className="btn btn-info research-btn" aria-pressed="true" to='/'>保存</Link>
    </div>
   </div>
}


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
      google_map_url: 'https://goo.gl/maps/Cxya6Zd364uv3kRu9',
    },
    {
      time: '13:00',
      name: '牡蠣屋',
      content: '宮島で新鮮な牡蠣を心ゆくまでご堪能ください。',
      lat: 34.29854,
      log: 132.321704,
      status: 200,
      image_url: 'https://tabiiro.jp/lpimg/gourmet/300650/main/img1.jpg',
      google_map_url: 'https://goo.gl/maps/QGbAGWRQJMN2GAVH9',
    },
    {
      time: '15:00',
      name: '原爆ドーム',
      content: '世界平和の祈りを込めたヒロシマの象徴は世界平和を訴えようと市民が一丸となって働きかけたことで、1996年世界遺産に登録された。',
      lat: 34.395483,
      log: 132.453592,
      status: 100,
      image_url: 'https://www.asahicom.jp/articles/images/AS20190907000759_comm.jpg',
      google_map_url: 'https://goo.gl/maps/Cxya6Zd364uv3kRu9',
    },
    {
      time: '18:00',
      name: '電光石火駅前広場店',
      content: '地元の人にも人気のお好み焼き屋。アクセスの抜群でいつも賑わう。',
      lat: 34.396781,
      log: 132.472841,
      status: 100,
      image_url: 'https://park.ajinomoto.co.jp/wp-content/uploads/2018/03/704432.jpeg',
      google_map_url: 'https://goo.gl/maps/XCfWopX5ZvJnj7S79',
    },
  ],
  [ // 雨ルート
    {
      time: '10:00',
      name: 'みやじマリン',
      content: '宮島にある屋内型の水族館はリラックスできるスポットとして家族連れに人気。',
      lat: 34.295403,
      log: 132.315839,
      status: 300,
      image_url: 'https://www.hiroshima-kankou.com/image/rendering/attraction_image/21531/trim.1180/3/2?v=02ee79d3a6453fbe2d6f81fc76e95973d7dcf87b',
      google_map_url: 'https://goo.gl/maps/SVyP4YVqp8gsvUWe7',
    },
    {
      time: '13:00',
      name: '牡蠣屋',
      content: '宮島で新鮮な牡蠣を心ゆくまでご堪能ください。',
      lat: 34.29854,
      log: 132.321704,
      status: 300,
      image_url: 'https://tabiiro.jp/lpimg/gourmet/300650/main/img1.jpg',
      google_map_url: 'https://goo.gl/maps/QGbAGWRQJMN2GAVH9',
    },
    {
      time: '15:00',
      name: '平和記念資料館',
      content: '原爆の悲惨さについての展示で世界的に有名な観光地としていつも賑わっている。',
      lat: 35.691421,
      log: 139.692595,
      status: 300,
      image_url: 'https://www.nishinippon.co.jp/uploads/image/93935/middle_cc79c1cd51.jpg',
      google_map_url: 'https://goo.gl/maps/aKLqisqUjo5vTQTR7',
    },
    {
      time: '18:00',
      name: '電光石火駅前広場店',
      content: '地元の人にも人気のお好み焼き屋。アクセスの抜群でいつも賑わう。',
      lat: 34.396781,
      log: 132.472841,
      status: 300,
      image_url: 'https://park.ajinomoto.co.jp/wp-content/uploads/2018/03/704432.jpeg',
      google_map_url: 'https://goo.gl/maps/XCfWopX5ZvJnj7S79',
    },
  ],
  [ // 晴れ→雨ルート
    {
      time: '10:00',
      name: '厳島神社',
      content: '「神を斎（いつ）き祀（まつ）る島」という語源のように、古くから島そのものが神として信仰されていたという厳島（宮島）。その海上に神秘的に建っている嚴島神社は、1996年世界遺産に登録された。',
      lat: 34.174568,
      log: 132.191162,
      status: 100,
      image_url: 'https://www.be-en.co.jp/upload/save_image/M81-596.jpg',
      google_map_url: 'https://goo.gl/maps/Cxya6Zd364uv3kRu9',
    },
    {
      time: '13:00',
      name: '牡蠣屋',
      content: '宮島で新鮮な牡蠣を心ゆくまでご堪能ください。',
      lat: 34.29854,
      log: 132.321704,
      status: 200,
      image_url: 'https://tabiiro.jp/lpimg/gourmet/300650/main/img1.jpg',
      google_map_url: 'https://goo.gl/maps/QGbAGWRQJMN2GAVH9',
    },
    {
      time: '15:00',
      name: '平和記念資料館',
      content: '原爆の悲惨さについての展示で世界的に有名な観光地としていつも賑わっている。',
      lat: 35.691421,
      log: 139.692595,
      status: 300,
      image_url: 'https://www.nishinippon.co.jp/uploads/image/93935/middle_cc79c1cd51.jpg',
      google_map_url: 'https://goo.gl/maps/aKLqisqUjo5vTQTR7',
    },
    {
      time: '18:00',
      name: '電光石火駅前広場店',
      content: '地元の人にも人気のお好み焼き屋。アクセスの抜群でいつも賑わう。',
      lat: 34.396781,
      log: 132.472841,
      status: 300,
      image_url: 'https://park.ajinomoto.co.jp/wp-content/uploads/2018/03/704432.jpeg',
      google_map_url: 'https://goo.gl/maps/XCfWopX5ZvJnj7S79',
    },
  ],
  [ // 雨→晴れルート
    {
      time: '10:00',
      name: 'みやじマリン',
      content: '宮島にある屋内型の水族館はリラックスできるスポットとして家族連れに人気。',
      lat: 34.295403,
      log: 132.315839,
      status: 300,
      image_url: 'https://www.hiroshima-kankou.com/image/rendering/attraction_image/21531/trim.1180/3/2?v=02ee79d3a6453fbe2d6f81fc76e95973d7dcf87b',
      google_map_url: 'https://goo.gl/maps/SVyP4YVqp8gsvUWe7',
    },
    {
      time: '13:00',
      name: '牡蠣屋',
      content: '宮島で新鮮な牡蠣を心ゆくまでご堪能ください。',
      lat: 34.29854,
      log: 132.321704,
      status: 200,
      image_url: 'https://tabiiro.jp/lpimg/gourmet/300650/main/img1.jpg',
      google_map_url: 'https://goo.gl/maps/QGbAGWRQJMN2GAVH9',
    },
    {
      time: '15:00',
      name: '原爆ドーム',
      content: '世界平和の祈りを込めたヒロシマの象徴は世界平和を訴えようと市民が一丸となって働きかけたことで、1996年世界遺産に登録された。',
      lat: 34.395483,
      log: 132.453592,
      status: 100,
      image_url: 'https://www.asahicom.jp/articles/images/AS20190907000759_comm.jpg',
      google_map_url: 'https://goo.gl/maps/Cxya6Zd364uv3kRu9',
    },    {
      time: '18:00',
      name: '電光石火駅前広場店',
      content: '地元の人にも人気のお好み焼き屋。アクセスの抜群でいつも賑わう。',
      lat: 34.396781,
      log: 132.472841,
      status: 100,
      image_url: 'https://park.ajinomoto.co.jp/wp-content/uploads/2018/03/704432.jpeg',
      google_map_url: 'https://goo.gl/maps/XCfWopX5ZvJnj7S79',
    },
  ]
]

const Page = ({location}) => {
  const params = new URLSearchParams(location.search);
  const route = parseInt(params.get("route")) || 3
  const items = modelRoute[route]

  const [isLodaing, setLoading] = React.useState(true)
  const reload = async () => {
    await sleep(1500)
    setLoading(false)
  }
  React.useEffect(reload);

  if(isLodaing) return <Layout pageTitle="検索中">
    <title>検索中</title>
    <Loading />
  </Layout>

  return (
    <Layout pageTitle="検索結果">
      <title>検索結果</title>
      <h1 className="text-2xl">検索結果</h1>
      <Timeline items={items} />

      <ReSearch reload={async () => {
        setLoading(true)
        reload()
      }} />
    </Layout>
  )
}

export default Page

import * as React from "react"
import Layout from '@components/Layout'
import Timeline from '@components/Timeline'

const Page = () => {
  const items = [
    {
      time: '12:00',
      name: '厳島神社',
      content: '厳島いいよ〜',
      lat: 34.174568,
      log: 132.191162,
      status: 100,
      image_url: 'https://stat.ameba.jp/user_images/20200226/13/miyajimakinsuikan/93/44/j/o0660040014719249324.jpg',
      google_map_url: 'https://goo.gl/maps/qK7AAsEtiJ6y6xZe6',
    },
    {
      time: '18:00',
      name: '猫の細道',
      content: '猫の細道いいよ〜',
      lat: 34.174568,
      log: 132.191162,
      status: 200,
      image_url: 'https://stat.ameba.jp/user_images/20200226/13/miyajimakinsuikan/93/44/j/o0660040014719249324.jpg',
      google_map_url: 'https://goo.gl/maps/qK7AAsEtiJ6y6xZe6',
    },
  ]
  return (
    <Layout pageTitle="検索結果">
      <title>検索結果</title>
      検索結果
      <Timeline items={items} />
    </Layout>
  )
}

export default Page

import * as React from "react"
import { Link } from "gatsby"

const Page = () => {
  return (
    <>
      <title>Home Page</title>
      <div className="hero min-h-screen" style={{backgroundImage: "url(https://picsum.photos/id/1005/1600/1400)"}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="text-center hero-content text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              旅ネーター
            </h1>
            <p className="mb-5">
            あなたの旅、天気によって生まれ変わる
            </p>
            <Link className="btn btn-primary" to="/">Get Started</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page

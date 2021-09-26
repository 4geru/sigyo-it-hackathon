import * as React from 'react'
import Card from '@components/Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import { Link } from "gatsby"

const Alert = () => {
  return (<div className="inset-0 bg-warning fixed flex w-full h-full items-center justify-center duration-300 transition-opacity" style={{ zIndex: 6000 }}>
  <div className="flex-col">
    <Card>
    <div className="flex justify-center">
      <img src="https://4.bp.blogspot.com/-cb2z48B3614/UyrZrlwtgAI/AAAAAAAAeXY/XSsdsv9gczw/s400/lamp_majin.png"></img>
      </div>
      <div className="flex justify-items-center mt-10">
        <h1 class="text-xl">危険な天気が近づいています</h1>
      </div>
        <div class="mt-3 text-sm">
        <ul>
          <li>広島県広島市中区舟入川口町2丁目 には 大雨・嵐 が近づいています。</li>
          <li>身を守ることを最優先にしてください。</li>
        </ul>
        </div>

        <Link class="btn btn-error mt-5" to="https://goo.gl/maps/dU9SrHA6iXUcbkPC6">避難所</Link>
        <Link class="btn btn-error mt-5" to="https://www.jma.go.jp/bosai/warning/#area_type=offices&area_code=340000">警報情報</Link>
    </Card>
  </div>
</div>)
}

export default Alert

import * as React from "react"
import Layout from '@components/Layout'
import Card from '@components/Card'
import axios from 'axios'

const SpreadSheetApiTestComponent = () => {
  const [spreadSheetApiList, setSpreadSheetApiList] = React.useState(undefined)

  // 初期化をする
  React.useEffect(() => {
    axios(
      process.env.SPREAD_SHEET_URL
    ).then(result => {
      setSpreadSheetApiList(result.data);
    })
  }, []);
  console.log({spreadSheetApiList})

  if(!spreadSheetApiList) {
    return (
      <div className="grid justify-items-center">
        <div className="btn btn-lg btn-circle loading" />
      </div>
    )
  }

  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            {
              Object.values(spreadSheetApiList[0]).map((headerText, index) => ( <th key={`title-${index}`}>{headerText}</th> ))
            }
          </tr>
        </thead>
        <tbody>
          {Object.keys(spreadSheetApiList).slice(1).map((index) => (
            <tr key={`tr-${index}`}>
              {Object.values(spreadSheetApiList[index]).map((text, tdIndex) =>
                (
                  <td key={`td-${index}-${tdIndex}`}>
                    {
                      Array.isArray(text) ? text.join(' and ') :
                      // string 型  && png or jpg が含まれている場合は img タグで表示する
                      (typeof text == 'string') && (text.match(/[png|jpg]/)) ?
                        <div className="avatar rounded-btn w-14 h-14">
                          <img src={text} alt={spreadSheetApiList[index].name} />
                        </div>
                      : text
                    }
                  </td>
                ))
              }
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

const Page = () => {
  return (
    <Layout pageTitle="API">
      <Card>
        <SpreadSheetApiTestComponent />
      </Card>
    </Layout>
  )
}

export default Page

import * as React from 'react'

const SideModal = ({ title, children, buttonText }) => {
  const [isModal, setIsModal] = React.useState(false)
  return (
    <>
      <button className="btn m-2" onClick={()=>{setIsModal(true)}}>{buttonText}</button> 
      {isModal &&
        <div className="fixed inset-0 overflow-hidden" aria-labelledby="slide-over-title" role="dialog" aria-modal="true" style={{zIndex:100}}>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"
            onClick={() => {setIsModal(false)}}
          />
          <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
            <div className="relative w-screen max-w-md">
              <div className="absolute top-0 left-0 -ml-8 pt-4 pr-2 flex sm:-ml-10 sm:pr-4">
              </div>
              <div className="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll">
                <div className="px-4 sm:px-6">
                  <h2 className="text-lg font-medium text-gray-900" id="slide-over-title">
                    {title}
                  </h2>
                </div>
                <div className="mt-6 relative flex-1 px-4 sm:px-6">
                  <div className="absolute inset-0 px-4 sm:px-6">
                    <div className="h-full border-gray-200" aria-hidden="true">
                      {children}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      }
    </>
  )
}

export default SideModal

import * as React from 'react'
import { Link } from "gatsby"

// example:
// <Breadcrumbs
//   breadcrumbs={
//     [
//       {link: '/', title: 'home'},
//       {link: '/playground', title: 'playground'},
//       {link: '/playground/api/weathernews', title: 'weathernews'}
//     ]
//   }
// />
const Breadcrumbs = ({ breadcrumbs }) => {
  const lastBreadcrumbsIndex = breadcrumbs.length - 1;
  const activeBreadcrumbs = breadcrumbs[lastBreadcrumbsIndex]
  const previousBreadcrumbs = [...breadcrumbs].splice(0, lastBreadcrumbsIndex)
  return (
    <div className="text-sm breadcrumbs">
      <ul>
        {previousBreadcrumbs.map((breadcrumb) => (
          <li key={breadcrumb.link}>
            <Link to={breadcrumb.link}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
              </svg>
                {breadcrumb.title}
            </Link>
          </li>
        ))}
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
          </svg>
            {activeBreadcrumbs.title}
        </li>
      </ul>
    </div>
  )
}

export default Breadcrumbs

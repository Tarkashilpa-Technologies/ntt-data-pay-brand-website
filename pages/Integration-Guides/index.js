import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import { tutorialGroupDataApi } from '../../services/services'

const IntegrationGuides = () => {
  const [tutorialsData, setTutorialsData] = useState([])

  const tutorialDataApiCall = () => {
    // setShowLoader(true);
    tutorialGroupDataApi()
      .then((res) => {
        // setPageNumber(pageNo ? pageNo : pageNumber);
        setTutorialsData(res?.data?.data)
        // setShowLoader(false);
      })
      .catch((err) => {
        console.log('err', err)
        // setShowLoader(false);
      })
  }

  useEffect(() => {
    tutorialDataApiCall()
  }, [])

  // const DataConversion = (data) => {
  //   console.log(data, "data");
  //   const processedContent = remark().use(html).process(data);
  //   // console.log(processedContent, "processed content");
  //   const contentHtml = processedContent.toString();
  //   // console.log(contentHtml, "content html", processedContent);
  //   return contentHtml;
  // };

  return (
    <div>
      <div className='powerful-gateway overflow-hidden'>
        <div className='pb-4'>
          <div className='container_1300' style={{ minHeight: 600 }}>
            <div className='pt-4 pt-md-5 pt-lg-2 mt-4'>
              <div className='p-5 pb-4 w-100'>
                <h1 className='text-center title-font'>
                  Integrate Our Payment Solution
                </h1>
                <h3 className='text-center pt-3 text-primary'>
                  Learn with our step by step tutorials how to integrate with
                  our solutions
                </h3>
                <p className='pt-2'>
                  Our solutions could help you achieve your every business
                  neeed. Choose your sed case below and we would help you get
                  started with step by step tutorial for the same
                </p>
              </div>

              <div className='pb-4 '>
                <div className='d-flex gap-2 flex-wrap align-items-center justify-content-center h-100 '>
                  {tutorialsData &&
                    tutorialsData?.map((tutorial, index) => {
                      return (
                        <div
                          className='card p-4 m-2 col-lg-3 col-md-4 col-sm-6 col-12 border-0 shadow h-100'
                          key={index}
                          style={{ width: 300 }}
                        >
                          <div
                            className='d-flex flex-column justify-content-between  h-100'
                            style={{ minHeight: 200 }}
                          >
                            <div>
                              <h4 className='text-center'>
                                {tutorial?.attributes?.Title}
                              </h4>
                            </div>
                            <div>
                              <p className='numberOfLinesThree text-center'>
                                {/* <MarkdownPreview
                                source={tutorial?.attributes?.Content}
                              /> */}
                                <ReactMarkdown>
                                  {tutorial?.attributes?.Description}
                                </ReactMarkdown>
                              </p>
                            </div>
                            <div className='d-flex gap-3 align-items-center justify-content-center'>
                              <Link
                                href={
                                  tutorial?.attributes?.tutorials?.data[0]
                                    ?.attributes?.Title != undefined ||
                                  tutorial?.attributes?.tutorials?.data[0]
                                    ?.attributes?.Title != null
                                    ? {
                                        pathname: `/Integration-Guides/${tutorial?.attributes?.tutorials?.data[0]?.attributes?.Title.replace(
                                          /\s+/g,
                                          '-'
                                        )}`,
                                      }
                                    : { pathname: '/404' }
                                }
                              >
                                <a className='btn btn_style1 p-2 px-4'>
                                  Explore
                                </a>
                              </Link>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IntegrationGuides

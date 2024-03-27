import React, { useState } from 'react'

const WasThisPageHelpful = () => {
    const [showHelpfulData, setShowHelpfulData] = useState([]);
  const [pageHelpfulFalseData, setPageHelpfulFalseData] = useState([]);
  const [isPageHelpful, setIsPageHelpful] = useState();


  const pageHelpfulData = [
    {
      id: 1,
      value: "Unable to find information",
    },
    {
      id: 2,
      value: "Difficult to understand",
    },
    {
      id: 3,
      value: "Need more details",
    },
    {
      id: 4,
      value: "Other",
    },
  ];



  const handleSubmit = async (event) => {
    event.preventDefault();
    const new_contact = {
      subject: isPageHelpful
        ? "What was the most helpful ?"
        : "What can be improved ?",
      message: event?.target?.message?.value,
    };
    if (pageHelpfulFalseData?.length > 0) {
      new_contact.html = getHtmlFromCheckBox(pageHelpfulFalseData);
    }
    await fetch("/api/integrationEmail", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(new_contact),
    }).then((res) => {
      // if (res.status === 200) {
      // }
      setIsPageHelpful(null);
      setShowHelpfulData(true);
      console.log(res,"res")
      alert('Response Submitted Successfully !!!')
    },(err) =>{
      setShowHelpfulData(true);
      setIsPageHelpful(null);
      alert(err)
    });
  };

  const reasonSelectionFunction = (data) => {
    setPageHelpfulFalseData((prevArray) => [...prevArray, data]);
  };

  function getHtmlFromCheckBox(data) {
    return (
      <div>
        <ul>
          {data?.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
    );
  }

  return (
    <div>{showHelpfulData &&
        (isPageHelpful == null ? (
          <div className="d-flex flex-sm-row flex-column gap-3 align-items-center w-100">
            <label className="fw-bold fs-6">
              Was this page helpful?
            </label>
            <div className="d-flex gap-2">
              <button
                className="btn border-primary rounded-0 text-primary px-4"
                style={{ backgroundColor: "#F3FFFF" }}
                onClick={() => setIsPageHelpful(true)}
              >
                {" "}
                Yes{" "}
              </button>
              <button
                className="btn border-danger text-danger rounded-0 px-4"
                style={{ backgroundColor: "#FFEAE9" }}
                onClick={() => setIsPageHelpful(false)}
              >
                {" "}
                No{" "}
              </button>
            </div>
          </div>
        ) : (
          <div>
            <form
              onSubmit={(e) => {
                handleSubmit(e);
              }}
            >
              {isPageHelpful == false ? (
                <div>
                  <div>
                    <label className="fw-bold fs-6 pt-2">
                      Let us know what went wrong.
                    </label>
                  </div>
                  <div className="p-2 ps-0">
                    {pageHelpfulData?.map((data, index) => {
                      return (
                        <div
                          className="d-flex align-items-center gap-2 p-1"
                          key={index}
                          id={data?.value?.replace(
                            /\s+/g,
                            "-",
                          )}
                        >
                          <input
                            type="checkbox"
                            onClick={(e) => {
                              // e.preventDefault();
                              reasonSelectionFunction(
                                data.value,
                              );
                            }}
                          />
                          <label>{data?.value}</label>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ) : (
                ""
              )}
              <div className="py-3 d-flex flex-column gap-2">
                <label className="fw-bold fs-6">
                  {isPageHelpful
                    ? "What was most useful?"
                    : "What can be improved?"}
                </label>
                <textarea
                  id="message"
                  required
                  className="w-50 p-2 border-0 bg-lighgray border-bottom border-secondary"
                ></textarea>
              </div>
              <div className="d-flex gap-2">
                <button
                  onClick={() => setIsPageHelpful(null)}
                  className="btn bg-secondary text-white px-4 mt-2 mb-2"
                >
                  Cancel
                </button>
                <button className="btn bg-primary text-white px-4 mt-2 mb-2">
                  Submit
                </button>
              </div>
            </form>
          </div>
        ))}
      {showHelpfulData && (
        <hr className="text-secondary"></hr>
      )}</div>
  )
}

export default WasThisPageHelpful
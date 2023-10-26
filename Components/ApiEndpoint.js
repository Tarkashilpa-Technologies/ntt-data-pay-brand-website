import React from 'react'
import { generateExampleFromSchema, generateSchema, generateSchemaForTable } from '../utils/schema';
import JSONPretty from 'react-json-pretty';

const ApiEndpoint = ({apiData}) => {
      
  const JSONPrettyMon = require("react-json-pretty/dist/monikai");
  return (
    <div>
        <div className="w-100">
        <h1 className="pt-4" id={'Api-Endpoints'}>Api Endpoints </h1>
        {apiData?.attributes?.Defination?.paths && Object.entries(apiData?.attributes?.Defination?.paths)?.map((path,index) => {
        return(
            <div key={index}>
            {/* <div className="py-2 fs-5"><b>Pathname :</b> <span className="text-decoration-underline">""</span></div> */}
            {Object.entries(path[1])?.map((apiName,index) => {
                return(
                <div key={index}>
                    <div>
                    <h2 className="py-3 m-0 pt-4" id={apiName[1]?.summary.replace(/\s+/g, "-")}>{apiName[1]?.summary}</h2>
                    <div className="fw-bold fs-6 rounded-1 border border-primary d-flex my-3" style={{width:'95%'}}> 
                        <div className='border-end p-2 bg-primary text-white px-3'>{apiName[0].charAt(0).toUpperCase() + apiName[0].slice(1)} </div>
                        <div className='text-decoration-underline p-2 text-primary'>{path[0]}</div>
                    </div>
                    {apiName[1].requestBody?.summary && <p className='py-3 mb-0'>{apiName[1].requestBody?.summary}</p>}
                    {apiName[1].requestBody?.description &&<p className='py-3 mb-0'>{apiName[1].requestBody?.description}</p>}
                    <div>
                        {apiName[1].requestBody?.content && Object.entries(apiName[1].requestBody?.content)?.map((item,index) => {
                        if(item[0] == 'application/json')
                        {
                        return(
                            <div>
                            {item[0] &&
                            Object.entries(item[1])?.map((item,index) => {
                                    const result = `${item[0] && Object.entries(item[1])?.map((item, index) => {
                                        return `${Object.entries(item[1])?.map((item, index) => {
                                            return `${item[1].replace(/ \n/g, '')}`;
                                        }).join('')}`;
                                    }).join('')}`
                                const finalResult = result.replace(/#\/components\/schemas\//g, '');
                                const data = apiData?.attributes?.Defination?.components?.schemas && Object.entries(apiData?.attributes?.Defination?.components?.schemas)?.map((item,index) => {                                                                                              
                                    if(finalResult === item[0]){
                                    const tableData = generateExampleFromSchema(item[1]?.properties);
                                   console.log(generateSchemaForTable(item[1]?.properties),"hfjkhjghhvv");
                                   const mainTableData = generateSchemaForTable(item[1]?.properties);
                                    const getFieldDetails = (obj, prefix = '') => {
                                        const fields = [];
                                        for (const key in obj) {
                                        if (typeof obj[key] === 'object' && obj[key] !== null) {
                                            fields.push(...getFieldDetails(obj[key], `${prefix}${key}.`));
                                        } else {
                                            fields.push({
                                            id: `${key}`,
                                            example: obj[key]  ? obj[key] : '-',
                                            description: obj.description ? obj.description :  `This field represents the value of object ${key}`,
                                            });
                                        }
                                        }
                                        return fields;
                                    };
                                    const fieldDetails = getFieldDetails(tableData);
                                    return(
                                    <div className="w-100 react-markdown">
                                        <div>
                                            {Object.keys(mainTableData).map((section, index) => (
                                              <div key={index}>
                                                <p className="py-2 fs-5 fw-bold px-0">Specifications of API Request : </p>
                                                <table className="table table-hover p-2">
                                                <thead className='table-light'>
                                                    <tr>
                                                        <td className='fw-bold'>Field Name</td>
                                                        <td className='fw-bold'> Type </td>
                                                        <td className='fw-bold'> Example </td>
                                                        <td className='fw-bold'>Description</td>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                {Object.keys(mainTableData[section]).map((field) => (
                                                    Object?.keys(mainTableData[section][field]).map((property, propIndex) => {
                                                        if((mainTableData[section][field][property].name))
                                                        {
                                                        return(                                                        
                                                        <tr key={propIndex}>
                                                         <td className="text-break" style={{minWidth: 100}}> {(mainTableData[section][field][property].name)}</td>
                                                         <td className="text-break" style={{minWidth: 100}}> {(mainTableData[section][field][property].type)}</td>
                                                         <td className="text-break"> {(mainTableData[section][field][property].example) ?(mainTableData[section][field][property].example) : '-'}</td>
                                                         <td className="text-break"> {(mainTableData[section][field][property].description) ?(mainTableData[section][field][property].description) : '-'}</td>
                                                      </tr>   
                                                    )}})
                                                ))}
                                                  
                                                </tbody>                                                                                                                                            
                                                </table>
                                                
                                                </div>
                                            ))}
                                        </div>
                                       
                                        {/* <table className="table table-hover p-2">
                                            <thead className='table-light'>
                                                <tr>
                                                    <td className='fw-bold'>Field Name</td>
                                                    <td className='fw-bold'> Example </td>
                                                    <td className='fw-bold'>Description</td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                        {fieldDetails.map((field, index) => (
                                            <tr key={index}>
                                                <td>{field.id.split('.').pop()}</td>
                                                <td className="text-break">{field.example}</td>
                                                <td className="text-break">{field.description}</td>
                                            </tr>    
                                        ))}    
                                        </tbody>                                                                                                                                            
                                        </table> */}
                                        
                                        <p className='pt-3 fw-bold'>Example : </p>
                                        <div className='w-100'>
                                            <JSONPretty
                                            id="json-pretty"
                                            data={generateExampleFromSchema(item[1]?.properties)}
                                            theme={JSONPrettyMon}
                                            themeClassName="p-4 fixed-height-data"
                                            style={{ maxWidth: '100%'}}
                                            ></JSONPretty>
                                        </div>
                                        <div>
                                        </div>
                                    </div>
                                    );
                                    }
                                })
                                return(
                                    <div>{data}</div>
                                )
                                })
                            }
                            </div>
                            
                        );
                        }
                        })}
                        </div>
                    
                    </div>
                    <div>
                    <h5 className="py-3" id={`Responses-${apiName[1]?.summary.replace(/\s+/g,'-')}`}>Responses-{apiName[1]?.summary} </h5>
                    <p>{apiName[1].responses?.description}</p>
                    <div>
                        {apiName[1].responses && Object.entries(apiName[1].responses)?.map((item,index) => {
                        // if(item[0] == 'application/json')
                        return(
                          <div key={index}>  
                            <div className='py-2'><b className='bg-light p-1 rounded-1 fw-semibold px-2'>{item[0]}</b>  :  {item[1].description}</div>
                            {item[1].content && Object.entries(item[1].content)?.map((item,index) => {
                            if(item[0] == 'application/json')
                            {
                            return(
                            <div>
                                
                            {item[0] &&
                            Object.entries(item[1])?.map((item,index) => {
                                const result = `${item[0] && Object.entries(item[1])?.map((item, index) => {
                                return `${Object.entries(item[1])?.map((item, index) => {
                                    return `${item[1].replace(/ \n/g, '')}`;
                                    }).join('')}`;
                                }).join('')}`
                                const finalResult = result.replace(/#\/components\/schemas\//g, '');
                                const data = apiData?.attributes?.Defination?.components?.schemas && Object.entries(apiData?.attributes?.Defination?.components?.schemas)?.map((item,index) => {
                                    if(finalResult === item[0]){
                                    return(
                                    <div className="w-100">
                                        
                                        <JSONPretty
                                        id="json-pretty"
                                        data={generateExampleFromSchema(item[1]?.properties)}
                                        theme={JSONPrettyMon}
                                        themeClassName="p-4 fixed-height-data"
                                        style={{ maxWidth: '100%'}}
                                        ></JSONPretty>
                                    </div>
                                    );
                                    }
                                })
                                return(
                                    <div>{data}</div>
                                )
                                })
                            }
                            </div>
                            
                        );
                        }
                        })}</div> )                                   
                        })}
                        </div>
                    </div>
                </div>
                );
            })}
        </div>
        );
        })}
    </div> 
  </div>
  )
}

export default ApiEndpoint
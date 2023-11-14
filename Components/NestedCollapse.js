import React, { useEffect, useState } from 'react'
import { Collapse } from 'react-bootstrap'
import { getColorByDataType } from '../utils/utils'
const counting = 0
export const NestedCollapse = ({
  propertyName,
  propertyValue,
  example,
  description,
  dataType,
  format,
  requiredList,
  isOpen
}) => {
  const [open, setOpen] = useState(isOpen)
  const toggleCollapse = () => {
    setOpen(!open)
  }
  return (
    <div className='fs-14 overflow-auto ms-1 '>
      <p className='m-0 mt-1 '>
        {propertyName}
        {requiredList?.length > 0 && requiredList?.includes(propertyName) && (
          <span className='text-danger fs-18 ms-1'>*</span>
        )}
        <button
          onClick={toggleCollapse}
          className='toggle-button btn border-0 m-0 p-0'
          type='button'
        >
          {!open ? (
            <img
              style={{ marginBottom: 5 }}
              height={17}
              src='/images/chevron-right.svg'
              alt='Collapse'
            />
          ) : (
            <img
              style={{ marginBottom: 5, marginLeft: 3 }}
              height={17}
              src='/images/chevron-down.svg'
              alt='Expand'
            />
          )}
        </button>
      </p>
      <Collapse in={open}>
        <div className='ml-20'>
          {dataType && (
            <p className='p-0 m-0 text-danger'>
              dataType :{' '}
              <span className={`text-break text-purple`}>
                {dataType && dataType}
                {format && (
                  <span className='text-break'>
                    {'  '} ({format && format})
                  </span>
                )}
              </span>
            </p>
          )}
          {example && (
            <p className='p-0 m-0 text-danger'>
              example :{' '}
              <span className='text-dark text-break'>{example && example}</span>
            </p>
          )}
          {description && (
            <p className='p-0 m-0 text-danger'>
              description :{' '}
              <span className='text-dark text-break'>
                {description && description}
              </span>
            </p>
          )}

          {typeof propertyValue === 'object'
            ? Object.entries(propertyValue).map(([key, value]) => (
                <NestedCollapse
                  key={key}
                  propertyName={key}
                  propertyValue={value?.properties}
                  example={value?.example}
                  description={value?.description}
                  dataType={value?.type}
                  format={value?.format}
                  requiredList={requiredList}
                  count={counting + 1}
                  isOpen={false}
                />
              ))
            : propertyValue}
        </div>
      </Collapse>
    </div>
  )
}

export default NestedCollapse

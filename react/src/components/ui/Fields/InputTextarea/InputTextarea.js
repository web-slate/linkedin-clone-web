import React, { useState, forwardRef } from 'react'

const noop = () => {}

const InputTextarea = forwardRef(
  (
    {
      name,
      initialValue = '',
      placeholder,
      handleChange,
      onChange = noop,
      onBlur = noop,
      ...props
    },
    ref
  ) => {
    return (
      <div>
        <textarea
          name={name}
          placeholder={placeholder}
          defaultValue={initialValue}
          onChange={onChange}
          onBlur={onBlur}
          ref={ref}
          {...props}
        />
      </div>
    )
  }
)

export default InputTextarea

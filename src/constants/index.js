import React from 'react'
import { Field, reduxForm } from 'redux-form'


export const required = value => (value  ? undefined : 'Required')



export const date = value => (value ? undefined : 'Required')

export const checkBox =value => (value  ? undefined : "Required")

export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : "Required"


    export const select = value => (value ? undefined: "Required")



    
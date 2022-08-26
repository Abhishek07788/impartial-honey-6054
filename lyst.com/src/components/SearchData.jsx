import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {Allproduct} from "../Api/Allapi"

export function Getdata(input){
  SearchData(input)
   console.log(input)
}

const SearchData = () => {
 

  useEffect(()=>{
    Allproduct( "womens")
    .then((res)=>{
      console.log(res)
    })
  },[])

  

  return (
    <div style={{marginTop:200}}>
      SearchData
      <h1>gfdgfdhf</h1>
    </div>
  )
}

export default SearchData
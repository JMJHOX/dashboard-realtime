
import { addData } from "../actions/dataActions";
import {createReducer} from '@reduxjs/toolkit'


const initialState = {
  apidata : [{}]
}
const dataReducer = createReducer(initialState,(builder)=>{
  builder.addCase(addData,(state,action)=>{
    state.apidata.push(action.payload)

  } )
 })


export default dataReducer;
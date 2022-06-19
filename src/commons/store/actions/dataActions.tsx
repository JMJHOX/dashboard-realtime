import { createAction } from "@reduxjs/toolkit";
import { dataRowFormat } from "../../interfaces/DataRowFormat";

export const ADD_DATA = "ADD_DATA";
export const addData = createAction<dataRowFormat[]>("addData");
export const rmData = createAction<dataRowFormat[]>("rmData");

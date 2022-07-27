import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  loading: false,
  products: [],
  error: ''
}

// Generates pending, fulfilled and rejected action types
export const fetchDashboard = createAsyncThunk('dashboard/fetchDashboard', async() => {
  return await axios
    .get(`https://satotest.araa.land/api/dashboard`,{
      headers:{
        'X-API-KEY':'53fC26YCYeoNJWMxscaeW4ZaUmKyypovMRpcvNa29h9V'
      }
    }
    
    )
    .then(response =>response.data.assets.digital_land.ethereum['0xb15069b02e4E9177cb473CbeF3a37Ba1Ed704b26'].erc721)
})
const dashSlice = createSlice({
  name: 'dashboard',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchDashboard.pending, state => {
      state.loading = true
    })
    builder.addCase(fetchDashboard.fulfilled, (state, action) => {
      state.loading = false
      state.products = action.payload
      state.error = ''
    })
    builder.addCase(fetchDashboard.rejected, (state, action) => {
      state.loading = false
      state.products = []
      state.error = action.error.message
    })
  }
})

export default dashSlice.reducer
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
    .then(response =>{
      let erc721 = response.data.assets.digital_land.ethereum['0xb15069b02e4E9177cb473CbeF3a37Ba1Ed704b26'].erc721
      let erc20 = response.data.assets.digital_land.ethereum['0xb15069b02e4E9177cb473CbeF3a37Ba1Ed704b26'].erc20
      let lofty1 = response.data.assets.land_link.lofty['917-Pawnee-Ave_Memphis-TN-38109']
      let lofty2 = response.data.assets.land_link.lofty['12627-Franklin-Blvd_Lakewood-OH-44107']
      let realty_mogul = response.data.assets.land_link.realty_mogul['2013601']
      // erc721 = [...erc721,...erc20]
      erc721 = [...erc721,lofty1,lofty2,realty_mogul]
      return erc721;

    })
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
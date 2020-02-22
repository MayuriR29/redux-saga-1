import React from 'react'
import { connect } from 'react-redux'
import img from '../images/spinner.png'
let Loading = ({ loading }) => (
  loading ?
    <div style={{ textAlogn: "center" }}>
      <img src={img} alt="loading"></img>
      <h1>Loading...</h1>
    </div> : null
)
const mapStateToProps = (state) => ({
  loading: state.loading
})

Loading = connect(mapStateToProps, null)(Loading)
export default Loading

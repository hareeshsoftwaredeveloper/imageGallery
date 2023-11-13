import React, {useState} from 'react'
import axios from "axios";
import Gallery from "./components/Gallery"
import "./App.css"
// const apiKey = "636e1481b4f3c446d26b8eb6ebfe7127"

const apiKey="4257c5fc5964572144a5d7fe648f0ab1"
const App = () => {
  const [inputValue, setInputValue] = useState("")
  const [data, setData] = useState([])
  console.log(data.length)
  const handleChange = (event) => {
    setInputValue(event.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault() 
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${inputValue}&per_page=24&format=json&nojsoncallback=1`).then(response => {
        // console.log(response)
        setData(response.data.photos.photo)
      })
  }
  return (
    <div className='App'>
      <center>
        <h2>Gallery Snapshots</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={handleChange} value={inputValue } /><br/><br/>
          <input type="submit" name="search"/>
        </form>
        <br /> 
        {data.length >= 1 ? <Gallery data={data} />:<h3>No Data Found! Try other keywords</h3>}
      </center>
      
    </div>
  )
}

export default App

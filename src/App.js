import { useEffect, useState } from "react"
import { FaTimes } from "react-icons/fa"
import Footer from "./Components/Footer/Footer"
import ImagesCard from "./Components/Images/Images"
import SearchInput from "./Components/Inputs/SearchInput"
import Modal from "./Components/Modal/Modal"
import Navbar from "./Components/Navbar/Navbar"
import "./App.css"
import Loader from "./Components/200w.gif"


const App = () => {

  const [modal, setModal] = useState(false)
  const [imageHits, setImageHits] = useState([])
  const [text, setText] = useState('cars')
  const [loading, setLoading] = useState(false)

  const showModal = () => {
    setModal(!modal)
  }

  const handleChange = (e) => {
    setText(e.target.value)
  }

  const FetchImages = () => {
    fetch(`https://pixabay.com/api/?key=25775247-37469b1e885f915e9aabd2cf0&q=${text}&image_type=photo&pretty=true`, {
      'method': 'GET'
    }).then(response => {
      setLoading(false)
      return response.json()
    }).then((data) => {
      
      setImageHits(data.hits)
      
    })
    .catch(error => {
      console.log(error);
    })
  }

  

  useEffect(() => {
    FetchImages(text)
    setLoading(true)
  }, [text])

  return (
    <>
    <Navbar showModal={showModal} />

    {modal && 
    <div className="modal-container">
        <FaTimes className="times" onClick={() => {
          setModal(false)
        }} />
        <Modal />
    </div>
    }

    

    <SearchInput handleChange={handleChange} />
   

    {
      loading && <div className="loader">
        <img src={Loader} alt="preloader" />
      </div>
    }

    {
     text && imageHits.map((item, index) => {
      
      return (
        <ImagesCard 
          url={item.largeImageURL} 
          key={item.id}
          index={index}
          
        />
      )
    })
    }
    <Footer />
    </>
  )
}

export default App
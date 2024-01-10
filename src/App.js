import Header from "./Header"; 
import AddItem from "./AddItem"; 
import SearchItem from "./SearchItem"; 
import Content from "./Content"; 
import Footer from "./Footer"; 
import apiReq from "./apiReq"; 
import { useState, useEffect } from "react";

function App() {

  const API_URL = "http://localhost:3500/items"
  const [ items, setItems ] = useState([])
  const [ newItem, setNewItem ] = useState("")
  const [ search, setSearch ] = useState("")
  const [ fetchError, setFetchError ] =useState(null)
  const [ isLoading, setIsLoading ] = useState(true)

  useEffect(() => {
    const fetchError = async () => {
      try {
        const response = await fetch(API_URL)
        if(!response.ok) throw Error("Did Not Recive Expected Data")
        const listItems = await response.json()
        setItems(listItems)
        setFetchError(null)
      } catch (err) {
        setFetchError(`${err.message}`)
      } finally {
        setIsLoading(false)
      }
    }
    setTimeout(() => {
      (async () => fetchError())()
    }, 2000)
  }, [])

  const searchResult = items.filter(item => ((item.item).toLowerCase()).includes(search.toLocaleLowerCase()))

  const addItems = async (item) => {
    const id = (items.length) ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item}
    const listItems = [ ...items, myNewItem ]
    setItems(listItems)
    const postOption = {
      method: "POST",
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify(myNewItem)
    }
    const result = await apiReq(API_URL, postOption)
    if (result) setFetchError(result)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!newItem) return;
    addItems(newItem)
    setNewItem("")
  }


  const handleClick = async (id) => {
    const listItems = items.map(item => item.id === id ? {...item, checked: !item.checked} : item)
    setItems(listItems)
    const updateItem = listItems.filter(item => item.id === id)
    const updateOptions = {
      method: "PATCH",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({checked: updateItem[0].checked})
    }
    const reqUrl = `${API_URL}/${id}`
    const result = await apiReq(reqUrl, updateOptions)
    if (result) setFetchError(result)
  }

  const handleDelete = async (id) => {
    const listItems = items.filter(item => item.id !== id)
    setItems(listItems)
    const deleteOption = { method: "DELETE" }
    const reqUrl = `${API_URL}/${id}`
    const result = await apiReq(reqUrl, deleteOption)
    if(result) setFetchError(result)
  }

  return (
    <div className="App">
      <Header title="Grocery List"/>
      <AddItem 
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem 
        search={search}
        setSearch={setSearch}
      />
      <Content 
        items={searchResult}
        handleClick={handleClick}
        handleDelete={handleDelete}
        fetchError={fetchError}
        isLoading={isLoading}
      />
      <Footer 
        length={items.length}
      />
    </div>

  )
}

export default App;

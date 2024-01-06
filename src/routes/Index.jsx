import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Error from '../Pages/Error';
import Navbar from '../Layouts/Navbar';
import AddBook from '../Feature/Books/AddBook';
import BooksView from '../Feature/Books/BooksView';
import EditBook from '../Feature/Books/EditBook';

function Index() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
     <main>
     <Routes>
<Route path="/" element={<Home/>}/>
<Route path="/add-books" element={<AddBook/>}/>
<Route path="/show-books" element={<BooksView/>}/>
<Route path="/edit-book" element={<EditBook />} />
<Route path="*" element={<Error/>}/>

      </Routes>
     </main>
      </BrowserRouter>
    </div>
  )
}

export default Index;

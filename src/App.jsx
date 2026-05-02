import React from 'react'
import Header from './Header'
import MainContent from './MainContent'
import Footer from './Footer'


const App = () => {
  return (
    <div className="flex flex-col h-screen bg-[#1f2125] text-gray-300">
      <Header /> 
      <MainContent />
      <Footer />
    </div>
  );  
};


export default App

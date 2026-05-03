import React from 'react'
import List from './List'         
import Maindash from './Maindash'  
import Dashboard from './Dashboard' 
import Notification from './Notification' 
import Logo from './Logo'          

const App = () => {
  return (
    <div className="flex">
      <List />

      <div className="flex-1 flex flex-col min-w-0">
        <Maindash />

        <main className="p-8 overflow-y-auto">
          <Dashboard />
        </main>
      </div>
      <div className="w-80 flex flex-col gap-4 p-4">
          <Logo />
          <Notification />
        </div>
    </div>
        );
}

        export default App;
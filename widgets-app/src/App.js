import React from 'react'
import Accordion from './components/Accordion';
import Search from './components/Search';

const items=[
  {
    title:'What is react ?',
    content :'React is JS Library'
  },
  {
    title:'Why use react ?',
    content :'React is famous among Engineers'
  },
  {
    title:'How do we use react ?',
    content :'By creating component'
  }
]
const App = () => {

  return (
    <div>
        {/* <Accordion items={items}/> */}
        <Search />
    </div>
  )
}

export default App

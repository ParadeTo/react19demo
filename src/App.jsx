import {use, Suspense} from 'react'
import './App.css'

const api = async () => {
  const res = await fetch('https://api.chucknorris.io/jokes/random')
  return res.json()
}

const Item = (props) => {
  const joke = use(props.api)
  return (
    <div>
      <div>{joke.value}</div>
    </div>
  )
}

function App() {
  const __api = api()
  return (
    <div>
      <div id='tips'>初始化时，自动获取一条数据内容</div>
      <Suspense fallback={<div>loading...</div>}>
        <Item api={__api} />
      </Suspense>
    </div>
  )
}

export default App

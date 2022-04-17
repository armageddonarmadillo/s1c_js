import axios from 'axios'
import { useEffect, useState, createRef } from 'react'
import { styles } from './styles'
import { exportComponentAsPNG } from 'react-component-export-image'

const githuburl = 'https://api.github.com/users'
const typicodeurl = 'https://jsonplaceholder.typicode.com/comments'

const App = () => {

  const imgref = new Map();
  const [users, set_users] = useState([])
  const [data, set_data] = useState([])
  useEffect(() => { axios.get(githuburl).then((res) => { set_users(res.data)}).catch((err) => { console.log(err)})}, [])
  useEffect(() => { axios.get(typicodeurl).then((res) => { set_data(res.data)}).catch((err) => { console.log(err)})}, [])

  const setRef = (id) => {
    const ref = createRef();
    imgref.set(id, ref);
    return ref;
  }
  const getRef = (e) => {
    console.log(users)
    e.target.id && exportComponentAsPNG(imgref.get(parseInt(e.target.id)), {fileName:`${e.target.innerText.split('\n')[0]}.png`})
  }

  return (
    <div style={styles.container}>
      {users.map((u)=>{
        return (
          <div ref={setRef(u.id)} key={u.id} id={u.id} style={styles.card_container} onClick={getRef}>
            <img src={u.avatar_url} style={styles.card_art}/>
            <div style={styles.card_name}> /u/{u.login} </div>
            <div style={styles.card_text}> {u.html_url}<br/> {data.at(u.id).body} </div>
          </div>
        )
      })}
    </div>
  )
}

export default App;

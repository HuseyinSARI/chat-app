import {useEffect} from 'react'
import styles from './styles.module.css'
import ChatForm from './ChatForm'
import ChatList from './ChatList'
import { useChatContext} from '../context/ChatContext'
import { init ,subscribeChat ,subscribeInitialMessages} from "../socketApi";

function Container() {

  const {setMessages} = useChatContext();

  useEffect(() => {    
  init();

  subscribeInitialMessages((messages)=>setMessages(messages))

  subscribeChat((message)=>{
    setMessages(prevState => [...prevState,{message}])
  });
  }, [])
  

  return (
    <div className={styles.container}>
        <ChatList/>
        <ChatForm/>
    </div>
  )
}

export default Container
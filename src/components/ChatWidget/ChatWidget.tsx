import { useEffect, useState } from 'react';
import './ChatWidget.css';
import { ComponentFactory } from './ComponentFactory';
import { ChatBot } from './ChatBot';

export const ChatWidgetComponent = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [elements, setElements] = useState<ComponentFactory[]>([])
    const [message, setMessage] = useState<string>('')
    const [callBot, setCallBot] = useState<boolean>(false)

    const fetchData = async () =>{
      const chatBot = new ChatBot()

      const componentFactory:ComponentFactory[] = await chatBot.sendMessage(message)

      const newMessage = new ComponentFactory('message', {message:message})
      setMessage('')

      setElements([...elements, newMessage, ...componentFactory])

      console.log(elements)
      console.log(componentFactory)
    }

    useEffect(()=>{
      if(message.length){
        fetchData()
      }
      
    }, [callBot])

    const toggleChat = ()=>{
        setIsOpen(!isOpen)
    }

    const sendMessage = async () => {
      setCallBot(!callBot)
    }


    return <>
    <button onClick={toggleChat} className="chat-toggle-button">
      Chat
    </button>
    <div className={`chat-widget ${isOpen ? 'open' : 'closed'}`}>
      {isOpen && (
        <>
          <div className="chat-content">
              <div >{elements.map((element)=>element.getComponent())}</div>
          </div>
          <div className="question-box">
            <input className="input" value={message}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {setMessage(e.target.value);}}
                type="text" placeholder="How can I help you today?"/>
            <button onClick={sendMessage}>Ask!</button>
          </div>
        </>
      )}
    </div>
  </>
}
import {useState, useContext} from 'react'
import {MessageList, Navbar, Input, Button } from 'react-chat-elements';
import { MDBIcon, MDBContainer } from 'mdb-react-ui-kit';
import CustomMessageList from '../CustomMessageList'
import './styles.css'
import { PetContext } from '../../Context/Context';

const messageList= [
    {
        messageId: 'arakdaf',
        position: 'left',
        text: "Hi!",
        date: new Date() - 1,
        isRead: true,
        type: 'text'
    },
    {
        messageId: 'arakdaf',
        position: 'right',
        text: "Hello, How are you doing ?",
        date: new Date() - 1,
        isRead: true,
        type: 'text'
    },
    {
        messageId: 'arakdaf',
        position: 'left',
        text: "Hello How are you doing ?",
        date: new Date() - 1,
        isRead: true,
        type: 'text'
    },
    {
        messageId: 'arakdaf',
        position: 'right',
        text: "Hello How are you doing ?",
        date: new Date() - 1,
        isRead: true,
        type: 'text'
    }
]
export default function ChatWithUs(){
    const [showChat, setShowChat]=useState(false)
    const {loginStatus} = useContext(PetContext)
    const role = localStorage.getItem('role')
    const handleClick = () => {
        setShowChat(true)
    }
    const handleChatInput = () =>{

    }
    const closeChat = () => {
        setShowChat(false)
    }
    if( !loginStatus || role == 'admin')
        return <>
        </>
    return <>
    {
        showChat ?(<>
            <MDBContainer className='d-flex flex-column message-box'>
                <div className='navbar-wrapper'>
                    <Navbar className='bg-transparent'
                        // left={<div>Logo</div>}
                        center={<div className='title'>{'Admin'}</div>}
                        right={<MDBIcon fas icon="x"  onClick = {closeChat} className='x'/>}
                    />

                </div>
                <CustomMessageList  messageList={messageList}/>
                <Input
                className='chat-input'
                placeholder="Type here..."
                rightButtons={<Button className='send-button' text='send' onClick={()=> handleChatInput()} title ='Send'/>}
                />
            </MDBContainer>
        </>):(
            <>
                <div onClick = {handleClick} 
                    className = 'chat-with-us-wrapper' 
                >
                    <div style = {{padding:'16px', color: 'white', display: 'flex', gap: '5px', alignItems: 'center', fontWeight: 'bold'}}>
                        <MDBIcon fas icon="message" />
                        <span>Chat With Us</span>
                    </div>
                </div>

            </>
        )
    }
    </>
}
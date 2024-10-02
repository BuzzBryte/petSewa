import {useState} from 'react'
import {MessageList, Navbar, Input, Button } from 'react-chat-elements';
import { MDBIcon, MDBContainer } from 'mdb-react-ui-kit';
import '../Styles/ChatWithUs.css'

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
    const handleClick = () => {
        setShowChat(true)
    }
    const handleChatInput = () =>{

    }
    const closeChat = () => {
        setShowChat(false)
    }
    return <>
    {
        showChat ?(<>
            <MDBContainer className='flex-column message-box'>
                <div className='navbar-wrapper'>
                    <Navbar className='bg-transparent'
                        // left={<div>Logo</div>}
                        center={<div className='title'>{'Admin'}</div>}
                        right={<MDBIcon fas icon="x"  onClick = {closeChat} className='x'/>}
                        type="light"
                    />

                </div>
                {/* {
                    messageList.map(message =>{
                        return<>
                            <ChatItem />
                        </>
                    }
                    )
                } */}
                <MessageList
                className='message-list'
                lockable={true}
                toBottomHeight={'100%'}
                dataSource={messageList}
                />
                <Input
                className='chat-input'
                placeholder="Type here..."
                multiline={true}
                rightButtons={<Button className='send-button' text='send' onClick={()=> handleChatInput()} title ='Send'/>}
                />
            </MDBContainer>
        </>):(
            <>
                <div onClick = {handleClick} 
                    className = 'chat-with-us-wrapper' 
                    style = {{position: 'fixed', zIndex: '2', borderRadius: '20px', display: 'flex', background: 'grey', right: '20px', bottom: '24px'}}>
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
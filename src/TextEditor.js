import React, { useCallback, useEffect, useRef, useState } from 'react'
import Quill from 'quill'
import "quill/dist/quill.snow.css"
import "./styles.css"
import io from 'socket.io-client';
import Header from './components/header/Header';
const TOOLBAR_OPTIONS = [
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
        [{ font: [] }],
        [{ list: "ordered" }, { list: "bullet" }],
        ["bold", "italic", "underline"],
        [{ color: [] }, { background: [] }],
        [{ script: "sub" }, { script: "super" }],
        [{ align: [] }],
        ["image", "blockquote", "code-block"],
        ["clean"],
      ]      
export default function TextEditor(){
      const [socket,setSocket] = useState()
      const [quill,setQuill] = useState()
      useEffect(()=>{
        const s = io("http://localhost:3001")
        // s.on('connect', () => {
        //   console.log('Connected to Socket.IO server');
          setSocket(s)
        // });

        // s.on('connect_error', (error) => {
        //   console.error('Socket.IO connection error:', error);
        // });
        
        return ()=>{
          s.disconnect()
        }
      },[])

      useEffect(()=>{
        if(socket==null || quill==null) return 
        const handler = (delta)=>{
              quill.updateContents(delta)
        }
        socket.on("receive-changes",handler);

        return ()=>{
          socket.off("receive-changes",handler)
        }
      },[socket,quill])


      useEffect(()=>{
        if(socket==null || quill==null) return 
        const handler = (delta,oldDelta,source)=>{
              if(source !== "user") return 
              socket.emit("send-changes",delta);
        }
        quill.on("text-change",handler);

        return ()=>{
          quill.off("text-change",handler)
        }
      },[socket,quill])
      const wrapperref = useCallback(wrapper=>{
      if(wrapper==null) return
      wrapper.innerHTML=""
    const editor =document.createElement("div")
    wrapper.append(editor)
    const q = new Quill(editor,{theme:"snow",modules:{
        toolbar: TOOLBAR_OPTIONS
    }})
    setQuill(q)
  },[])  
  return (
    <div>
      <Header/>
      <div className="container" ref={wrapperref}>
      </div>
    </div>
  )
}

// export default TextEditor
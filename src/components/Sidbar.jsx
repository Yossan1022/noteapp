import React from 'react'
import "./Sidbar.css";

export const Sidbar = ({onAddNote,notes, onDeleteNote, activeNote,setActiveNote}) => {
  return (
    <div className='app-sidbar'>
      <div className='app-sidbar-header'>
        <h1>ノート</h1>
        <button onClick={onAddNote}>追加</button>
      </div>
      <div className="app-sidbar-notes">
        {notes.map((note)=>(
  <div className={`app-sidbar-note ${note.id === activeNote && "active"}`} key={note.id} onClick={() => setActiveNote(note.id)}>
  <div className="sidbar-note-title">
    <strong>{note.title}</strong>
    <button onClick={()=> onDeleteNote(note.id)}>削除</button>
  </div>
  <p>{note.content}</p>
  <small>{new Date(note.modDate).toLocaleDateString("ja-JP",{
    hour: "2-digit",
    minute: "2-digit",
  })}</small>
</div>
        ))}
      
      </div>
    </div>
  );
};


export default Sidbar;
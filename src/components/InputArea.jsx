import React, {useState} from "react"
import AddIcon from '@material-ui/icons/Add';
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';

function InputArea(props){

    const [note, setNote] = useState({
        title: "",
        content: ""
    });
    const [isClicked, setClickState] = useState(false); 
    function handleCange(e){
        const {name , value} = e.target;
        setNote((prevValue) => {
            return {
                ...prevValue,
                [name] : value
            }
        });
        
    }
    function submitNote(e){
        if(note.title !== "" && note.content !== ""){
            props.onAdd(note);
            setNote({
                title: "",
                content: ""
            });
        }
        setClickState(false);
        e.preventDefault();
    }

    function showTitleInput(){
        setClickState(true);
    }
    return(<div>
        <form className="create-note">
            <input style={{display:isClicked?"block":"none"}} onChange={handleCange} name="title" placeholder="Title" value={note.title}></input>
            <textarea onClick={showTitleInput} onChange={handleCange} name="content" placeholder="Take a note.." value={note.content}></textarea>
            <Zoom in={isClicked?true:false}><Fab style={{display:isClicked?"block":"none"}} onClick={submitNote}><AddIcon/></Fab></Zoom>
        </form>
    </div>) 
}

export default InputArea;
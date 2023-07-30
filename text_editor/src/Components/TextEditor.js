import JEditor from 'jodit-react';
import { useRef } from 'react';

const config = {
    buttons: ["bold", "italic", "link", "unlink", "underline", "source"],
};


const TextEditor = ( {getValue}) => {

    const editor = useRef(null);
    
    
    return <JEditor
    ref={editor}
    
    config = {config}
    
    onChange={(newContent) => getValue(newContent)}
    />
}  

export default TextEditor;
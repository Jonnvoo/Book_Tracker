import {useState} from 'react';


function BookEdit({book}){
    const [title, setTitle] = useState(book.title);

    const handleChange= (event) => {
        setTitle(event.target.value);

    };

    const handleSubmit = (event) => {
        event.preventDefualt();

    }
    return <form onSubmit={handleSubmit} className="book-edit">
        <label>Title</label>
        <input className="input" value={title} onChange={handleChange} />
        <button className="button is-primary">
            save
        </button>
    </form>
}

export default BookEdit;
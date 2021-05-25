import React, { memo, PureComponent } from 'react'


const Add =  memo(props=> {

    const formRef = React.createRef();
    const inputRef = React.createRef();

    const onSubmit = event => {
        event.preventDefault();
        const name = inputRef.current.value;
        name && props.onAdd(name);
        // inputRef.current.value = '';
        formRef.current.reset();
    }

    return (
        <form ref={formRef} className="add" onSubmit={onSubmit}>
            <input ref={inputRef} className="add__input" type="text" placeholder="Habit" ></input>
            <button className="add__button" >Add</button>
        </form>
    )
});

export default Add;

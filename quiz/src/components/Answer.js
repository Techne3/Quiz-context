import React from 'react';

const Answer = (props) => {

    //setting the selected answer to a new className ".answer.selected"
    let classes = ['answer']
    if(props.selected){
        classes.push('selected')
    }


    return (
        <div>
            <button value={props.letter}  className={classes.join(' ')}  onClick={props.handleClick}>
                <span className='letter '>{props.letter}.</span> {props.answer}
            </button>
            
        </div>
    );
}

export default Answer;

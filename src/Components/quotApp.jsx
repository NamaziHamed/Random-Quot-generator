import React, { Component } from 'react';

class QuotApp extends Component {
    state = {  } 
    render() { 
        return (
<>
<div className="container p-4">
                <h2><i className="fa-solid fa-quote-left pe-3"></i>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, vel cumque iure rerum, dolorum sed mollitia minima autem natus omnis officia? Optio pariatur ea vitae repellendus sit sequi voluptatibus aut?</h2>
                <p className="text-end py">Author name</p>
                <div className="row justify-content-between">
                    <div className='col'>
                    <button className='btn rounded-2'><i className="fa-brands fa-twitter"></i></button>
                    <button className='btn rounded-2'><i className="fa-brands fa-tumblr"></i></button>

                    </div>
                    <div className="col text-end">
                        <button className="btn rounded-2">New Quote</button>
                    </div>

                </div>
            </div>
            <div className="text-center"><p>by Hamed</p></div>
            </>
        );
    }
}
 
export default QuotApp;
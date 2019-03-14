import React, { Component } from 'react'
import data from './data'

class Flashcard extends Component{
    constructor(props){
        super(props)
         this.state = {
             array: <data/>
           

         }
    }
    render(){
        
        return (
        
        <div className='white-box'>
            <div className='left-box'>
                    <div className='name-line'><strong>{data[this.props.index].name.first} {data[this.props.index].name.last}</strong></div>
                    <div className='from-box'>
                         <div><strong>From:</strong> {data[this.props.index].city}, {data[this.props.index].country}</div>
                         <div className='job-title'><strong>Job Title:</strong> {data[this.props.index].title}</div>
                         <div className="employer"><strong>Employer:</strong> {data[this.props.index].employer}</div>
                    </div>
                    <div className='movies'> <strong>Favorite Movies:</strong>
                        <div className='mov1'>1.  {data[this.props.index].favoriteMovies[0]}</div>
                        <div className='mov2'>2.  {data[this.props.index].favoriteMovies[1]}</div>
                        <div className='mov3'>3.  {data[this.props.index].favoriteMovies[2]}</div>
                    </div>
                    
            </div>
            <div className="right-box">{data[this.props.index].id}/25</div>
        </div>

        

        )
    }
}

export default Flashcard



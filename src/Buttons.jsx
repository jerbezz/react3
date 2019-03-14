import React, {Component} from 'react'
import Flashcard from './Flashcard'

class Buttons extends Component{
    constructor(){
        super()

        this.state = {
            index: 0
        }
    }

    handleClickPrevious = () => {
        if(this.state.index <= 0){
            this.state.index = 25
        }
        this.setState({
            index: this.state.index -= 1
        })
    }
    
    handleClickNext = () => {
        if(this.state.index >= 24){
            this.state.index = -1
        }

       
        this.setState({
            index: this.state.index += 1
        })
    }
    
    render(){
        console.log(this.state.index)

        return(
            <div>
                <Flashcard index={this.state.index}/>
                <div className='buttons'>
                    <button className='butt' onClick={() => this.handleClickPrevious(this.state.index)}>{`<Previous`}</button>
                    <button className='butt' onClick={() => this.handleClickNext(this.state.index)}>{`Next>`}</button>
                </div>
            </div>
        )
    }
}

export default Buttons





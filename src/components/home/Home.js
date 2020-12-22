import React, { Component } from 'react'
import Loader from '../loader/Loader'
import './homeStyles.scss'

var timer = undefined

class Home extends Component{

    constructor(props){
        super(props)
        this.state = {
            progress: 0,
            isProgressing: false,
        }

        this.startLoading = this.startLoading.bind(this)

    }
    
    startLoading = () => {
        this.setState({ isProgressing : true })
        if(!this.state.isProgressing){
            if(this.state.progress < 100){
                this.startCounter()
            }else{
                this.setState({ progress: 0 },() => {
                    this.startCounter()
                })
            }
        }
    }

    startCounter = () => {
        timer = setInterval(() => {
            this.setState({ progress: this.state.progress + 1 }, () => {
                if(this.state.progress == 100){
                    this.pauseLoading()
                }
            })
        }, 100)
    }

    pauseLoading = () => {
        this.setState({ isProgressing : false }, () => {
            if(timer){
                clearInterval(timer)
            }
        })
    }

    render(){
        return(
            <div className="home-container">
                <div data-testid="circular-loader-component" className="content-container">
                    <Loader progress={this.state.progress} size={80} strokeWidth={10} outerStroke="#ddfff8" innerStroke="#02C39A" fill="#FFFFFF" fontSize={30}/>
                    <div className="buttons">
                        <div data-testid="start-button" className="btn" onClick={this.startLoading}>Start</div>
                        <div data-testid="pause-button" className="btn" onClick={this.pauseLoading}>Pause</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home
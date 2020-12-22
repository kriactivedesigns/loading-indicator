import React, { Component } from 'react'
import './loaderStyles.scss'

export default class Loader extends Component {

    constructor(props){
        super(props)
        this.state = {
            radius: this.props.size,
            circumference: 56 * 2 * Math.PI,
            offset: 56 * 2 * Math.PI,
        }
    }

    render(props) {
        
        const { progress, size=60, strokeWidth=4, outerStroke="#FF0000", innerStroke="#00FF00", fill="#FFFFFF", fontSize=25 } = this.props
        const circumference = (this.props.size - ( strokeWidth * 2 ) ) * 2 * Math.PI
        const offset = circumference - progress / 100 * circumference
        console.log(offset)
        return ( 
            <div className="loader-component" >
                <div className="loader-circle-container" style={{
                                                                width: size * 2,
                                                                height: size * 2
                                                            }}>
                    <svg className="loader"
                        height={size * 2}
                        width={size * 2}
                        >
                        <circle className="loader-outer-circle"
                            strokeWidth={strokeWidth + 2}
                            fill={fill}
                            stroke={outerStroke}
                            r={size - ( strokeWidth * 2 )}
                            cx={size}
                            cy={size}
                        />
                        <circle className="loader-inner-circle"
                            strokeWidth={strokeWidth - 2}
                            fill="transparent"
                            strokeDasharray={`${circumference} ${circumference}`}
                            strokeDashoffset={offset}
                            stroke={innerStroke}
                            r={size - ( strokeWidth * 2 )}
                            cx={size}
                            cy={size}
                        />
                    </svg>
                    <div className="loader-progress">
                        <span style={{ fontSize: fontSize }}>{progress}%</span>
                    </div>
                </div>
            </div>
        )
    }
}

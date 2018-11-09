import React, {Component} from 'react';
import './ImgLazyLoad.css';

class ImgLazyLoad extends Component{

    constructor(props){
        super(props);
        this.state={};
        this.imgRef = React.createRef();
    }

    componentDidMount(){
        const img = new Image();
        img.src = `${this.props.image}.jpg`;
        img.onload = () => {
            this.imgRef.current.style['background-image'] = `url(${img.src})`;
        }                       
    }

    render(){
        return(
            <React.Fragment>
            <img className="img-wrapper" ref={this.imgRef} style={{ backgroundImage: `url(${this.props.imageOpt}.jpg)` }}/>
            {JSON.stringify(this.props)}
            </React.Fragment>
        )
    }

}

export default ImgLazyLoad;
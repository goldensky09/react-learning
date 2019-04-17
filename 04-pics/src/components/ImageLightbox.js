import React from "react";

export default class ImageLightbox extends React.Component {
    constructor(props) {
        super(props);

        this.onImageLoad = this.onImageLoad.bind(this);
        this.state = {
            loading: "loading"
        }
    }

    componentWillReceiveProps(){
        this.setState({loading: "loading"});
    }

    onImageLoad(event){
        console.log("images loaded");
        // event.target.closest(".image-lightbox").classList.remove("loading");
        this.setState({loading: ""});
    }

    renderLightbox(){
        if (!this.props.image) {
            return (
                <div className="image-lightbox" style={{transform: 'scale(0)'}}></div>
            );
        }
        return(
            <div className={`image-lightbox ${this.state.loading}`} style={{transform: 'scale(1)'}}>
                <div className="image-cont" key={this.props.image.id}>
                    <label className="close" onClick={this.props.onClose}>X</label>
                    <img
                        className="image-el"
                        alt={this.props.image.alt_description}
                        src={this.props.image.urls.full}
                        onLoad={this.onImageLoad}
                    />
                    <h2 className="image-desc">
                        {this.props.image.description}
                    </h2>
                    <span className="prev" onClick={this.props.onPrev}>&lt;</span>
                    <span className="next" onClick={this.props.onNext}>&gt;</span>
                    <div className="lds-ripple loader"><div></div><div></div></div>
                </div>
            </div>
        );
    }
    render() {
        return (
            this.renderLightbox()
        );
    }
}
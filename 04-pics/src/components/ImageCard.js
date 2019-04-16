import React from "react";

class ImageCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            spans: 0
        }

        this.imageRef = React.createRef();
    }
    componentDidMount() {
        // this.imageRef.current.addEventListener("load", this.setSpans);
    }
    render() {
        const { alt_description, description, urls } = this.props.image;
        return (
            <label className="image-box">
                <input type="radio" name="lightbox" />
                <img
                    className="image-thumb"
                    ref={this.imageRef}
                    alt={alt_description}
                    src={urls.thumb}
                />
                <div className="image-lightbox">
                    <img
                        className="image-el"
                        alt={alt_description}
                        src={urls.full}
                    />
                    <h2 className="image-desc">
                        {description}
                    </h2>
                </div>
                
            </label>
        )
    }
}

export default ImageCard;
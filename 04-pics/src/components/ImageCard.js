import React from "react";

class ImageCard extends React.Component {
    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(event) {
        this.props.onSelect && this.props.onSelect(event.target.id)
    }
    render() {
        const { id, alt_description, urls } = this.props.image;
        return (
            <label className="image-box">
                <img
                    id={id}
                    className="image-thumb"
                    ref={this.imageRef}
                    alt={alt_description}
                    src={urls.thumb}
                    onClick={this.handleClick}
                />
            </label>
        )
    }
}

export default ImageCard;
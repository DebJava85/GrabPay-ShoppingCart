import React, {Component} from 'react';
import {findDOMNode} from 'react-dom';

class QuickView extends Component{
  constructor(props){
    super(props);
  }
  componentDidMount() {
    document.addEventListener('click', this.handleClickOutside.bind(this), true);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside.bind(this), true);
  }

  handleClickOutside(event) {
    const domNode = findDOMNode(this.refs.modal);
    if (!domNode || !domNode.contains(event.target)) {
      this.props.closeModal();
    }
  }

  handleClose(){
    this.props.closeModal();
  }
  
  render(){
    let cartImage = 'https://res.cloudinary.com/debray/image/upload/v1530587692/cartgrab.png';
    var qrImage = "https://res.cloudinary.com/debray/image/upload/v1530767445/qr1.png";
    var sectionStyle = {
                 width: "50px",
                 height: "55px",
                 marginRight : "20px"
       };
        var qrsectionStyle = {
                 width: "65px",
                 height: "65px",
                 marginRight : "20px"
       };


    return(
      <div className={this.props.openModal ? "modal-wrapper active" : "modal-wrapper"}>
        <div className="modal" ref="modal">
          <button type="button" className="close" onClick={this.handleClose.bind(this)}>&times;</button>
          <div className="quick-view">
            <div className="quick-view-image"><img src={this.props.product.image} alt={this.props.product.name}/></div>
           
            <div className="quick-view-details">
              <span><img src={cartImage} style={sectionStyle} alt={this.props.product.name} /></span>
              <span><img src={qrImage} style={qrsectionStyle} alt={this.props.product.name} /></span>
              <span className="product-name">{this.props.product.name}</span>
              <span className="product-price">{this.props.product.price}</span>

            </div>
            
          </div>
        </div>
      </div>
    )
  }
}

export default QuickView;
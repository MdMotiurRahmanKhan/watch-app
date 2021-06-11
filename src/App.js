import logo from './logo.svg';
import React,{Component} from 'react';
import './App.css';
import classes from './Watch.module.css';
import ProductData from './ProductData';
import ProductPreview from './component/ProductPreview.js';
import ProductDetails from './component/ProductDetails';
import TopBar from './component/TopBar';
class App extends Component {
  state ={
    productData : ProductData,
    currentPreviewImagePos : 0,
    showHeartBeatSection: false
  }
  onColorOptionClick = (pos) => {
    {/*const updatePreviewImage = this.state.productData.colorOptions[pos].imageUrl
    console.log(updatePreviewImage);*/}
    this.setState({currentPreviewImagePos : pos});

  }
  onFeatureItemClick = (pos) =>{
    let updatedState= false;
    if(pos===1){
      updatedState=true;
    }
   this.setState({showHeartBeatSection: updatedState})
  }
  render(){
    return (
      <div className="App">
        {/*<header className="App-header">*/}
          <TopBar/>
         {/* <nav className={classes.Topbar}>
            <img src="https://www.erpretail.com/documents/general/amazon-dyncamics-nav-1712.jpg" alt="Amazon Logo"/>
          </nav>*/}
        {/*</header>*/}
        <div className={classes.MainContainer}>
          <div className={classes.ProductPreview}>
            <ProductPreview currentPreviewImage={this.state.productData.colorOptions[this.state.currentPreviewImagePos].imageUrl} showHeartBeatSection={this.state.showHeartBeatSection} />
            {/* <img src="https://imgur.com/iOeUBV7.png" alt="ProductPreview"/>
          { /* <div className={classes.TimeSection}>
              <p>{`${currentHour}:${currentMinute}`}</p>
    </div> */}
           {/* <div className={classes.HeartSection}>
            <i class="fas fa-heartbeat"></i>
            <p>78</p>
            </div> */}
            </div>
            {/*<div className={classes.ProductData}>
              <h1 className={classes.ProductTitle}>{ProductData.title}</h1>
              <p className={classes.ProductDescription}>{ProductData.description}</p>
              <h3 className={classes.SectionHeading}>Select Color</h3>
              <div>
                <img className={[classes.ProductImage,classes.SelectedProductImage].join(" ")} src="https://imgur.com/iOeUBV7.png" alt="Black Colored Watch"/> 
                <img className={classes.ProductImage} src="https://imgur.com/PTgQlim.png" alt="Red Colored Watch"/>
                
                <img className={classes.ProductImage} src="https://imgur.com/Mplj1YR.png" alt="Blue Colored Watch"/>
                <img className={classes.ProductImage} src="https://imgur.com/xSIK4M8.png" alt="Purple Colored Watch"/>
                </div> 
                <h3 className={classes.SectionHeading}>Features</h3>
                <div>
                  <button className={[classes.FeatureItem,classes.SelectedFeature].join(" ")}>Time</button>
                  <button className={classes.FeatureItem}>Heart Rate</button>
                </div>
                <button className={classes.PrimaryButton}>Buy Now</button>
          </div> */}
          <ProductDetails data={this.state.productData} onColorOptionClick={this.onColorOptionClick} 
          currentPreviewImagePos={this.state.currentPreviewImagePos}
          onFeatureItemClick={this.onFeatureItemClick}
          showHeartBeatSection={this.state.showHeartBeatSection}
           />
        </div>
        
      </div>
    );

  }
  /*const currentHour= new Date().getHours() > 9? new Date().getHours() : '0' + new Date().getHours();
const currentMinute= new Date().getMinutes()>9? new Date().getMinutes():'0'+ new Date().getMinutes();*/
}
  


export default App;

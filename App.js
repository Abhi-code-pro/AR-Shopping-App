import '@google/model-viewer';
import React, { useState } from "react";
import CategoryPage from "./components/CategoryPage";
import Header from "./components/Header";
import ModelViewer from "./components/ModelViewer";
import Productcard from "./components/Productcard";
import "./styles/App.css";

  const products = [
    {
      id: 1,
      name: "shirts",
      price: "$599",
      img: "https://5.imimg.com/data5/AS/ET/MY-33970198/men-stylish-shirt-250x250.jpg",
      category: "shirts",
    },
    {
      id: 2,
      name: "dress",
      price: "$129",
      img: "https://t4.ftcdn.net/jpg/06/85/65/89/360_F_685658913_k9aQysAnEe0tXzWT96ExtcZ3W5hep8oR.jpg",
      category: "dress",
    },
    {
      id: 3,
      name: "T_shirts",
      price: "$129",
      img: "https://cdn.pixabay.com/photo/2024/04/29/04/21/tshirt-8726716_640.jpg",
      category: "T_shirts",
    },
    {
      id: 4,
      name: "neckless",
      price: "$129",
      img: "https://img.freepik.com/premium-vector/necklace-gold-jewelry-set-black-background-vector-illustration_610874-7191.jpg?semt=ais_hybrid",
      category: "neckless",
    },
    {
      id: 5,
      name: "shoes",
      price: "$129",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSty_q8_EG5ijw8zHK0aL0_y5L-kkpuWnMDkA&s",
      category: "shoes",
    },
    {
      id: 6,
      name: "pants",
      price: "$129",
      img: "https://5.imimg.com/data5/OB/AQ/KJ/SELLER-24607192/men-27s-cargo-jeans-500x500-500x500.jpg",
      category: "pants",
    },
    {
      id: 7,
      name: "kurta",
      price: "$129",
      img: "https://mahavircollections.com/wp-content/uploads/2021/09/Mah-website-pic-1-copy.jpg",
      category: "kurta",
    },
    {
      id: 8,
      name: "sherwani",
      price: "$129",
      img: "https://media.samyakk.com/pub/media/catalog/product/r/i/ri2521.jpg",
      category: "sherwani",
    },
    {
      id: 9,
      name: "hoodies",
      price: "$129",
      img: "https://static.vecteezy.com/system/resources/thumbnails/028/248/129/small/design-mockup-clothes-realistic-3d-rendering-of-blank-hoodies-ai-generated-photo.jpg",
      category: "hoodies",
    },
    {
      id: 10,
      name: "jeans",
      price: "$129",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz30luKF-x-_NLL_j08Fe88vo968UGLJ_gZA&s",
      category: "jeans",
    },
  ];

function App() {
  const [showProductsPage, setShowProductsPage] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleEnter = () => {
    console.log("Button clicked"); // Check if the function is triggered
    setShowProductsPage(true);  // Update state
  };
  const [selectedModel, setSelectedModel] = useState(null);

  const handleCloseModelViewer = () => {
    setSelectedModel(null);
  };

  const handleViewModel = (modelPath) => {
    setSelectedModel(modelPath);
  };

  console.log("Current Page:", showProductsPage ? "Products Page" : "Intro Page");


  return (
    <div className="app-container">
       <Header/>
      {!showProductsPage ? (
        <IntroPage onEnter={handleEnter} />
      ) : selectedCategory ? (
        
        <CategoryPage
          category={selectedCategory}
          onViewModel={handleViewModel}
          onBack={() => setSelectedCategory(null)}
        />
      ) : (
        <div className="products-page">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="background-video"
            crossOrigin="anonymous"
          >
            <source
              src="https://www.shutterstock.com/shutterstock/videos/1111987493/preview/stock-footage-black-woman-using-virtual-reality-headset-for-online-shopping-browsing-through-stylish-seasonal.webm"
              type="video/mp4"
            />
          </video>
          <div className="product-grid">
            {products.map((product) => (
              <Productcard key={product.id} product={product} onCategoryClick={() => handleCategoryClick(product.category)} />
            ))}
          </div>
          {selectedModel && (
        <ModelViewer modelPath={selectedModel} onClose={handleCloseModelViewer} />
      )}
        </div>
      )}
    </div>
  );
}

function IntroPage({ onEnter }) {
  return (
    <div className="intro-page">
      <div className="intro-content">
      <video
            autoPlay
            loop
            muted
            playsInline
            className="background-video"
            crossOrigin="anonymous"
          >
            <source
              src="https://www.shutterstock.com/shutterstock/videos/1091812377/preview/stock-footage-young-creative-female-putting-on-a-virtual-reality-headset-at-home-she-enters-animated-digital.webm"
              type="video/mp4"
            />
          </video>
        <h1>AR/VR Shopping World</h1>
        <br/>
        <button onClick={onEnter}>WELCOME</button>
      </div>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import "./../styles/CategoryPage.css";
import ModelViewer from "./ModelViewer";

const relatedProducts = {
  shirts: [
    { id: 1, name: "Formal Shirt", price: "$99", img: "https://thefoomer.in/cdn/shop/products/jpeg-optimizer_PATP5270.jpg?v=1680164001", models: ["/models/body.glb","/models/shirt.glb"] },
    { id: 2, name: "Casual Shirt", price: "$79", img: "https://images-cdn.ubuy.co.in/6621c81885d4910d0a49cd4b-coofandy-men-39-s-casual-shirts.jpg", models: ["/models/body.glb","/models/shirt.glb"] },
    { id: 3, name: "Design Shirt", price: "$79", img: "https://images.meesho.com/images/products/396931062/7p6nt_512.webp", models: ["/models/body.glb","/models/casual-shirt.glb" ] },
    { id: 4, name: "Denim Shirt", price: "$79", img: "https://www.rockstarjeans.com/cdn/shop/files/1_7ebeb514-4288-4a12-9b3d-b4b4a94a362b.jpg?v=1688128144", models: ["/models/body.glb","/models/shirt.glb"] },
    { id: 5, name: "Korean Shirt", price: "$79", img: "https://offduty.in/cdn/shop/files/Kz2_1080x.jpg?v=1723526414", models: ["/models/body.glb","/models/casual-shirt.glb"] },
    { id: 6, name: "Texture Shirt", price: "$79", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTePtVYMNKd4qATxihpfTmQy1DK7zKHpRduQA&s", models: ["/models/body.glb","/models/shirt.glb"] },
    { id: 7, name: "Tuxedo Shirt", price: "$79", img: "https://www.creaseindia.com/cdn/shop/files/black-crystal-tuxedo-shirt-for-men.jpg?v=1735621899&width=533", models:["/models/body.glb","/models/shirt.glb"] },
  ],
  dress: [
    { id: 1, name: "Casual floral Dress", price: "$129", img: "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/29997697/2024/6/19/9ea1c88c-d5a1-49ee-9b07-c2b7040be1971718809958398StylumFloralPrintA-LineDress1.jpg", models: ["/models/body.glb","/models/shirt.glb"] },
    { id: 2, name: "One piece Dress", price: "$179", img: "https://rukminim2.flixcart.com/image/850/1000/xif0q/kids-dress/d/r/6/9-10-years-new-one-piece-dress-perfectpivot-original-imah28jsqubhp8g8.jpeg?q=20&crop=false", models: ["/models/body.glb","/models/shirt.glb"] },
    { id: 3, name: "Ghagra Choli", price: "$179", img: "https://assets.ajio.com/medias/sys_master/root/20241017/duHu/671024bff9b8ef490bbfa651/-473Wx593H-700591687-white-MODEL.jpg", models: ["/models/body.glb","/models/shirt.glb"] },
    { id: 4, name: "Gown", price: "$179", img: "https://i.pinimg.com/474x/37/a4/f9/37a4f9266a850fc8767b7b67aca667ab.jpg", models: ["/models/body.glb","/models/shirt.glb"] },
    { id: 5, name: "Suit Salwar", price: "$179", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjW9n3WpP9BoO3F6OOjm-ahA3U8Ph5vS3jfGVXqamaj3uPoSg2wwvI35KCA-08CTsAslM&usqp=CAU", models: ["/models/body.glb","/models/shirt.glb"] },
    { id: 6, name: "Saree", price: "$179", img: "https://5.imimg.com/data5/SI/JT/VF/SELLER-37269396/beautiful-and-gorgeous-party-and-wedding-wear-designer-saree.jpg", models: ["/models/body.glb","/models/shirt.glb"] },
    { id: 7, name: "Ethnic wear", price: "$179", img: "https://www.lavanyathelabel.com/cdn/shop/files/1_eb7dccc7-cb9a-4a54-a36e-9fbb32da21ed_1200x.jpg?v=1735980871", models: ["/models/body.glb","/models/shirt.glb"] },
  ],
  T_shirts: [
    { id: 1, name: "T-shirts", price: "$179", img: "https://printmytee.in/wp-content/uploads/2021/07/Product-Your-Design-Here-01-1.jpg", models: ["/models/body.glb","/models/shirt.glb"] },
    { id: 2, name: "Design T-shirts", price: "$179", img: "https://img-c.udemycdn.com/course/480x270/5444528_d4e3_5.jpg", models: ["/models/body.glb","/models/shirt.glb"]},
    { id: 3, name: "Roblox T-shirts", price: "$179", img: "https://m.media-amazon.com/images/I/519joVn4LeL._AC_UY1100_.jpg", models: ["/models/body.glb","/models/shirt.glb"] },
    { id: 4, name: "Collar T-shirts", price: "$179", img: "https://cdn-media.powerlook.in/catalog/product/d/p/dp2_1146310-1.jpg?aio=w-640", models: ["/models/body.glb","/models/shirt.glb"] },
    { id: 5, name: "Sports T-shirts", price: "$179", img: "https://sportsqvest.com/cdn/shop/products/1158BL-Front_1200x.jpg?v=1647334768", models: ["/models/body.glb","/models/shirt.glb"] },
    { id: 6, name: "Zipper T-shirts", price: "$179", img: "https://cdn-media.powerlook.in/catalog/product/d/p/dp11124610-2.jpg?aio=w-640", models: ["/models/body.glb","/models/shirt.glb"] },
    { id: 7, name: "Oversized T-shirts", price: "$179", img: "https://veirdo.in/cdn/shop/files/vb200.jpg?v=1728462042", models: ["/models/body.glb","/models/shirt.glb"] },
  ],
  neckless: [
    { id: 1, name: "neckless", price: "$179", img: "https://i.pinimg.com/550x/fc/aa/dd/fcaaddff819bc90debe0c50714d11083.jpg", models: ["/models/body.glb","/models/shirt.glb"] },
    { id: 2, name: "Beaded neckless", price: "$179", img: "https://www.mangatrai.com/blog/top-trends-of-beaded-necklace-jewellery-for-all-occasions-1.jpg", models: ["/models/shirt.glb","/models/body.glb"] },
    { id: 3, name: "Gold plated neckless", price: "$179", img: "https://www.chidambaramgoldcovering.com/image/cache/catalog/ChidambaramGoldCovering/necklace/nckn1094-simple-gold-pattern-culcatta-necklace-for-women-shop-online-260-1-1a-850x1000.jpg", models: ["/models/body.glb","/models/shirt.glb"] },
    { id: 4, name: "Pearl neckless", price: "$179", img: "https://www.purepearls.in/wp-content/uploads/2019/05/products-pure-pearls-beautiful-pearl-necklace-set-in-white-thewa-pendant-with-palki-design-a13190.jpg", models: ["/models/shirt.glb"] },
    { id: 5, name: "Peacock design neckless", price: "$179", img: "https://gehnashop.com/cdn/shop/files/designer-gold-plated-peacock-design-kundan-pendant-necklace-set-by-gehna-shop-gehna-shop-kundan-necklace-set-peacock-design-buy-online-41752778932539.jpg?v=1688048837", models: ["/models/body.glb","/models/shirt.glb"] },
    { id: 6, name: "Diamond neckless", price: "$179", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmusgwkX499dZMgdXIFbCuMRdt2S8AadOHKg&s", models: ["/models/body.glb","/models/shirt.glb"] },
    { id: 7, name: "Platinum neckless", price: "$179", img: "https://www.orra.co.in/media/catalog/product/cache/0223386358b565e9d65c640854c3ad24/p/s/psn19001_1.jpg", models: ["/models/body.glb","/models/shirt.glb"] },
  ],
  shoes: [
    { id: 1, name: "Casual shoes", price: "$179", img: "https://www.jiomart.com/images/product/original/rvtfjoixga/birde-stylish-comfortable-white-casual-shoes-for-women-product-images-rvtfjoixga-0-202304261140.jpg?im=Resize=(1000,1000)", models: ["/models/body.glb","/models/shirt.glb"] },
    { id: 2, name: "Formal shoes", price: "$179", img: "https://images.meesho.com/images/products/54574947/jejxc_512.webp", models: ["/models/body.glb","/models/shirt.glb"] },
    { id: 3, name: "Leather shoes", price: "$179", img: "https://www.voganow.com/cdn/shop/files/VNGS-88186-09-DC-SP.jpg?v=1704790251", models: ["/models/body.glb","/models/shirt.glb"] },
    { id: 4, name: "Canvas shoes", price: "$179", img: "https://m.media-amazon.com/images/I/51jslggR6jL._AC_UY1000_.jpg", models: ["/models/body.glb","/models/shirt.glb"] },
    { id: 5, name: "Sports shoes", price: "$179", img: "https://img.joomcdn.net/33e70dcea217ac6726d7468ffea317980e22d8dd_original.jpeg", models: ["/models/body.glb","/models/shirt.glb"] },
    { id: 6, name: "Cool shoes", price: "$179", img: "https://images-cdn.ubuy.co.in/64ede0a75dfdab421b2aa6a3-bubudeng-men-athletic-mesh-shoes-non.jpg", models: ["/models/body.glb","/models/shirt.glb"] },
    { id: 7, name: "Nike shoes", price: "$179", img: "https://5.imimg.com/data5/WQ/UJ/MY-36868853/nike-zoom-pegasus-33-mens-running-shoes-500x500.jpg", models: ["/models/body.glb","/models/shirt.glb"] },
  ],
  pants: [
    { id: 1, name: "Stylish korean pants", price: "$179", img: "https://freakins.com/cdn/shop/files/Freakins15NOV0080.jpg?v=1732093454", models: ["/models/body.glb","/models/shirt.glb"] },
    { id: 2, name: "Cargo pants", price: "$179", img: "https://pantproject.com/cdn/shop/products/DSC01278_cfa0cd61-bcfe-4d4b-92d3-6088b617f1e4.jpg?v=1677584122", models: ["/models/body.glb","/models/shirt.glb"] },
    { id: 3, name: "Organic Cotton pants", price: "$179", img: "https://images.bestsellerclothing.in/data/selected/26-july-2023/156337804_g1.jpg?width=1080&height=1355&mode=fill&fill=blur&format=auto", models: ["/models/body.glb","/models/shirt.glb"] },
    { id: 4, name: "Track pants", price: "$179", img: "https://thehouseofrare.com/cdn/shop/files/adda-mens-track-pant-dk-green141020244_d8e07e38-e8aa-49d9-8fd8-f7c23c18261f.jpg?v=1731584996", models: ["/models/body.glb","/models/shirt.glb"] },
    { id: 5, name: "Chnios pants", price: "$179", img: "https://pantproject.com/cdn/shop/files/DSC8277_1344233a-fadc-44af-8cf4-e83cb9de7806.jpg?v=1736360761", models: ["/models/body.glb","/models/shirt.glb"] },
    { id: 6, name: "Formal pants", price: "$179", img: "https://5.imimg.com/data5/VZ/MB/QB/SELLER-83001259/london-grey-formal-trouser.jpg", models: ["/models/body.glb","/models/shirt.glb"] },
    { id: 7, name: "Pajama pants", price: "$179", img: "https://www.apella.in/cdn/shop/products/MenPlusSizeBrownCottonPajamaPant_1_9ba13e69-e708-430a-993b-b01120f6317c.jpg?v=1725424261&width=1946", models: ["/models/body.glb","/models/shirt.glb"] },
  ],
  kurta: [
    { id: 1, name: "EMBRODRY kurta", price: "$179", img: "https://valintaformens.com/cdn/shop/products/photo_2023-03-27_02-27-21.jpg?v=1681723151", models: ["/models/body.glb","/models/shirt.glb"] },
    { id: 2, name: "Fabric kurta", price: "$179", img: "https://www.parivarceremony.com/media/catalog/product/cache/62408a38a401bb86dbe3ed2f017b539f/1/0/1033908_4.jpg", models: ["/models/body.glb","/models/shirt.glb"] },
    { id: 3, name: "Stylish kurta", price: "$179", img: "https://www.beyoung.in/blog/wp-content/uploads/2019/06/Asymmetric-New-Kurta-Designs-2020-853x1024.jpg", models: ["/models/body.glb","/models/shirt.glb"] },
    { id: 4, name: "Collar kurta", price: "$179", img: "https://manyavar.scene7.com/is/image/manyavar/Manyavar1662_05-12-2022-05-42:650x900", models: ["/models/body.glb","/models/shirt.glb"] },
    { id: 5, name: "Western kurta", price: "$179", img: "https://mahavir-nx.com/wp-content/uploads/2023/03/93B.webp", models: ["/models/body.glb","/models/shirt.glb"] },
    { id: 6, name: "Embroidery kurta", price: "$179", img: "https://rukminim2.flixcart.com/image/850/1000/xif0q/kurta/e/n/p/l-mirror-kurta-moltera-original-imagu5hhm5sgfzjv.jpeg?q=90&crop=false", models: ["/models/body.glb","/models/shirt.glb"] },
    { id: 7, name: "Pathani kurta", price: "$179", img: "https://www.wholesaletextile.in/product-img/Outluk-Pathani-Vol-1-Cotton-Ku-1702031113.jpeg", models: ["/models/body.glb","/models/shirt.glb"] },
  ],
  sherwani: [
    { id: 1, name: "Weddimng sherwani", price: "$179", img: "https://assets0.mirraw.com/images/12018938/image_zoom.jpeg?1699451783", models: ["/models/body.glb","/models/shirt.glb"] },
    { id: 2, name: "sherwani", price: "$179", img: "https://img.perniaspopupshop.com/catalog/product/z/o/ZOOP102451_1.jpg?impolicy=detailimageprod", models: ["/models/body.glb","/models/shirt.glb"] },
    { id: 3, name: "Groom sherwani", price: "$179", img: "https://assets.panashindia.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/7/4/740mw12-rk2077.jpg", models: ["/models/body.glb","/models/shirt.glb"] },
    { id: 4, name: "Silk sherwani", price: "$179", img: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/21496664/2023/2/1/ccb01211-dfa6-44c1-b08b-13fd4ab5f6551675246245146-Manyavar-Men-Embroidered-Art-Silk-Sherwani-With-Churidar--Du-1.jpg", models: ["/models/body.glb","/models/shirt.glb"] },
    { id: 5, name: "Elegant white sherwani", price: "$179", img: "https://suvidhafashion.com/cdn/shop/files/6002-M17.jpg?v=1699611608&width=720", models: ["/models/body.glb","/models/shirt.glb"] },
    { id: 6, name: "Royal black sherwani", price: "$179", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTf8VGK8gG1QfUSxBkyUfg3oqCkezUwZ9Ckg&s", models: ["/models/body.glb","/models/shirt.glb"] },
    { id: 7, name: "Rajputi sherwani", price: "$179", img: "https://tiimg.tistatic.com/fp/1/008/243/men-embroidery-work-full-sleeves-polyester-sherwani-for-wedding-wear-938.jpg", models: ["/models/body.glb","/models/shirt.glb"] },
  ],
  hoodies: [
    { id: 1, name: "Lymio hoodies", price: "$179", img: "https://m.media-amazon.com/images/I/91NLs-Q9BWL._AC_UY1100_.jpg", models: ["/models/body.glb","/models/shirt.glb"] },
    { id: 2, name: "Cotton fit hoodies", price: "$179", img: "https://m.media-amazon.com/images/I/51XQKBTbJ7L._AC_UY1100_.jpg", models: ["/models/body.glb","/models/shirt.glb"] },
    { id: 3, name: "Spiderman hoodies", price: "$179", img: "https://www.redwolf.in/image/cache/catalog/hoodies/marvel-upgraded-spider-suit-hoodie-india-600x800.jpg?m=1705304806", models: ["/models/body.glb","/models/shirt.glb"] },
    { id: 4, name: "Olive green hoodies", price: "$179", img: "https://nobero.com/cdn/shop/files/black_94ef5b95-b2a3-447f-8234-6c85a43c046d.jpg?v=1734845956", models: ["/models/body.glb","/models/shirt.glb"] },
    { id: 5, name: "Anime hoodies", price: "$179", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn5or_ykKcDSEuqOa5FBlNIsmdwiTwIW0ojg&s", models: ["/models/body.glb","/models/shirt.glb"] },
    { id: 6, name: "Asthetic hoodies", price: "$179", img: "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjM3MTY3XC9Ccm93bl9TXzFfMTIuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxMDAwLCJoZWlnaHQiOjEwMDAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==", models: ["/models/shirt.glb"] },
    { id: 7, name: "Korean hoodies", price: "$179", img: "https://images-cdn.ubuy.co.in/633ae7add09dad1f5b4aaad1-korean-mens-street-style-patchwork.jpg", models: ["/models/body.glb","/models/shirt.glb"] },
  ],
  jeans: [
    { id: 1, name: "Lymio jeans", price: "$179", img: "https://m.media-amazon.com/images/I/71uSBkPXhTL._AC_UY1100_.jpg", models: ["/models/body.glb","/models/shirt.glb"] },
    { id: 2, name: "Denim jeans", price: "$179", img: "https://www.tistabene.com/cdn/shop/products/MJS-0013A.jpg?v=1694077944", models: ["/models/body.glb","/models/shirt.glb"] },
    { id: 3, name: "Baggy jeans", price: "$179", img: "https://offduty.in/cdn/shop/products/f656d2d7-0bfd-4cf7-b81a-62bc7e8377a1_540x.jpg?v=1676893043", models: ["/models/body.glb","/models/shirt.glb"] },
    { id: 4, name: "jeans", price: "$179", img: "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/25661982/2023/10/28/3bc1b372-0c4e-461b-8981-917c6972b3eb1698470001628PowerlookMenBlackBoyfriendFitLowDistressJeans1.jpg", models: ["/models/body.glb","/models/shirt.glb"] },
    { id: 5, name: "Ripped jeans", price: "$179", img: "https://myblacktree.com/cdn/shop/products/product-image-1380050292.jpg?v=1610786647", models: ["/models/body.glb","/models/shirt.glb"] },
    { id: 6, name: "Trendy jeans", price: "$179", img: "https://static.aceomni.cmsaceturtle.com/prod/product-image/aceomni/Lee/Monobrand/LMJN004496/LMJN004496_1.jpg", models: ["/models/body.glb","/models/shirt.glb"] },
    { id: 7, name: "Korean jeans", price: "$179", img: "https://i.pinimg.com/736x/9a/34/e3/9a34e3987aa9aba60e552d012bd5e544.jpg", models: ["/models/body.glb","/models/shirt.glb"] },
  ],
};


function CategoryPage({ category, onViewModel, onBack }) {
  const [selectedModels, setSelectedModels] = useState([]);
  const products = relatedProducts[category] || [];
  console.log("🟢 Category Received:", category);
  console.log("🟡 Available Categories in relatedProducts:", Object.keys(relatedProducts));
  console.log("🔴 Products in Selected Category:", relatedProducts[category]);
  console.log("🟣 First Product in Category:", relatedProducts[category]?.[0]);
  console.log("🔵 Models in First Product:", relatedProducts[category]?.[0]?.models);
  
  
  return (
    <div className="category-page">
      <h2>{category.toUpperCase()} Products</h2>
      <div className="category-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.img} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>

            <button onClick={() => {
              console.log("🟢 Clicked Product:", product.name);
              console.log("🔵 Models for this product:", product.models || "No models found");

              if (Array.isArray(product.models) && product.models.length > 0) {
                console.log("📢 Sending models to ModelViewer:", product.models);
                onViewModel(product.models);  // ✅ Pass models array to ModelViewer
              } else {
                console.error("🚨 No models found! Check relatedProducts.");
              }
            }}>
              View in AR
            </button>
    


          </div>
        ))}
      </div>

      <button onClick={onBack} className="back-button">Back to Main Products</button>

      {selectedModels.length > 0 && (
        <ModelViewer modelPaths={selectedModels} onClose={() => setSelectedModels([])} />
      )}
    </div>
  );
}

export default CategoryPage;

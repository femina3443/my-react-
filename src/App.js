import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { HomePage } from './components/homepage';
import { SearchPage } from './components/SearchPage';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

//  <div className='main'>       <div className='box1'>
//    function App() {
//   const [name, setName] = useState("");
//   const [tab, setTab] = useState("");
//   const [color, setColor] = useState("")

//   return (     <div className="App">
//                <div className='b11'>
//         <h2 className='shop'>Shop</h2>

//  //                 </div>
//                 <div className='b12'>
 //                   <img className='imgshop' src='https://cdn-icons-png.flaticon.com/512/263/263142.png' height="25" width="25" />
 //                 </div>
//                 <div className='b13'>
//                   <img className='imgthreeline' src='https://static.thenounproject.com/png/4572821-200.png' height="25" width="25" />
// //                 </div> */}

// //               </div>
// //               <div className='box2'>
// //                 <input value={''} onChange={() => {}} />
// //               </div>
// //               <div className='box3'>
// //                 <div className='b31'>
// //                   <img className='imglog' src='https://maisondefinesse.com/cdn/shop/articles/NEW_MDF_LOGO_2022.png?v=16605745121' height="35" width="35" />
// //                   <p className='bshop'>Browse Shop</p>
// //                   </div>
// //                   <div className='b32'>
// //                   <img className='imglogg' src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png' height="35" width="35" />
// //                   <p className='epics'> Editor's Pics</p>
// //                 </div>
               
// //                 </div>

      
// //       {/* <Carousel>
// //                 <div>
// //                     <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" />
// //                     <p className="legend">Legend 1</p>
// //                 </div>
// //                 <div>
// //                     <img src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg" />
// //                     <p className="legend">Legend 2</p>
// //                 </div>
// //                 <div>
// //                     <img src="https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=" />
// //                     <p className="legend">Legend 3</p>
// //                 </div>
// //             </Carousel> */}
// //         <div className='panel'></div>



// //         {
// //           tab === "photos" && (
// //             <HomePage />
// //           )
// //         }


// //         {
// //           tab === "search" && (



// //             <div>Search content</div>




// //           )}


// //         {
// //           tab === "videos" && (
// //             <div> Search videos</div>
// //           )
// //         }
// //         {
// //           tab === "Shop" && (
// //             <div>Shop</div>
// //           )
// //         }


// //       <div style={{
// //         height:380
// //       }}></div>

// //         <div className='box6'>

// //           <button onClick={() => setTab("photos")}><img src='https://cdn-icons-png.flaticon.com/512/5948/5948524.png' height="25" width="25" /></button>
// //           <button onClick={() => setTab("search")}><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_rFy-gjpONsgX3I_DMJakG2yxAp8CxufLxcHxEn1tgDeT0Frd0sCJl8_Cl11XxMBBrxc&usqp=CAU' height="25" width="25" /></button>
// //           <button onClick={() => setTab("videos")}><img src='https://seeklogo.com/images/I/instagram-reels-logo-18CF7D9510-seeklogo.com.png' height="25" width="25" /></button>
// //           <button onClick={() => setTab("Shop")}><img src='https://cdn-icons-png.flaticon.com/512/70/70894.png' height="25" width="25" /></button>
// //           <button onClick={() => setTab("User")}><img src='https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black-thumbnail.png' height="25" width="25" /></button>

// //         </div>



// //       </div>
// //     </div>
// //   );
// // }
// function App(){
//   const persons=[
//     {name:"arshad",age:10},
//     {name:"Riya",age:12},
//     {name:"mehra",age:5}

//   ]
//   const filtered = persons.filter(person => {
//     if(person.age > 4) {
//       return true;
//     } else {
//       return false;
//     }
// })
// console.log(filtered)
// }
function App(){
  const persons=[
    {name:"anees",age:12},
    {name:"Rina",age:10},
    {name:"Ansil",age:4}

  ]
  const filtered=persons.filter(person=>{
    if(person.age<5){
      return false;
    }
    else{
      return true;
    }
  })
  console.log(filtered);
}


export default App;
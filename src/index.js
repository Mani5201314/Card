import React from "react";
import ReactDOM from "react-dom/client";
import Nav from "./nav";
import Carousel from "./carousel";
import "bootstrap/dist/css/bootstrap.css";
import Card from "./cards";
import Footer from "./footer";
import Login from "./login";
import App from "./app";
import Use from "./usememo";
import Hi from "./hi";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Login /> */}
    <Nav />
    <Carousel />
    <h1>Amazon Prime Videos</h1>
    <Card />
    <br />
    <Footer />
    {/* <App/> */}
    {/* <Use /> */}
    <Hi />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

{
  /* <Card imgUrl='/img/img1.webp' rel="https://www.zee5.com/movies/details/oppenheimer/0-0-1z5465540" />
    <Card imgUrl='/img/img3.webp' rel="https://www.zee5.com/movies/details/karthikeya-2/0-0-1z5419273"/>
    <Card imgUrl='/img/img2.webp' rel="https://www.zee5.com/movies/details/fast-x/0-0-1z5383546" />
    <Card imgUrl='/img/img4.webp' rel="https://www.zee5.com/movies/details/the-karate-kid-2010/0-0-1z5214531"/>
    <Card imgUrl='/img/img5.webp' rel="https://www.zee5.com/kids/kids-movies/kung-fu-panda/0-0-1z5477209"/>
    <Card imgUrl='/img/img6.webp' rel="https://www.zee5.com/movies/details/2012/0-0-1z5236357"/>
    <Card imgUrl='/img/img7.webp' rel="https://www.zee5.com/movies/details/napoleon/0-0-1z5496522"/>
    <Card imgUrl='/img/img8.webp' rel="https://www.zee5.com/movies/details/the-exorcist-believer/0-0-1z5465861"/>
    <Card imgUrl='/img/img9.webp' rel="https://www.zee5.com/movies/details/rrr/0-0-1z5419276"/>
    <Card imgUrl='/img/img10.webp' rel="https://www.zee5.com/movies/details/jersey/0-0-59341"/> */
}

import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import Price from './component/price/price';
import HeroSection from './component/Hero Section/HeroSection';
import SkillSection from './component/skillsSection/SkillSection';
import BusinessPromotion from './component/Business Promotion/BusinessPromotion';
import Logo from './component/logo/Logo';
import CourseSection from './component/Courses Section/CoursesSection';
import CoursesSection from './component/Courses Section/CoursesSection';
import AddCourse from './component/AddCourse/AddCourse';
import Testimonials from './component/Testimonials/Testimonials';
import ImageCarousel from './component/ImageCarousel/ImageCarousel';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from './component/signup/signup';
import Work from './component/Plans/Plans';
import UdemyBusiness from './component/UdemyBussiness/UdemyBusiness';
import RecommendedSection from './component/Recommended Courses/RecommendedCourses';



const App =()=> {
  return (
    <div>
      {/* Header Section */}
      <Header />

      {/* Add the carousel here */}
      <ImageCarousel/>

      {/* Hero Section */}
     <HeroSection/>

      {/* All Skills Section */}
      <SkillSection/>

      {/* Courses Section as Blocks */}
     <CoursesSection/>
     {/*Recommended Courses*/}
     <RecommendedSection/>

      {/* Udemy Business Promotion Section */}
      <BusinessPromotion/>

      {/* logo*/}
      <Logo/>

      {/* price */}
       <Price/>

       {/*sign up*/}
       <SignUp/>
       
       { /*Testimonials*/}
       <Testimonials/>
       

      {/* Footer Section */}
      <Footer/>
    </div>
  );
}


const Login = () =>{
  return (
   <>
   <AddCourse/>
   <Work/>
   </>
  )

}


const Body = createBrowserRouter([


  {

    path:"/",
    element:<App/>,

  },

  {
    path:"/login",
    element:<Login/>,

  },
  {
    path:"/bs",
    element:<UdemyBusiness/>
  },
])


export default App;







const root = ReactDOM.createRoot(document.getElementById("root"))


root.render(<RouterProvider router={Body}/>)
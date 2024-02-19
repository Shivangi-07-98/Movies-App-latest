import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import Home from './components/Home/Home'
import About from './components/About/About';
// import Projects from './components/Projects/Projects';
// import Team from './components/Team/Team';
// import Career from './components/Career/Career';
import Contact from './components/Contact/Contact';

import New from './components/New/New';
// import Login from './components/Login/Login';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';

// // services
// import Web_Design_and_Development from './components/Services/Web Design/Web_Design_and_Development';
// import Mobile_App_Development from './components/Services/mobile-app/Mobile_App_Development';
// import E_Commerce_and_Retail from './components/Services/e-commerce/E_Commerce_and_Retail';
// import Artificial_Intelligence_and_Machine_Learning from './components/Services/ai-ml/Artificial_Intelligence_and_Machine_Learning';
// import Custom_Software_Development from './components/Services/custom-software/Custom_Software_Development';
// import Enterprise_Software_Development from './components/Services/enterprise-software/Enterprise_Software_Development';

// // hire us
// import Hire_Dedicated_Python_Developers from './components/Hire Us/python-developers/Hire_Dedicated_Python_Developers';
// import Hire_Dedicated_Android_Developers from './components/Hire Us/android-developers/Hire_Dedicated_Android_Developers';
// import Hire_Dedicated_ios_Developers from './components/Hire Us/ios-developers/Hire_Dedicated_ios_Developers';
// import Hire_Dedicated_php_Developers from './components/Hire Us/php-developers/Hire_Dedicated_php_Developers';
// import Hire_Dedicated_Ecommerce_Developers from './components/Hire Us/e-commerce-developers/Hire_Dedicated_Ecommerce_Developers';

import PageNotFound from './components/PageNotFound';

const Routing = () => {
    return (
        <Router>
            <Navbar></Navbar>
            <Routes>

                {/* <Route path="/" element={<Home />} /> */}
                {/* the index route is defined for the / route */}
                <Route index element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />

                {/* <Route path='web-design' element={<Web_Design_and_Development />} />
                <Route path="mobile-app" element={<Mobile_App_Development />} />
                <Route path="e-commerce" element={<E_Commerce_and_Retail />} />
                <Route path="ai-ml" element={<Artificial_Intelligence_and_Machine_Learning />} />
                <Route path="custom-software" element={<Custom_Software_Development />} />
                <Route path="enterprise-software" element={<Enterprise_Software_Development />} /> */}


                {/* <Route path="/projects" element={<Projects />} />
                <Route path="/team" element={<Team />} />
                <Route path="/career" element={<Career />} /> */}



                <Route path="/new" element={<New />} />
                {/* <Route path="/login" element={<Login />} /> */}
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />

                {/* <Route path='python-developers' element={<Hire_Dedicated_Python_Developers />} />
                <Route path="android-developers" element={<Hire_Dedicated_Android_Developers />} />
                <Route path="ios-developers" element={<Hire_Dedicated_ios_Developers />} />
                <Route path="php-developers" element={<Hire_Dedicated_php_Developers />} />
                <Route path="e-commerce-developers" element={<Hire_Dedicated_Ecommerce_Developers />} /> */}

                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<PageNotFound />} />

            </Routes>
            <Footer></Footer>
        </Router>
    );
};

export default Routing;
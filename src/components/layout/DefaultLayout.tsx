// eslint-disable-next-line no-use-before-define
import React from "react";
import {useLocation} from "react-router";
import Header from 'components/common/Header';
import Footer from 'components/common/Footer';

const DefaultLayout:React.FC = ({children})=>{
    const location = useLocation()
    return<>
        { !location.pathname.includes('/dashboard') && <Header /> }
        {/*  now , this component will return a modified component (children) . so , it is a higher order component */}
        {children}
        { !location.pathname.includes('/dashboard') && <Footer /> }
    </>
}

export default DefaultLayout;
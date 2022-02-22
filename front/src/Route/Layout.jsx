import React from 'react';
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";

const Layout = (props) => {
    return (
        <div>
            <NavigationBar/>
            <main>
                {props.children}
            </main>
            <Footer/>
        </div>
    );
};

export default Layout;
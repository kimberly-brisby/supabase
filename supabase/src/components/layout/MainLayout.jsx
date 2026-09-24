import Header from "./Header";
import Footer from "./Footer";

@param { object } props
@param { React, ReactNode } props.children

function MainLayout({ children }) {
    return (
        <div classname="app-shell">
            <Header />
            {children}
            <Footer />
        </div>  
    
    );
}

export default MainLayout;
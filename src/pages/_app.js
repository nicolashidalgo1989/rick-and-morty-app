import { Component } from 'react';
import { connect } from 'react-redux';
import { Provider } from 'react-redux'; 
import store from '../redux/store';  
import 'bootstrap/dist/css/bootstrap.min.css'; 

export default function MyApp({ Component, pageProps }) {

    return ( 

        <Provider store={store}>  
            <Component {...pageProps} />
        </Provider>  

    )

}

const mapStateToProps = (state) => {

    return {
        characterReducer: state.characterReducer
    }

}

export default connect(mapStateToProps)(App); 

import { Provider } from 'react-redux'; 
import store from '../redux/store';   
import Index from './index';
import '../utils/index.css'

const App = () => {

    return ( 

        <Provider store={store}>  
            <Index />
        </Provider>  

    )

}

export default App;

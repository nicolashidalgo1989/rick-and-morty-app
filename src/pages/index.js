import 'bootstrap/dist/css/bootstrap.min.css';
import Template from '../templates/Template';
import Logo from '../components/Logo';
import Search from '../components/Search';
import List from '../components/List'; 

const Index = () => {

    return (

        <>
            <Template> 
                <Logo />
                <Search/> 
                <List/> 
            </Template> 
        </>

    )
    
} 

export default Index;

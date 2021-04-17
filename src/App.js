import { connect } from 'react-redux';
import Template from './components/templates/Template';
import Search from './components/molecules/Search';
import List from './components/organisms/List'; 

function App() { 

  return (       
    
      <Template> 
          <Search/> 
          <List/> 
      </Template> 

  )

}

const mapStateToProps = (state) => {

  return {
      characterReducer: state.characterReducer
  }

}

export default connect(mapStateToProps)(App); 

import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';

const shop = () => {
  return (
    <div>SHOPING PAGE</div>
  )
}

const App = () => {
  return (
    <Routes>
      <Route path="/" Component={Navigation}>
        <Route index Component={Home} />
        <Route path="shop" Component={shop} />
        <Route path="auth" Component={Authentication} />
      </Route>
    </Routes>
  );  
}

export default App;

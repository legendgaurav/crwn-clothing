import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import SignIn from './routes/sign-in/sign-in.component';

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
        <Route path="sign-in" Component={SignIn} />
      </Route>
    </Routes>
  );  
}

export default App;

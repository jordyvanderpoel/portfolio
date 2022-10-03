import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';

function App() {
  return (
	<Router>
    	<div className="App">
			<Sidebar />

			<div className="main-wrapper">
				<Routes>
					<Route exact path='/' element={<AboutMe />}></Route>
					<Route exact path='/portfolio' element={<Portfolio />}></Route>
					<Route exact path='/resume' element={<Resume />}></Route>
					<Route exact path='/contact' element={<Contact />}></Route>
				</Routes>

				<Footer />
			</div>
    	</div>
	</Router>
  );
}

export default App;

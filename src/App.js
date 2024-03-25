import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Catalog from './pages/Catalog.js'
import RegisterScreen from './pages/Register.js'
import Welcome from './pages/Welcome.js'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Welcome />} />
				<Route path='catalog' element={<Catalog />} />
				<Route path='register' element={<RegisterScreen />} />
			</Routes>
		</BrowserRouter>
		// <div className='App max-w-xl justify-center mx-auto '>
		// 	<Welcome />
		// </div>
	)
}

export default App

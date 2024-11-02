import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from './pages/app'

export default function Navegacao() {


    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App/>} />
            </Routes>
        </BrowserRouter>
    )
}
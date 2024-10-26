import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from './pages/app'
import Feedback from './pages/feedback'

export default function Navegacao() {


    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App/>} />
            <Route path='/feedback' element={<Feedback />} />
            </Routes>
        </BrowserRouter>
    )





}
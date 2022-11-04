import {BrowserRouter, Routes, Route} from 'react-router-dom'
import App from './Components/App';
import Homepage from "./Pages/Homepage";
import Album from "./Pages/Album";
import Interview from "./Pages/Interview";
import Video from './Pages/Video';
import './reset.css';

function Main(){
    return(
        <BrowserRouter>
        <App>
            <Routes>
                <Route path='/' element={<Homepage />} />
                <Route path='/album' element={<Album />} />
                <Route path='/interview' element={<Interview />} />
                <Route path='/video' element={<Video />} />
            </Routes>
        </App>
        </BrowserRouter>
    )
}

export default Main;
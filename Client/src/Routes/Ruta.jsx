import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Perfil } from "../Pages/Perfil";
import { Messages } from "../Pages/Messages";
import { Notify } from "../Pages/Notify";
import { Explore } from "../Pages/Explore";
import { Search } from "../Pages/Search";
import { MyPanel } from "../Pages/MyPanel";
import { NewPost } from "../Pages/NewPost";
import { Activities } from "../Pages/Activities";

export function Ruta() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" Component={Explore} />
                <Route path="/Explore" Component={Explore} />
                <Route path="/Search" Component={Search} />
                <Route path="/Messages" Component={Messages} />
                <Route path="/Notify" Component={Notify} />
                <Route path="/MyPanel" Component={MyPanel} />
                <Route path="/NewPost" Component={NewPost} />
                <Route path="/Activities" Component={Activities} />
                <Route path="/MyPerfil" element={<Perfil />} />
            </Routes>
        </BrowserRouter>
    );
}

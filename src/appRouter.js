import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import MenuMakanan from './page/MenuMakanan';
import MenuMinuman from './page/MenuMinuman';
import Kontak from './page/Kontak';

const AppRouter = () => (
<Router>
    <div>
        <Route path="/" exact component={App} />
        <Route path="/menu_makanan" component={MenuMakanan} />
        <Route path="/menu_minuman" component={MenuMinuman} />
        <Route path="/menu_kontak" component={Kontak} />
    </div>
</Router>
);

export default AppRouter;
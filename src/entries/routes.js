import React from 'react'
import { Route, Switch } from 'react-router-dom'

//Components
import App from '../pages/containers/app'
import Home from '../pages/containers/home'
import Directorio from '../pages/containers/directorio'
import Contacto from '../pages/containers/contacto'
import Pagina404 from '../pages/containers/pagina404'

const AppRoutes = () =>
<App>
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/directorio" component={Directorio} />
    <Route exact path="/contacto" component={Contacto} />
    <Route component={Pagina404} />
  </Switch>
</App>


export default AppRoutes;

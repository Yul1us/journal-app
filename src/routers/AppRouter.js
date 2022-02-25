//Sistema de Rutas principal

import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { useDispatch} from 'react-redux';

import { AuthRouter } from './AuthRouter';
import { firebase } from '../firebase/firebase-config'
import { PrivateRoute } from './PrivateRoute';


import { JournalScreen } from '../components/journal/JournalScreen';
import { login } from '../actions/auth'
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {

    //Banderas locales para evitar que pase a las rutas si no esta logueado...
    const [checking, setChecking] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    
    const dispatch = useDispatch();

    //se dispara cada ves que cambie el estado de la autenticacion,.... y me lo informa...
    //Esto es un observable...
    useEffect(() => {
        
        firebase.auth().onAuthStateChanged( ( user ) => {
            //console.log(user);
            //user? si existe -> ?
            if (user?.uid ) {
                dispatch( login( user.uid, user.displayName ) )
                setIsLoggedIn( true );
            } else {
                setIsLoggedIn ( false );

            }

            setChecking( false );

        });
      
    }, [dispatch, setChecking, setIsLoggedIn])

    if ( checking ) {
        return (
            <h1>Espere... Logueando...</h1>
        )
    }
    

    // return (
    //     <Router>
    //         <div>
    //             {/* <h1>App Router</h1> */}
    //             <Switch>
    //                 <Route 
    //                     path="/auth" 
    //                     component = {AuthRouter} //El Componente que se va a mostrar
    //                 />
    //                 <Route 
    //                     exact
    //                     path="/" 
    //                     component = {JournalScreen} //El Componente que se va a mostrar
    //                 />
    //                 <Redirect to = "/auth/login"/>

    //             </Switch>
    //         </div>
            
    //     </Router>
    // );


    return (
        <Router>
            <div>
                {/* <h1>App Router</h1> */}
                <Switch>
                    <PublicRoute 
                    
                        path="/auth" 
                        component = {AuthRouter} //El Componente que se va a mostrar
                        isAuthenticated = { isLoggedIn }
                    />
                    <PrivateRoute 
                        exact
                        isAuthenticated = { isLoggedIn }
                        path="/" 
                        component = {JournalScreen} //El Componente que se va a mostrar
                    />
                    <Redirect to = "/auth/login"/>

                </Switch>
            </div>
            
        </Router>
    );
};

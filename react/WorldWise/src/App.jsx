import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import {CitiesProvider} from './contexts/CitiesContext'
import { AuthProvider } from "./contexts/FakeAuthContext";
import ProtectedRoute from "./pages/ProtectedRoute";
import { lazy, Suspense } from "react";
import SpinnerFullPage from './components/SpinnerFullPage'
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from './components/City'
import Form from './components/Form'


// import Product from "./pages/Product";
// import Pricing from "./pages/Pricing";
// import HomePage from "./pages/HomePage";
// import PageNotFound from "./pages/PageNotFound";
// import AppLayout from './pages/AppLayout'
// import Login from "./pages/Login";
const HomePage=lazy(()=>import("./pages/Homepage"))
const Pricing=lazy(()=>import("./pages/Pricing"))
const Product=lazy(()=>import("./pages/Product"))
const Login=lazy(()=>import("./pages/Login"))
const PageNotFound=lazy(()=>import("./pages/PageNotFound"))
const AppLayout=lazy(()=>import("./pages/AppLayout"))



export default function App(){
 
  


  return <AuthProvider>
  <CitiesProvider>

  <BrowserRouter>
  <Suspense fallback={<SpinnerFullPage/>}>
      <Routes>
      <Route path="login" element={<Login/>}/>
        <Route path="product" element={<Product/>}/>
        <Route path="pricing" element={<Pricing/>}/>
        <Route index element={<HomePage/>}/>
        
        <Route path="app" element={<ProtectedRoute><AppLayout/></ProtectedRoute>}>
         <Route index element={<Navigate replace to='cities'/>}/>
         <Route path="cities" element={<CityList/>}/>
         <Route path="cities/:id" element={<City/>}/> 
         <Route path="countries" element={<CountryList/>}/>
         <Route path="form" element={<Form/>}/>
        </Route>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
      </Suspense>
  </BrowserRouter>
  </CitiesProvider>
  </AuthProvider>
}

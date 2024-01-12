import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navs from "./components/basics/Navs"
import Profile from "./pages/Profile";
import Home from "./pages/home";
import Header from "./components/basics/Header";
import AddPage from "./pages/AddPage";
import { SignOutButton, SignInButton, SignedIn, SignedOut } from "@clerk/clerk-react"

const isLogin=true;
function App() {
  return (
    <>
      <BrowserRouter>
        {
          
          isLogin?
            <div className="flex flex-col h-screen">
              <Header />
              <Routes>
                
                  <Route path="/" element={<Home />} />
                  <Route path="/addClass/student" element={<AddPage teacher={false} />} />
                  <Route path="/addClass/student/:code" element={<AddPage teacher={false} />} />
                  <Route path="/addClass/teacher" element={<AddPage teacher={true} />} />
                  <Route path="/addClass/teacher/:code" element={<AddPage teacher={true} t={1} />} />
                  <Route path="/profile" element={<Profile />} />
                
              </Routes>
              <Navs />
            </div> 
         
            
            
             
             : <Routes>
                <Route path="*" element={<SignInButton />} />
              </Routes>
            
            
          
         
        }
      </BrowserRouter>
       
    </>
  )
}

export default App

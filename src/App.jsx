import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navs from "./components/basics/Navs"
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Header from "./components/basics/Header";
import AddPage from "./pages/AddPage";
import { SignOutButton, SignInButton, SignedIn, SignedOut } from "@clerk/clerk-react"
import { useUser,useAuth } from "@clerk/clerk-react"

const loggedIn = false;

function App() {
  return (
    <>
      <BrowserRouter>
        {
          <>
          <SignedIn>
            <div className="flex flex-col h-screen">
              <Header />
              <Routes>
                <>
                  <Route path="/" element={<Home />} />
                  <Route path="/addClass/student" element={<AddPage teacher={false} />} />
                  <Route path="/addClass/student/:code" element={<AddPage teacher={false} />} />
                  <Route path="/addClass/teacher" element={<AddPage teacher={true} />} />
                  <Route path="/addClass/teacher/:code" element={<AddPage teacher={true} t={1} />} />
                  <Route path="/profile" element={<Profile />} />
                </>
              </Routes>
              <Navs />
            </div> 
            </SignedIn>
            <SignedOut>
            
              <Routes>
                <Route path="/" element={<SignInButton />} />
              </Routes>
            
            </SignedOut>
            </>
        }
      </BrowserRouter>
    </>
  )
}

export default App

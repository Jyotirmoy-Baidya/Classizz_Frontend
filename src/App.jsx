import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navs from "./components/basics/Navs"
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Header from "./components/basics/Header";
import AddPage from "./pages/AddPage";
import { SignOutButton, SignInButton, SignedIn, SignedOut } from "@clerk/clerk-react"
import { useUser, useAuth } from "@clerk/clerk-react"
import LandingPage from "./pages/LandingPage";
import { useEffect, useState } from "react";
import axios from 'axios'
import AddRolePage from "./pages/AddRolePage";

const loggedIn = false;


// const checkUserExistsURL = `${import.meta.env.BACKEND_URL}/user/alreadyexist`;
const checkUserExistsURL = "https://classizz-backend.onrender.com/user/alreadyexist"
const email = "jyotirmoybaidya408@gmail.com";
function App() {
  const { user, session, isSessionLoading } = useUser();
  const { isLoaded, isSignedIn } = useAuth();
  const [role, setRole] = useState(false);

  const checkUserExists = async () => {
    try {
      const a = await axios.get(`${checkUserExistsURL}/${email}`);
      console.log(a);
      setRole(a.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    checkUserExists();
  }, [])

  return (
    <>
      <BrowserRouter>
        {
          <>
            <SignedIn>
              {
                !role ?
                  <div className="flex flex-col h-screen">
                    <Routes>
                      <Route path="*" element={<AddRolePage email={"jb@gmail.com"} username={"Java Doodle"} />} />
                    </Routes>
                  </div>
                  :
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
              }
            </SignedIn>
            <SignedOut>
              <Routes>
                <Route path="/" element={<LandingPage />} />
                {/* <Route path="*" element={ } /> */}

                {/* <Route path="/" element={<SignInButton />} /> */}
              </Routes>

            </SignedOut>
          </>
        }
      </BrowserRouter>
    </>
  )
}

export default App

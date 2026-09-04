import Header from "./Header"
import Main from "./Main"
import Sidebar from "./Sidebar"

const Layout = () => {
  return (
    <>
        <Header />

        <div className="layout">
            <Sidebar />
            <Main />
        </div>
    
    </>
  )
}

export default Layout
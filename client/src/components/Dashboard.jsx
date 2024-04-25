import TopNav from "./TopNav"
import Header from "./Header"
import Pagination from "./Pagination"
import StudentDashboard from "./StudentDashboard"
import AdminDashboard from "./AdminDashboard"

function Dashboard() {
    const adminUser = window.localStorage.getItem("adminUser")
    console.log(adminUser)
    if (adminUser=="true") {
        return (   
            <div>
            <TopNav/>
            <Header/>
            <Pagination/>
            <AdminDashboard/>
            </div>
        )
    }
    else{
        return (   
            <div>
            <TopNav/>
            <Header/>
            <Pagination/>
            <StudentDashboard />
            </div>
        )
    }
}

export default Dashboard;
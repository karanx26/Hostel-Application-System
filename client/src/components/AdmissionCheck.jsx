import TopNav from "./TopNav"
import Header from "./Header"
import Pagination from "./Pagination"
import AdmissionStatus from "./AdmissionStatus"
import AdmissionPortal from "./AdmissionPortal"

function Admission() {
    const adminUser = window.localStorage.getItem("adminUser")
    if (adminUser=="true") {
        return (   
            <div>
            <TopNav/>
            <Header/>
            <Pagination/>
            <AdmissionPortal/>
            </div>
        )
    }
    else{
        return (   
            <div>
            <TopNav/>
            <Header/>
            <Pagination/>
            <AdmissionStatus />
            </div>
        )
    }
}

export default Admission;
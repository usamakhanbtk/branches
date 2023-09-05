import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Header from "./Components/Header";
import Services from "./Components/Services";
import Home from "./Components/Home";
import About from "./Components/About";
import SignUpPatient from "./Components/SignUpPatient";
import SignUpDoctor from "./Components/SignUpDoctor";
import LoginPatient from "./Components/LoginPatient";
import LoginDoctor from "./Components/LoginDoctor";
import HeaderPatient from "./Components/Patient/HeaderPatient";
import FrontPageForBlood from "./Components/Patient/BloodDonation/Front";
import DonateBlood from "./Components/Patient/BloodDonation/DonateBlood";
import RequestCallForBlood from "./Components/Patient/BloodDonation/RequestCallForBlood";
import Calc from "./Components/Patient/Health_Monitoring_System/Calc";
import Video from "./Components/Patient/Video_Consultation/Video";
import Aid from "./Components/Patient/Aid_Charity/Aid";
import FrontPageForAid from "./Components/Patient/Aid_Charity/FrontP";
import GetAid from "./Components/Patient/Aid_Charity/GetAid";
import DocHome from "./Components/Doctor/DocHome/DocHome";
import GiveAidByDoc from "./Components/Doctor/GiveAIdByDoc/GiveAidByDoc";
import BloodDonateByDoc from "./Components/Doctor/BloodDonateByDoc/BloodDonateByDoc";
import AidFormByDoc from "./Components/Doctor/GiveAIdByDoc/AidFormByDoc";
import BloodFormByDoc from "./Components/Doctor/BloodDonateByDoc/BloodFormByDoc";
import BmrCalc from "./Components/Patient/Health_Monitoring_System/dietPlan/BmrCalc";
import Index from "./VideoCall";
import AdminLogin from "./Components/AdminLogin";
import PatientsList from "./Components/Admin/PatientsList";
import DoctorsList from "./Components/Admin/DoctorsList";
import BloodDonationsList from "./Components/Admin/BloodDonationsList";
import Aid_CharityList from "./Components/Admin/Aid_CharityList";
import ContactUsByP from "./Components/Patient/ContactUs/ContactUs";
import ContactUsByD from "./Components/Doctor/ContactUs/ContactUs";
import HomeP from "./Components/Patient/Home/Home";
import HomeD from "./Components/Doctor/Home/Home";
import ContactUsByA  from './Components/Admin/ContactUs';
import EditP from './Components/Patient/Edit';
import EditD from './Components/Doctor/Edit';
import Labortory from "./Components/Admin/Labortory";
import MeetingLog from "./Components/Doctor/DocHome/MeetingLog";
import Notifications from "./Components/Patient/Video_Consultation/Notifications";
import Lab from "./Components/Patient/Lab/Lab";
function App() {
  return (
    <>
   
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/psign" element={<SignUpPatient />} />
          <Route path="/dsign" element={<SignUpDoctor />} />
          <Route path="/plogin" element={<LoginPatient />} />
          <Route path="/dlogin" element={<LoginDoctor />} />
          <Route path="/frontpageforblood" element={<FrontPageForBlood />} />
          <Route path="/donateblood" element={<DonateBlood/>} />
          <Route path="/requestcallforblood" element={<RequestCallForBlood/>} />
          <Route path="/HMS" element={<Calc/>}/>
          <Route path="/video" element={   <Video/>}/>
          <Route path="/frontpageforaid" element={  <FrontPageForAid/>}/>
          <Route path="/aid" element={  <Aid/>}/>
          <Route path="/charity" element={<GetAid/>}/>
          <Route path="/dochome" element={<DocHome/>}/>
          <Route path="/giveaidbydoc" element={<GiveAidByDoc/>}/>
          <Route path="/givebloodbydoc" element={<BloodDonateByDoc/>}/>
          <Route path="/aidformbydoc" element={<AidFormByDoc/>}/>
          <Route path="/blooddonationbydoc" element={<BloodDonateByDoc/>}/>
          <Route path="/bloodformbydoc" element={<BloodFormByDoc/>}/>
          <Route path="/bmr" element={<BmrCalc/>}/>
          <Route path="/videochat" element={<Index/>}/>
          <Route path="/adminlogin" element={<AdminLogin/>}/>
          <Route path="/adminPatientsList" element={<PatientsList/>}/>
          <Route path="/admindoctorsList" element={<DoctorsList/>}/>
          <Route path="/adminblooddonationList" element={<BloodDonationsList/>}/>  
          <Route path="/adminaidcharityList" element={<Aid_CharityList/>}/> 
          <Route path="/contactusbypatient" element={<ContactUsByP/>}/> 
          <Route path="/homep" element={<HomeP/>}/> 
          <Route path="/homed" element={<HomeD/>}/> 
          <Route path="/contactusbydoctor" element={<ContactUsByD/>}/> 
          <Route path="/contactusbyadmin" element={<ContactUsByA/>}/> 
          <Route path="/editp" element={<EditP/>}/> 
          <Route path="/editd" element={<EditD/>}/> 
          <Route path="/labortorybyadmin" element={<Labortory/>}/>
          <Route path="/meetinglog" element={<MeetingLog/>}/>
          <Route path="/notification" element={<Notifications/>}/>
          <Route path="/lab" element={<Lab/>}/>
        </Routes>
      </BrowserRouter> 
    </>
  );
}

export default App;

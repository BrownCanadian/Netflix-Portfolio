import Navbar from "./Navbar.js"
import BigBoard from "./BigBoard.js"
import Stack from "./Stack.js"
import Footer from "./Footer.js"
import data from './data.json';
import ModalProject from "./ModalProject.js";

const projects = data.projects;
const TechnicalSkills = data.TechnicalSkills;
const Courses = data.Courses;
const Work = data.Work;

function App() {
 {/* <ModalProject open={true} img={"https://i.imgur.com/oCSK4Jg.png"} name={"Test"} genre={["python","pandas"]} cast={["me","popcultu"]} desc={"The Top Crypto Finder is a Python project that uses web scraping techniques to find and display the top 10 cryptocurrencies in the market. The project pulls data from various cryptocurrency exchange websites, and displays key information such as the current price, market capitalization"}/> */}
    return (<>

  

    <Navbar/>   
    
    <BigBoard/> 
    
   
  
    <Stack title="Placed Worked At" mode={false} data={Work} bool={false} />
    <Stack title="Projects"  mode={false} data={projects} bool={false}/>
    <Stack title="Technical Skills"  mode={false}  data={TechnicalSkills} bool={false}/>
    <Stack title="Relevant Courses"  mode={false} data={Courses} bool={false}/> 
     
    </>);
}
export default App;
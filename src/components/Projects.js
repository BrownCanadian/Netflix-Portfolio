import Navbar from "./Navbar.js"
import BigBoard from "./BigBoard.js"
import Stack from "./Stack.js"
import Footer from "./Footer.js"
import data from './data.json';

const projects = data.projects;

function App() {

    return (<>
 
    <Navbar/>   
    <BigBoard/> 
   
    <Stack title="Placed Worked At" data={projects} />
    <Stack title="Projects"  data={projects}/>
    <Stack title="Technical Skills"  data={projects}/>
    <Stack title="Relevant Courses"  data={projects}/>

    </>);
}
export default App;
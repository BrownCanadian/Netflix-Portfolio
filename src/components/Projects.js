import Navbar from "./Navbar.js"
import BigBoard from "./BigBoard.js"
import Stack from "./Stack.js"
import Footer from "./Footer.js"
function App() {

    return (<>
 
    <Navbar/>   
    <BigBoard/> 
   
    <Stack title="Placed Worked At" className=""/>
    <Stack title="Projects"  className=""/>
    <Stack title="Technical Skills"  className=""/>
    <Stack title="Relevant Courses"  className=""/>

    </>);
}
export default App;
import Navbar from "./Navbar.js"
import BigBoard from "./BigBoard.js"
import Stack from "./Stack.js"
import Footer from "./Footer.js"
function App() {

    return (<>
 
    <Navbar/>   
    <BigBoard/> 
   
    <Stack title="React" className="overflow-x:hidden"/>
    <Stack title="Python"  className="overflow:hidden"/>
    <Stack title="Java"  className="overflow:hidden"/>
    <Stack title="R"  className="overflow:hidden"/>

    </>);
}
export default App;
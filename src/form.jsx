import StudentForm from "./form"
function App() {
    return(
        <div>
            <h1>Student Registration Form<h1>
            <form>
                <input
                type="text"
                placeholder="Enter your name"/>
                <br/>
                
               <input
                type="text"
                placeholder="Enter your age"/>
                <br/>

                <input
                type="text"
                placeholder="Enter your email"/>
                <br/>
                
                <input
                type="text"
                placeholder="Enter your password"/>
                <br/>
        </div>
    )
}
export default App
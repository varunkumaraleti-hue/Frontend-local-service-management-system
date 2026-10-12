import axios from "axios";
function Api() {
    function getmessage() {
        const responce = axios.get("https://localhost:8080").then((response) => {
            console.log(response.data);
        });
        .catch((error) => {
            console.log(" error);
        })
}  return(
    <>
       <button onClick={getmessage}>
            Call backend
        </button>
    </>
)  

    
    
}
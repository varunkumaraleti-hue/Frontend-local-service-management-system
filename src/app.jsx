import Counting from "react"

function Counting(){
    const [count,setcount]=useState(0);
    function decrease(){
        setcount(count-1);
    }
    return(
        <>
            <h1>Welcome to Counting Application</h1>
            <btton>Increase</button>
            <button>Decrease</button>
            <button>Reset</button>
        <>
        )  
    }
}
export default app            
        </div>
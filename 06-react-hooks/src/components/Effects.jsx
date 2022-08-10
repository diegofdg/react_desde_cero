import { useEffect } from "react"
import { useState } from "react"

const Effects = () => {

    const [users, setUsers] = useState([])
    const [id, setId] = useState(10)

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => setUsers(data))        
    }, [])
    
    useEffect(() => {
        setUsers({
            hola: "cambien en el id"
        })
        console.log(users)
    }, [id])

    const handleSubmit = (e) => {
        e.preventDefault()
        setId(e.target.value)
    }

    return (
        <>
            <h1>useEffect</h1>
            <hr />
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Search
                    </label>
                    <input 
                        value={id}
                        onChange={(e) => setId(e.target.value)}             
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                    />
                </div>   
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>         
            </form>
        </>
    )
}

export default Effects
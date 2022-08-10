const Effects = () => {
    return (
        <>
            <h1>useEffect</h1>
            <hr />
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Search
                    </label>
                    <input                
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
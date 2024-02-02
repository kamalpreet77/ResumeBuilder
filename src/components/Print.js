function Print({children}){
    return (
        <>
        <button onClick={()=>window.print()}>
            {children}

        </button>
        </>
    )
}
export default Print;
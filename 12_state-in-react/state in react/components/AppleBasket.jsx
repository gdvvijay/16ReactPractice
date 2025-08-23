const AppleBasket = ({appleCount, basketName})=>{
    return (
        <div className="apple-basket">
            <h1>
                <spa>{appleCount}</spa> apples
            </h1>
            <p>{basketName}</p>
        </div>
    )
}

export default AppleBasket;
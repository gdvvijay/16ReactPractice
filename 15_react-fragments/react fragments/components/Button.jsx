const Button=({imageUrl, buttonName})=>{
    return (
        <button onClick={clickHandler} title={buttonName}>
            <img src={imageUrl} alt={buttonName}/>
        </button>
    )
}

export default Button;
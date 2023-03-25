

const ButtonComp = (props) => {
    const { value, calFun } = props;

    return (
        <div className="cal-button">
            <button onClick={calFun}>{value}</button>
        </div>
    )
}
export default ButtonComp;


import "./reset-btn.css";

const ResetBtn = () => {
    const onClick = () => {
        localStorage.clear();
        window.location.reload()
    }

    return (
        <div className="reset-btn btn btn-outline-light" onClick={onClick}>
            Сбросить данные
        </div>
    )
}

export default ResetBtn;
import '../CSS/ButtonsStyle.css'

let Button = (props) => {
    let styles = {
        
        cName : props.name,
        
        
    }
    return (
        <>
            <button    className={`upperCase col-5 my-3 border ${styles.cName}`}  >{props.name}</button>
        </>
    );

}
export default Button


const CartWidget = ({cantCarrito}) => {
    return (
        <>
            <button className="btn btn-danger">Carro</button>
            <p>{cantCarrito}</p>
        </>
    );
}

export default CartWidget;

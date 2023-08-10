

export const SummaryTable = ({item}) => {

    return(
        <table class="table table-striped">
            <thead>
                <tr>
                <th scope="col"></th>
                <th scope="col">Product</th>
                <th scope="col">Cuantity</th>
                <th scope="col">Price</th>
                <th scope="col">Subtotal</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row"><img src ={item.image} height={50} width={50} alt={item.title}/></th>
                <td>{item.title}</td>
                <td>{item.cantidad}</td>
                <td>{item.price}</td>
                <td>{item.price*item.cantidad}</td>
                </tr>
            </tbody>
        </table>
    )



}
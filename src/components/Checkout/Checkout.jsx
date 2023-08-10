import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { db } from "../../firebase/config"
import { addDoc, collection,updateDoc,doc, getDoc, writeBatch, where, documentId, query, getDocs } from "firebase/firestore"
import { Link, Navigate } from "react-router-dom"
import { Formik, Form, Field, ErrorMessage } from "formik"
import { SummaryTable } from "../summarytable/summaryTable"
import * as Yup from "yup"


const schema = Yup.object().shape({
    nombre: Yup.string()
                .min(3, "Too short")
                .required("Required"),
    direccion: Yup.string()
                .min(6, "Too short")
                .required("Required"),
    email: Yup.string()
                .required("Required")
                .email("Invalid email"),
    emailConfirm: Yup.string()
                .required("Required")
                .email("Invalid email")
                .test('match', 'Emails do not match',
                function (emailConfirm) {
                    return emailConfirm === this.parent.email
                })

})

export const Checkout = () => {
    const { cart, totalCompra, vaciarCarrito } = useContext(CartContext)
    
    
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState(null)
    const [summary, setSummary] = useState([])
    const [total, setTotal] = useState(0)
    
    
    const handleSubmit = async (values) => {
        setLoading(true)

        const orden = {
            cliente: values,
            items: cart.map(item => ({id: item.id, price: item.price, cantidad: item.cantidad, nombre: item.title})),
            total: totalCompra(),
            fyh: new Date()
        }

        const batch = writeBatch(db)
        const ordersRef = collection(db, "orders")
        
        const productosRef = collection(db, "productos")
        const q = query(productosRef, where( documentId(), "in", cart.map(item => item.id) ))
        const productos = await getDocs(q)
        const outOfStock = []
        const summaryList = []

        
        productos.docs.forEach((doc) => {
            const item = cart.find(prod => prod.id === doc.id )
            const count = doc.data().count
                
            if (count >= item.cantidad) {
                batch.update(doc.ref, {
                    count: count - item.cantidad
                })
                summaryList.push(item)
                setSummary(summaryList)

                
            } else {
                outOfStock.push(item)
            }
        })

        if (outOfStock.length === 0) {
            await batch.commit()
            const doc = await addDoc(ordersRef, orden)
            setTotal(totalCompra())
            vaciarCarrito()
            setOrderId(doc.id)
        } else {
            alert("Some items are out of stock")
        }
        
        setLoading(false)
    }

    if (orderId) {
        return (
            <div className="container sm">
                <h2 className="text-4xl">Thanks for shopping!</h2>
                <hr/>
                <h2>Order summary</h2>
                <p>Your number ID is: <strong>{orderId}</strong></p>

                {
                    summary.map((prod) => <SummaryTable key={prod.id} item={prod}/>)       
                }
                <p><strong>Total:{total}</strong></p>

                <Link to="/"><button className="btn btn-info">Return</button></Link>
            </div>
        )
    }

    if (cart.length === 0 ) {
        return <Navigate to="/"/>
    }

    return (
        <div className="container my-5">
            <h2>Checkout</h2>
            <hr/>

            <Formik
                initialValues={{
                    nombre: '',
                    direccion: '',
                    email: '',
                    emailConfirm:''
                }}
                onSubmit={handleSubmit}
                validationSchema={schema}
            >
                {() => (
                    <Form>
                        <Field placeholder="Name" className="form-control my-2" type="text" name="nombre"/>
                        <ErrorMessage name="nombre" component="p"/>
                        <Field placeholder="Shipping address" className="form-control my-2" type="text" name="direccion"/>
                        <ErrorMessage name="direccion" component="p"/>
                        <Field placeholder="Email" className="form-control my-2" type="email" name="email"/>
                        <ErrorMessage name="email" component="p"/>
                        <Field placeholder="Confirm tour Email" className="form-control my-2" type="email" name="emailConfirm"/>
                        <ErrorMessage name="emailConfirm" component="p"/>
                        <button className="btn btn-success" disabled={loading}>submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
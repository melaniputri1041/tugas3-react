import React from "react";

const CardProduct = (props) => {
    function Click (){
        return (
            alert(`Product ${props.productName} dengan harga ${props.productPrice} merupakan produk dengan kualitas terbaik`)
        )
    }
    return (
        <div onClick={Click} style={{
            height: 350,
            width: 250,
            backgroundColor: 'grey',
            borderRadius: 4,
            padding: 5,
            color: 'white',
            marginBottom: 5,
            display:"inline-flex",
            flexWrap: "wrap",
            marginLeft : 8,
            
        }}>

            <img src={props.urlImage} alt="Gambar" width ="250" height= "200" />
            <p >{props.productName}</p>
            <p>{props.productPrice}</p>
        </div>
    )
}

export default CardProduct
import Image from 'next/image'

export default function Details(props) {
    return (
        <>
           <Image src={props.image} alt={props.title} layout="fill"/>
           <h1>{props.title}</h1> 
           <address>{props.address}</address>
           <p>{props.description}</p>
        </>
    )
}
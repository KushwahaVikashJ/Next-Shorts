import Image from 'next/image'

export default function Details(props) {
    return (
        <>
           <Image src={props.image} alt={props.title} width={700} height={500}/>
           <h1>{props.title}</h1> 
           <address>{props.address}</address>
           <p>{props.description}</p>
        </>
    )
}
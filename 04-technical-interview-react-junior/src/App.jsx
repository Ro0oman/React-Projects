import {useState, useEffect} from 'react'
import './style.css'

//const CAT_ENDPOINT_IMG_URL = `https://cataas.com/cat/says/${firstWord}$?size=50&color=red&json=true`
const CAT_ENDPOINT_RANDOM_FACT = `https://catfact.ninja/fact`

export function App(){
    const [fact, setFact] = useState()
    const [imageUrl, setImageUrl] = useState()
    const [counter, setCounter] = useState(0)
    const [factError, setFactError] = useState()

    //  You can't use axios... 
    //  Its important to know how to use the most basic tool


    //Use effect for getting the Fact
    useEffect (()=>{
        fetch(CAT_ENDPOINT_RANDOM_FACT)
        .then(res =>{
            if(!res.ok) throw new Error("Error retrieving facts")
            return res.json()
        })
        .then(data => {
            const {fact} =  data
            // Feel free to search info in mdn (mdn split a string by spaces) DON' T SEARCH THE ANSWER search for the tools
            setFact(fact)
        })
    }, [])

    //Use Effect to get the image
    useEffect(()=>{
        if(!fact) return

        const firstWord = fact.split(' ', 1)
        fetch(`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`)
        .then(res => res.json())
        .then(response => {
            const {url} = response
            console.log(response);
            setImageUrl(url)
        })
    },[])

    return(
        <main>
            <h1>Cats App</h1>
            
            {/* Conditional Rendering */}
            {fact && <p>{fact}</p>} 
            {fact && <img src={imageUrl} alt={`Image extracted using the first word from ${fact}`} />} 
        </main>

    )
}
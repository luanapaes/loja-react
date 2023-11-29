import {useState, useEffect} from "react"

export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null); //para tratamento de erros

    useEffect(() =>{
        const fetchData = async () =>{
            try{
                const res = await fetch(url);
                const data = await res.json();

                setData(data);
            }catch(error){
                console.log(error.message);
                setError("Houve algum erro ao carregar os dados");
            }
        }
        fetchData();
    }, []);
    return {data, error};
}
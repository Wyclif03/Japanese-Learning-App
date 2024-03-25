"use client";
import { useState, useEffect } from "react";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";


interface HiraganaData {
    hiragana: string;
    english: string;
} 

//  const useFetchHiraganaData = () => {
   
//     const [hiraganaData, setHiraganaData] = useState<HiraganaData[]>([]);

//     useEffect(() => {
//         fetch('http://localhost:8080/generateHiragana?size=20')
//             .then(response => response.json())
//             .then((data: Record<string, string>) => {
//                 const transformedData = Object.entries(data).map(([hiragana, english]: [string, string]) => ({ hiragana, english }));
//                 console.log(transformedData);
//                 setHiraganaData(transformedData);
//             })
//             .catch(error => console.error('Error:', error));
//     }, []);

//     return hiraganaData;
// }

// export default useFetchHiraganaData;

export const useFetchHiraganaData = <T>(url: string, options?: AxiosRequestConfig) => {
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<Error | null>(null);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        setLoading(true);

        try {
            const response: AxiosResponse<T> = await axios(url, options);
            setData(response.data);
        } catch (error: any) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }


    useEffect(() => {
        fetchData();
    }, []);

    return { data, error, loading }
}
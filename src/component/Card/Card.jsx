import React, { useEffect, useState } from 'react';
import Button from '../Button/Button';
import SingleData from '../SingleData/SingleData';
import Modal from '../Modal/Modal';

const Card = () => {
    const [data, setData]=useState([]);
    const [showAll, setShowAll] = useState(false);
    const [modalId, setModalId]=useState(null);
    const [modalData,setModalData] = useState({});
    // console.log(data[0]);
    const shortDate =()=>{
        const sortedData = data.sort((a,b)=>{
            return new Date(b.published_in)- new Date(a.published_in);
        })
        setData([...data, sortedData]);
    }

    const handleShowAll=()=>{
        setShowAll(true)
    }
    useEffect (()=>{
        const loadData = async()=>{
            const res = await fetch(`https://openapi.programming-hero.com/api/ai/tools`);
            const value = await res.json();
            setData(value.data.tools);
        }
        loadData();
    },[])

    useEffect(()=>{
        fetch(`https://openapi.programming-hero.com/api/ai/tool/${modalId}`)
        .then(res=>res.json())
        .then(data=>setModalData(data.data));
    },[modalId])
    return (
        <>
        <div onClick={shortDate}>
        <Button>Short By Date</Button>
        </div>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-6 my-2 mx-3'>
            {data.slice(0,showAll? 12 : 6).map(singleData=><SingleData cardData = {singleData} key={singleData.id} setModalId={setModalId} > </SingleData>)}
        </div>
       <div className='flex justify-center my-2'>
       {!showAll && <span className='inline-block' onClick={handleShowAll}>
            <Button>See More</Button>
        </span>}
       </div>
       <Modal modalData={modalData} ></Modal>
        </>
    );
};

export default Card;
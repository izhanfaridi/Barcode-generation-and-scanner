import React , {useEffect, useState} from 'react'
import styled from 'styled-components';
import './styles.css'
import {addStudent} from '../redux/studentDataRedux'
import { useDispatch } from 'react-redux';


const Title = styled.h1`text-align:center;`
    const Container = styled.div`
        width:50%;
        margin-top:0px;
        padding:10px;
        border-radius:10px;
    `
    const Innercontainer = styled.div`
        display:flex;
        flex-direction:column;
        margin-left:5%;
        `
    const Input = styled.input`
        padding:15px;
        margin-bottom:15px;
        border: 1px solid black;
        border-radius: 10px;
        max-width: 80%;
    `
const GetData = () =>{

    
    const dispatch = useDispatch()
    const [name,setName] = useState()
    const [fatherName,setFatherName] = useState()
    const [seatNo,setSeatNo] = useState()
    const [enroll,setEnroll] = useState()
    const [group,setGroup] = useState()
    const [data,setData] = useState({})


    useEffect(()=>{
        dispatch(addStudent(data))

    },[data])

    const handleClick=(e)=>{
        e.preventDefault();
        setData({
            name:name,
            fatherName:fatherName,
            seatNo:seatNo,
            enroll:enroll,
            group:group
        })
    }

    
    
    return (
        <>
            <Container className='container'>
                <Title>Enter your details to register yourself!</Title>
                <Innercontainer>
                    <Input onChange={(e) => { setName(e.target.value) }} type="text" placeholder="Full Name" />
                    <Input onChange={(e) => { setFatherName(e.target.value) }} type="text" placeholder="Father Name" />
                    <Input onChange={(e) => { setSeatNo(e.target.value) }} type="text" placeholder="Seat Number" />
                    <Input onChange={(e) => { setEnroll(e.target.value) }} type="text" placeholder="Enrollment number" />
                    <Input onChange={(e) => { setGroup(e.target.value) }} type="text" placeholder="Group (SE/CS)" />
                    <button onClick={handleClick} class="c-button c-button--gooey"> Generate
                        <div class="c-button__blobs">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </button>
                </Innercontainer>
            </Container>
        </>
            
    )
}

export default GetData;
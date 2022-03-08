import React , {useEffect, useState} from 'react'
import styled from 'styled-components';
import './styles.css'
import { useDispatch, useSelector } from 'react-redux';
import { addStudentDb } from '../redux/apiCalls';


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
    const StudentRecord = useSelector(state => state.Student.studentData)
    const [name,setName] = useState()
    const [fatherName,setFatherName] = useState()
    const [seatNo,setSeatNo] = useState()
    const [enroll,setEnroll] = useState()
    const [group,setGroup] = useState()
    const [data,setData] = useState({})

    useEffect(() => {
        setData({...StudentRecord})
    },[StudentRecord])


    const handleClick=(e)=>{
        e.preventDefault();
        let payload = {
            name,
            fatherName,
            seatNo,
            enroll,
            group,
        } 
        setData({...payload})
        //dispatch(addStudent(payload))
        addStudentDb(dispatch,payload)
    }

    
    
    return (
        <>
            <Container className='container'>
                <Title>Enter your details to register yourself!</Title>
                <Innercontainer>
                    <Input onChange={(e) => { setName(e.target.value) }} type="text" placeholder="Full Name" defaultValue={data.name} />
                    <Input onChange={(e) => { setFatherName(e.target.value) }} type="text" placeholder="Father Name" defaultValue={data.fatherName}/>
                    <Input onChange={(e) => { setSeatNo(e.target.value) }} type="text" placeholder="Seat Number" defaultValue={data.seatNo}/>
                    <Input onChange={(e) => { setEnroll(e.target.value) }} type="text" placeholder="Enrollment number" defaultValue={data.enroll}/>
                    <Input onChange={(e) => { setGroup(e.target.value) }} type="text" placeholder="Group (SE/CS)" defaultValue={data.group}/>
                    <button onClick={handleClick} className="c-button c-button--gooey"> Generate
                        <div className="c-button__blobs">
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
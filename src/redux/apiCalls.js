import axios from 'axios'
import {addStudent} from '../redux/studentDataRedux'

export const addStudentDb = async (dispatch,student)=>{
    try {
        const res = await axios.post("http://localhost:5000/api/student/",student)
        dispatch(addStudent(student))
    } catch (error) {
        console.log(error);
    }
}
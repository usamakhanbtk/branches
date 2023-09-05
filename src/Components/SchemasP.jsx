import * as Yup from 'yup';

export const SchemasP = Yup.object({
    name:Yup.string().min(2,'Too Short').max(20).required('Please Enter Your First Name').matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
    gender:Yup.string().min(4,'Too Short').max(6).required('Please Enter Valid Gender'),
    cnic:Yup.string().min(13,'Too Short').max(13).required('Please Enter Valid Cnic No').matches(/^[1-9]+$/, "Only alphabets are allowed for this field "),
    email:Yup.string().email().required('Please Enter Valid email'),
    password:Yup.string().min(8,'Too Short').max(20).required('Please Enter Atleast 8 digit Password'),
    phone:Yup.string().min(10,'Too Short').max(11).required('Please Enter Valid Phone No'),
    city:Yup.string().min(2,'Too Short').max(20).required('Please Enter Your City'),
})


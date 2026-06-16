import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { userLogin } from "../features/authAction";


export let useAuth =()=>{
    let dispatch = useDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onLoginSubmit = async (data) => {
    await dispatch(userLogin(data))
  };
  
  const onRegisterSubmit = (data) => {
    console.log(data);

  };
    
  return {
    register,
    errors,
    handleSubmit,
    onLoginSubmit,
    onRegisterSubmit
  }
}
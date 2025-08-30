import { ErrorMessage, Field, Form, Formik, useFormik } from 'formik';
import { FaLock, FaRegUser, FaUser } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import {validationSchema} from './validation'
import { registerFields } from './formFields';
const initialValues = {
	name: '',
	email: '',
	password: ''
};
const onSubmit = (values, { resetForm }) => {
	console.log(values);
	alert('sucesss');
	resetForm();
};

const RegisterForm = () => {

	return (
		<Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
			<div
				className="bg-gradient-to-r h-screen from-pink-400 via-purple-400 to-blue-400
  bg-[length:200%_200%] bg-[position:0%_50%]  animate-gradientMove tracking-tight
  flex items-center justify-center animate-fade-in">
				<div className="bg-white rounded-2xl p-8  flex flex-col items-center gap-2 w-[80%] md:w-[35%]">
					{/* <!-- icon --> */}
					<div className="bg-gray-200 rounded-full p-2 pb-3 mx-auto animate-bounce">
						<FaUser className="text-gray-400 text-2xl" />
					</div>
					<h2 className="font-bold text-xl text-gray-800 mt-2">لطفا ثبت نام کنید</h2>
					<p className="text-gray-400 text-sm">لطفا اطلاعات خود را وارد نمایید</p>
					{/* <!-- form --> */}
					<Form className=" w-full space-y-4">
						{registerFields.map(({ icon, ...rest }, index) => (
							<div key={rest.name} className="flex flex-col items-center w-full ">
								<div
									className={` w-full  border-b border-b-gray-400 focus-within:border-blue-400 flex gap-3`}>
									{icon}
									<Field
										className="  placeholder:text-sm  bg-transparent focus:outline-none flex-1
									placeholder:text-gray-400 text-gray-700"
										{...rest}
									/>
								</div>
								{/* <ErrorMessage name={rest.name}>
									{err => <small className="text-red-500 mt-1  ">{err}</small>}
								</ErrorMessage> */} 
								<ErrorMessage name={rest.name} component="span" className="text-red-500 text-xs mt-1" />
							</div>
						))}

						{/* <!-- button --> */}
						<button
							type="submit"
							className="text-white flex items-center justify-center bg-blue-500 w-full rounded-lg font-bold mt-8 py-2 hover:bg-blue-600 hover:scale-105 transition-all duration-300 ease-in-out ">
							ثبت نام
						</button>
					</Form>
				</div>
			</div>
		</Formik>
	);
};

export default RegisterForm;

import { ErrorMessage, Field, Form, Formik, useFormik } from 'formik';
import { FaLock, FaRegUser, FaUser } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import * as yup from 'yup';

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
// const validate = values => {
// 	let errors = {};
// 	if (!values.name) {
// 		errors.name = 'لطفا این قسمت را پر کنید';
// 	}
// 	if (!values.email) {
// 		errors.email = 'لطفا این قسمت را پر کنید';
// 	} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
// 		//regulare expression REGEX
// 		errors.email = ' لطفا فرم ایمیل را صحیح وارد کنید ';
// 	}
// 	if (!values.password) {
// 		errors.password = 'لطفا این قسمت را پر کنید';
// 	}
// 	return errors;
// };
const validationSchema = yup.object({
	name: yup.string().required('لطفا این قسمت را پر کنید'),
	email: yup
		.string()
		.required('لطفا این قسمت را پر کنید')
		.email('لطفا قالب ایمیل را رعایت کنید مثال: aaa.@example.com'),
	password: yup
		.string()
		.required('لطفا این قسمت را پر کنید')
		.min(8, 'حداقل 8 کاراکتر')
		.matches(/[A-Z]/, 'حداقل یک حرف بزرگ')
		.matches(/[a-z]/, 'حداقل یک حرف کوچک')
		.matches(/[0-9]/, 'حداقل یک عدد')
});

const RegisterForm = () => {
	// const formik = useFormik({
	// 	initialValues,
	// 	onSubmit,
	// 	// validate,
	// 	validationSchema

	// });
	const fields = [
		{
			name: 'name',
			type: 'text',
			placeholder: 'نام کاربری',
			icon: <FaRegUser className="text-xl" />
		},
		{ name: 'email', type: 'email', placeholder: 'ایمیل', icon: <MdEmail className="text-xl" /> },
		{
			name: 'password',
			type: 'password',
			placeholder: 'رمز عبور',
			icon: <FaLock className="text-xl" />
		}
	];

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
					<Form className=" w-full ">
						{fields.map(({ icon, ...rest }, index) => (
							<div className="flex flex-col items-center w-full ">
								<div
									className={` w-full mt-4 border-b border-b-gray-400 focus-within:border-blue-400 flex gap-3`}>
									{icon}
									<Field
										className="  placeholder:text-sm  bg-transprent focus:outline-none flex-1
									placeholder:text-gray-400 text-gray-700"
										{...rest}
									/>
								</div>
								<ErrorMessage name={rest.name}>
									{err => <small className="text-red-500 mt-1  ">{err}</small>}
								</ErrorMessage>
							</div>
						))}

						{/* <!-- button --> */}
						<button
							type="submit"
							className="text-white flex items-center justify-center bg-blue-500 w-full rounded-lg font-bold mt-4 py-2 hover:bg-blue-600 hover:scale-105 transition-all duration-300 ease-in-out ">
							ثبت نام
						</button>
					</Form>
				</div>
			</div>
		</Formik>
	);
};

export default RegisterForm;

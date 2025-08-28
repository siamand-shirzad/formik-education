import { useFormik } from 'formik';
import { FaLock, FaRegUser, FaUser } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const RegisterForm = () => {
	const formik = useFormik({
		initialValues: {
			name: '',
			email: '',
			password: ''
		}
	});
	return (
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
				<form className=" w-full space-y-6">
					{/* <!-- name input --> */}
					<div className="w-full mt-4 border-b border-b-gray-400 focus-within:border-blue-400 flex gap-3">
						<FaRegUser className="text-xl " />
						<input
							className="  placeholder:text-sm  bg-transprent focus:outline-none flex-1
                 placeholder:text-gray-400 text-gray-700"
							type="text"
							placeholder="نام کاربری"
							name="name"
							value={formik.values.name} onChange={formik.handleChange}
						/>
					</div>

					{/* <!-- email input --> */}
					<div className="w-full mt-4 border-b-1 border-b-gray-400 focus-within:border-blue-400 flex gap-3">
						<MdEmail className="text-xl" />
						<input
							className="placeholder:text-sm  bg-transprent focus:outline-none flex-1
                 placeholder:text-gray-400 "
							type="email"
							placeholder="ایمیل"
							name="email"
							value={formik.values.email} onChange={formik.handleChange}
						/>
					</div>
					{/* <!-- password input --> */}
					<div className="w-full mt-4 border-b-1 border-b-gray-400 focus-within:border-blue-400 flex gap-3">
						<FaLock className="text-xl" />
						<input
							className="placeholder:text-sm  bg-transprent focus:outline-none flex-1
                 placeholder:text-gray-400 "
							type="password"
							placeholder="رمز عبور"
							name="password"
							value={formik.values.password} onChange={formik.handleChange}
						/>
					</div>
					{/* <!-- button --> */}
					<button className="text-white flex items-center justify-center bg-blue-500 w-full rounded-lg font-bold mt-4 py-2 hover:bg-blue-600 hover:scale-105 transition-all duration-300 ease-in-out ">
						ثبت نام
					</button>
				</form>
			</div>
		</div>
	);
};

export default RegisterForm;

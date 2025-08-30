import * as yup from 'yup';

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
export const validationSchema = yup.object({
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

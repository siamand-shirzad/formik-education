import { FaLock, FaRegUser } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export const registerFields = [
  {
    name: 'name',
    type: 'text',
    placeholder: 'نام کاربری',
    icon: <FaRegUser className="text-xl" />
  },
  {
    name: 'email',
    type: 'email',
    placeholder: 'ایمیل',
    icon: <MdEmail className="text-xl" />
  },
  {
    name: 'password',
    type: 'password',
    placeholder: 'رمز عبور',
    icon: <FaLock className="text-xl" />
  }
];
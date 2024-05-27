import { useNavigate } from 'react-router-dom'
import SignInForm from './SignInForm'
import { IoChevronBack } from 'react-icons/io5'
import appConfig from '@/configs/app.config'

const SignIn = () => {
  const navigate = useNavigate()
  return (
    <>
      <div
        className="flex items-center gap-3 mb-10 -ml-2 cursor-pointer hover:gap-5 transition-all"
        onClick={() => {
          navigate(appConfig.unAuthenticatedEntryPath)
        }}
      >
        <IoChevronBack size={25} />
        <div>Quay trở về Trang chủ</div>
      </div>
      <div className="mb-8">
        <h3 className="mb-1">Chào mừng quay trở lại!</h3>
        <p>Vui lòng nhập thông tin của bạn để đăng nhập!</p>
      </div>
      <SignInForm disableSubmit={false} />
    </>
  )
}

export default SignIn

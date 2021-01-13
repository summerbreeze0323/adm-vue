import { Validator } from 'vee-validate'
import { required, email } from 'vee-validate/dist/rules.esm';

Validator.extend('required', {
  ...required,
  getMessage() { return '필수 입력항목입니다.'} 
});

Validator.extend('email', {
  ...email,
  getMessage() { return '이메일 형식이 잘못되었습니다.'} 
});

Validator.extend('validMyInfoPassword', {
  getMessage (field, args) {
		return 'userPasswordMsg'
	},
	validate (value) {
		if (value) {
			let rule = /^.*(?=^.{8,30}$)(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[~,!,@,#,$,%,^,&,*,(,),=,+,_,.,|]).*$/

			if (!rule.test(value)) {
				userPasswordMsg = '비밀번호는 영문자, 숫자, 특수문자 조합으로 8~30자리를 사용해야 합니다.'
				return false
			}

			return true
		}
	}
})
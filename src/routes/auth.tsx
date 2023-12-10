import { useState } from 'react';
import GithubButton from '../components/github-btn.tsx';
import SignUp from '../components/signUp.tsx';
import SignIn from '../components/signIn.tsx';
import * as S from '../styles/auth.ts';
import ImageComputer from '../assets/images/logo-big.png';

export default function Auth() {
  const [signUpPopup, setSignUpPopup] = useState(false);
  const [signInPopup, setSignInPopup] = useState(false);
  return (
    <S.Wrapper>
      <h1 className="a11yHidden">로그인</h1>
      <S.Title>
        <S.Image src={ImageComputer} alt="로고 이미지"></S.Image>
        <S.Intro>
          쉿-
          <br />
          지금 <span>Z</span>세대는
          <br />
          <span>조잘</span>거리는 중
        </S.Intro>
      </S.Title>
      <S.AuthWrapper>
        <GithubButton />
        <GithubButton /> {/* 구글로 대체 필요 */}
        <S.Boundary>
          <span>또는</span>
        </S.Boundary>
        <S.SignUpButton type="button" onClick={() => setSignUpPopup(true)}>
          계정 만들기
        </S.SignUpButton>
        <S.SignInButton type="button" onClick={() => setSignInPopup(true)}>
          로그인
        </S.SignInButton>
      </S.AuthWrapper>
      {signUpPopup ? <SignUp onClose={() => setSignUpPopup(false)} /> : null}
      {signInPopup ? <SignIn onClose={() => setSignInPopup(false)} /> : null}
    </S.Wrapper>
  );
}

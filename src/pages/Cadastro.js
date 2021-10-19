import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
let changeTrigger = "entrar";
let nomeOk = false;
let emailOk = false;
let senhaOk = false;
let senha2Ok = false;

const Cadastro = () => {
  const history = useHistory();
  const [update, setUpdate] = useState(false);
  const userInfo = {
    nome: '',
    email: '',
    senha: '',
    senha2: '',
  }
  const userLoginInfo = {
    email: '',
    senha: '',
  }
  const [signupInfo, setSignupInfo] = useState(userInfo);
  const [loginInfo, setLoginInfo] = useState(userLoginInfo);

  useEffect(() => {
    if(changeTrigger === 'cadastrar') {
      const getBtn = document.querySelector('.entrar--btn-3');
      getBtn.style.visibility = 'hidden';
    }
  }, [changeTrigger])

  useEffect(() => {
    console.log('effecti')
    setUpdate(false);
  }, [update])

  function inputOnChangeController(e) {
    setSignupInfo({
      ...signupInfo,
      [e.target.id]: e.target.value,
    });
    const email = document.querySelector('#email');
    const password = document.querySelector('#senha');
    const password2 = document.querySelector('#senha2');
    const nome = document.querySelector('#nome');
    const getBtn = document.querySelector('.entrar--btn-3');
    const getSpanNome = document.querySelector('.span__nome-checked');
    const getSpanEmail = document.querySelector('.span__email-checked');
    const getSpanSenha = document.querySelector('.span__senha-checked');
    const getSpanSenha2 = document.querySelector('.span__senha2-checked');


    if(e.target.id === 'nome' && nome.value.length >= 3) {
      nomeOk = true;
       getSpanNome.innerHTML = '<i class="uil uil-check checked-ok"></i>';
    } else if(e.target.id === 'nome' && nome.value.length < 3) {
      nomeOk = false;
      getSpanNome.innerHTML = '<i class="uil uil-times checked-error"></i>';
      getBtn.style.visibility = 'hidden';
    }
    if(e.target.id === 'email' && email.checkValidity() && email.value.length >= 1) {   
      emailOk = true;
       getSpanEmail.innerHTML = '<i class="uil uil-check checked-ok"></i>';
    } else if((e.target.id === 'email' && !email.checkValidity()) || email.value.length < 1) {
      emailOk = false;
      <i className="uil uil-times"></i>
      getSpanEmail.innerHTML = '<i class="uil uil-times checked-error"></i>';
      getBtn.style.visibility = 'hidden';
    }
    if(e.target.id === 'senha' && password.value.length >= 6) {
      senhaOk = true;
      getSpanSenha.innerHTML = '<i class="uil uil-check checked-ok"></i>';
    } else if(e.target.id === 'senha' && password.value.length < 6) {
      senhaOk = false;
      getSpanSenha.innerHTML = '<i class="uil uil-times checked-error"></i>';
      getBtn.style.visibility = 'hidden';
    }
    if(e.target.id === 'senha2' && password.value.length >= 6 && password.value === password2.value) {
      senha2Ok = true;
      getSpanSenha2.innerHTML = '<i class="uil uil-check checked-ok"></i>';
    } else if(e.target.id === 'senha2' && password.value.length < 6 && password.value !== password2.value) {
      senha2Ok = false;
      getSpanSenha2.innerHTML = '<i class="uil uil-times checked-error"></i>';
      getBtn.style.visibility = 'hidden';
    }
    if(nomeOk && emailOk && senhaOk && senha2Ok) {
      getBtn.style.visibility = 'visible';
    }
  }

  function loginInputOnChangeController(e) {
    setLoginInfo({
      ...loginInfo,
      [e.target.id]: e.target.value,
    })
  }

  function addUserToLocalStorage() {
    let userArray = [];

    const buildUser = {
      nome: signupInfo.nome,
      email: signupInfo.email,
      senha: signupInfo.senha,
      senha2: signupInfo.senha2
    }

    if(!localStorage.users) {
      localStorage.users = JSON.stringify([buildUser]);
        window.alert("Usuário cadastrado com sucesso!")
        changeTrigger = "entrar"
        setUpdate(true);
    } else if (localStorage.users) {
      const prev = JSON.parse(localStorage.users);
      if(prev.some(item => item.email === buildUser.email)) {
       return window.alert('usuário já cadastrado com este email!');
      } else {
        userArray = [...prev, buildUser];
        localStorage.users = JSON.stringify(userArray);
        window.alert("Usuário cadastrado com sucesso!")
        changeTrigger = "entrar"
        setUpdate(true);
      }
    }
  }

  function confirmarBtnHandler() {
    const form = document.querySelector('.signUpForm');
      addUserToLocalStorage()
      form.reset();
  }

  function voltarBtnHandler() {
    changeTrigger = "entrar"
        setUpdate(true);
  }

  function cadastrarBtnHandler() {
    if(changeTrigger === "cadastrar") {
      setUpdate(true);
      
    } else {
      setUpdate(true);
      changeTrigger = "cadastrar"
    }
  }

  function entrarBtnHandler() {
    if(localStorage.users) {
        const recoverUserInfo = JSON.parse(localStorage.users);
      if(recoverUserInfo.some(item => item.email === loginInfo.email)) {
        const getUser = JSON.parse(localStorage.users).filter(item => item.email === loginInfo.email);
        console.log(getUser)
        console.log(getUser[0].senha)
        console.log(loginInfo.senha)
        if(loginInfo.senha === getUser[0].senha) {
          return history.push('/Home');
        } else { return window.alert("senha inválida!") }
      } else { return window.alert("email inválido") }
    } else { return window.alert('Usuário não cadastrado!') }
  }

  function signUpRender() {
    return (
      <>
        <form className="signUpForm">
          <div className="login--form">
            <div className="input-nome">
              <input
                  required
                  id="nome"
                  type="text"
                  placeholder="Nome: (Maior que 3 caracteres)"
                  onChange={ (e) => inputOnChangeController(e) }
                />
              <span className="span__nome-checked"/>
          </div>
          <div className="input-email">
              <input
                required
                id="email"
                type="email"
                placeholder="Email: (ex: teste@teste.com)"
                onChange={ (e) => inputOnChangeController(e) }
              />
            <span className="span__email-checked"/>
          </div>
          <div className="input-senha">
              <input
                required
                id="senha"
                type="password"
                placeholder="Senha: (Maior que 6 caracteres)"
                onChange={ (e) => inputOnChangeController(e) }
              />
            <span className="span__senha-checked"/>
          </div>
          <div className="input-senha">
              <input
                required
                id="senha2"
                type="password"
                placeholder="Confirmar Senha:"
                onChange={ (e) => inputOnChangeController(e) }
              />
            <span className="span__senha2-checked"/>
          </div>
          <span className="entrar--btn-2 back" type="submit" onClick={ () => voltarBtnHandler() }>Voltar</span>
          <span className="entrar--btn-3" type="submit" onClick={ () => confirmarBtnHandler() }>Confirmar</span>
          </div>
        </form>
      </>  
    );
  }

  function loginRender() {
    return (
      <>
        <div className="login--form">
          <input
            id="email"
            type="email"
            placeholder="Email"
            onChange={ (e) => loginInputOnChangeController(e) }
          />
          <input
            id="senha"
            type="password"
            placeholder="Senha"
            onChange={ (e) => loginInputOnChangeController(e) }
          />
        <span className="entrar--btn" onClick={ () => entrarBtnHandler() }>Entrar</span>
        <span className="entrar--btn-2" onClick={ () => cadastrarBtnHandler() }>Cadastrar</span>
        </div>
      </>  
    );
  }
  
  return (
    <div className="form--box">
      <h1 className="login--text">{ changeTrigger === "entrar" ? 'Entrar' : "Cadastro" }</h1>
      { changeTrigger === "entrar" ? loginRender() : signUpRender() }
    </div>
  );
}

export default Cadastro;

import { LoginForm, RegisterForm } from '@/interfaces/forms';

export const loginService = async (url: string, data: LoginForm) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  const json = await response.json();
  return json;
};

export const registerService = async (url: string, data: RegisterForm) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  const json = await response.json();
  return json;
};

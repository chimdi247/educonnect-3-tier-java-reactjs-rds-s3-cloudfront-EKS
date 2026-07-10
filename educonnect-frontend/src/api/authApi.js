import apiClient from './apiClient';

export const checkAvailability = async data => {
  const res = await apiClient.post('auth/check-availability', data);

  return res;
};

export const signUp = async (user, avatar) => {
  const formData = new FormData();
  formData.append(
    'user',
    new Blob([JSON.stringify(user)], { type: 'application/json' })
  );
  formData.append('avatar', avatar);
  const res = await apiClient.post('auth/sign-up', formData, {
    headers: {
     'Content-Type': 'multipart/form-data',
   },
  });
  return res;
};

export const login = async data => {
  console.log(data)
  const res = await apiClient.post('/auth/login', data);
  return res;
};

export const logout = async () => {
  await apiClient.post('/auth/logout');
};

export const refreshToken = async () => {
  const res = await apiClient.post('/auth/refresh-token', {});
  return res;
}

export const autoLogin = async () => {
  const token = localStorage.getItem("accessToken");
  if (!token) {
    return null; // or throw a specific "NoSession" marker your caller can check
  }
  const res = await apiClient.get('/auth/me');
  return res;
}

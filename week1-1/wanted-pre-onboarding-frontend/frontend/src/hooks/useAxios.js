import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AlertModalContext } from '../store/modal-context';

const defaultErrorMsg = {
  401: '로그인이 필요합니다!',
};

const defaultRedirect = {
  401: '/',
};

function useAxios(api) {
  const navigate = useNavigate();
  const modal = useContext(AlertModalContext);

  const API = async (params = [], config = {}) => {
    const { onSuccess, onError } = config;
    const { result, errorMsg: customErrorMsg = {}, redirect = {} } = await api(...params);
    const { data, status } = result;

    if (status >= 200 && status < 300) {
      if (onSuccess) {
        await onSuccess(data);
      }
      return;
    }

    if (onError) {
      await onError({ result, errorMsg: customErrorMsg, redirect });
    } else {
      const { message } = data ?? {};
      const errorMsg = { ...defaultErrorMsg, ...customErrorMsg };
      const alertMsg = errorMsg[status] || message || errorMsg.default;
      const redirectRoute = { ...defaultRedirect, ...redirect }[status];

      if (alertMsg) {
        modal.show(alertMsg);
      }

      if (redirectRoute) {
        navigate(redirectRoute);
      }
    }
  };

  return API;
}

export default useAxios;

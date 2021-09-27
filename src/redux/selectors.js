import { useSelector } from 'react-redux';

function useAuth() {
  return useSelector((state) => state.auth);
}

function useGlobalState() {
  return useSelector((state) => state);
}

export { useAuth, useGlobalState };

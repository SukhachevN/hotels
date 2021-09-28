import { useSelector } from 'react-redux';

function useAuth() {
  return useSelector((state) => state.auth);
}

function useGlobalState() {
  return useSelector((state) => state);
}

function useMainInfo() {
  return useSelector((state) => state.mainInfo);
}

function useHotels() {
  return useSelector((state) => state.hotels);
}

function useFavourite() {
  return useSelector((state) => state.favourite);
}

export { useAuth, useGlobalState, useMainInfo, useHotels, useFavourite };

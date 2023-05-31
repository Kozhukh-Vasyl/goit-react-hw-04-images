import styled, { keyframes } from 'styled-components';

const slideInFromBottom = keyframes`
  0% {
    transform: translateY(80%);
  }

  100% {
    transform: translateY(130%);
  }
`;

const Searchbar = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  z-index: 1000;
  background: #c8d690;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 4px 10px 0 rgba(0, 0, 0, 0.19);
`;

/*
 * Стили компонента SearchForm
 */
const SearchForm = styled.form`
  display: flex;
  align-items: center;
  max-width: 600px;
  margin: 0px auto 6px auto;
  border-radius: 4px;
  overflow: hidden;
`;

const SearchFormButton = styled.button`
  width: 80px;
  height: 44px;
  border: none;
  background-color: #a4b36f;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #94a178;
  }

  &:disabled {
    cursor: not-allowed;
    background-color: #85916a;
  }
`;

const SearchFormInput = styled.input`
  display: inline-block;
  width: 100%;
  height: 44px;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

`;

const SearchFormErrorMessage = styled.div`
  position: absolute;
  color: black;
  font-weight: 500;
  margin-top: 10px;
  animation: ${slideInFromBottom} 0.3s ease-out forwards;
`;

export {
  Searchbar,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
  SearchFormErrorMessage,
};

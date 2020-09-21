import React, { useEffect,useRef, useState } from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

const Location = ({ country, city, getWeather }) => {
  const [query, setQuery] = useState("");
  const [inputMode, setInputMode] = useState(false);
  const  inputRef = useRef(" ");

  useEffect(() => {
    if (inputMode) {
      inputRef.current.focus();
    }
  }, [inputMode]);

  if (inputMode) {
    return (
      <Container>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <FormElement
            onSubmit={(e) => {
              e.preventDefault();
              getWeather(query);
            }}
          >
            <InputField
              ref={inputRef}
              required
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <SearchButton type="submit">Search</SearchButton>
            <CancelButton onClick={() => setInputMode(false)}>X</CancelButton>
          </FormElement>
        </motion.div>
      </Container>
    );
  }
  return (
    <Container>
      <City onClick={() => setInputMode(true)}>{city}</City>
      <Country>{country}</Country>
    </Container>
  );
};

export default Location;
const Container = styled.div`
  text-align: center;
`;
const FormElement = styled.form`
  display: flex;
  position: relative;
  background:#46618b;
  border-radius:5px;
`;
const InputField = styled.input`
  padding: 5px;
  width: 80px;
  background: transparent;
  color: white;
  border: none;
  &:focus {
    outline: 0;
  }
`;
const SearchButton = styled.button`
  padding: 5px;
  background: #394e70;
  border: none;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  color: white;
  cursor: pointer;
`;

const CancelButton = styled.span`
  font-size: 0.8rem;
  position: absolute;
  background: #557fc2;
  cursor: pointer;
  top: -8px;
  right: -10px;
  width: 17px;
  height: 17px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  box-shadow: 1px 0px 2px rgba(0, 0, 0, 0.4);
`;

const City = styled.h1`
  font-family: "Merriweather", sans-serif;
  font-size: 1.6 rem;
  position: relative;
  coursor: pointer;
  &:hover {
    top: -5px;
  }
`;
const Country = styled.h3`
    font-family: "Fira Sans", sans-serif;
    font-size: 1.5rem;
        position:relative;
    coursor:pointer;
    &:hover{
      top:-5px;
  `;

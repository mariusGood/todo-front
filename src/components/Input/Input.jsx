import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as S from './Input.styles';
import Button from '../Button/Button';
import { postData } from '../../utils/services';

const Input = ({ children, reload }) => {
  const [data, setData] = useState([]);
  async function formHandle(e) {
    e.preventDefault();
    const inputData = {
      title: data,
    };
    const res = await postData(inputData);

    if (res.msg === 'Success') {
      setData('');
      reload();
    }
  }

  return (
    <S.InputWrapper onSubmit={formHandle}>
      <S.Input value={data} onChange={(e) => setData(e.target.value)}>
        {children}
      </S.Input>
      <Button type='submit' color='#9c4700' bg='#f9bf90'>
        Add
      </Button>
    </S.InputWrapper>
  );
};

Input.propTypes = {
  children: PropTypes.any,
  reload: PropTypes.func,
};

export default Input;

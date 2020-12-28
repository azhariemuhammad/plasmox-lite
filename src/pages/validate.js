import React, { useState, useEffect } from 'react';

import { useLocation } from '@reach/router';
import TextField from '../components/Form/TextField';
import TextAreaField from '../components/Form/Textarea';

import queryString from 'query-string';
import Layout from '../components/layout';
import SEO from '../components/seo';
import TopContent from '../components/TopContent';
import SubHeaderComponent from '../components/SubHeader';
import { formContainer, labelInput } from '../components/Form/styles';

const ValidatePage = () => {
  const location = useLocation();
  console.log(location);

  const [formReport, setFormReport] = useState({
    name: '',
    age: '',
    gender: '',
    address: '',
    result: '',
  });

  useEffect(() => {
    const isValidatePage = location?.pathname == '/validate/';
    if (isValidatePage && location?.search) {
      console.log(location);
      const params = queryString.parse(location.search) || {};
      console.log({ params });
      const report = {
        name: params.name,
        age: params.age,
        gender: params.gender,
        address: params.address,
        result: params.result,
      };
      setFormReport(report);
    }
  }, [location]);

  return (
    <Layout>
      <SEO title="Validator" />

      <div style={{ margin: '53px 0px' }}>
        <SubHeaderComponent />
        <TopContent />
        <div>
          <div css={formContainer}>
            <label css={labelInput} htmlFor="name">
              Nama
            </label>
            <TextField
              placeholder="Jhon Doe"
              name="name"
              handleOnChange={() => {}}
              value={formReport.name}
            />
          </div>
          <div css={formContainer}>
            <label css={labelInput} htmlFor="age">
              Umur
            </label>
            <TextField
              css={formContainer}
              placeholder="23"
              name="age"
              value={formReport.age}
              handleOnChange={() => {}}
            />
          </div>
          <div css={formContainer}>
            <label css={labelInput} htmlFor="gender">
              Jenis Kelamin
            </label>
            <TextField
              css={formContainer}
              handleOnChange={() => {}}
              value={formReport.gender}
              placeholder="Laki-laki"
              name="gender"
            />
          </div>
          <div>
            <label css={labelInput} htmlFor="address">
              Alamat
            </label>
            <TextAreaField
              handleOnChange={() => {}}
              css={formContainer}
              placeholder="Jalan Baru"
              name="address"
              value={formReport.address}
            />
          </div>
          <div css={formContainer}>
            <label css={labelInput} htmlFor="gender">
              Hasil Pemeriksaan
            </label>
            <TextField
              css={formContainer}
              handleOnChange={() => {}}
              value={formReport.result}
              name="result"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ValidatePage;

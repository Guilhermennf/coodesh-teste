import React from 'react';
import Button from '../../components/Home/Button';
import Date from '../../components/Home/Date';
import Gender from '../../components/Home/Gender';
import Names from '../../components/Home/Names';
import Phone from '../../components/Home/Phone';

function Home() {
  return (
    <div className='container'>
      <Names />
      <Gender />
      <Date />
      <Phone />
      <Button />
    </div>
  );
}

export default Home;

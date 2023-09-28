"use client"
import { useState } from 'react';

const generateRandomPassword = (length: number = 12): string => {
  const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=';
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  return password;
};

export default function Home() {
  const [digits, setDigits] = useState<number>(12);
  const [password, setPassword] = useState<string>('');

  const generatePassword = () => {
    const newPwd = generateRandomPassword(digits);
    setPassword(newPwd);
  };

  const copyPassword = () => {
    navigator.clipboard.writeText(password);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
      <h1 className='text-sky-500 text-5xl'>My Password Generator</h1>
      <div className='flex mt-5'>
        <input type="number" onChange={(e) => setDigits(Number(e.target.value))} className='border border-gray-500 focus:border-sky-500 px-1 outline-none ' placeholder='digits count'/>
        <button onClick={generatePassword} className='px-5 py-2 bg-red-600 text-white font-bold'>Generate Password</button>
        <button onClick={copyPassword} className='px-5 py-2 bg-green-500 text-white font-bold'>copy</button><br />
      </div>
      <div className='mt-5 lg:w-1/2 word-break'>
        {password}
      </div>
    </div>
  )
}

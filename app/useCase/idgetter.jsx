"use client"
import React from 'react'
import { useRouter } from 'next/router';
import data from '../../public/data.json';

const Idgetter = () => {
    const router = useRouter();
  const { id } = router.query;
  const useCase = data.find(item => item.id === id);
  return (
    useCase
  )
}

export default Idgetter
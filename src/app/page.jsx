'use client';

import { useClient } from 'next/client';
import { useState } from 'react';

import Modal from '../components/Modal';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <button
          onClick={openModal}
          className="py-3 px-6 bg-yellow-400 rounded-md shadow-md hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50"
        >
          Modal
        </button>
      </div>

      <Modal isOpen={isModalOpen} closeModal={closeModal} fields={[]} />
    </>
  );
}

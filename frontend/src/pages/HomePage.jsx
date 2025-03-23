import { useState } from 'react';
import PledgeForm from '../components/PledgeForm';

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <h1>Welcome to Ohara Collective</h1>
      <button onClick={() => setShowModal(true)}>Request Invite</button>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-btn" onClick={() => setShowModal(false)}>X</button>
            <PledgeForm />
          </div>
        </div>
      )}

      <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .modal-content {
          background: white;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
          position: relative;
        }
        .close-btn {
          position: absolute;
          top: 10px;
          right: 10px;
          background: red;
          color: white;
          border: none;
          padding: 5px 10px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default HomePage;



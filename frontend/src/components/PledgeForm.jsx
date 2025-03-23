import { useState } from 'react';

const PledgeForm = () => {
  const [email, setEmail] = useState('');
  const [reason, setReason] = useState('');
  const [pledged, setPledged] = useState(false);
  const [message, setMessage] = useState('');

  const submitPledge = async () => {
    if (!pledged) {
      setMessage('You must accept the pledge to submit.');
      return;
    }

    try {
      const res = await fetch('/api/pledge/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, reason, pledged }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage(data.message || 'Pledge submitted successfully!');
        setEmail('');
        setReason('');
        setPledged(false);
      } else {
        setMessage(data.error || 'Something went wrong.');
      }
    } catch (error) {
      setMessage('Network error. Please try again later.');
    }
  };

  return (
    <div className="pledge-form">
      <h2>Request an Invite</h2>
      <p>Tell us why you want to join the Ohara Collective:</p>
      <textarea 
        value={reason} 
        onChange={(e) => setReason(e.target.value)} 
        placeholder="Why do you want to join?" 
      />
      <br />
      <input 
        type="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        placeholder="Your email" 
      />
      <br />
      <label>
        <input 
          type="checkbox" 
          checked={pledged} 
          onChange={() => setPledged(!pledged)} 
        />
        I pledge to uphold the mission of the Ohara Collective.
      </label>
      <br />
      <button onClick={submitPledge}>Submit Pledge</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default PledgeForm;


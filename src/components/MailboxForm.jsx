import { useNavigate } from 'react-router-dom';
const MailboxForm = ({ formData, handleFormData, addBox }) => {
    const navigate = useNavigate();
    const handleSubmit = (event) => {
    event.preventDefault();
    addBox(formData);
    navigate('/mailboxes'); 
  };

  return (
    <>
      <h1>MailboxForm</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="boxholder">Enter a BoxHolder</label>
        <input
          type="text"
          name="boxholder"
          placeholder="Boxholder name"
          value={formData.boxholder}
          onChange={handleFormData}
          required
        />
        <label htmlFor="boxSize">Select a Box Size</label>
        <select
          name="boxSize"
          value={formData.boxSize}
          onChange={handleFormData}
          required
        >
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default MailboxForm;

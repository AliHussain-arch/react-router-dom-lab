import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import MailboxDetails from './components/MailboxDetails';
import MailboxForm from './components/MailboxForm';
import MailboxList from './components/MailboxList';
import NavBar from './components/NavBar';

const App = () => {
  const [mailboxes, setMailboxes] = useState([]);

  const [formData, setFormData] = useState({boxholder: '', boxSize: 'small'});

  function addBox (formData) {
    setMailboxes([...mailboxes, {...formData, _id : mailboxes.length + 1}]);
    setFormData({ boxholder: '', boxSize: 'small' });
  }

  function handleFormData(event) {
    const { name, value } = event.target;
    setFormData({...formData,[name]: value});
  }
  
  return(
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<main><h1>Post Office</h1></main>}></Route>
        <Route path='/mailboxes' element={<MailboxList mailboxes={mailboxes}/>}></Route>
        <Route path='/new-mailbox' element={<MailboxForm formData={formData}  handleFormData={handleFormData} addBox={addBox} setMailboxes={setMailboxes} />}></Route>
        <Route path='/mailboxes/:mailboxId' element={<MailboxDetails mailboxes={mailboxes}/>}></Route>
      </Routes>
    </>
  );
};

export default App;

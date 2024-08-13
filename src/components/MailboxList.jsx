import { Link } from 'react-router-dom';

const MailboxList = ({ mailboxes }) => {
  return (
    <>
      <h1>MailboxList</h1>
      <ul>
        {mailboxes.map((mailbox) => (
            <li className='mail-box' key={mailbox._id}><Link to={`/mailboxes/${mailbox._id}`}>Mailbox {mailbox._id}</Link></li>
          ))}
      </ul>
    </>
  );
};

export default MailboxList;

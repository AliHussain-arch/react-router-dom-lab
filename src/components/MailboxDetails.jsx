import { useParams } from 'react-router-dom';

const MailboxDetails = ({mailboxes}) =>  {
  const { mailboxId } = useParams();
  const selectedBox = mailboxes.find(
    (mailbox) => mailbox._id === Number(mailboxId)
  );
    return(
        <>
          <h1>Mailbox {selectedBox._id}</h1>
          <h3>Details</h3>
          <div>Boxholder: {selectedBox.boxholder}</div>
          <div>Box Size: {selectedBox.boxSize}</div>
        </>
      );
  };
export default MailboxDetails
import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { useTransactions } from '../../hooks/useTransactions';
import { Container, TransactionTypeContainer, RadioBox } from './styles';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {

  const { createTransaction } = useTransactions();

  const [type, setType] = useState('deposit');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState(0);

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault()

   await createTransaction({
      title,
      amount,
      category,
      type
    })

    setTitle('');
    setCategory('');
    setAmount(0);
    setType('deposit');

    onRequestClose();
  }
  
    return(
        <Modal 
          isOpen={isOpen}
          onRequestClose={onRequestClose}
          overlayClassName="react-modal-overlay"
          className="react-modal-content"
      >
          <Container onSubmit={handleCreateNewTransaction}>
              
          <button 
          type="button"
          onClick={onRequestClose}
          className="react-modal-close"
          >
            <img src={closeImg} alt="Fechar Modal" />
          </button>

            <h2>Cadastrar Transações</h2>
            
            <input 
            type="text"
            placeholder="Título"
            value={title}
            onChange={event => setTitle(event.target.value)}
            />

            <input 
            type="number"
            placeholder="Valor"
            value={amount}
            onChange={event => setAmount(Number(event.target.value))}
            />

            <TransactionTypeContainer>
              <RadioBox
              type="button"
              onClick={() => { setType('deposit'); }}
              isActive={type === 'deposit'}
              activeColor='green'
              >
                <img src={incomeImg} alt="Entrada" />
                <span>Entrada</span>
              </RadioBox>

              <RadioBox
              type="button"
              onClick={() => { setType('withdraw'); }}
              isActive={type === 'withdraw'}
              activeColor='red'
              >
                <img src={outcomeImg} alt="Saída" />
                <span>Saída</span>
              </RadioBox>
            </TransactionTypeContainer>

            <input 
            type="text"
            placeholder="Categoria"
            value={category}
            onChange={event => setCategory(event.target.value)}
            />

            <button type="submit">
                Cadastar
            </button>
          </Container>
      </Modal>
    );
}
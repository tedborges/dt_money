import { Dashboard } from './components/Dashboard';
import Modal from 'react-modal';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global'
import { useState } from 'react';
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionsProvider } from './hooks/useTransactions';

Modal.setAppElement('#root');

export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModal] = useState(false);

    function handleOpenNewTransactionModal() {
        setIsNewTransactionModal(true);
    }

    function handleCloseNewTransactionModal() {
        setIsNewTransactionModal(false);
    }


  return (
    <TransactionsProvider>
      <Header onOpenNewTranslationModal={handleOpenNewTransactionModal} />

      <Dashboard />

      <NewTransactionModal 
      isOpen={isNewTransactionModalOpen} 
      onRequestClose={handleCloseNewTransactionModal}/>

      <GlobalStyle />
    </TransactionsProvider>
  );
}
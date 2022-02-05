import { Container, Content } from './styles';
import logoImg from '../../assets/logo.svg';


interface HeaderProps {
    onOpenNewTranslationModal: () => void; 
    // handleOpenNewTransactionModal;
}

export function Header({ onOpenNewTranslationModal }: HeaderProps) {

    return(
        <Container>
            <Content>
                <img src={logoImg} alt="dt money" />
                <button
                    type="button"
                    onClick={onOpenNewTranslationModal}
                >
                    Nova transação
                </button>
            </Content>
        </Container>
    )
}
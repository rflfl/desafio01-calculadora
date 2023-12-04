import { ButtonContainer } from "./style";

const Button = ({label, onCLick}) => {
    return (
        <ButtonContainer onClick={onCLick}>
            {label}
        </ButtonContainer>
    );
}

export default Button;

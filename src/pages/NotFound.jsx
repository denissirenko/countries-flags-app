import { useHistory } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import { Button } from '../components/Button';
import styled from "styled-components";

export const NotFound = () => {
    const { push } = useHistory();

    const goHome = () => {
        push('/');
    }

    return (
        <>
            <Button onClick={goHome}>
                <IoArrowBack /> Home Page
            </Button>
            <Wrapper>This page doesn't exist</Wrapper>
        </>
    );
};

const Wrapper = styled.div`
    text-align: center;
    font-size: 24px;
    font-weight: var(--fw-bold);
`
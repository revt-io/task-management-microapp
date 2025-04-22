import styled from '@emotion/styled';

interface ContainerProps {
    isSidebarOpen: boolean;
}

export const Styled = {
    Container: styled.div<ContainerProps>`
        background-color: ${({isSidebarOpen}) => isSidebarOpen ? '#F4F4F4' : '#ccc'};
        height: 100vh;
        width: 100%;
        transform: ${({isSidebarOpen}) => isSidebarOpen ? 'translateX(0)' : 'translateX(-100%)'};
        transition: transform 1s ease;
        position: absolute;
        top: 0;
        z-index: 999;


        @media (min-width: 1024px) {
            background-color: #F4F4F4;
            transform: none;
            position: relative;
            z-index: auto;
        }
    `,
    Header: styled.div`
        display: flex;
        justify-content: space-between;
        padding-left: 1.5rem;
        background-color: #1E90FF;
        @media (min-width: 1024px) {
            display: none;
        }
    `,
    Logo: styled.p`
        color: #ffffff;
        font-size: 1.5rem;
    `,
    Menu: styled.div`
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding-left: 0.5rem;
    `,
    Item: styled.button`
        border: none;
        font-weight: bold;
        font-size: 1rem;
        padding: 1rem;
        border-bottom-left-radius: 0.3rem;
        border-top-left-radius: 0.3rem;
        display: flex;
        gap: 0.5rem;
        color: #000000;
        background-color: transparent;

        &:hover {
            background-color: #D0E8FF;
        }
    `,
}
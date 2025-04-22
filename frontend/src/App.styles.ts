import styled from '@emotion/styled';

export const Styled = {
    Container: styled.div`
        width: 100%;
        background-color: #e8e8e8;
    `,
    MainContent: styled.div`
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        @media (min-width: 1024px) {
            grid-template-columns: 0.5fr 0.5fr 1fr;
        }
    `,

}
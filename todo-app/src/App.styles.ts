import styled from '@emotion/styled';

export const Styled = {
    Container: styled.div`
        width: 100%;
        background-color: #e8e8e8;
    `,
    Wrapper: styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
    `,
    Board: styled.div`
        width: 50%;
        padding: 2rem;
        background-color: #fff;
        text-align: center;
        border-radius: 0.5rem;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    `,
    AddSection: styled.div`
        display: flex;
        gap: 0.5rem;
        width: 100%;
    `,
    TaskWrapper: styled.div`
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    `,
}
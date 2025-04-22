import styled from '@emotion/styled';

export const Styled = {
    Container: styled.div`
        width: 100%;
        background-color: #e8e8e8;
        //display: grid;
        //grid-template-columns: repeat(2, 1fr);
        //@media (min-width: 1024px) {
        //    grid-template-columns: 0.5fr 1fr;
        //}
    `,
    TodoList: styled.div`
        border-right: 0.5px solid #8b949e;
        border-left: 0.5px solid #8b949e;
    `,
    Board: styled.div`
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
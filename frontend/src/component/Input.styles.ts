import styled from '@emotion/styled';

export const Styled = {
    Container: styled.div`
        width: 100%;
        display: flex;
        position: relative;

    `,
    Input: styled.input`
        width: 100%;
        border: none;
        padding: 1rem;
        border-radius: 0.5rem;
    `,
    Span: styled.span`
        visibility: hidden;
        width: 120px;
        background-color: black;
        color: #fff;
        padding: 5px 0;
        border-radius: 6px;
        position: absolute;
        z-index: 1;
        right: 0;
        top: 0;

        &.visible {
            visibility: visible;
        }

        &.hidden {
            visibility: hidden;
        }
    `,
}
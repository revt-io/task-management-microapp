import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import {Global, css} from '@emotion/react'


createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Global
            styles={css`
                body {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }
            `}
        />
        <App/>
    </StrictMode>,
)

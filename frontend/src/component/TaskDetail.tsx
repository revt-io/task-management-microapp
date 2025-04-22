import {Styled} from "./TaskDetail.styles.ts";

export const TaskDetail = () => {
    return (
        <Styled.Container>
            <Styled.Title>
                Task 1
            </Styled.Title>
            <Styled.DueDate>
                Due Date: <span>1/2/199</span>
            </Styled.DueDate>
            <Styled.Priority>
                <h3>Priority:</h3>
                <div>
                    <input id="low" type="radio" name="example" value="option 1"/>
                    <label htmlFor="low">Low</label>
                </div>
                <div>
                    <input id="medium" type="radio" name="example" value="option 2"/>
                    <label htmlFor="medium">Medium</label>
                </div>
                <div>
                    <input id="hight" type="radio" name="example" value="option 3"/>
                    <label htmlFor="hight">High</label>
                </div>
            </Styled.Priority>
            <Styled.Description>
                <h3>Description</h3>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                    the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                    type
                    and scrambled it to make a type specimen book. It has survived not only five centuries, but also
                    the
                    leap into electronic typesetting, remaining essentially unchanged. It was popularised in the
                    1960s
                    with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with
                    desktop
                    publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </Styled.Description>
        </Styled.Container>
    );
};


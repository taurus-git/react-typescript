import { ChildAsFC } from './Child';

const Parent = () => {
    return (
        <ChildAsFC
            color="red"
            onClick={ () => console.log( 'Clicked!' ) }>
            some text
        </ChildAsFC>
    )
};

export default Parent

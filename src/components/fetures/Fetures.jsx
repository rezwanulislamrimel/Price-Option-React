import PropTypes from 'prop-types';
import { AiFillRightSquare } from "react-icons/ai";

const Fetures = ({feature}) => {
    return (
        <div>

            <p >        <AiFillRightSquare className='items-center justify-center mr-2'></AiFillRightSquare>{ feature}</p>
        </div>
    );
};
Fetures.propTypes = {
    Feture:PropTypes.string

}

export default Fetures;
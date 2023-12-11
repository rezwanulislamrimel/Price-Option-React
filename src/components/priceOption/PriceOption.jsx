import PropTypes from 'prop-types';
import Fetures from '../fetures/Fetures';
const PriceOption = ({ option }) => {
    const { name, price, features } = option;
    return (
        <div className='bg-green-800 rounded-md p-4 flex flex-col text-white'>
            <h2 className='text-center'>
                <span className='text-7xl font-semibold '>{price}</span>
                <span className='text-4xl'>/Mon</span>
            </h2>
            <h3 className='text-4xl flex-grow text-center my-8'>{name}</h3>
        
            {
                features.map((feature, index) => <Fetures key={index} feature={feature}></Fetures>)
            }
            <button className='bg-green-700           hover:bg-green-400 w-full mt-2 \2
            '>Buy Now</button>
        </div>
    );
};
PriceOption.PropTypes = {
    option:PropTypes.object
}

export default PriceOption;
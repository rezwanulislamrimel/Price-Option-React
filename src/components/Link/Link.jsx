import PropTypes from 'prop-types';
const Link = ({route}) => {
    return (
        <li className="mr-10 hover:bg-red-800" key={route.id}>
                    <a href={route.name}>{route.name}
                    </a> </li>
    );
};
Link.PropTypes = {
   route:PropTypes.object

}
export default Link;
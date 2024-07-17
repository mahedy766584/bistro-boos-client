import PropTypes from 'prop-types';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='mb-8 w-3/12 text-center mx-auto'>
            <p className='text-yellow-600 mb-3 italic'>---{subHeading}---</p>
            <h1 className='border-y-2 py-2 border-gray-300 text-3xl font-medium font-poppins'>{heading}</h1>
        </div>
    );
};

export default SectionTitle;

SectionTitle.propTypes = {
    heading: PropTypes.node,
    subHeading: PropTypes.node
};
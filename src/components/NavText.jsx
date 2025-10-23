import PropTypes from 'prop-types';

export default function NavText({ text }) {
  return (
    <>
      <p
        className={`relative cursor-pointer font-roboto text-xs font-light text-white no-underline underline-offset-4 hover:underline`}
      >
        {text}
      </p>
    </>
  );
}

NavText.propTypes = {
  text: PropTypes.string.isRequired,
};

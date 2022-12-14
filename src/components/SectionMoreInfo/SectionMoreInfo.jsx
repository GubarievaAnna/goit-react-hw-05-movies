import PropTypes from 'prop-types';
import s from './SectionMoreInfo.module.css';

function SectionMoreInfo({ title, children }) {
  return (
    <section className={s.section}>
      <div className="container">
        <h3 className="visually-hidden">{title}</h3>
        {children}
      </div>
    </section>
  );
}

SectionMoreInfo.propTypes = {
  title: PropTypes.string,
};

export default SectionMoreInfo;

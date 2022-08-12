import PropTypes from 'prop-types';
import s from './Section.module.css';

function Section({ title, children }) {
  return (
    <section className={s.section}>
      <div className="container">
        {title && <h1 className={s.title}>{title}</h1>}
        {children}
      </div>
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string,
};

export default Section;

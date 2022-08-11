function Section({ title, children }) {
  return (
    <section>
      <div className="container">
        {title && <h1>{title}</h1>}
        {children}
      </div>
    </section>
  );
}

export default Section;

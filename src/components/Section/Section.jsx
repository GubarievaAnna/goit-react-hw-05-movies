function Section({ title, children }) {
  return (
    <section>
      <div className="container">
        <h1>{title}</h1>
        {children}
      </div>
    </section>
  );
}

export default Section;

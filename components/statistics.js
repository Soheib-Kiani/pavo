const statistics = () => {
  return (
    <section className="counter">
      <div className="container px-4 sm:px-8">
        <div id="counter">
          <div className="cell">
            <div className="counter-value number-count" data-count="231">
              1
            </div>
            <p className="counter-info">Happy Users</p>
          </div>
          <div className="cell">
            <div className="counter-value number-count" data-count="385">
              1
            </div>
            <p className="counter-info">Issues Solved</p>
          </div>
          <div className="cell">
            <div className="counter-value number-count" data-count="159">
              1
            </div>
            <p className="counter-info">Good Reviews</p>
          </div>
          <div className="cell">
            <div className="counter-value number-count" data-count="127">
              1
            </div>
            <p className="counter-info">Case Studies</p>
          </div>
          <div className="cell">
            <div className="counter-value number-count" data-count="211">
              1
            </div>
            <p className="counter-info">Orders Received</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default statistics;

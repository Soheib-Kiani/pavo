const statistics = () => {
  return (
    <section className="counter">
      <div className="container px-4 sm:px-8">
        <div id="counter">
          <div className="cell">
            <div className="counter-value number-count">
              65
            </div>
            <p className="counter-info">Happy Users</p>
          </div>
          <div className="cell">
            <div className="counter-value number-count">
              45
            </div>
            <p className="counter-info">Issues Solved</p>
          </div>
          <div className="cell">
            <div className="counter-value number-count">
              12
            </div>
            <p className="counter-info">Good Reviews</p>
          </div>
          <div className="cell">
            <div className="counter-value number-count">
              173
            </div>
            <p className="counter-info">Case Studies</p>
          </div>
          <div className="cell">
            <div className="counter-value number-count">
              45
            </div>
            <p className="counter-info">Orders Received</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default statistics;

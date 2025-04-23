function Error({ resetError }) {
  return (
    <section className="py-3 py-md-5 min-vh-100 d-flex justify-content-center align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="text-center">
              <h3 className="h2 mb-2">Oops! You're lost.</h3>
              <p className="mb-5">
                The page you are looking for was not found.
              </p>
              <a
                className="btn bsb-btn-5xl btn-dark rounded-pill px-5 fs-6 m-0"
                onClick={resetError}
                role="button"
              >
                Back to Home
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Error;

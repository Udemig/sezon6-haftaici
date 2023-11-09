import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main>
      <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
        <h1 className="display-4 fw-normal text-body-emphasis">Not Found</h1>
        <p className="fs-5 text-body-secondary">
          The page which you requested not found or modified.
        </p>

        <p>
          <Link className="btn btn-primary" to={"/"}>
            <i className="fa-solid fa-backward"></i>
            &nbsp; Go Back
          </Link>
        </p>
      </div>
    </main>
  );
}

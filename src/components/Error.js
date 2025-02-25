import { useRouteError } from "react-router-dom";

export const Error = () => {
  const err = useRouteError();

  return (
    <div>
      <h1>Oops!!</h1>
      <h2>Something Went wrong!!</h2>
      <h2>
        {err.status}: {err.statusText}
      </h2>
    </div>
  );
};

import { memo } from "react";
import { useParams } from "react-router-dom";

export function withParams(Component) {
  return memo((props) => {
    console.log("HOC");
    let params = useParams();
    return <Component {...props} params={params} />;
  });
}

import { FunctionComponent } from "react";

const EmptyContainer: FunctionComponent = (props) => {
  const { children } = props;

  return <>{children}</>;
};

export default EmptyContainer;

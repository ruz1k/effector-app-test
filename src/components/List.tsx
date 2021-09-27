import React, { memo } from "react";

const List = <T,>(
  props: React.PropsWithChildren<ListFuncProps<T>>
): JSX.Element => {
  const { item1, item2 } = props;
  console.log(item1, item2);
  return (
    <div>
      <p>{item1}</p>
      <p>{item2}</p>
    </div>
  );
};

export const ListRender = memo(List) as typeof List;

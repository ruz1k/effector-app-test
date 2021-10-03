import React, { memo } from "react";

const List = <T,>(
  props: React.PropsWithChildren<ListFuncProps<T>>
): JSX.Element => {
  const { objectProps } = props;
  return (
    <div>
      <p>{objectProps?.item1}</p>
      <p>{objectProps?.item2}</p>
    </div>
  );
};

export const ListRender = memo(List) as typeof List;

declare type DefaultFormProps<T> = {
  title: string;
  onSubmit: (value: T) => void;
};

declare type FormProps = {
  id: number;
  language: string;
};

declare type ListFuncProps<T> = {
  objectProps: {
    item1: T;
    item2: T;
  };
};

declare type ListProps = string | number;

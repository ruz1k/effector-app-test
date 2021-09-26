declare type DefaultFormProps<T> = {
  title: T;
  onSubmit: (value: T) => void;
};

declare type FormProps = {
  title: string;
  onSubmit: (value: object) => void;
};

declare type ListFuncProps<T> = {
  item1: T;
  item2: T;
};

declare type ListProps = {
  item: { id?: number; language?: string };
  //   item1: number;
  //   item2: string;
};

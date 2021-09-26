import React, { memo, useState } from "react";
import { Form } from "antd";

const DefaultForm = <T,>(
  props: React.PropsWithChildren<DefaultFormProps<T>>
): JSX.Element => {
  const { title, onSubmit } = props;
  const onFinish = (values: T) => {
    onSubmit(values);
  };
  return (
    <Form onFinish={onFinish}>
      <p>{title}</p>
      <Form.Item name="id">
        <input type="number" />
      </Form.Item>
      <Form.Item name="language">
        <input />
      </Form.Item>
      <button />
    </Form>
  );
};

export default memo(DefaultForm);

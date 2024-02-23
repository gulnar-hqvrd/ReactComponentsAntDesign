import React, { useState } from "react";
import { Button, Form, Input, InputNumber } from "antd";
import { useAppDispatch } from "../../app/hooks";
import { createCategory } from "./categorySlice";
import { AsyncThunkAction } from "@reduxjs/toolkit";
import { AsyncThunkConfig } from "@reduxjs/toolkit/dist/createAsyncThunk";
import { Category } from "./types";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
/* eslint-enable no-template-curly-in-string */

const Create: React.FC = () => {
    const dispatch = useAppDispatch();
  const onFinish = (values: any) => {
    // console.log(values);
    dispatch(createCategory(values));
  };

  const [category, setCategory] = useState({
    categoryName: "",
    description: "",
  });

  const handleChange = (e: any) => {
    setCategory((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  return (
    <Form
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      style={{ maxWidth: 600 }}
      validateMessages={validateMessages}
    >
      <Form.Item
        name={"categoryName"}
        label="Katogoriya adi'"
        rules={[{ required: true }]}
      >
        <Input
          name="categoryName"
          value={category.categoryName}
          onChange={handleChange}
        />
      </Form.Item>
      <Form.Item name={"description"} label="Melumat">
        <Input.TextArea
          name="description"
          value={category.description}
          onChange={handleChange}
        />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Create;
function postData(values: any): any {
  throw new Error("Function not implemented.");
}

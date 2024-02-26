import React from "react";
import { Button, Card, Col, Form, Input, Row } from "antd";
import { useAppDispatch } from "../../app/hooks";
import { addCategory } from "./categorySlice";
import { useNavigate } from "react-router-dom";

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

const Create: React.FC = () => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const onFinish = (values: any) => {
    dispatch(addCategory(values));
    navigate("/category/index");
  };

  return (
    <Card>
      <Row style={{ marginTop: 16 }}>
        <Col span={24}>
          <Form
            {...layout}
            name="nest-messages"
            onFinish={onFinish}
            style={{ maxWidth: 600 }}
            validateMessages={validateMessages}
          >
            <Form.Item
              name={"categoryName"}
              label="Kategori Adı"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item name={"description"} label="Açıklama">
              <Input.TextArea />
            </Form.Item>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
              <Button
                type="primary"
                htmlType="submit"
                style={{ float: "right" }}
              >
                Kaydet
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </Card>
  );
};

export default Create;

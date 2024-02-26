import React, { useEffect, useState } from "react";
import {
  Row,
  Table,
  Col,
  Result,
  Button,
  Tooltip,
  TableProps,
  Dropdown,
  Space,
  MenuProps,
  Menu,
} from "antd";
import { CategoryType } from "./types";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  deleteCategory,
  fetchCategories,
  fetchCategory,
} from "./categorySlice";
import {
  SearchOutlined,
  PlusOutlined,
  SettingOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

import Card from "antd/es/card/Card";
import CustomModal from "../../components/Modal";

const List: React.FC = () => {
  const dispatch = useAppDispatch();
  const [openDetail, setOpenDetail] = useState(false);

  const [content, setContent] = useState<React.ReactNode | null>(null);

  const categories = useAppSelector((state) => state.category.list);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const onNavigate = () => {
    navigate("/create-catogory");
  };

  const onDeleteHandle = (e: any) => {
    dispatch(deleteCategory(e));
  };

  const onDetailsHandle = (e: boolean) => {
    dispatch(fetchCategory("id"));
    // setContent(category?.categoName);
    setOpenDetail(e);
  };

  const columns: TableProps<CategoryType>["columns"] | any = [
    {
      title: "Id",
      dataIndex: "_id",
      key: "_id",
    },
    {
      title: "Category Name",
      dataIndex: "categoryName",
      key: "categoryName",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Actions",
      key: "actions",
      dataIndex: "_id",
      render: (id: any) => {
        return (
          <Dropdown
            trigger={["click"]}
            dropdownRender={(menu) => (
              <div>
                <Menu>
                  <Menu.Item icon={<EditOutlined />}>Edit</Menu.Item>
                  <Menu.Item
                    onClick={() => onDetailsHandle(true)}
                    icon={<SearchOutlined />}
                  >
                    Details
                  </Menu.Item>
                  <Menu.Item
                    onClick={() => onDeleteHandle(id)}
                    icon={<DeleteOutlined />}
                    danger
                  >
                    Delete
                  </Menu.Item>
                </Menu>
              </div>
            )}
          >
            <Button size={"middle"}>
              <Space>
                <SettingOutlined />
              </Space>
            </Button>
          </Dropdown>
        );
      },
    },
  ];

  return (
    <>
      <Card>
        <Row>
          <Col
            xs={{ span: 24, offset: 0 }}
            sm={{ span: 24, offset: 0 }}
            md={{ span: 0, offset: 0 }}
          >
            <Result
              status="403"
              title="403"
              subTitle="Sorry, you are not authorized to access this page."
              extra={<Button type="primary">Pervin Nerdesin?</Button>}
            />
          </Col>
          <Col
            xs={{ span: 0, offset: 0 }}
            sm={{ span: 0, offset: 0 }}
            md={{ span: 24, offset: 0 }}
            lg={{ span: 24, offset: 0 }}
            xl={{ span: 24, offset: 0 }}
            xxl={{ span: 24, offset: 0 }}
            style={{ marginBottom: 16 }}
          >
            <Tooltip title="Create">
              <Button
                onClick={onNavigate}
                style={{ float: "right" }}
                type="primary"
                icon={<PlusOutlined />}
              >
                Yeni Kategori
              </Button>
            </Tooltip>
          </Col>
          <Col span={24}>
            <Table
              size="middle"
              locale={{
                emptyText: "Data Yok :(",
                filterSearchPlaceholder: "Ara",
              }}
              columns={columns}
              dataSource={categories}
            />
          </Col>
        </Row>
      </Card>

      <CustomModal
        title="Category Details"
        width={500}
        open={openDetail}
        onOpenHandler={onDetailsHandle}
        content={content}
      />
    </>
  );
};

export default List;

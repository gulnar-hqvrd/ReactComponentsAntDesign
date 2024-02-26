import React, { useCallback, useEffect, useMemo, useState } from "react";
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
  Menu,
} from "antd";
import { CategoryType } from "./types";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  deleteCategory,
  fetchCategories,
  fetchCategory,
  updateCategory,
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
import CategoryDetail from "./components/categoryDetail";
import FormComponent from "./components/categoryForm";

const List: React.FC = () => {
  const [open, setOpen] = useState({
    open: false,
    content: "",
  });
  const [content, setContent] = useState<React.ReactNode | null>(null);

  const dispatch = useAppDispatch();
  const categories = useAppSelector((state) => state.category.list);
  const category = useAppSelector((state) => state.category.selected);

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  useEffect(() => {
    category &&
      setContent(
        open.content === "details" ? (
          <CategoryDetail category={category} />
        ) : (
          <FormComponent onFinish={onFinish} initialValues={category} />
        )
      );
  }, [category]);

  const onDetailsHandle = useCallback(
    (e: boolean, id?: string) => {
      setOpen({
        open: e,
        content: "details",
      });
      if (id) {
        dispatch(fetchCategory(id));
      }
    },
    [dispatch]
  );

  const onDeleteHandle = useCallback(
    (e: any) => {
      dispatch(deleteCategory(e));
    },
    [dispatch]
  );

  const onEditHandle = (e: boolean, id?: string) => {
    if (id) {
      dispatch(fetchCategory(id));
    }
    setOpen({
      open: e,
      content: "edit",
    });
  };
  // const onEditHandle = useCallback(
  //   (e: boolean, id?: string) => {
  //     if (id) {
  //       dispatch(fetchCategory(id));
  //     }
  //     setOpen({
  //       open: e,
  //       content: "edit",
  //     });
  //   },
  //   [dispatch]
  // );

  const onFinish = (values: any) => {
    dispatch(updateCategory(values));
    navigate("/category/index");
  };

  const onNavigate = () => navigate("/category/create");

  type ColumnType = TableProps<CategoryType>["columns"] | any;
  const columns: ColumnType = useMemo(
    () => [
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
                    <Menu.Item
                      onClick={() => onEditHandle(true, id)}
                      icon={<EditOutlined />}
                    >
                      Edit
                    </Menu.Item>
                    <Menu.Item
                      onClick={() => onDetailsHandle(true, id)}
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
    ],
    []
  );

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
        width={1200}
        open={open.open}
        onOpenHandler={onDetailsHandle}
        content={content}
      />
    </>
  );
};

export default List;

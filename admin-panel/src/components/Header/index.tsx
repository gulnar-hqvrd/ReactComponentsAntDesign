import { Header } from "antd/es/layout/layout";
import React from "react";
import { Layout, Button, theme } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

export interface IHeaderMenuProps {
  colorBgContainer: any;
  collapsed: boolean;
  onCollapse: any;
}

const Index = (props: IHeaderMenuProps) => {
  const { collapsed, onCollapse, colorBgContainer } = props;

  return (
    <div>
      <Header style={{ padding: 0, background: colorBgContainer }}>
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => onCollapse(collapsed)}
          style={{
            fontSize: "16px",
            width: 64,
            height: 64,
          }}
        />
      </Header>
    </div>
  );
};

export default Index;

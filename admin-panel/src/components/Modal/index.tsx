import React from "react";
import { Modal } from "antd";

interface ModalProps {
  title: string;
  width: number;
  content: React.ReactNode;
  open: boolean;
  onOpenHandler: (open: boolean) => void;
}
const CustomModal = (props: ModalProps) => {
  const { content, open, width, title, onOpenHandler } = props;

  return (
    <>
      <Modal
        title={title}
        centered
        open={open}
        onOk={() => onOpenHandler(false)}
        onCancel={() => onOpenHandler(false)}
        width={width}
      >
        {content}
      </Modal>
    </>
  );
};

export default CustomModal;

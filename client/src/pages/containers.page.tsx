import { FloatButton } from "antd";
import ContainersList from "../components/containers/list/containers-list";
import { PlusOutlined } from "@ant-design/icons";
import { useState } from "react";
import CreateContainer from "../components/containers/create/create-container";

export default function ContainersPage() {
  const [isCreateContainerOpen, setCreateContainerOpen] = useState(false);

  return (
    <>
      <CreateContainer
        open={isCreateContainerOpen}
        onClose={() => setCreateContainerOpen(false)}
      />
      <FloatButton
        icon={<PlusOutlined />}
        onClick={() => setCreateContainerOpen(true)}
        type="primary"
      />
      <ContainersList />
    </>
  );
}

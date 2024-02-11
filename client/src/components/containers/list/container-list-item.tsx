import { Card, Flex, Typography } from "antd";
import { Container } from "../../../models/containers/container.model";

const { Title } = Typography;

type Props = {
  container: Container;
};

export default function ContainerListItem({ container }: Props) {
  return (
    <Card>
      <Flex vertical gap={6}>
        <Title level={3}>{container.name.trim()}</Title>
      </Flex>
    </Card>
  );
}

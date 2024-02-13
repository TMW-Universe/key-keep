import { Button, Card, Flex, Popover, Typography } from "antd";
import { Container } from "../../../models/containers/container.model";
import { useNavigate } from "react-router-dom";
import { routes } from "../../../router/routes";
import { InfoCircleOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

type Props = {
  container: Container;
};

export default function ContainerListItem({
  container: { name, id, description },
}: Props) {
  const navigate = useNavigate();

  return (
    <Card hoverable onClick={() => navigate(routes.CONTAINER(id))}>
      <Flex gap={6} justify="space-between">
        <Title level={3}>{name.trim()}</Title>
        {description && (
          <Popover content={<Text>{description}</Text>}>
            <Button
              onClick={(e) => {
                e.stopPropagation();
              }}
              type="link"
              icon={<InfoCircleOutlined />}
            />
          </Popover>
        )}
      </Flex>
    </Card>
  );
}

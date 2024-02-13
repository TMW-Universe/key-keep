import ManagedFetchRenderer from "react-data-fetch-manager/dist/components/renderers/managed-fetch-renderer";
import { useContainers } from "../../../hooks/api/containers/use-containers";
import ContainerListItem from "./container-list-item";
import { Col, Row } from "antd";

export default function ContainersList() {
  const managedFetch = useContainers();

  return (
    <ManagedFetchRenderer
      managedFetch={managedFetch}
      render={({ rows }) => (
        <Row gutter={[12, 12]}>
          {rows.map((row) => (
            <Col key={row.id} xs={24} md={12} xl={8} xxl={6}>
              <ContainerListItem container={row} />
            </Col>
          ))}
        </Row>
      )}
    />
  );
}

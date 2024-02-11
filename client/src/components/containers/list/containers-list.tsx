import ManagedFetchRenderer from "react-data-fetch-manager/dist/components/renderers/managed-fetch-renderer";
import { useContainers } from "../../../hooks/api/containers/use-containers";
import ContainerListItem from "./container-list-item";
import { Row } from "antd";

export default function ContainersList() {
  const managedFetch = useContainers();

  return (
    <ManagedFetchRenderer
      managedFetch={managedFetch}
      render={({ rows }) => (
        <Row>
          {rows.map((row) => (
            <ContainerListItem container={row} key={row.id} />
          ))}
        </Row>
      )}
    />
  );
}

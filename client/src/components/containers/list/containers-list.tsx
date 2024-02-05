import ManagedFetchRenderer from "react-data-fetch-manager/dist/components/renderers/managed-fetch-renderer";
import { useContainers } from "../../../hooks/api/containers/use-containers";

export default function ContainersList() {
  const managedFetch = useContainers();

  return <ManagedFetchRenderer managedFetch={managedFetch} />;
}

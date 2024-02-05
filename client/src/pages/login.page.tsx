import { Flex } from "antd";
import Login from "../components/common/auth/login";

export default function LoginPage() {
  return (
    <Flex
      justify="center"
      align="center"
      style={{ height: "100vh", width: "100vw" }}
    >
      <Login />
    </Flex>
  );
}

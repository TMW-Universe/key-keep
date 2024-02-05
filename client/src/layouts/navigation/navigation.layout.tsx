import { Layout, Menu } from "antd";
import { Header } from "antd/es/layout/layout";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import Authenticated from "@tmw-universe/react-tmw-universe-authentication-utils/dist/components/authenticated";
import UserNavCard from "../../components/common/user/user-nav-card";
import NotAuthenticated from "@tmw-universe/react-tmw-universe-authentication-utils/dist/components/not-authenticated";
import LoginButton from "../../components/common/user/login-button";
import styles from "./navigation.layout.module.pcss";
import { useTheme } from "../../providers/theming/theme.provider";
import { Theme } from "@tmw-universe/tmw-universe-types";

type Props = {
  children?: JSX.Element | JSX.Element[];
};

type ItemType = {
  label: string;
  key: string;
  route: string;
};

export default function NavigationLayout({ children }: Props) {
  const navigate = useNavigate();

  const basicItems: ItemType[] = [];

  const onlineItems: ItemType[] = [];

  const { theme } = useTheme();

  return (
    <Layout className={styles.layout}>
      <Header
        style={
          theme.theme === Theme.LIGHT ? { backgroundColor: "white" } : undefined
        }
      >
        <div className={classNames("container mx-auto", styles.header)}>
          <Menu
            theme={theme.theme}
            mode="horizontal"
            items={[...basicItems, ...onlineItems].map(
              ({ route, ...item }) => ({
                ...item,
                onClick: () => navigate(route),
              })
            )}
            className={styles.menu}
          />
          <div className={styles.user}>
            <Authenticated>
              <UserNavCard />
            </Authenticated>
            <NotAuthenticated>
              <LoginButton />
            </NotAuthenticated>
          </div>
        </div>
      </Header>
      <div className={classNames("container mx-auto", styles.content)}>
        {children}
      </div>
    </Layout>
  );
}

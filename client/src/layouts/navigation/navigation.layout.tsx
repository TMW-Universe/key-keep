import { Button, Flex, Layout, Menu } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import Authenticated from "@tmw-universe/react-tmw-universe-authentication-utils/dist/components/authenticated";
import UserNavCard from "../../components/common/user/user-nav-card";
import NotAuthenticated from "@tmw-universe/react-tmw-universe-authentication-utils/dist/components/not-authenticated";
import LoginButton from "../../components/common/user/login-button";
import styles from "./navigation.layout.module.pcss";
import { useTheme } from "../../providers/theming/theme.provider";
import { Theme } from "@tmw-universe/tmw-universe-types";
import { useTranslation } from "react-i18next";
import { Translations } from "../../i18n/translations.enum";
import { routes } from "../../router/routes";
import Sider from "antd/es/layout/Sider";
import { useState } from "react";
import { LogoutOutlined } from "@ant-design/icons";
import { useTmwuAuthentication } from "@tmw-universe/react-tmw-universe-authentication-utils";

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
  const { logout } = useTmwuAuthentication();

  const [isSliderCollapsed, setSliderCollapsed] = useState(false);

  const { t } = useTranslation([Translations.LAYOUT]);

  const basicItems: ItemType[] = [
    {
      label: t("nav.items.home.Label"),
      key: "home",
      route: routes.HOME(),
    },
    {
      label: t("nav.items.containers.Label"),
      key: "containers",
      route: routes.CONTAINERS(),
    },
  ];

  const onlineItems: ItemType[] = [];

  const { theme } = useTheme();

  return (
    <Layout className={styles.layout} style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={isSliderCollapsed}
        onCollapse={(value) => setSliderCollapsed(value)}
        style={
          theme.theme === Theme.LIGHT ? { backgroundColor: "white" } : undefined
        }
      >
        <div className={styles.user}>
          <UserNavCard onlyAvatar={isSliderCollapsed} />
          {!isSliderCollapsed && (
            <Flex justify="center" gap={3}>
              <Button
                size="small"
                icon={<LogoutOutlined />}
                onClick={logout}
                type="link"
              />
            </Flex>
          )}
        </div>
        <Menu
          theme={theme.theme}
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={[...basicItems, ...onlineItems].map(({ route, ...item }) => ({
            ...item,
            onClick: () => navigate(route),
          }))}
          className={styles.menu}
        />
      </Sider>
      <Layout>
        <Content style={{ margin: "0 16px" }}>
          <div className={classNames("container mx-auto", styles.content)}>
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          TheMineWay Universe | {new Date().getFullYear()}
        </Footer>
      </Layout>
    </Layout>
  );

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

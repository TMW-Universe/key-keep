import { useTmwuAuthentication } from "@tmw-universe/react-tmw-universe-authentication-utils";
import { Button, Card, Flex } from "antd";
import { useTranslation } from "react-i18next";
import { Translations } from "../../../i18n/translations.enum";

export default function Login() {
  const { login, isAuthenticating } = useTmwuAuthentication();
  const { t } = useTranslation([Translations.TMWU_AUTH]);

  return (
    <Card>
      <Flex>
        <Button
          loading={isAuthenticating}
          onClick={() => login()}
          type="primary"
        >
          {t("login.button.Text")}
        </Button>
      </Flex>
    </Card>
  );
}

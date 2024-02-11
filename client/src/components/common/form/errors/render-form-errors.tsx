import { Flex, Typography } from "antd";
import { useTranslation } from "react-i18next";
import { Translations } from "../../../../i18n/translations.enum";
import { red } from "@ant-design/colors";

const { Text } = Typography;

type Props = {
  errorKeys?: { key: string; values?: Record<string, string | number> }[];
};

export default function RenderFormErrors({ errorKeys }: Props) {
  const { t } = useTranslation([Translations.FORM_ERRORS]);

  return (
    <>
      {errorKeys && (
        <Flex vertical gap={1}>
          {errorKeys.map((error, i) => (
            <Text style={{ color: red[4] }} key={i}>
              {t(error.key, { num: error.values?.num })}
            </Text>
          ))}
        </Flex>
      )}
    </>
  );
}

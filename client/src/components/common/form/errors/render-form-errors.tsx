import { Flex, Typography } from "antd";
import { useTranslation } from "react-i18next";
import { Translations } from "../../../../i18n/translations.enum";

const { Text } = Typography;

type Props = {
  errorKeys?: string[];
};

export default function RenderFormErrors({ errorKeys }: Props) {
  const { t } = useTranslation([Translations.FORM_ERRORS]);

  return (
    <>
      {errorKeys && (
        <Flex vertical gap={1}>
          {errorKeys.map((error, i) => (
            <Text key={i}>{t(error)}</Text>
          ))}
        </Flex>
      )}
    </>
  );
}

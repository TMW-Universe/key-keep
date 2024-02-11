import {
  Alert,
  Button,
  Divider,
  Flex,
  Modal,
  Progress,
  Typography,
} from "antd";
import { useTranslation } from "react-i18next";
import { Translations } from "../../../i18n/translations.enum";
import { PlusOutlined } from "@ant-design/icons";
import { useForm } from "react-handled-forms";
import Form from "react-handled-forms/dist/components/form";
import TextFormItem from "../../common/form/items/text/text.form-item";
import { InferType, object, string } from "yup";
import TextAreaFormItem from "../../common/form/items/text/text-area.form-item";
import PasswordFormItem from "../../common/form/items/text/password.form-item";
import { evaluatePassword } from "../../../utils/passwords/evaluate-password.util";

const { Text } = Typography;

type Props = {
  open: boolean;
  onClose: () => void;
};

const FORM_SCHEMA = object({
  name: string()
    .required()
    .test(
      "length",
      { key: "text.min-length", values: { num: 2 } },
      (v) => v.length >= 2
    ),
  description: string(),
  masterPassword: string()
    .required()
    .test(
      "length",
      { key: "text.min-length", values: { num: 12 } },
      (v) => v.length >= 12
    ),
  repeatMasterPassword: string()
    .required()
    .test(
      "length",
      { key: "text.min-length", values: { num: 12 } },
      (v) => v.length >= 12
    ),
});

type FormType = InferType<typeof FORM_SCHEMA>;

export default function CreateContainer({ onClose, open }: Props) {
  const { t } = useTranslation([Translations.CREATE_CONTAINER]);

  const form = useForm<FormType>({
    objectSchema: FORM_SCHEMA,
  });

  const passwordEvaluation = form.formState.masterPassword
    ? evaluatePassword(form.formState.masterPassword)
    : null;

  return (
    <Modal
      footer={
        <Button
          onClick={() => form.submit()}
          loading={form.isLoading}
          icon={<PlusOutlined />}
          type="primary"
        >
          {t("Create")}
        </Button>
      }
      title={t("Title")}
      open={open}
      onCancel={onClose}
    >
      <Flex vertical>
        <Text>{t("Description")}</Text>
        <Divider />
        <Form form={form}>
          <Flex vertical gap={12}>
            <Flex vertical gap={3}>
              <Text>{t("create-form.fields.name.Label")}</Text>
              <TextFormItem<FormType, "name">
                name="name"
                componentProps={{ maxLength: 32, showCount: true }}
              />
            </Flex>
            <Flex vertical gap={3}>
              <Text>{t("create-form.fields.description.Label")}</Text>
              <TextAreaFormItem<FormType, "description">
                name="description"
                componentProps={{
                  maxLength: 10000,
                  showCount: true,
                }}
              />
            </Flex>
          </Flex>
          <Divider />
          <Flex vertical gap={12}>
            <Alert
              showIcon
              type="warning"
              message={
                <Text className="text-justify">
                  <p>
                    {t("create-form.messages.master-password-warning.Message")}
                  </p>
                </Text>
              }
            />
            <Flex vertical gap={3}>
              <Text>{t("create-form.fields.master-password.Label")}</Text>
              <PasswordFormItem<FormType, "masterPassword">
                name="masterPassword"
                componentProps={{ maxLength: 128, showCount: true }}
              />
              <Progress
                percent={passwordEvaluation?.percent}
                strokeColor={passwordEvaluation?.color}
              />
            </Flex>
            <Flex vertical gap={3}>
              <Text>
                {t("create-form.fields.repeat-master-password.Label")}
              </Text>
              <PasswordFormItem<FormType, "repeatMasterPassword">
                name="repeatMasterPassword"
                componentProps={{ maxLength: 128, showCount: true }}
              />
            </Flex>
          </Flex>
        </Form>
      </Flex>
    </Modal>
  );
}

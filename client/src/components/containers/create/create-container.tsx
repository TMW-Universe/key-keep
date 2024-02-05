import { Button, Divider, Flex, Modal, Typography } from "antd";
import { useTranslation } from "react-i18next";
import { Translations } from "../../../i18n/translations.enum";
import { PlusOutlined } from "@ant-design/icons";
import { useForm } from "react-handled-forms";
import Form from "react-handled-forms/dist/components/form";
import TextFormItem from "../../common/form/items/text/text.form-item";
import { InferType, object, string } from "yup";
import TextAreaFormItem from "../../common/form/items/text/text-area.form-item";

const { Text } = Typography;

type Props = {
  open: boolean;
  onClose: () => void;
};

const FORM_SCHEMA = object({
  name: string().required(),
  description: string(),
  masterPassword: string().required(),
  repeatMasterPassword: string().required(),
});

type FormType = InferType<typeof FORM_SCHEMA>;

export default function CreateContainer({ onClose, open }: Props) {
  const { t } = useTranslation([Translations.CREATE_CONTAINER]);

  const form = useForm<FormType>();

  return (
    <Modal
      footer={
        <Button icon={<PlusOutlined />} type="primary">
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
            <TextFormItem<FormType, "name"> name="name" />
            <TextAreaFormItem<FormType, "description"> name="description" />
          </Flex>
        </Form>
      </Flex>
    </Modal>
  );
}

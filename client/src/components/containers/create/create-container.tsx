import { Button, Modal } from "antd";
import { useTranslation } from "react-i18next";
import { Translations } from "../../../i18n/translations.enum";
import { PlusOutlined } from "@ant-design/icons";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function CreateContainer({ onClose, open }: Props) {
  const { t } = useTranslation([Translations.CREATE_CONTAINER]);

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
    ></Modal>
  );
}

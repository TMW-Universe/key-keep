import {
  getFullName,
  getProfilePictureUrl,
  useTwmuAccount,
} from "@tmw-universe/react-tmw-universe-authentication-utils";
import { Avatar, Typography } from "antd";
import styles from "./user-nav-card.module.pcss";

const { Text } = Typography;

type Props = {
  onlyAvatar?: boolean;
};

export default function UserNavCard({ onlyAvatar }: Props) {
  const { isAuthenticated, account } = useTwmuAccount();

  if (!isAuthenticated) throw new Error();

  return (
    <div className={styles.account}>
      <Avatar className={styles.avatar} src={getProfilePictureUrl(account)} />
      {!onlyAvatar && <Text>{getFullName(account)}</Text>}
    </div>
  );
}

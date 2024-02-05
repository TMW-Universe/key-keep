import AuthProvider from "./authentication/auth.provider";
import NetworkingProvider from "./networking/networking.provider";
import ThemeProvider from "./theming/theme.provider";

type Props = {
  children: JSX.Element;
};

export default function Providers({ children }: Props) {
  return (
    <ThemeProvider>
      <AuthProvider>
        <NetworkingProvider>{children}</NetworkingProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

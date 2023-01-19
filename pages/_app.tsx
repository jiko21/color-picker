import type { AppProps } from 'next/app'
import 'styles/styles.css';
import { defaultTheme, Text, Provider, SSRProvider } from "@adobe/react-spectrum";
import { Header } from "@/components/organisms/Header";
import { DefaultTemplate } from "@/components/templates/DefaultTemplate";

const MyApp = ({Component, pageProps}: AppProps) => (
  <SSRProvider>
    <Provider theme={defaultTheme}>
      <DefaultTemplate
        header={
          <Header>
            <Text height="size-200" margin="size-1000">
              color-picker
            </Text>
          </Header>
        }
      >
        <Component {...pageProps} />
      </DefaultTemplate>
    </Provider>
  </SSRProvider>
);

export default MyApp

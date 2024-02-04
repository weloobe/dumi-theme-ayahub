import { Helmet } from 'dumi';
import { memo } from 'react';

const Favicons = memo(() => {
  return (
    <Helmet>
      <link
        href="https://registry.npmmirror.com/@ayahub/assets-favicons/latest/files/assets/apple-touch-icon.png"
        rel="apple-touch-icon"
        sizes="180x180"
      />
      <link
        href="https://registry.npmmirror.com/@ayahub/assets-favicons/latest/files/assets/favicon-32x32.png"
        rel="icon"
        sizes="32x32"
        type="image/png"
      />
      <link
        href="https://registry.npmmirror.com/@ayahub/assets-favicons/latest/files/assets/favicon-16x16.png"
        rel="icon"
        sizes="16x16"
        type="image/png"
      />
      <link
        href="https://registry.npmmirror.com/@ayahub/assets-favicons/latest/files/assets/site.webmanifest"
        rel="manifest"
      />
      <link
        color="#000000"
        href="https://registry.npmmirror.com/@ayahub/assets-favicons/latest/files/assets/safari-pinned-tab.svg"
        rel="mask-icon"
      />
      <meta content="AyaHub" name="apple-mobile-web-app-title" />
      <meta content="AyaHub" name="application-name" />
      <meta content="#000000" name="msapplication-TileColor" />
      <meta content="#000000" name="theme-color" />
    </Helmet>
  );
});

export default Favicons;

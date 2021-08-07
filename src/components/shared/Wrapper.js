import { Helmet } from 'react-helmet';
import { Slide, toast } from 'react-toastify';
import React, { memo, useEffect } from 'react';
import ModalRegistrar from '../../modals/ModalRegistrar';

const Wrapper = ({ children }) => {
  useEffect(() => {
    toast.configure({
      role: 'alert',
      hideProgressBar: true,
      transition: Slide,
      closeButton: false,
      position: 'bottom-right',
      pauseOnFocusLoss: false,
    });
  }, []);

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>InstaResume</title>
        <meta
          name="description"
          content="A free   resume builder that’s built to make the mundane tasks of creating, updating and sharing your resume as easy as 1, 2, 3."
        />
        <link rel="canonical" href="https://instaresume.jackjona.live" />
        <meta property="og:url" content="https://instaresume.jackjona.live" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="A free   resume builder that’s built to make the mundane tasks of creating, updating and sharing your resume as easy as 1, 2, 3."
        />
        <meta
          property="og:image"
          content="http://instaresume.jackjona.live/images/share.png"
        />
      </Helmet>

      {children}

      <ModalRegistrar />
    </>
  );
};

export default memo(Wrapper);

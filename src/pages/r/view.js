import { Helmet } from 'react-helmet';
import { Link, navigate } from '@reach/router';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import React, { memo, useContext, useEffect, useMemo, useState } from 'react';
import * as styles from './view.module.css';
import { scaler } from '../../utils';
import Castform from '../../templates/Castform';
import Celebi from '../../templates/Celebi';
import DatabaseContext from '../../contexts/DatabaseContext';
import Gengar from '../../templates/Gengar';
import Glalie from '../../templates/Glalie';
import LoadingScreen from '../../components/router/LoadingScreen';
import Onyx from '../../templates/Onyx';
import Pikachu from '../../templates/Pikachu';
import fontSizeOptions from '../../data/fontSizeOptions';

const ResumeViewer = ({ id }) => {
  const { t, i18n } = useTranslation();
  const [resume, setResume] = useState(null);
  const [loading, setLoading] = useState(true);
  const { getResume } = useContext(DatabaseContext);

  useEffect(() => {
    (async () => {
      const data = await getResume(id);

      if (!data) {
        navigate('/');
        toast.error(
          `The resume you were looking for does not exist anymore... or maybe it never did?`,
        );
        return null;
      }

      setResume(data);
      i18n.changeLanguage(data.metadata.language || 'en');

      for (const [key, sizeDefault] of Object.entries(fontSizeOptions)) {
        document.documentElement.style.setProperty(
          key,
          `${scaler(data.metadata.fontSize) * sizeDefault}rem`,
        );
      }

      return setLoading(false);
    })();
  }, [id]);

  return useMemo(() => {
    if (loading) {
      return <LoadingScreen />;
    }

    return (
      <div className={styles.container}>
        <Helmet>
          <title>
            {resume.name} | {t('shared.appName')}
          </title>
          <link
            rel="canonical"
            href={`https://instaresume.jackjona.live/r/${id}`}
          />
        </Helmet>

        <div
          className={styles.page}
          style={{ backgroundColor: resume.metadata.colors.background }}
        >
          {resume.metadata.template === 'onyx' && <Onyx data={resume} />}
          {resume.metadata.template === 'pikachu' && <Pikachu data={resume} />}
          {resume.metadata.template === 'gengar' && <Gengar data={resume} />}
          {resume.metadata.template === 'castform' && (
            <Castform data={resume} />
          )}
          {resume.metadata.template === 'glalie' && <Glalie data={resume} />}
          {resume.metadata.template === 'celebi' && <Celebi data={resume} />}
        </div>

        <p className={styles.footer}>
          Built with <Link to="/">InstaResume</Link>
        </p>
      </div>
    );
  });
};

export default memo(ResumeViewer);

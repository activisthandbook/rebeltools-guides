import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Powerful tools for mobilisers 📢',
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Tools for pro's, now available to everyone: grow your movement, host events, increase engagement, and much more!  
      </>
    ),
  },
  {
    title: 'Accessible and easy to use ⚡️',
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Rebel Tools was build to make mobilising easy. No technical skills required, get started within minutes.
      </>
    ),
  },
  {
    title: 'Free and open source ❤️',
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        Small movements can use Rebel Tools at absolutely no costs. And all our code is publicly available for developers.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          {/* <img className={styles.featureImage} src={imgUrl} alt={title} /> */}
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Guides`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)} style={{paddingTop: 96 + 'px', paddingBottom: 96 + 'px'}}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <p className={styles.buttons}>
              <Link
                style={{marginRight: 6 + 'px'}}
                className={clsx(
                  'button button--secondary button--lg',
                  styles.getStarted,
                )}
                to={useBaseUrl('docs/support')}>
                User guides
              </Link>
              <Link
                style={{marginRight: 6 + 'px'}}
                className={clsx(
                  'button button--secondary button--lg',
                  styles.getStarted,
                )}
                to={useBaseUrl('docs/dev')}>
                Developer docs
              </Link>
          </p>
        </div>
      </header>
      <main style={{paddingTop: 32 + 'px'}}>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;

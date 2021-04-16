import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Centralized & Unified',
    imageUrl: 'img/tesseract-coding-trees.svg',
    description: (
      <>
        NeoAlgo aims to bring all Data Structures and Algorithms under one roof. Get started with high quality learning and resources
        to level up your understanding about Data Structures and Algorithms.
      </>
    ),
  },
  {
    title: 'Free & Open Source',
    imageUrl: 'img/tesseract-coding-algorithms.svg',
    description: (
      <>
        NeoAlgo strives forward for an Open-Source Community development. Come and conribute to NeoAlgo and NeoAlgo docs and be a 
        part of our expanding Open-Source project. 
      </>
    ),
  },
  {
    title: 'Collaboration & Contribution',
    imageUrl: 'img/tesseract-coding-programming.svg',
    description: (
      <>
        Collaborate with Developers and Writers to produce high-quality content in and around Data Structures & Algorithms. Plug in your
        contributions in an active feedback loop with maintainers and learn from the community.
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
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      permalink={'/'}
      description={'Bringing all Data Structures and Algorithms under one roof'}
    >
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
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

import React from 'react';
import Link from '@docusaurus/Link';
import {useHistory } from '@docusaurus/router';
import Head from '@docusaurus/Head';
import styles from './index.module.css';

import banner_block from '../../static/img/banner_block.png';

import introduction from '../../static/img/introduction.png';
import intro_bg from '../../static/img/intro-bg.png';

import func_easy from '../../static/img/func-easy.png';
import func_easy_hover from '../../static/img/func-easy-hover.png';
import func_manage from '../../static/img/func-manage.png';
import func_manage_hover from '../../static/img/func-manage-hover.png';
import func_diverse from '../../static/img/func-diverse.png';
import func_diverse_hover from '../../static/img/func-diverse-hover.png';
import func_extend from '../../static/img/func-extend.png';
import func_extend_hover from '../../static/img/func-extend-hover.png';

const Functions = [
  {
    icon: func_easy,
    bg: func_easy_hover,
    title: '简单易用',
    description:
      '服务的构建与部署均可一键化操作，开发的流程操作可视化，操作简单易用，能迅速上手满足大数据开发需求。',
  },
  {
    icon: func_manage,
    bg: func_manage_hover,
    title: '统一管理',
    description:
      '关注并聚焦于数据的全链路生命周期，从数据的生产、上线、使用、监控和下线等全方位予以关注，赋予数据资产生命。',
  },
  {
    icon: func_diverse,
    bg: func_diverse_hover,
    title: '场景多样性',
    description:
      '紧密贴合大数据生态，兼容并拥抱当前主流大数据技术。提供Sql/Spark/Python/Shell/Kylin等多种任务类型，提供基于Presto/Doris/Kylin等多种计算引擎的统一数据服务。',
  },
  {
    icon: func_extend,
    bg: func_extend_hover,
    title: '高扩展性',
    description:
      '通过界面化的配置实现与第三方系统的对接，集成第三方系统所需信息并通过API方式提供，实现系统的高扩展性。',
  },
];

const logo = 'img/logo.svg';

export default function Home() {
  const history = useHistory();

  return (
    <>
      <Head>
        <meta title="idata" />
        <meta property="og:title" content="idata" />
        <meta
          property="description"
          content="集成大数据基础建设能力，统一管理的数据资产，全场景高拓展性数据服务，全面满足企业大数据开发需求。"
        />
      </Head>
      <header className={styles.header}>
        <div className={styles.navCntainer}>
          <div className={styles.navCntainerMax}>
            <img src={logo} />
            <div className={styles.nav}>
              <Link className={styles.active} to="/">
                首页
              </Link>
              <Link to="/docs/intro">文档</Link>
            </div>
          </div>
        </div>
        <div className={styles.max} style={{ height: 562 }}>
          <img className={styles['banner-block']} src={banner_block} />
          <div className={styles.title}>现代化大数据开发管理平台</div>
          <div className={styles.description}>
            集成大数据基础建设能力，统一管理的数据资产，全场景高拓展性数据服务，全面满足企业大数据开发需求。
          </div>
          <div className={styles.buttons}>
            <div
              className={`${styles.button} ${styles['button-primary']}`}
              onClick={() => {
                history.push('/idata/docs/intro');
              }}
            >
              马上了解
            </div>
            <div
              className={`${styles.button} ${styles['button-dash']}`}
              onClick={() => {
                window.open('https://github.com/zcy-inc/idata', '_blank');
              }}
            >
              查看GitHub
            </div>
          </div>
        </div>
      </header>
      <div className={styles.introduction}>
        <div className={`${styles.max} ${styles.introductionMax}`}>
          <div className={styles['intro-title']}>产品简介</div>
          <div className={styles['intro-description']}>
            IData是一个现代化的大数据开发管理平台，提供完整的大数据开发流程，关注并聚焦于数据的全链路生命周期，便捷高效的满足大数据开发需求。
          </div>
          <img className={styles['intro-bg']} src={intro_bg} />
          <img className={styles['intro-img']} src={introduction} />
        </div>
      </div>
      <div className={styles.function}>
        <div className={`${styles.max} ${styles.functionMax}`}>
          <div className={styles['intro-title']}>功能特色</div>
          <div className={styles['intro-functions']}>
            {Functions.map((item, i) => {
              return (
                <div className={`${styles[`func-item`]} ${styles[`func-item-${i}`]}`}>
                  <img className={styles['func-icon']} src={item.icon} />
                  <div className={styles['func-title']}>{item.title}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <footer className={styles.footer}>
        <div>©2016-现在 政采云有限公司 版权所有</div>
        <div>
          增值电信业务经营许可证：浙B2-20160869 | 增值电信业务许可证（跨地区）：B2-20190004 |
          浙ICP备16031199号-3 | 浙公网安备 33010602010281
        </div>
      </footer>
    </>
  );
}

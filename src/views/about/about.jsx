const React = require('react');
const FormattedMessage = require('react-intl').FormattedMessage;
const render = require('../../lib/render.jsx');

const Button = require('../../components/forms/button.jsx');
const Page = require('../../components/page/www/page.jsx');
const injectIntl = require('react-intl').injectIntl;

require('./about.scss');

const About = injectIntl(({intl}) => (
    <div className="inner about">
        <h1>minuetについて</h1>

        <div className="masthead">
            <div>
                <p>
                    minuetは、超小規模の人間向けコーディングコミュニティープログラムです。<br />
                    minuetは<a href="https://www.scratchfoundation.org/" target="_blank">Scratch財団</a>によって設計・開発された<a href="https://github.com/scratchfoundation/scratch-www">scratch-www</a>などを基に、Scratchとは一切関係の無い個人<a href="https://github.com/TNTSuperMan" target="_blank">TNTSuperMan</a>によって非公式に設計・開発されています。
                </p>
                <p>minuetは、Scratch、Scratchチームおよび、Scratch財団とは一切関係ありません。</p>
            </div>
        </div>

        <div className="body">
            <ul>
                <li>
                    <h2>minuetについてもっと知る</h2>
                    <ul className="list">
                        <li>
                            <a href="/faq">よくある質問と答え(FAQ)</a>
                        </li>
                        <li>
                            <a href="https://github.com/TNTSuperMan/minuet">ソースコード</a>
                        </li>
                    </ul>
                </li>

                <li>
                    <h2>援助と寄付</h2>
                    <p>
                        minuetの基となったScratchは、
                        <a
                            href="https://www.scratchfoundation.org/supporters"
                            rel="noreferrer noopener"
                            target="_blank"
                        >
                            寄付者
                        </a>
                        からの支援のおかげで、無料で提供されています。この支援のおかげで、私たちは世界中の子どもたちに想像し、創造し、共有する機会を提供できます。
                        <a
                            href="https://www.scratchfoundation.org/donate"
                            rel="noreferrer noopener"
                            target="_blank"
                        >
                            こちら
                        </a>
                        にて寄付をして、Scratchを支援できます。
                    </p>
                    <a
                        href="https://www.scratchfoundation.org/donate"
                        rel="noreferrer noopener"
                        target="_blank"
                    >
                        <Button className="about-button">
                            寄付
                        </Button>
                    </a>
                </li>
            </ul>
        </div>
    </div>
));

render(<Page><About /></Page>, document.getElementById('app'));

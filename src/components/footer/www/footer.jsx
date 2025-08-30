const FormattedMessage = require('react-intl').FormattedMessage;
const injectIntl = require('react-intl').injectIntl;
const MediaQuery = require('react-responsive').default;
const connect = require('react-redux').connect;
const PropTypes = require('prop-types');
const React = require('react');

const FooterBox = require('../container/footer.jsx');
const LanguageChooser = require('../../languagechooser/languagechooser.jsx');

const {frameless} = require('../../../lib/frameless');
const intlShape = require('../../../lib/intl-shape');
const {getLocale} = require('../../../lib/locales.js');
const getScratchWikiLink = require('../../../lib/scratch-wiki');

require('./footer.scss');

const Footer = props => (
    <FooterBox>
        <MediaQuery maxWidth={frameless.mobileIntermediate - 1}>
            <div className="lists">
                <dl>
                    <dd>
                        <a href="/about">
                            minuetについて
                        </a>
                    </dd>
                    <dd>
                        <a href="/contact-us/">
                            連絡先
                        </a>
                    </dd>
                </dl>
                <dl>
                    <dd>
                        <a href="/terms_of_use">
                            利用規約
                        </a>
                    </dd>
                    <dd>
                        <a href="/privacy_policy">
                            プライバシーポリシー
                        </a>
                    </dd>
                    <dd>
                        <a href="/community_guidelines">
                            コミュニティーガイドライン
                        </a>
                    </dd>
                </dl>
            </div>
        </MediaQuery>
        <MediaQuery minWidth={frameless.mobileIntermediate}>
            <div className="lists">
                <dl>
                    <dt>
                        minuetについて
                    </dt>
                    <dd>
                        <a href="/about">
                            minuetについて
                        </a>
                    </dd>
                    <dd>
                        <a href="/credits">
                            クレジット
                        </a>
                    </dd>

                </dl>
                <dl>
                    <dt>
                        コミュニティ
                    </dt>
                    <dd>
                        <a href="/community_guidelines">
                            コミュニティーガイドライン
                        </a>
                    </dd>
                    <dd>
                        <a href="/statistics/">
                            統計情報
                        </a>
                    </dd>
                </dl>

                <dl>
                    <dt>
                        リソース
                    </dt>
                    <dd>
                        <a href="/faq">
                            よくある質問
                        </a>
                    </dd>
                    <dd>
                        <a href="/download">
                            ダウンロード
                        </a>
                    </dd>
                    <dd>
                        <a href="/contact-us/">
                            連絡先
                        </a>
                    </dd>
                </dl>

                <dl>
                    <dt>
                        法的表示
                    </dt>
                    <dd>
                        <a href="/terms_of_use">
                            利用規約
                        </a>
                    </dd>
                    <dd>
                        <a href="/privacy_policy">
                            プライバシーポリシー
                        </a>
                    </dd>
                    <dd>
                        <a href="/cookies">
                            クッキー
                        </a>
                    </dd>
                    <dd>
                        <a href="/DMCA">
                            デジタルミレニアム著作権法（DMCA）
                        </a>
                    </dd>
                </dl>

                <dl>
                    <dt>
                        関連サイト
                    </dt>
                    <dd>
                        <a href="https://github.com/TNTSuperMan/minuet">
                            ソースコード
                        </a>
                    </dd>

                </dl>
            </div>
        </MediaQuery>
        <LanguageChooser locale={getLocale()} />
    </FooterBox>
);

Footer.propTypes = {
    intl: intlShape.isRequired, // eslint-disable-line react/no-unused-prop-types
    scratchWikiLink: PropTypes.string
};

const mapStateToProps = (state, ownProps) => ({
    scratchWikiLink: getScratchWikiLink(ownProps.intl.locale)
});

const ConnectedFooter = connect(mapStateToProps)(Footer);
module.exports = injectIntl(ConnectedFooter);

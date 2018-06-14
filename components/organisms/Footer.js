import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="footer_menu">
          <h2 className="blind">관련사이트</h2>
          <ul className="footer_menu_inner">
            <li className="foot_etc company">
              <a href="http://company.wemakeprice.com/wmp" target="_blank">
                기업소개
              </a>
            </li>
            <li className="foot_etc foot_blog">
              <a href="https://blog.naver.com/wemakepriceblog" target="_blank">
                기업블로그
              </a>
            </li>
            <li className="foot_etc employ">
              <a
                href="https://recruit.wemakeprice.com/notice/list"
                target="_blank"
              >
                인재채용
              </a>
            </li>
            <li className="foot_etc stipulation">
              <a href="//front-dev.wemakeprice.com/cs/policies/terms">
                이용약관
              </a>
            </li>
            <li className="foot_etc private">
              <a href="//front-dev.wemakeprice.com/cs/policies/privacy">
                개인정보처리방침
              </a>
            </li>
            <li className="foot_etc youth_protect">
              <a href="//front-dev.wemakeprice.com/cs/policies/youth">
                청소년보호정책
              </a>
            </li>
            <li className="foot_etc partnership">
              <a href="http://www.gagamel.com/guide_book/contact_info">
                제휴문의
              </a>
            </li>
            <li className="foot_etc customer">
              <a href="http://promotion-dev.wemakeprice.com/promotion/wonder_0">
                고객서비스
              </a>
            </li>
          </ul>
        </div>
        <div className="footer_company">
          <h2 className="blind">회사정보</h2>
          <div className="footer_company_inner">
            <h2 className="footer_logo">
              <a href="http://www.gagamel.com">특가대표 위메프</a>
            </h2>
            <div className="footer_info">
              <div className="footer_address">
                <dl>
                  <dt className="blind">회사명 :</dt>
                  <dd>(주)위메프 (대표이사 : 박은상)</dd>
                  <dt className="lay_ico">주소 :</dt>
                  <dd>
                    <address>서울특별시 강남구 영동대로 502 위메프빌딩</address>
                  </dd>
                </dl>
                <dl>
                  <dt>사업자등록번호 :</dt>
                  <dd>120-87-55227</dd>
                  <dt className="lay_ico">통신판매업신고번호 :</dt>
                  <dd>제 2010 서울 강남 02066호</dd>
                  <dd>
                    <a
                      className="underline"
                      href="http://www.ftc.go.kr/info/bizinfo/communicationViewPopup.jsp?wrkr_no=1208755227"
                      target="_blank"
                    >
                      사업자정보 확인<i className="lay_ico arrow" />
                    </a>
                  </dd>
                </dl>
                <dl>
                  <dt>관광사업등록번호 :</dt>
                  <dd>제2010-000024호</dd>
                  <dt className="lay_ico">개인정보보호책임자 :</dt>
                  <dd>
                    신명주 (<a href="mailto:tec@wemakeprice.com">
                      tec@wemakeprice.com
                    </a>)
                  </dd>
                </dl>
                <p className="copyright">
                  COPYRIGHT@WEMAKEPRICE INC. ALL RIGHTS RESERVED.
                </p>
                <dl className="bank_info">
                  <dt>
                    우리은행 채무지급보증 안내
                    <a
                      className="underline"
                      href="javascript:void(0);"
                      onclick="window.open('https://image.wemakeprice.com/images/resources/wmp/common/footer-security-2017.jpg','mark','scrollbars=no,resizable=no,width=580,height=820');"
                    >
                      서비스 가입사실 확인<i className="lay_ico arrow" />
                    </a>
                  </dt>
                  <dd>
                    당사는 고객님이 현금 결제한 금액에 대해 우리은행과
                    채무지급보증 계약을 체결하여 안전거래를 보장하고 있습니다.
                  </dd>
                  <p className="txt_info">
                    위메프는 주민번호를 수집하지 않습니다.
                  </p>
                </dl>
              </div>
              <div className="footer_guide">
                <dl>
                  <dt>
                    <span className="lay_tit title_1">고객센터</span>
                    <span className="phone">1588-4763</span>
                    <a
                      className="underline"
                      href="http://www.gagamel.com/customer_center/faq"
                      target="_blank"
                    >
                      자주 묻는 질문<i className="lay_ico arrow" />
                    </a>
                  </dt>
                  <dd>평일 9:00 ~ 18:00 </dd>
                  <dd>주말/공휴일 10:00 ~ 17:00</dd>
                </dl>
                <dl className="pd_20">
                  <dt>
                    <span className="lay_tit title_2">파트너센터</span>
                    <span className="phone">1644-4796</span>
                  </dt>
                  <dd>평일 9:00 ~ 18:00, 토요일 10:00 ~ 17:00</dd>
                  <dd>점심시간 12:00 ~ 13:00</dd>
                  <dd>일요일/공휴일 휴무</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_etc">
          <div className="footer_etc_inner">
            <div className="footer_brand" id="_footerBrand">
              <div className="footer_brand_wrap">
                <ul data-ui="brandContainer">
                  <li>
                    <span className="foot_etc foot_award01">
                      2017 한국유통대상 대통령 표창 수상
                    </span>
                  </li>
                  <li>
                    <span className="foot_etc foot_award02">
                      2017 대한민국 모바일어워드 우수상
                    </span>
                  </li>
                  <li>
                    <span className="foot_etc foot_award03">
                      2015 한국서비스 품질지수 2년 연속 수상
                    </span>
                  </li>
                  <li>
                    <span className="foot_etc foot_award04">
                      2015 한국소비자 만족지수 소셜커머스부문 1위
                    </span>
                  </li>
                  <li>
                    <span className="foot_etc foot_award05">
                      2015 구매안심지수 소셜커머스부문1위
                    </span>
                  </li>
                  <li>
                    <span className="foot_etc foot_award06">
                      2015 KOREA 탑 브랜드2년 연속 수상
                    </span>
                  </li>
                  <li>
                    <span className="foot_etc foot_award07">
                      2014 대한민국 명품 브랜드 대상
                    </span>
                  </li>
                  <li>
                    <span className="foot_etc foot_award08">
                      2014 한국의 가장 사랑받는 브랜드 대상
                    </span>
                  </li>
                  <li>
                    <span className="foot_etc foot_award09">
                      모바일 브랜드 대상
                    </span>
                  </li>
                  <li>
                    <span className="foot_etc foot_award10">
                      2014 KOREA 탑브랜드 대상
                    </span>
                  </li>
                  <li>
                    <span className="foot_etc foot_award11">
                      2014 고객감동 브랜드 지수 1위
                    </span>
                  </li>
                  <li>
                    <span className="foot_etc foot_award12">
                      2014 앱 어워드 코리아 베스트 앱
                    </span>
                  </li>
                  <li>
                    <span className="foot_etc foot_award13">
                      2014 HTHI 2년 연속 수상
                    </span>
                  </li>
                </ul>
              </div>
              <a
                href="javascript:void(0)"
                className="btn_brand_prev dis"
                data-ui="brandPrevBtn"
              >
                <span className="blind">이전보기</span>
              </a>
              <a
                href="javascript:void(0)"
                className="btn_brand_next"
                data-ui="brandNextBtn"
              >
                <span className="blind">다음보기</span>
              </a>
            </div>
            <ul className="footer_association">
              <li>
                <a
                  className="foot_etc foot_link1"
                  href="http://www.koipa.re.kr"
                  target="_blank"
                >
                  한국지식재산보호원
                </a>
              </li>
              <li>
                <a
                  className="foot_etc foot_link2"
                  href="http://www.kolsa.or.kr"
                  target="_blank"
                >
                  한국온라인쇼핑협회 정회원사
                </a>
              </li>
              <li>
                <span className="foot_etc foot_link3">
                  위해상품차단시스템 운영매장
                </span>
              </li>
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Footer;

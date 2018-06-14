import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="mix_inner mix_util_wrap">
          <ul className="mix_menu_util">
            <li>
              <a href="http://www.gagamel.com/promotions/main">기획전</a>
            </li>
            <li>
              <a href="http://www.gagamel.com/benefitzone/main">쿠폰/혜택</a>
            </li>
            <li>
              <a href="http://www.gagamel.com/promotion/bizmall">비즈몰</a>
            </li>
            <li>
              <a
                href="http://promotion-dev.wemakeprice.com/promotion/telemart"
                target="_blank"
              >
                텔레마트
              </a>
            </li>
            <li>
              <a
                href="https://www.wonder-shopping.com/url?s=toolbar-ws&amp;v=%EC%9C%84%EB%A9%94%ED%94%84&amp;_sf=y&amp;u=https%3A%2F%2Fwww.wonder-shopping.com"
                target="_blank"
              >
                원더쇼핑
              </a>
            </li>
          </ul>

          <ul className="mix_function_util" id="_toolbarContainer">
            <li>
              <a href="javascript:void(0);" id="_loginBtn">
                로그인
              </a>
            </li>
            <li>
              <a href="javascript:void(0);" id="_joinBtn">
                회원가입
              </a>
            </li>
            <li data-ui="hover" className="">
              <a href="http://www.gagamel.com/mypage/qna">고객센터</a>
              <span className="spr_mix mix_ic_toolbar_down" />
              <ul className="sub_util">
                <li>
                  <a href="http://www.gagamel.com/board_notice/notice_list">
                    공지사항
                  </a>
                </li>
                <li>
                  <a href="http://www.gagamel.com/customer_center/faq">
                    자주묻는질문
                  </a>
                </li>
                <li>
                  <a href="http://www.gagamel.com/mypage/qna">1:1문의</a>
                </li>
                <li>
                  <a href="http://www.gagamel.com/guide_book/contact_info">
                    제휴문의
                  </a>
                </li>
                <li>
                  <a href="http://www.gagamel.com/customer_center/proposal">
                    제안하기
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="javascript:void(0);" id="_bookMarkBtn">
                즐겨찾기
              </a>
            </li>
            <li data-ui="hover" className="">
              <a href="//front-dev.wemakeprice.com/mypage/orders">마이페이지</a>
              <span className="spr_mix mix_ic_toolbar_down" />
              <ul className="sub_util">
                <li>
                  <a href="//front-dev.wemakeprice.com/mypage/orders">
                    구매목록
                  </a>
                </li>
                <li>
                  <a href="//front-dev.wemakeprice.com/mypage/claim">
                    취소/교환/반품
                  </a>
                </li>

                <li>
                  <a href="http://www.gagamel.com/mypage/buylist/unused_refund_list">
                    미사용티켓환불
                  </a>
                </li>
                <li>
                  <a href="//front-dev.wemakeprice.com/mypage/coupon">
                    할인쿠폰
                  </a>
                </li>
                <li>
                  <a href="http://www.gagamel.com/mypage/point_new">포인트</a>
                </li>
                <li>
                  <a href="http://www.gagamel.com/mypage/qna">1:1문의</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="//escrow-dev.wemakeprice.com/cart/cartList">장바구니</a>
              <span className="spr_mix mix_icon_cartnum">
                <span className="spr_mix" id="_cartQty">
                  0
                </span>
              </span>
            </li>
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default Header;

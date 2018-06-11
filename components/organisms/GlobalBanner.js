import React, { Component } from 'react';
import BannerMap from '../molecules/BannerMap';

class GlobalBanner extends Component {
  render() {
    return (
      <div className="mix_global_banner" id="_topBannerContainer">
        <div className="mix_inner">
          <img
            src="https://view01.wemep.co.kr/wmp-main/37/201806/08/pmt_0boacsf5ld8t.jpg"
            alt="0611_00~24"
            useMap="#top_ban_map"
          />
        </div>
        <button
          type="button"
          className="mix_banner_close"
          data-banner-seq="1291"
          id="_topBannerCloseBtn"
        >
          <span className="spr_mix mix_topbanner_close" />
        </button>
        <BannerMap />
        <style jsx>{`
          #_topBannerContainer {
            display: block;
            background: #6695fd;
          }
        `}</style>
      </div>
    );
  }
}

export default GlobalBanner;

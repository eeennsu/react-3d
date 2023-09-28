const styles = {
    paddingX: "sm:px-16 px-6",                      // 모바일 환경에서 더 작은 패딩 x를 지원한다
    paddingY: "sm:py-16 py-6",                      // 모바일 환경에서 더 작은 패딩 y를 지원한다
    padding: "sm:px-16 px-6 sm:py-16 py-10",        // 종합적인 패딩
  
    heroHeadText:
      "font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2",      // mq가 커질수록 더 큰 폰트 사이즈
    heroSubText:
      "text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]",      // mq가 커질수록 더 큰 폰트사이즈
  
    sectionHeadText:
      "text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]",                             // mq가 커질수록 더 큰 폰트사이즈
    sectionSubText:
      "sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider",                                         // mq가 커질수록 더 큰 폰트사이즈
};

export default styles;
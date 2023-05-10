import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
  <ContentLoader 
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="321" y="294" rx="3" ry="3" width="88" height="6" /> 
    <rect x="328" y="313" rx="3" ry="3" width="52" height="6" /> 
    <rect x="351" y="362" rx="3" ry="3" width="369" height="5" /> 
    <rect x="10" y="0" rx="12" ry="12" width="260" height="260" /> 
    <rect x="40" y="276" rx="8" ry="8" width="200" height="24" /> 
    <rect x="5" y="310" rx="8" ry="8" width="270" height="26" /> 
    <rect x="5" y="340" rx="8" ry="8" width="270" height="26" /> 
    <rect x="5" y="370" rx="8" ry="8" width="270" height="26" /> 
    <rect x="0" y="409" rx="30" ry="30" width="280" height="40" />
  </ContentLoader>
)

export default Skeleton
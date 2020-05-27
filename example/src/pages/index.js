import React from "react"

import AceSSR from "react-ace-ssr"

const Index = () => (
  <AceSSR
    id="editor"
    gutterWidth={"44px"}
    mode={"java"}
    theme={"chrome"}
    lineHeight={14}
    value={`System.out.println("Hello, world!");\nSystem.out.println("Hello, world!");`}
  />
)
export default Index

import { CaretRightOutlined } from "@ant-design/icons";
import type { CSSProperties } from "react";
import React from "react";
import type { CollapseProps } from "antd";
import { Collapse, theme } from "antd";

const text1 = `
Cubicus.io offers a wide range of services including mobile app development, website designing, SaaS development, blockchain development, e-commerce solutions, digital marketing and graphic designing.`;

const text2 = `
With over five years of experience in the industry, Cubicus.io has a team of skilled professionals who are experts in their respective fields, ensuring  top-notch quality andreliability in all our projects.`;

const text3 = `
Yes, Cubicus.io specializes in custom software development tailored to the unique needs and requirements of each client. From concept to deployment, we work closely withour clients to deliver bespoke solutions that drive success.`;

const text4 = `
Cubicus.io leverages a wide array of cutting-edge technologies including but not limited to React.js, Vue.js, WordPress, Magento, Swift, Python, Java, and many more to deliver innovative and scalable solutions.`;

const getItems: (panelStyle: CSSProperties) => CollapseProps["items"] = (
  panelStyle,
) => [
    {
      key: "1",
      label: (
        <h5
          className="text-[12px] md:text-[14] lg:text-[18px]  "
          style={{
            color: "#2555bb !important",
            fontWeight: "bold",
            fontFamily: 'inter',
          }}
        >
          What services does Cubicus.io offer?
        </h5>
      ),
      children: (
        <p
          className="text-[10px] sm:text-[12px] md:text-[14px] lg:text-[18px] lg:leading-7 "
          style={{
            paddingLeft: 10,
            color: "#00000080",
            fontWeight: 400,
            fontFamily: 'inter',
          }}
        >
          {text1}
        </p>
      ),
      style: panelStyle,
    },
    {
      key: "2",
      label: (
        <h5
          className="text-[12px] md:text-[14] lg:text-[18px]  "
          style={{
            color: "#2555bb !important",
            fontWeight: "bold",
            fontFamily: 'inter',
          }}
        >
          How experienced is Cubicus.io in software development?
        </h5>
      ),
      children: (
        <p
          className="text-[10px] sm:text-[12px] md:text-[14px] lg:text-[18px] lg:leading-7"
          style={{
            paddingLeft: 10,
            color: "#00000080",
            fontWeight: 400,
            fontFamily: 'inter',
          }}
        >
          {text2}
        </p>
      ),
      style: panelStyle,
    },
    {
      key: "3",
      label: (
        <h5
          className="text-[12px] md:text-[14] lg:text-[18px] "
          style={{
            color: "#2555bb !important",
            fontWeight: "bold",
            fontFamily: 'inter',
          }}
        >
          Can Cubicus.io handle custom software development projects?
        </h5>
      ),
      children: (
        <p
          className="text-[10px] sm:text-[12px] md:text-[14px] lg:text-[18px] lg:leading-7"
          style={{
            paddingLeft: 10,
            color: "#00000080",
            fontWeight: 400,
            fontFamily: 'inter',
          }}
        >
          {text3}
        </p>
      ),
      style: panelStyle,
    },
    {
      key: "4",
      label: (
        <h5
          className="text-[12px] md:text-[14] lg:text-[18px] "
          style={{
            color: "#2555bb !important",
            fontWeight: "bold",
            fontFamily: 'inter',
          }}
        >
          What technologies does Cubicus.io work with?
        </h5>
      ),
      children: (
        <p
          className="text-[10px] sm:text-[12px] md:text-[14px] lg:text-[18px] lg:leading-7"
          style={{
            paddingLeft: 10,
            color: "#00000080",
            fontWeight: 400,
            fontFamily: 'inter',
          }}
        >
          {text4}
        </p>
      ),
      style: panelStyle,
    },
  ];

const Accordion: React.FC = () => {
  const { token } = theme.useToken();

  const panelStyle: React.CSSProperties = {
    marginBottom: 24,
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: "none",
  };

  return (
    <Collapse
      bordered={false}
      defaultActiveKey={["1"]}
      expandIcon={({ isActive }) => (
        <CaretRightOutlined rotate={isActive ? 90 : 0} />
      )}
      style={{
        // background: token.colorBgContainer,
        backgroundColor: "#F9F9FB",
        maxWidth: "1300px",
        width: "100%",
        textAlign: "start",
      }}
      items={getItems(panelStyle)}
    />
  );
};

export default Accordion;

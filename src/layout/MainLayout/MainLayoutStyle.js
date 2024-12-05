import styled from "styled-components";

export const MainContentStyle = styled.div`
  color: var(--text-color);
  max-width: 800px;
  margin: 0 auto;

  .wrapper {
    padding-left: 30px;
    padding-right: 30px;
  }

  .title {
    color: var(--brand);
    font-size: 24px;
    font-weight: "bold";
    margin-bottom: 10px;
  }

  .info {
    font-weight: 400;
    font-size: 13px;
    line-height: 154%;
    color: hsl(var(--hover-item));
  }

  .description {
    color: var(--text-color);
    font-weight: 500;
    font-size: 14px;
    line-height: 190%;
    margin-top: 50px;
  }

  .advantagesTitle {
    margin-top: 48px;
    color: var(--text-color);
    font-weight: 700;
    font-size: 22px;
    line-height: 141%;
  }

  .advantages {
    padding-left: 20px;
    list-style: circle;
    margin-top: 24px;
    font-size: 15px;
    line-height: 187%;
  }

  .usageTitle {
    font-weight: 700;
    font-size: 22px;
    line-height: 141%;
    margin-top: 49px;
  }
  .usage {
    max-width: 700px;
    margin-top: 28px;
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 13px;
    font-weight: 400;
    font-size: 13px;
    line-height: 154%;
    border: 1px solid hsl(var(--bglight));
    border-radius: 8px;
    box-shadow: 0 2px 4px -2px rgba(0, 0, 0, 0.1),
      0 4px 6px -1px rgba(0, 0, 0, 0.1);
    background: hsl(var(--bglight));
  }

  .example {
    margin-top: 32px;
    margin-bottom: 40px;
    font-weight: 600;
    font-size: 19px;
    line-height: 167%;
  }
`;

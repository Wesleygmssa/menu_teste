import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 220px;
`;

export const ContainerInte = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;

  .title {
    flex: 1;
  }
  .image {
    flex: 1;
  }
`;

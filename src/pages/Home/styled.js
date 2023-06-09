import styled from "styled-components"

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`
export const Header = styled.header`
  display: flex;
  height: 70px;
  align-items: center;
  justify-content: space-between;
  font-size: 26px;
  font-weight: 700;
  color: white;
`
export const TransactionsContainer = styled.article`
  flex-grow: 1;
  height: calc(100vh - 300px);
  background-color: #fff;
  color: #000;
  border-radius: 5px;
  padding-top: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  li {
    padding: 7px 0;
  }
  >div {
    overflow: auto;
    padding: 0 5px;
  }
  article {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    padding: 10px 16px;
    border-radius: 0 0 5px 5px;
    box-shadow: 0px -5px 15px rgba(0, 0, 0, 0.2);
    strong {
      font-weight: 700;
      text-transform: uppercase;
    }
  }
`
export const ButtonsContainer = styled.section`
  margin: 15px 0 15px 0;
  display: flex;
  padding: 0;
  gap: 15px;
  
  button {
    width: calc(50vw - 33px);
    height: 115px;
    font-size: 22px;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    p {
      font-size: 18px;
    }
  }
  a{
    padding: 0;
  }
`
export const Value = styled.div`
  font-size: 16px;
  text-align: right;
  color: ${(props) => (props.color === "income" || props.total >= 0 ? "green" : "red")};
`
export const ListItemContainer = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  color: #000000;
  div {
    display: flex;
  }
  div span {
    color: #c6c6c6;
    margin: 0 10px;
  }
`
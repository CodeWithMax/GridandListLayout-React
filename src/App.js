import { Layout, Typography } from "antd";
import GridListView from "./components/GridListView/GridListView";
const { Header, Content } = Layout;
const { Title } = Typography


function App() {
  return (
    <div className="App">
      <Layout>
        <Header className="header" style={{}}>

          <Title
            level={3}
            style={{ color: "white", textAlign: "center", marginTop: "15px" }}

          >WingsTechAssignment</Title>

        </Header>
        <Layout
          style={{}}>
          <Content>
            <GridListView />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;

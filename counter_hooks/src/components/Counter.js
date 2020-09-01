import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Layout, Col, Row, Typography, Button, Divider, Popover, Space, Spin, Card} from 'antd';
import * as actions from '../store/actions';

const Counter = () => {

  const counter = useSelector((state) => state.ctr.counter);
  const results = useSelector((state) => state.res.results);
  const isLoading = useSelector((state) => state.res.isLoading);
  const dispatch = useDispatch();
  const {Header, Content, Footer} = Layout;
  const {Title} = Typography;
  const btn_cntnt_inc = (
    <div>
      <p>Increment 1</p>
      <p>+1</p>
    </div>
  );
  const btn_cntnt_dec = (
    <div>
      <p>Decrement 1</p>
      <p>-1</p>
    </div>
  );
  const btn_cntnt_add = (
    <div>
      <p>Add 10</p>
      <p>+10</p>
    </div>
  );
  const btn_cntnt_sub = (
    <div>
      <p>Subtract 15</p>
      <p>-15</p>
    </div>
  );
  const spin_loading = (
    <Space size="large">
      <Spin size="large" />
    </Space>
  )


  const styles = {
    header: {
      height: '100px'
    },
    btn_container: {
      padding: '0 20px'
    },
    button: {
      margin: '10px 0px',
    },
    res_container: {
      padding: '10px',
    }
  }

  return (
    <div style={{height: '100vh'}}>
      <Layout>

        <Header style={styles.header}>
          <Row justify="center" align="middle" style={styles.header}>
            <Col>
              <Title style={{color: "#ffffff"}}>Current Value: {counter}</Title>
            </Col>
          </Row>

        </Header>

        <Divider/>

        <Content>

          <Row justify="center" align="middle" gutter={30}>
            <Col xs={24} md={{span: 5, offset: 1}} style={styles.button}>
              <Popover content={btn_cntnt_inc} title="Description">
                <Button
                  type="primary"
                  block
                  onClick={() => dispatch(actions.increment())}
                >
                  Increment
                </Button>
              </Popover>
            </Col>
            <Col xs={24} md={{span: 5, offset: 1}} style={styles.button}>
              <Popover content={btn_cntnt_dec} title="Description">
                <Button
                  type="primary"
                  block
                  onClick={() => dispatch(actions.decrement())}
                >
                  Decrement
                </Button>
              </Popover>
            </Col>
            <Col xs={24} md={{span: 5, offset: 1}} style={styles.button}>
              <Popover content={btn_cntnt_add} title="Description">
                <Button
                  type="primary"
                  block
                  onClick={() => dispatch(actions.add(10))}
                >
                  Add
                </Button>
              </Popover>
            </Col>
            <Col xs={24} md={{span: 5, offset: 1}} style={styles.button}>
              <Popover content={btn_cntnt_sub} title="Description">
                <Button
                  type="primary"
                  block
                  onClick={() => dispatch(actions.subtract(15))}
                >
                  Subtract
                </Button>
              </Popover>
            </Col>
          </Row>

          <Divider/>

          <Row justify="center" align="middle">
            <Col md={6} xs={24} style={{margin: 'auto'}}>
              <Button block onClick={() => dispatch(actions.storeResult(counter))}>Show Result</Button>
            </Col>
          </Row>

          <Divider/>

          {isLoading ? (
            <Row justify="center" align="middle">
              {spin_loading}
            </Row>
          ) : (
            <div>
              <Row justify="center" align="middle" gutter={[30, 24]} style={styles.res_container}>
                {results.map((result) => {
                  return <Col xs={24} md={6}>
                    <Card key={result.id}>
                      <Title level={4} style={{textAlign: 'center'}}>{result.value}</Title>
                      <Button
                        type="danger"
                        block
                        onClick={() => dispatch(actions.deleteResult(result.id))}
                      >
                        Delete
                      </Button>
                    </Card>
                  </Col>
                })}
              </Row>
            </div>
          ) }

        </Content>

        <Footer>
          React + Redux + Hooks
        </Footer>

      </Layout>
    </div>
  )
}

export default Counter;
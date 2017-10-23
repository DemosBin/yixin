import React from 'react';
import { Link } from 'react-router';
import { NavBar, NoticeBar, Grid, List, Modal } from 'antd-mobile';
import data from './data/data.json'

const NoticeBarExample = () => (
  <div>
    <NoticeBar marqueeProps={{ loop: true, style: { padding: '0 0.15rem' } }}>
      声明: 本文由译心公众平台作者翻译，原作者享有完整的著作权，
      任何单位或个人未获得原作者书面授权允许情况下，以任何形式使用该作品，我方将坚决采用法律手段进行维权，
      届时一切后果由侵权方承担
    </NoticeBar>
  </div>
)
const Item = List.Item;
const Brief = Item.Brief;

export default class Index extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      list: false
    }
  }
  showDetail = (el) => {
    console.log(el)
  }

  render() {
    const {list, showModal} = this.state
    return (
      <div className="start-page">
        <NavBar mode="light"
          iconName={null}
          rightContent={<b onClick={() => this.setState({ list: !this.state.list })}>
                    {this.state.list ? '田' : '三'}</b>}
        >
          书架
        </NavBar>
        <NoticeBarExample />
        {!list ? 
          <Grid hasLine={false} carouselMaxRow = {3}
                data={data} columnNum={3}
                renderItem={dataItem => (
                              <Link to="/detail"><div style={{ padding: '0.75rem' }} onClick={this.showDetail.bind(this, dataItem)}>
                                <img src={dataItem.icon} 
                                    style={{ width: '50%', height: '50%' }} alt="icon" />
                                <div style={{ color: '#666', fontSize: '0.68rem', marginTop: '0.24rem' }}>
                                  <span>{dataItem.text}</span>
                                </div>
                              </div></Link>
                            )}
          ></Grid>
          : <List>
              {_.map(data, (item, i) => {
                return(
                  <Link to="/detail">
                  <Item
                    arrow="horizontal"
                    thumb={item.icon}
                    multipleLine
                    onClick={() => {}}
                  >
                    {item.text} <Brief>{item.auth}</Brief>
                </Item>
                </Link>
                )
              })}
            </List>
        }
      </div>
    );
  }
}

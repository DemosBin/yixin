import React from 'react';
import { hashHistory } from 'react-router';
import { NavBar, Drawer, List, TabBar, Popover } from 'antd-mobile';

import Category from './data/Category.json'
import About from './data/about.json'
import First from './data/First.json'
import Second from './data/Second.json'
import Third from './data/Third.json'
import Fourth from './data/Fourth.json'
import Fifth from './data/Fifth.json'

export default class Detail extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: 'app',
      open: false,
      content: About,
    };
  }

  /*componentDidUpdate(prevProps, prevState) {
    if(this.state.content !== prevState.content) {

    }
  }*/

  onChangeCategory = (val) => {
    let key = val.key
    let content = 
      key === 'About' ? About
        : key === 'first' ? First
          : key === 'second' ? Second
            : key === 'third' ? Third
              : key === 'fourth' ? Fourth
                : key === 'fifth' ? Fifth
                  : About
    this.setState({content: content})
  }
  render() {
    const {content} = this.state
    const sidebar = (
      <List>
        {
          _.map(Category, (item, index) => {
            if (index === 0) {
              return (<List.Item key={index}
                multipleLine
              >{item.text}</List.Item>);
            } else {
              return (<List.Item key={index} onClick={this.onChangeCategory.bind(this, item)}
              >{item.text}</List.Item>);
            }
          })
        }
      </List>
    )
    return (
      <div className="start-page">
        <NavBar mode="light"
          onLeftClick={() => hashHistory.goBack()}
          rightContent={<b onClick={() => this.setState({ open: true })}>...</b>}>
          {content[0].text}
        </NavBar>

        <div style={{ position: 'relative', height: document.documentElement.clientHeight - 95 }}>
          <Drawer
            position="left"
            sidebar={sidebar}
            style={{ minHeight: document.documentElement.clientHeight - 200 }}
            enableDragHandle
            contentStyle={{ color: '#A6A6A6', textAlign: 'left', marginLeft: 20, marginRight: 20, paddingTop: 20 }}
            sidebarStyle={{ backgroundColor: '#fff', minWidth: '30%' }}
            open={this.state.open}
            onOpenChange={() => this.setState({ open: !this.state.open })}
          >
            {
              _.map(content , (item, index) => {
                if(index > 0){
                  return(
                    <span onClick={() => {alert(item.key)}}>{item.text}</span>
                  )
                }
              })
            }
          </Drawer>
        </div>

        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          <TabBar.Item
            title=""
            key="category"
            icon={<div style={{
                width: '0.44rem',
                height: '0.44rem',
                background: 'gray' }}
              >三</div>
            }
            selectedIcon={<div style={{
                width: '0.44rem',
                height: '0.44rem',
                background: 'blue' }}
              >三</div>
            }
            selected={this.state.selectedTab === 'blueTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'blueTab',
                open: !this.state.open
              });
            }}
            data-seed="logId"
          >
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}

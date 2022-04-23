// 存放在编辑器左侧渲染的各个模板组件

export const defaultTextTemplates = [
  {
    text: '大标题',
    tag: 'h2',
    fontSize: '30px',
    fontWeight: 'bold',
  },
  {
    text: '正文内容',
    tag: 'p',
  },
  {
    text: '链接内容',
    tag: 'p',
    color: '#1890ff',
    textDecoration: 'underline',
  },
  {
    text: '按钮内容',
    tag: 'button',
    paddingTop: '5px',
    paddingBottom: '5px',
    paddingLeft: '10px',
    paddingRight: '10px',
    width: '100px',
    borderRadius: '3px',
    textAlign: 'center',
    backgroundColor: '#409eff',
  }
]
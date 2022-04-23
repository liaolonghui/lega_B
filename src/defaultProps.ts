// 这里放的是组件默认属性
import { mapValues, without } from 'lodash-es'

export interface CommonComponentProps {
  // actions
  actionType: string; // 是否是url（点击跳转）
  url: string;
  // size
  width: string;
  height: string;
  paddingTop: string;
  paddingRight: string;
  paddingBottom: string;
  paddingLeft: string;
  // border
  borderStyle: string;
  borderColor: string;
  borderWidth: string;
  borderRadius: string;
  // boxShadow opacity
  boxShadow: string;
  opacity: number;
  // position
  position: string;
  left: string;
  right: string;
  top: string;
}

export interface TextComponentProps extends CommonComponentProps {
  text: string;
  fontSize: string;
  fontFamily: string;
  fontWeight: string;
  fontStyle: string;
  textDecoration: string;
  lineHeight: string;
  textAlign: string;
  color: string;
  backgroundColor: string;
}

// 通用
export const commonDefaultProps: CommonComponentProps = {
  // actions
  actionType: '', // 是否是url（点击跳转）
  url: '',
  // size
  width: '318px',
  height: '',
  paddingTop: '0px',
  paddingRight: '0px',
  paddingBottom: '0px',
  paddingLeft: '0px',
  // border
  borderStyle: 'none',
  borderColor: '#000',
  borderWidth: '0',
  borderRadius: '0',
  // boxShadow opacity
  boxShadow: '0 0 0 #000',
  opacity: 1,
  // position
  position: 'absolute',
  left: '0',
  right: '',
  top: '0',
}

// l-text
export const textDefaultProps = {
  text: '正文内容',
  fontSize: '14px',
  fontFamily: '',
  fontWeight: 'normal',
  fontStyle: 'normal',
  textDecoration: 'none',
  lineHeight: '1',
  textAlign: 'left',
  color: '#000000',
  backgroundColor: '',
  ...commonDefaultProps
}

// text所有样式属性名
export const textStylePropNames = without(Object.keys(textDefaultProps), 'text', 'actionType', 'url')

// 把 组件的默认属性 转化为 组件的props的格式
export const transformToComponentProps = (props: TextComponentProps) => {
  return mapValues(props, (item) => {
    return {
      type: item.constructor as StringConstructor,
      default: item
    }
  })
}
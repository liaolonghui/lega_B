import { h, VNode } from "vue";
import { TextComponentProps } from "./defaultProps";

export interface PropToForm {
  component: string;
  subComponent?: string;
  text?: string;
  extraProps?: { [key: string]: any };
  options?: { text: string | VNode; value: any }[];
  initalTransform?: (v: any) => any;
  valueProp?: string;
  eventName?: string;
  afterTransform?: (v: any) => any;
}

export type PropsToForms = {
  [key in keyof TextComponentProps]?: PropToForm
}


const fontFamilyArr = [
  { text: '宋体', value: '"SimSun","STSong"' },
  { text: '黑体', value: '"SimHei","STHeiti"' },
  { text: '楷体', value: '"KaiTi","STKaiti"' },
  { text: '仿宋', value: '"FangSong","STFangsong"' },
]

const fontFamilyProps = fontFamilyArr.map(font => {
  return {
    value: font.value,
    text: h('span', { style: `font-family: ${font.value}` }, font.text)
  }
})

export const mapPropsToForms: PropsToForms = {
  text: {
    component: 'a-textarea',
    text: '文本',
    extraProps: {
      rows: 3
    },
    afterTransform: (e: any) => e.target.value
  },
  fontSize: {
    component: 'a-input-number',
    text: '字号',
    initalTransform: (val: string) => parseInt(val),
    afterTransform: (e: number) => e ? `${e}px` : ''
  },
  lineHeight: {
    component: 'a-slider',
    text: '行高',
    extraProps: {
      min: 0,
      max: 3,
      step: 0.1
    },
    initalTransform: (val: string) => parseFloat(val),
    afterTransform: (e: number) => e.toString()
  },
  textAlign: {
    component: 'a-radio-group',
    subComponent: 'a-radio-button',
    text: '对齐',
    options: [
      { text: '左', value: 'left' },
      { text: '中', value: 'center' },
      { text: '右', value: 'right' },
    ],
    afterTransform: (e: any) => e.target.value
  },
  fontFamily: {
    component: 'a-select',
    subComponent: 'a-select-option',
    text: '字体',
    options: [
      { text: '无', value: '' },
      ...fontFamilyProps
    ]
  },
  color: {
    component: 'color-picker',
    text: '字体颜色'
  }
}
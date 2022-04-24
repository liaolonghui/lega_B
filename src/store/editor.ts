import { Module } from 'vuex'
import { GlobalDataProps } from './index'
import { v4 as uuidv4 } from 'uuid'
import { TextComponentProps } from '@/defaultProps';

export interface EditorProps {
  components: ComponentData[]; // （编辑器画布上的）所有组件
  currentElement: string; // uuidv4
}

export interface ComponentData {
  name: string;
  props: { [key: string]: any };
  id: string; // 由uuidv4生成
}

// 测试数据（此时只有LText组件）
const testComponents: ComponentData[] = [
  { name: 'l-text', id: uuidv4(), props: { 'color': 'red', 'text': 'Hello World', tag: 'h2' } },
  { name: 'l-text', id: uuidv4(), props: { 'color': '#00ff00', 'text': 'Hello World2', 'fontSize': '30px', 'fontWeight': 'bold' } },
  { name: 'l-text', id: uuidv4(), props: { 'color': '#0000ff', 'text': 'Hello World3', tag: 'button', actionType: 'url', url: 'https://www.baidu.com' } },
]

const editor: Module<EditorProps, GlobalDataProps> = {
  state: {
    components: testComponents,
    currentElement: '',
  },
  mutations: {
    addComponent(state, props: Partial<TextComponentProps>) {
      const newComponents: ComponentData = {
        id: uuidv4(),
        name: 'l-text',
        props
      }
      state.components.push(newComponents)
    },
    setActive(state, id: string) {
      state.currentElement = id
    }
  },
  getters: {
    getCurrentElement(state) {
      return state.components.find(c => c.id === state.currentElement)
    }
  }
}

export default editor
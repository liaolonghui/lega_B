import { Module } from "vuex";
import { GlobalDataProps } from "./index"

export interface TemplateProps {
  id: number;
  title: string;
  coverImg: string;
  author: string;
  copiedCount: number;
}

export interface TemplatesProps {
  data: TemplateProps[];
}

// 模拟数据
const testData: TemplateProps[] = [
  { id: 1, coverImg: 'http://static-dev.imooc-lego.com/imooc-test/sZHlgv.png', title: '前端架构师1', author: '廖龙辉', copiedCount: 1 },
  { id: 2, coverImg: 'https://static.imooc-lego.com/upload-files/screenshot-889755.png', title: '前端架构师2', author: '廖龙辉', copiedCount: 2 },
  { id: 3, coverImg: 'https://static.imooc-lego.com/upload-files/screenshot-677311.png', title: '前端架构师3', author: '廖龙辉', copiedCount: 3 },
  { id: 4, coverImg: 'https://static.imooc-lego.com/upload-files/screenshot-682056.png', title: '前端架构师4', author: '廖龙辉', copiedCount: 4 },
  { id: 5, coverImg: 'https://static.imooc-lego.com/upload-files/screenshot-889755.png', title: '前端架构师5', author: '廖龙辉', copiedCount: 5 },
  { id: 6, coverImg: 'https://static.imooc-lego.com/upload-files/screenshot-677311.png', title: '前端架构师6', author: '廖龙辉', copiedCount: 6 },
]

const templates: Module<TemplatesProps, GlobalDataProps> = {
  state: {
    data: testData
  },
  getters: {
    getTemplateById: (state) => (id: number) => {
      // (state, getters, rootState)
      // rootState是根状态
      return state.data.find(template => template.id === id)
    }
  }
}

export default templates
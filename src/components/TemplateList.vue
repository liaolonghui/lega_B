<template>
  <div class="template-list-component">
    <a-row :gutter="16">
      <a-col :span="6" v-for="item in list" :key="item.id" class="poster-item">
        <router-link :to="`/template/${item.id}`">
          <a-card hoverable>
            <template #cover>
              <img :src="item.coverImg" v-if="item.coverImg" />
              <div class="hover-item">
                <a-button size="large" type="primary">使用该模板创作</a-button>
              </div>
            </template>
            <a-card-meta :title="item.title">
              <template #description>
                <div class="description-detail">
                  <span>作者: {{ item.author }}</span>
                  <span class="user-number">{{ item.copiedCount }}</span>
                </div>
              </template>
            </a-card-meta>
          </a-card>
        </router-link>
      </a-col>
    </a-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue"
import { TemplateProps } from "../store/template"

export default defineComponent({
  name: "template-list",
  props: {
    list: {
      type: Array as PropType<TemplateProps[]>,
      required: true,
    },
    type: {
      type: String,
      default: "work",
    },
  },
})
</script>

<style>
.template-list-component {
  padding: 40px 20px;
}
@media screen and (min-width: 1240px) {
  .template-list-component {
    padding: 40px 100px;
  }
}
@media screen and (min-width: 1400px) {
  .template-list-component {
    padding: 40px 170px;
  }
}
.poster-item {
  position: relative;
  margin-bottom: 20px;
}
.poster-item .ant-card {
  border-radius: 12px;
  overflow: hidden;
}
.poster-item .ant-card-cover {
  position: relative;
  height: 400px;
  overflow: hidden;
}
.poster-item .ant-card-cover > img {
  transition: all 0.3s ease-in;
  width: 100%;
}
.poster-item:hover .ant-card-cover > img {
  transform: scale(1.2);
}
.poster-item > .ant-card-hoverable {
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1);
}
.poster-item > .ant-card-body {
  padding: 0;
}
.poster-item .hover-item {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background-color: rgba(50, 50, 50, 0.8);
}
.poster-item:hover .hover-item {
  display: block;
}
.poster-item .hover-item > .ant-btn {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%);
}
.poster-item .description-detail {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 5px;
  border-top: 1px solid #ccc;
}
</style>

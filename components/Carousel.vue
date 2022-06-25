<template>
  <a-carousel ref="RefCarousel" effect="fade">
    <div>
      <a-card hoverable>
        <a-space style="width: 90%">
          <img
            style="width: 120px"
            alt="example"
            src="/assets/329x329_Quality_Data_Icon.png"
          />
          <a-typography>
            <a-typography-paragraph>
              Smart 3D ensures design accuracy and consistency through the
              enforcement of design rules. Smart 3D reduces design errors,
              minimizes engineering changes and reduces rework.
            </a-typography-paragraph>
          </a-typography>
        </a-space>
      </a-card>
    </div>
    <div>
      <a-card hoverable>
        <a-space style="width: 90%">
          <img
            style="width: 120px"
            alt="example"
            src="/assets/329x329_Competitive_Edge_Icon.png"
          />
          <a-typography>
            <a-typography-paragraph
              >Capturing new and existing design knowledge to be used on future
              projects represents a key competitive edge. Smart 3D preserves
              integrity of design data and enables reuse for future projects
              based on existing designs.</a-typography-paragraph
            >
          </a-typography>
        </a-space>
      </a-card>
    </div>
    <div>
      <a-card hoverable>
        <a-space style="width: 90%">
          <img
            style="width: 120px"
            alt="example"
            src="/assets/329x329_Project_Execution_Icon.png"
          />
          <a-typography>
            <a-typography-paragraph
              >Smart 3D’s global engineering and data reuse capabilities
              substantially reduce engineering costs and shorten project
              schedules. All sites are automatically updated with the latest
              design changes in real-time.</a-typography-paragraph
            >
          </a-typography>
        </a-space>
      </a-card>
    </div>
  </a-carousel>
  <a-space>
    <a-button :type="isSelectedCard(1)" shape="circle" @click="goToSlide(1)"
      >1</a-button
    >
    <a-button :type="isSelectedCard(2)" shape="circle" @click="goToSlide(2)"
      >2</a-button
    >
    <a-button :type="isSelectedCard(3)" shape="circle" @click="goToSlide(3)"
      >3</a-button
    >
  </a-space>
</template>

<script setup lang="ts">
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons-vue";
import { defineComponent, ref } from "vue";

const RefCarousel = ref();
const RefSlideNumber = ref(0);

const isSelectedCard = (e: number) => {
  if (RefSlideNumber.value == e - 1) return "primary";
  return "default";
};

const goToSlide = (e: number) => {
  RefSlideNumber.value = e - 1;
  RefCarousel.value.goTo(e - 1, false);
};
</script>

<style scoped>
/* For demo */
.ant-carousel :deep(.slick-slide) {
  text-align: left;
  background: #fff;
  overflow: hidden;
  padding: 10px;
}

.ant-carousel :deep(.slick-arrow.custom-slick-arrow) {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: #fff;
  background-color: rgba(31, 45, 61, 0.11);
  opacity: 0.3;
  z-index: 1;
}
.ant-carousel :deep(.custom-slick-arrow:before) {
  display: none;
}
.ant-carousel :deep(.custom-slick-arrow:hover) {
  opacity: 0.5;
}

.ant-carousel :deep(.slick-slide h3) {
  color: #fff;
}
</style>

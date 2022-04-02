<template>
  <el-form :inline="true" :model="formData">
    <el-form-item label="查詢日期">
      <el-date-picker v-model="formData.date" placeholder="選擇日期" />
    </el-form-item>
    <el-form-item label="股票代號">
      <el-input
        v-model="formData.codeNumber"
        placeholder="輸入股票名稱或代號"
      />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">Query</el-button>
    </el-form-item>
  </el-form>


  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>{{formData.date}}&nbsp;&nbsp;&nbsp;&nbsp; {{formData.codeNumber}}</span>
      </div>
    </template>
    <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
  </el-card>
</template>>
<script setup>
import { ref, reactive } from "vue";

const formData = reactive({
  date: "",
  codeNumber: "",
});

const onSubmit = () => {
  console.log(formData);
};
</script>

<style scoped>
</style>
<template>
<!-- 18 -->
<!-- 18-2 -->
  <ElCard class="form-card">
    <!-- 18-4 -->
    <!-- 20-1 -->
    <!-- 21 -->
    <ElForm :model="formData" ref="addItemForm" :rules="rules" lable-position="top">
      <!-- 18-5 -->
      <ElFormItem label="Type" prop="type">
        <ElSelect class="type-select" v-model="formData.type" placeholder="Choose type...">
          <ElOption lable="Income" value="INCOME" />
          <ElOption lable="Outcome" value="OUTCOME" />
        </ElSelect>
      </ElFormItem>
      <!-- 18-6 -->
      <ElFormItem label="Comments" prop="comment">
        <ElInput v-model="formData.comment" />
      </ElFormItem>
      <!-- 18-7 -->
      <ElFormItem label="Value" prop="value">
        <ElInput v-model.number="formData.value" />
      </ElFormItem>
      <!-- 18-8 -->
      <ElButton @click="onSubmit" type="primary">Submit</ElButton>
    </ElForm>
  </ElCard>
</template>

<script>
export default {
  // 18-1
  name: "Form",
  // 18-3
  data: () => ({
    formData: {
      type: "INCOME",
      comment: "",
      value: 0
    },
    // 20
    rules: {
      type: [
        { required: true, message: "Please select type", trigger: "blur" }
      ],
      comment: [
        { required: true, message: "Please input comment", trigger: "change" }
      ],
      value: [
        { required: true, message: "Please input value", trigger: "change" },
        { type: "number", message: "Value must be a number", trigger: "change" }
      ]
    }
  }),
  // 18-9
  methods: {
    // 21-1
    onSubmit() {
      this.$refs.addItemForm.validate(valid => {
        if (valid) {
          this.$emit("submitForm", { ...this.formData });
          this.$refs.addItemForm.resetFields();
        }
      });
    }
  }
};
</script>

<style scoped>
/* 18-10 */
.form-card {
  max-width: 500px;
  margin: auto;
}

.type-select {
  width: 100%;
}
</style>
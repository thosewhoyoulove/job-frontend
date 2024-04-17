<template>
  <div>
    <h1>Welcome</h1>
  </div>
</template>

<script setup>
import { callCloudFunction } from "@/api/test.ts";
defineOptions({
  name: "Welcome"
});
(async () => {
  const res = await callCloudFunction("/record/getRecordByChatId", "GET", {
    chatId: 123
  });

  console.log(res);
  const postRes = await callCloudFunction("/record/createRecord", "POST", {
    chatId: 111,
    channelId: 111,
    channelName: "asd",
    openid: 111,
    wxnick: 11,
    kefuId: 111,
    inviteCode: 1234
  });
  console.log(postRes, "postRes");
})();
</script>

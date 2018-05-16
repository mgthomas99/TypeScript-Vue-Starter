<template>
  <div id="message-component">
    <div class="content">
      <span>The message is {{ content }}</span>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from "vue-property-decorator";

  /**
   * A simple component for displaying a message.
   */
  @Component({ name: "message" })
  export default class MessageComponent
  extends Vue {

    /**
     * The message to be displayed by this component. If none is specified, a
     * default message will be displayed.
     */
    @Prop()
    public content: string
        = "Hello, world!";

    public constructor() {
      super();
    }

  }
</script>

<style lang="css">
  #hello-decorator-component {
    font-size: 2em;
  }
</style>

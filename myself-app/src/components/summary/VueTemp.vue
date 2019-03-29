
<style>
</style>
<template>
  <div>
    <!-- <p v-text=" branches"></p> -->
    <p v-html='hello'></p>
  
    <template id="element-details-template">
      <details>
        <summary>
          <span>
            <code class="name">
              <!-- &lt; -->
              你好
              <!-- <slot name="element-name">NEED NAME</slot>&gt; -->
            </code>
            <i class="desc">
              <!-- <slot name="description">NEED DESCRIPTION</slot> -->
              好看化工废料快点回来客户管理考试大纲
            </i>
          </span>
        </summary>
      </details>
      <hr>
    </template>
    <!-- <element-details>
      <span slot="element-name">slot</span>
      <span slot="description">
        A placeholder inside a web
        component that users can fill with their own markup,
        with the effect of composing different DOM trees
        together.
      </span>
      <dl slot="attributes">
        <dt>name</dt>
        <dd>The name of the slot.</dd>
      </dl>
    </element-details>
    <element-details>
      <span slot="element-name">template</span>
      <span slot="description">
        A mechanism for holding client-
        side content that is not to be rendered when a page is
        loaded but may subsequently be instantiated during
        runtime using JavaScript.
      </span>
    </element-details> -->
  </div>
</template>
<script>

  // class PopUpInfo extends HTMLElement {
  //       constructor() {
  //           super();
  //           const template = document.getElementById('element-details-template').content;
  //           console.log(this);
  //           const shadowRoot = this.attachShadow({ mode: 'open' }).appendChild(template.cloneNode(true));
  //       }
  // }

  // customElements.define('element-details',PopUpInfo);

export default {
  data() {
    return {
      branches: ["A", "B"],
      hello:'',
      ok:false,
    };
  },
  created(){
    let ele= `  <p>你好</p>`;
    this.hello=ele;
  },
};
</script>

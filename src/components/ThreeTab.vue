<template>
  <ul class="tab_container">
    <div class="tab_header_group">
      <li id="tab_head1" class="tab_header" @click="select_tab(1)">New Books</li>
      <li id="tab_head2" class="tab_header" @click="select_tab(2)">Books In Progress</li>
      <li id="tab_head3" class="tab_header" @click="select_tab(3)">Published Books</li>
    </div>
    <div id="tab1" class="tab_content">
      New Books
      <slot name="tab1"></slot>
    </div>
    <div id="tab2" class="tab_content">
      Books In Progress
      <slot name="tab2"></slot>
    </div>
    <div id="tab3" class="tab_content">
      Published Books
      <slot name="tab1"></slot>
    </div>
  </ul>
</template>

<script setup>
// Data
let active_tab = 0
// Methods
function select_tab(num) {
  switch (num) {
    case 1:
      if (active_tab == 1) {
        active_tab = 0
        document.getElementById('tab1').style.display = 'none'
      } else {
        active_tab = 1
        document.getElementById('tab1').style.display = 'inline'
        document.getElementById('tab1').style.backgroundColor = 'red'
        document.getElementById('tab2').style.display = 'none'
        document.getElementById('tab3').style.display = 'none'
      }
      break

    case 2:
      if (active_tab == 2) {
        active_tab = 0
        document.getElementById('tab2').style.display = 'none'
      } else {
        active_tab = 2
        document.getElementById('tab2').style.backgroundColor = 'red'
        document.getElementById('tab2').style.display = 'flex'
        document.getElementById('tab1').style.display = 'none'
        document.getElementById('tab3').style.display = 'none'
      }
      return 1
    case 3:
      if (active_tab == 3) {
        active_tab = 0
        document.getElementById('tab3').style.display = 'none'
      } else {
        active_tab = 3
        document.getElementById('tab3').style.backgroundColor = 'red'
        document.getElementById('tab3').style.display = 'flex'
        document.getElementById('tab1').style.display = 'none'
        document.getElementById('tab2').style.display = 'none'
      }
      return 1
  }
}
</script>

<style scoped>
.tab_container {
  list-style: none;
}
.tab_header_group {
  display: flex;
  justify-content: center;
}
.tab_header {
  display: flex;
  flex-direction: column;

  vertical-align: middle;

  background-color: #ffd04f;

  margin: 1em;
  padding: 0 0.8em 0 0.8em;
  border-radius: 1em;
  font-weight: bold;
  font-size: 1em;

  box-shadow: 0px 0px 60px 0.02px #000000;
  box-shadow: 0px 0px 15px -10px #000000;
}
.tab_header:hover {
  color: white;
}
#tab1,
#tab2,
#tab3 {
  display: none;
}
</style>

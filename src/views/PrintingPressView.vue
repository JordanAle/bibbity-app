<script setup lang="js">
import Section from '../components/Section.vue'
import { ref, computed} from 'vue'

// Data
let book_size = ref(null)
let book_title = ref(null)
// Methods
function choose_size(size) {
  book_size.value = size //set value
  document.getElementById("naming").style.display = "block"
  document.getElementById("naming").scrollIntoView();
}
function choose_title() {
  book_title.value = document.getElementById('book_title').value //set value
  document.getElementById("next_steps").style.display = "flex"
  document.getElementById("next_steps").scrollIntoView();
}
function did_user_upload() {
  if (document.getElementById("file_input") && document.getElementById("file_input").value){
    return true
  }
  return false
}
function add_book() {
  // TODO if not logged in, send to login page
  // TODO ELSE
  console.log("add_book(): ", did_user_upload())
  try {
    if (did_user_upload()){
      // create this book for the user and associate PDF with this book
    } else {
      // create ebook for the current user without a PDF
    }
    submit_success('Successfully created your book. Head to the <strong>In Progress</strong> tab of <strong>My Bibbity</strong> to make more changes.')
  }
  catch (err) {
    submit_failure('We couldn\'t create your book. Please refresh the page and try again.')
    console.log(err)
  }
  finally {
    document.getElementById("next_steps").scrollIntoView();
  }
}
function submit_success(html){
  const element = document.getElementById('submit_update')
  element.style.display = "block"
  element.style.color = "green"
  element.style.fontSize = "1.2em"
  element.innerHTML= null
  element.innerHTML= html
}
function submit_failure(html){
  const element = document.getElementById('submit_update')
  element.style.display = "block"
  element.style.color = "red"
  element.style.fontSize = "1.2em"
  element.innerHTML= null
  element.innerHTML = html
}
function copy_email(){
  navigator.clipboard.writeText("bibbitybooks@gmail.com");
}
function uploaded(){
  document.getElementById("file_name").style.display = "inline-block"
  document.getElementById("file_name").innerHTML = document.getElementById("file_input").value
}
// Computed

</script>

<template>
  <div class="container">
    <Section section_title="Printing Press">
      <template #section_content>
        <div class="section_content">
          <span>The first step to publishing your magnum opus is selecting a book size</span>
          <div class="book_carosel">
            <div class="center_div">
              <div id="s" class="book_div">
                <img
                  src="../assets/Book Covers/Patina. By Nancy Schmidt.png"
                  @click="choose_size('Bite Sized Bibbity')"
                  class="single_row_column"
                />
                <span @click="choose_size('Bite Sized Bibbity')">BITE SIZED BIBBITY BOOK ($150)</span>
              </div>
              <div id="m" class="book_div">
                <img
                  src="../assets/Book Covers/Patina. By Nancy Schmidt.png"
                  @click="choose_size('Classic Bibbity')"
                />
                <span @click="choose_size('Classic Bibbity')">CLASSIC BIBBITY BOOK ($300)</span>
              </div>
              <div id="lg" class="book_div">
                <img
                  src="../assets/Book Covers/Patina. By Nancy Schmidt.png"
                  @click="choose_size('Big Ol\' Bibbity')"
                />
                <span @click="choose_size('Big Ol\' Bibbity')">BIG OL’ BIBBITY BOOK ($500)</span>
              </div>
            </div>
          </div>
          <div id="naming">
            <span>
              Next, give your <strong>{{ book_size}}</strong> book a title and press enter. Don't worry-you can change the title later.
            </span>
            <br>
            <input @keyup.enter="choose_title " id="book_title" type="text" />
          </div>
          <div id="next_steps">
            
            <div>
              <input @input="uploaded" id="file_input" type="file" accept=".pdf" />
              <label id="file_input_label" for="file_input" class="button">If you have a PDF, show us what you're working with...</label>

              <span id="file_name"></span>
              <div>
                <input id="submit_button" @click="add_book" type="button" value="Click here when you're done" class="button"/>
                <span id="submit_update"></span>
              </div>
              <div class="std_buttons">
                <div id="consultation" @click="copy_email">
                  <span>Ask for a free consultation at bibbitybooks@gmail.com</span>
                </div>
                <!-- <span id="copied">
                  Our email address was coppied to your clipboard! Paste it into your 
                </span> -->
              </div>
            </div>
          </div>
        </div>
      </template>
    </Section>
  </div>
</template>

<style scoped>
.section_content,
#naming {
  display: flex;
  text-align: center;
  font-size: large;
  flex-direction: column;
  align-items: center;
}
.std_buttons {
  display: flex;
  width: 100%;
  justify-content: center;
  cursor: pointer;
}
.std_buttons div{
  margin: auto;
  padding: .2em;
  border-radius: .5em;
  background-color: #ffd50084;
  /* text-transform: capitalize; */
}
.std_buttons div:hover{
  background-color:  #ffd500a4;
  box-shadow: 0px 0px 3px -10px #000000;
  /* font-size: larger; */
}
.book_carosel span {
  font-size: 1.5em;
  margin-bottom: 1em;
  width: 100%;
}
img {
  /* max-height: 420px; */
  margin: 0 0.5em 0 0.5em;
  box-shadow: 0px 0px 30px -10px #000000;
}
.section_content {
  display: grid;
  grid-template-columns: 1fr;
}
.book_carosel {
  display: flex;
  justify-content: center;
  height: 530px;
  max-width: 100%;
  background-color: #ffd500a4;
  padding: 0 2em 0 2em;

  border-radius: 1em;
  margin-bottom: 2em;
}
.center_div {
  display: flex;
  align-items: flex-end;
  height: 530px;
  background-color: #ffd50084;
}
.book_div {
  position: relative;
  display: grid;
  justify-items: center;
  cursor: pointer;

}
.single_row_column {
  grid-column: 1;
  grid-row: 1;
}
.book_div span {
  display: none;
  position: absolute;
  z-index: -1;

  font-weight: bold;
  font-size: 1.2em;
  color: white;

  align-self: center;
  padding: .5em;
  border-radius: 2em;
  background-color: rgba(33, 33, 33, 0.056);
}
.book_div:hover span {
  display: inherit;
  z-index: 2;
  background-color: rgba(33, 33, 33, 0.581);
  transition: 0.2s;
}
#s img {
  max-height: 300px;
  max-width: 100%;
}
#s:hover img {
  max-height: 310px;
  max-width: 100%;
}
#m img {
  max-height: 400px;
  max-width: 100%;
}
#m:hover img {
  max-height: 420px;
  max-width: 100%;
}
#lg img {
  max-height: 500px;
  max-width: 100%;
}
#lg:hover img {
  max-height: 520px;
  max-width: 100%;
}
input {
  max-width: 100%;
  margin-bottom: 1rem;
  font-size: 1.2em;
  font-weight: normal;
}
#naming {
  display: none;
}
#next_steps{
  display: none;
  max-width: 100%;
  flex-wrap: wrap;
  justify-content: center;
}
#next_steps input{
  width: 100%
}
.single_row_column{
  display: flex;
}
.button{
  margin: .5em;
  margin-right: 1em;
  max-width: 400px;
  padding: .5em;
  cursor: pointer
}
#file_input {
  display:none;
  margin-right: 1em;
  max-width: 400px;
}
#file_input_label {
  font-size: 1.2em;
  padding: 10px 15px;
  color: white;
  /* margin:0; */
  /* border: .5px solid black; */
  border-radius: .5em;
  background-color:rgba(65, 105, 225, 1);
}
#file_input_label:hover {
  background-color: rgb(47, 77, 167);
}
#file_name {
  display: none;
  width: 100%;
  padding: 0;
  margin: 0;
}
#submit_button {
  max-width: 300px;
  background-color: #ffd50084;
  border: 0;
  border-radius: .5em;
  margin: .3em;
  vertical-align: middle;
}
#submit_button:hover {
  background-color: #ffd500a4;
}
#submit_update {
  margin:0;
  display: none;
  vertical-align: top;
}
#consultation span{
  font-size: 1.2em;
  padding: .5em;
}
</style>

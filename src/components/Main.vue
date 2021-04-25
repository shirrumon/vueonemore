<template>
  <div class="hello">
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-9 col-md-5 home"><h4>HOME</h4></div>
      </div>
      <div class="row justify-content-center introduction">
        <div class="col-10 col-md-5 in-img i1">
        </div>
        <div class="col-10 col-md-5 i2">
          <h3>Our team is...</h3>
          <br>
          Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
        </div>
        <hr>
      </div>
      <div class="row justify-content-center">
        <div class="col-9 col-md-5 ad-title"><h2>Our advantages</h2></div>
      </div>
      <div class="row justify-content-center products-area">
        <div class="col-7 col-md-2 product">
          <img src="../assets/finances.svg"/>
          <br>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua.
        </div>
        <div class="col-7 col-md-2 product">
          <img src="../assets/advantage.svg"/>
          <br>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua.
        </div>
        <div class="col-7 col-md-2 product">
          <img src="../assets/trophy.svg"/>
          <br>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua.
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Main',
  props: {
    msg: String
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.introduction
{
  margin: 1%;
  padding: 3%;
  text-align: center;
  align-items: center;
}

.in-img{
  background-image: url("../assets/team.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: inline-block;
}

.home{
  padding-top: 3%;
}
.i1
{
  height: 20rem;
  width: 30rem;
}
.i2{
  font-size: 1.4rem;
  padding: 0 2% 0 2%;
}
hr{
  width: 80%;
  margin: 5% 0% 0% 0%;
}

.products-area{
  align-items: center;
}

.product
{
  padding: 5% 1% 5% 1%;
  margin-left: 1%;
  border: 1px grey solid;
}

.product img
{
  width: 6rem;
  height: 6rem;
  margin-bottom: 10%;
}

.ad-title
{
  padding-bottom: 5%;
}

@media(max-width: 640px)
{
  .i1
  {
    height: 14rem;
    width: 23rem;
  }

  .i2{
    font-size: 1.1rem;
    margin-top: 2rem;
    padding: 0;
  }

  .product
  {
    margin: 3% 0% 3% 0%;
    padding: 9% 1% 9% 1%;
  }

  .home{
    padding-top: 10%;
  }
}
</style>

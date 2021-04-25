<template>
  <div class="conatiner-fluid">
    <div class="row home">
      <h4>OUR PRICES</h4>
    </div>
    <div class="row text-price justify-content-center">
      <p class="col-10 col-md-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
    </div>
    <div class="row price">
      <h3>LANDING PAGE <span class="separate"></span> 350$</h3>
    </div>
    <div class="row price">
      <h3>ONLINE SHOP <span class="separate"></span> 600$</h3>
    </div>
    <div class="row price">
      <h3>CRM SYSTEM <span class="separate"></span> 1200$</h3>
    </div>
    <div class="row price">
      <h3>B2B SERVICE <span class="separate"></span> 1700$</h3>
    </div>
    <div class="row price">
      <h3>ONLINE CATALOG <span class="separate"></span> 250$</h3>
    </div>
    <div class="row price">
      <h3>CMS <span class="separate"></span> 1500$</h3>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Monoton&display=swap');
.text-price{
  padding: 2% 0% 2% 0%;
}

.price{
  margin: 2% 1% 2% 1%;
  padding: 2% 1% 2% 1%;
  display: flex;
  background: linear-gradient(170deg, whitesmoke 0%, white 35%, whitesmoke 100%);
  align-items: center;
  border: 1px black solid;
  font-family: 'Monoton', cursive;
}

.price h3
{
  font-weight: bold;
  padding: 0;
  margin: 0;
  align-items: center;
  font-size: 2.1rem;
}
.separate
{
  margin: 0% 15% 0% 15%;
}
.home{
  padding-top: 3%;
}
@media(max-width: 640px)
{
  .price
  {
    margin: 5% 2% 5% 2%;
    padding: 5% 2% 5% 2%;
  }
  .price h3
  {
    font-weight: bold;
    font-size: 0.8rem;
  }

  .home{
    padding-top: 10%;
  }
}
</style>

<template>
  <div class="content">
    <div class="pfp_title">
      <img id="profile_picture" src="~/static/stock_avatar.png" alt="" />
      <div class="p_title">
        <p class="wb">Heureux de vous revoir,</p>
        <p class="names">{{ prenom }} {{ nom }}</p>
      </div>
    </div>
    <img
      class="bell"
      src="https://static.overlay-tech.com/assets/f3fc08bb-c5e6-4f6f-a256-165bc6b4ab73.svg"
      alt=""
    />
  </div>
</template>

<script>
export default {
  name: 'Profile',
  props: ['nom', 'prenom']
}
</script>

<style scoped>
/* div {
  background: rgb(117, 117, 117);
} */
@media only screen and (max-width: 500px) {
  .content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 70%;
    width: 100%;
    padding: 30px;
  }
  .pfp_title {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
  .p_title {
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  #profile_picture {
    height: 50px;
    width: 50px;
    border-radius: 9000px;
  }
  .wb {
    color: white;
    font-size: small;
  }
  .names {
    color: white;
  }
}
</style>

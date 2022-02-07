<div class="Newsletter">
  <h4>Newsletter</h4>
</div>

<style>
    h4{
        font-size: 20px;
        font-weight: bold;
    }
    #revue-embed {
        border: 3px solid #369ad9;
        padding: 16px;
        border-radius: 4px;
        text-align: center;
        position: relative;
    }
    #revue-button {
        background-color: #369ad9;
        border-color: #369ad9;
        border-radius: 4px;
        border: 0;
        box-shadow: 0 2px #0000000b;
        color: #fff;
        cursor: pointer;
        font-size: 16px;
        height: 40px;
        line-height: 38px;
        outline: 0;
        padding: 0 15px;
        text-align: center;
        text-decoration: none;
        text-shadow: 0 -1px 0 rgb(0 0 0 / 12%);
        width: 100%;
    }
    #member_email {
        margin-bottom: 10px;
        background-color: #fff;
        background-image: none;
        border-radius: 4px;
        border: 1px solid #d9d9d9;
        box-sizing: border-box;
        color: rgba(0, 0, 0, 0.65);
        display: inline-block;
        font-feature-settings: "tnum";
        font-size: 14px;
        font-variant: tabular-nums;
        height: 32px;
        line-height: 32px;
        list-style: none;
        outline: 0;
        padding: 4px 11px;
        transition: all 0.3s;
        width: 100%;
    }
</style>

<div id="revue-embed">
  <form
    action="https://www.getrevue.co/profile/jcamilofarfan/add_subscriber"
    method="post"
    id="revue-form"
    name="revue-form"
    target="_blank"
  >
    <h3 style="margin: 0px; color: #000000; text-align: center;">
      ¡Suscríbete a la Newsletter!
    </h3>
    <p style="text-align: center;">
      <span style="text-align: center; color: #000000; font-size: 13.3333px;"
        >Vas a recibir artículos contabilidad, desarrollo de Software&nbsp; y
        todas las novedades en las que vaya trabajando.</span
      >
      <strong style="text-align: center; color: #000000; font-size: 13.3333px;"
        >¡Nada de spam 🙅‍♂️!</strong
      >
    </p>
    <div class="revue-form-group">
      <input
        class="revue-form-field"
        placeholder="Tu Correo Electronico *"
        type="email"
        name="member[email]"
        id="member_email"
        style="width: 100%"
      />
    </div>
    <div class="revue-form-actions">
      <input
        id="revue-button"
        type="submit"
        value="✍️ ¡Me suscribo!"
        name="member[subscribe]"
        style="width: 100%"
      />
    </div>
  </form>
</div>

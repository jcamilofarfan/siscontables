<script src="../utils/form.js"></script>

<svelte:head>
  <title>Contact</title>
</svelte:head>

<div class="Contact">
  <h2 class="Contact-title">Contacto</h2>
  <div class="Contact-form">
    <form
      name="contact"
      action="contact/"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      id="form-contact"
    >
      <p class="hidden">
        <label>
          Don’t fill this out if you’re human: <input name="bot-field" />
        </label>
      </p>
      <input type="hidden" name="form-name" value="contact" />
      <p>
        <label>Nombre: <input type="text" name="name" /></label>
      </p>
      <p>
        <label>Email: <input type="email" name="email" /></label>
      </p>
      <p>
        <label>Mensaje: <textarea name="message" /></label>
      </p>
      <p>
        <button type="submit">✍️ Enviar</button>
      </p>
    </form>
  </div>
</div>

<style>
  .Contact-form {
    width: 80%;
    margin: 0 auto;
  }
  .Contact-form form {
    display: grid;
    grid-template-columns: 1fr;

    justify-content: center;
    align-items: center;
  }
  .Contact-form input,
  .Contact-form textarea {
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
    line-height: 32px;
    list-style: none;
    outline: 0;
    /* padding: 4px 11px; */
    transition: all 0.3s;
    width: 100%;
  }
  .Contact-form button {
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
</style>

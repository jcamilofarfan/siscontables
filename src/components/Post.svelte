<script>
  import readingTime from "../utils/readingTime";
  import randomEmoji from "../utils/randomEmoji";
  import formatIsoTime from "../utils/formatIsoTime";
  export let post;
</script>

<a rel="prefetch" href="blog/{post.slug}">
  <div class="Post-item">
    <div class="Post-image">
      <img src={post.image} alt={post.slug} height="50px" />
    </div>
    <div class="Post-content">
      <div class="Post-head">
        <div class="Post-title">
          <h2>
            {post.title}
          </h2>
          <p>
            <time datetime={post.createdAt}>
              📅 {formatIsoTime(post.createdAt)}
            </time>
            <span class="dot">-</span>
            <span>
              {readingTime(post.html)}
            </span>
          </p>
        </div>
      </div>
      <div class="Post-tags" />
      <div class="Post-desc">
        <p>
          {@html post.desc}
        </p>
      </div>
    </div>
  </div>
</a>

<style>
  .Post-item {
    color: #191a22;
    position: relative;
    display: grid;
    grid-template-columns: 1fr 4fr;
    padding: 8px;
    align-items: center;
    cursor: pointer;
  }
  .Post-item:hover {
    background-color: #eee;
  }
  .Post-image img {
    width: 80%;
    margin-right: 24px;
    object-fit: contain;
    margin-left: 4px;
    transition: transform 0.3s ease;
    position: relative;
  }
  .Post-item:hover img {
    transform: scale(1.2);
  }
  .Post-content {
    font-size: 16px;
    font-weight: 300;
    display: grid;
    justify-content: space-between;
    grid-gap: 5px;
    grid-template-columns: 1fr;
  }
  .Post-title {
    font-size: 20px;
    margin: 0;
    padding: 0;
  }
  .Post-title p {
    color: #333;
    font-size: 13px;
    font-weight: 300;
    margin-top: 5px;
    padding: 0;
  }
  a {
    text-decoration: none;
    color: #22215b;
  }

  .Post-desc p {
    color: #333;
    font-size: 16px;
    line-height: 28px;
    margin: 0 auto;
    word-break: break-word;
  }

  .dot {
    font-weight: 700;
  }
</style>

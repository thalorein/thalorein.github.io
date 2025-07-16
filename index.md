---
layout: default
title: Homepage
---

<div class="character-container">

  <section id="home" class="character">
    <div class="character-links">
      <a href="/#kotaro" class="character-link">
        <img src="/assets/img/kotaro-home.jpg" alt="Kotaro">
      </a>
      <a href="/#fynn" class="character-link">
        <img src="/assets/img/fynn-home.jpg" alt="F'ynn">
      </a>
      <!--
      <a href="/#takuto" class="character-link">
        <img src="/assets/img/takuto-home.jpg" alt="Takuto">
      </a> -->
    </div>
  </section>

  <section id="kotaro" class="character">

    <div class="character-header">
      <div class="character-text">
        <h2>Kotaro / 航太朗</h2>
        <blockquote>"Let's visit my hometown one day."</blockquote>
      </div>
      <img src="/assets/img/kotaro.jpg" alt="Kotaro portrait" class="profile-pic">
    </div>

    <div class="bio">
    {% capture kotaro_bio %}
  {% include kotaro.md %}
    {% endcapture %}
    {{ kotaro_bio | markdownify }}
    </div>

    <h3>Journey</h3>
    <ul>
      {% assign kotaro_posts = site.posts | where_exp:"post", "post.path contains '/kotaro/'" %}
      {% for post in kotaro_posts %}
        <li>
          <span class="post-tag">{{ post.tag }}</span>
          <a href="{{ post.url }}">{{ post.title }}</a> 
        </li>
      {% endfor %}
    </ul>

    <h3>Art Credits</h3>
    <ul>
      <li>Homepage Banner: @crazy_garden (フジ) </li>
      <li>Profile Picture: @Vxiv4v (ばる) </li> 
    </ul>
  </section>

  <section id="fynn" class="character">

    <div class="character-header">
      <div class="character-text">
        <h2>F'ynn / フィンー</h2>
        <blockquote>"What can you do in life without coin?"</blockquote>
      </div>
      <img src="/assets/img/fynn.jpg" alt="F'ynn portrait" class="profile-pic">
    </div>

    <div class="bio">
    {% capture fynn_bio %}
  {% include fynn.md %}
    {% endcapture %}
    {{ fynn_bio | markdownify }}
    </div>

    <h3>Journey</h3>
    <ul>
      {% assign fynn_posts = site.posts | where_exp:"post", "post.path contains '/fynn/'" %}
      {% for post in fynn_posts %}
        <li>
          <span class="post-tag">{{ post.tag }}</span>
          <a href="{{ post.url }}">{{ post.title }}</a>
        </li>
      {% endfor %}
    </ul>

    <h3>Art Credits</h3>
    <ul>
      <li>Homepage Banner: @monorajimaru (まる) </li>
      <li>Profile Picture: @natus_vincer (Natus) </li> 
    </ul>
  </section>

  <section id="takuto" class="character">

     <div class="character-header">
      <div class="character-text">
        <h2>Takuto / 工翔</h2>
        <blockquote>"Quote TBD"</blockquote>
      </div>
      <img src="/assets/img/takuto.jpg" alt="Takuto portrait" class="profile-pic">
    </div>

    <div class="bio">
    {% capture takuto_bio %}
  {% include takuto.md %}
    {% endcapture %}
    {{ takuto_bio | markdownify }}
    </div>

    <h3>Journey</h3>
    <ul>
      {% assign takuto_posts = site.posts | where_exp:"post", "post.path contains '/takuto/'" %}
      {% for post in takuto_posts %}
        <li>
          <span class="post-tag">{{ post.tag }}</span>
          <a href="{{ post.url }}">{{ post.title }}</a>
        </li>
      {% endfor %}
    </ul>

    <h3>Art Credits</h3>
    <ul>
      <li>Homepage Banner: @herahemO (へらよし) </li>
      <li>Profile Picture: @holysarvel (メリー) </li> 
    </ul>
  </section>

</div>


<div class="carousel">
  {% for data in CAROUSEL %}
    <a href="/asic.html#{{ data.id }}">
      <img src="/img/{{ data.img }}" alt="{{ data.title }}">
      <span class="title">{{ data.title }}</span>
      <span class="short">{{ data.short }}</span>
      <span class="price">{{ data.price }}</span>
    </a>
  {% endfor %}
</div>

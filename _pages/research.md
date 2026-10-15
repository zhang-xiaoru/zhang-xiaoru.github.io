---
layout: page
title: research
description: Materials modeling, acoustic devices, and optical experiments.
permalink: /research/
nav: true
nav_order: 1
research_styles: true
---

<div class="research-index">
  <p class="research-intro">My research connects physical models with device behavior. Across computational materials science, nanoscale acoustics, and experimental optics, I develop tools to design systems and understand how they work.</p>
  <nav class="research-jump-links" aria-label="Research areas">
    {% for area in site.data.research %}
      <a href="#{{ area.id }}">{{ area.short_title }}</a>
    {% endfor %}
  </nav>
  {% for area in site.data.research %}
  <section class="research-area" id="{{ area.id }}" aria-labelledby="{{ area.id }}-title">
    <div class="research-overview">
      <div>
        <p class="research-eyebrow">{{ area.stage }}</p>
        <h2 id="{{ area.id }}-title">{{ area.title }}</h2>
        <p class="research-affiliation">{{ area.affiliation }}</p>
        <p>{{ area.description }}</p>
      </div>
      <figure class="research-overview-figure">
        <img src="{{ area.image | relative_url }}" alt="{{ area.image_alt }}" width="640" height="400" {% if forloop.first %}loading="eager"{% else %}loading="lazy"{% endif %}>
        <figcaption>{{ area.caption }}</figcaption>
      </figure>
    </div>
    <ul class="research-cards" aria-label="Projects in {{ area.title }}">
      {% assign projects = site.research | where: 'area', area.id | sort: 'order' %}
      {% for project in projects %}
      <li>
        <a class="research-card card h-100 hoverable" href="{{ project.url | relative_url }}">
          <div class="research-card-image">
            <img src="{{ project.img | relative_url }}" alt="{{ project.image_alt }}" width="640" height="400" loading="lazy">
          </div>
          <div class="research-card-body card-body">
            <p class="research-eyebrow">{{ project.methods }}</p>
            <h3 class="card-title">{{ project.title }}</h3>
            <p class="card-text">{{ project.description }}</p>
            <span class="research-card-link">Explore project <span aria-hidden="true">&rarr;</span></span>
          </div>
        </a>
      </li>
      {% endfor %}
    </ul>
  </section>
  {% endfor %}
</div>

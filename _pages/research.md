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
        {% if area.details_url %}
        <a class="research-details-link" href="{{ area.details_url | relative_url }}">{{ area.details_label }} <span aria-hidden="true">&rarr;</span></a>
        {% endif %}
      </div>
      <figure class="research-overview-figure">
        {% include research_figure.liquid placeholder=area.image_placeholder path=area.image alt=area.image_alt caption=area.caption %}
      </figure>
    </div>
    <ul class="research-cards" aria-label="Projects in {{ area.title }}">
      {% assign projects = site.research | where: 'area', area.id | where_exp: 'project', 'project.card != false' | sort: 'order' %}
      {% for project in projects %}
      <li>
        <a class="research-card card h-100 hoverable" href="{{ project.url | relative_url }}">
          <div class="research-card-image">
            {% include research_figure.liquid placeholder=project.image_placeholder path=project.img alt=project.image_alt %}
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

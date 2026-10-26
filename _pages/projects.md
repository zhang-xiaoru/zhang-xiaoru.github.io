---
layout: page
title: projects
permalink: /projects/
#description: A growing collection of your cool projects.
nav: true
nav_order: 2
display_categories: [2025, 2024, 2023]
research_styles: true
page_class: projects-page
---

<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  {% for category in page.display_categories %}
    {% assign categorized_projects = site.projects | where: "category", category %}
    {% if categorized_projects.size > 0 %}
    <section aria-labelledby="projects-{{ category }}">
      <h2 class="category" id="projects-{{ category }}"><a id="{{ category }}" href="#{{ category }}">{{ category }}</a></h2>
      {% assign sorted_projects = categorized_projects | sort: "importance" %}
      <ul class="research-cards" aria-label="Projects from {{ category }}">
        {% for project in sorted_projects %}
          {% include projects.liquid %}
        {% endfor %}
      </ul>
    </section>
    {% endif %}
  {% endfor %}
{% else %}
  {% assign sorted_projects = site.projects | sort: "importance" %}
  <ul class="research-cards" aria-label="Projects">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </ul>
{% endif %}
</div>

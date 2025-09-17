---
layout: page
title: CERTIFICATES
permalink: /certificates/
description: A growing collection of your cool certificates.
nav: true
nav_order: 5
display_categories: [work, fun]
horizontal: false
---

<!-- pages/certificates.md -->
<div class="certificates">
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized certificates -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_certificates = site.certificates | where: "category", category %}
  {% assign sorted_certificates = categorized_certificates | sort: "importance" %}
  <!-- Generate cards for each project -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_certificates %}
      {% include certificates_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_certificates %}
      {% include certificates.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display certificates without categories -->

{% assign sorted_certificates = site.certificates | sort: "importance" %}

  <!-- Generate cards for each project -->

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_certificates %}
      {% include certificates_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_certificates %}
      {% include certificates.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>

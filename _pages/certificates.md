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
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;800&display=swap">
<link rel="stylesheet" href="/assets/css/certificates.css">

<h1 class="text-4xl">Certificates</h1>

<ul class="space-y-8">
  {% for cer in site.data.certificates %}
    <li>
      <div style="display: flex; position: relative;">
        <div class="flex-1 space-y-4">
          <a href="{{ cer.certificate_url }}" class="text-2xl group" target="_blank">
            {{ cer.name }}
            <span class="inline-block transition-transform group-hover:translate-x-2 duration-200">↗</span>
          </a>
          <div class="flex items-center gap-4" style="display: flex; position: relative;">
            <p class="text-base">Provider or Issuer: {{ cer.provider_issuer }}</p>
            <span>•</span>
            <p class="text-base">Date: {{ cer.date | date: "%B %d, %Y" }}</p>
          </div>
          <p class="text-base leading-relaxed">Description: {{ cer.description }}</p>
          {% if cer.tags %}
            <div class="mt-4 flex flex-wrap gap-2">
              {% for tag in cer.tags %}
                <span class="bg-blue-100">
                  {{ tag }}
                </span>
              {% endfor %}
            </div>
          {% endif %}
        </div>
        <div class="flex-shrink-0">
          {% if cer.file %}
            <img src="{{ cer.file | relative_url }}" alt="{{ cer.name }} certificate">
          {% endif %}
        </div>
      </div>
    </li>
  {% endfor %}
</ul>
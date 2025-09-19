---
layout: page
title: CERTIFICATES
permalink: /certificates/
description: Welcome to my Certificates Hub, showcasing my achievements and skills! 🏆🎖️
# nav: true
# nav_order: 5
display_categories: [work, fun]
horizontal: false
---
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;800&display=swap">
<link rel="stylesheet" href="/assets/css/certificates.css">

<div class="certificates-grid">
  {% for cer in site.data.certificates %}
    <div class="cer-card" style="display: inline-flex;">
      <div class="cer-content">
        <a href="{{ cer.certificate_url }}" class="text-2xl group" target="_blank" rel="external nofollow noopener">
          {{ cer.name }}
          <span class="inline-block transition-transform group-hover:translate-x-2 duration-200">↗</span>
        </a>
        <div style="display: flex; gap: 0.5rem; margin-top: 0.75rem; justify-content: space-between;">
          <div>
            <div class="flex items-center gap-4" style="font-size: 0.85rem !important;">
              <div><p class="text-base">{{ cer.provider_issuer }}</p></div>
              <span>•</span>
              <div><p class="text-base">{{ cer.date | date: "%B %d, %Y" }}</p></div>
            </div>
            <div style="max-width: 15rem;">
              <p class="text-base leading-relaxed" style="font-size: 0.75rem !important;">Description: {{ cer.description }}</p>
            </div>
            {% if cer.tags %}
              <div class="mt-4 flex flex-wrap gap-2">
                {% for tag in cer.tags %}
                  <span class="bg-blue-100">{{ tag }}</span>
                {% endfor %}
              </div>
            {% endif %}
          </div>
          <div class="image-container">
            {% if cer.file %}
              <img src="{{ cer.file | relative_url }}" alt="{{ cer.name }} certificate">
            {% else %}
              <div class="placeholder-image">No Image Available</div>
            {% endif %}
          </div>
        </div>
      </div>
    </div>
  {% endfor %}
</div>
---
type: PageLayout
title: About
colors: colors-a
backgroundImage:
  type: BackgroundImage
  url: /images/bg4.jpg
  backgroundSize: cover
  backgroundPosition: center
  backgroundRepeat: no-repeat
  opacity: 75
sections:
  - elementId: ''
    colors: colors-f
    backgroundSize: full
    text: >+
      # Staff frontend engineering with a leadership mindset

      I’m **Venkata Pavan Kumar Pasumarthi**, a staff-level frontend engineer
      and UI engineering leader based in Hyderabad, India. Across 13+ years at
      ServiceNow, Deloitte Digital, Infosys, and Tata Consultancy Services, I’ve
      architected enterprise platforms, led teams of up to 15 engineers, and
      translated complex product requirements into scalable customer experiences.

      My work sits at the intersection of **frontend architecture, digital
      platforms, engineering excellence, and AI-enabled delivery**. I stay close
      to implementation while setting technical direction, mentoring engineers,
      reviewing architecture, partnering with product and design, and explaining
      trade-offs clearly to client and executive stakeholders.

    media:
      type: ImageBlock
      url: /images/about.jpg
      altText: Abstract technology workspace
    styles:
      self:
        height: auto
        width: wide
        margin: [mt-0, mb-0, ml-0, mr-0]
        padding: [pt-16, pb-12, pl-4, pr-4]
        textAlign: left
    type: HeroSection
  - type: DividerSection
    styles:
      self:
        width: wide
        padding: [pt-8, pb-8, pl-4, pr-4]
        borderWidth: 1
        borderStyle: solid
  - type: LabelsSection
    colors: colors-f
    subtitle: Core expertise
    items:
      - { type: Label, label: React }
      - { type: Label, label: JavaScript ES6+ }
      - { type: Label, label: Node.js }
      - { type: Label, label: ServiceNow }
      - { type: Label, label: SAP CPQ }
      - { type: Label, label: Headless architecture }
      - { type: Label, label: Micro-frontends }
      - { type: Label, label: Performance engineering }
      - { type: Label, label: WCAG accessibility }
      - { type: Label, label: Jest & CodeceptJS }
      - { type: Label, label: CI/CD }
      - { type: Label, label: GenAI automation }
      - { type: Label, label: Agentic AI }
      - { type: Label, label: Technical leadership }
    styles:
      self:
        width: wide
        padding: [pt-12, pb-12, pl-4, pr-4]
        textAlign: left
  - type: FeaturedItemsSection
    colors: colors-f
    items:
      - type: FeaturedItem
        subtitle: Experience
        text: |-
          **2025–2026 · ServiceNow**

          Staff Software Engineer, IC4 — led a 10-member Digital Technology team delivering high-availability applications, customer journeys, real-time dashboards, and AI-driven workflow automation.

          **2021–2025 · Deloitte Digital**

          Senior Consultant / UI Lead — directed UI engineering for enterprise SAP CPQ modernization, mentored a 15-member team, established quality standards, and shaped client solution architecture.

          **2017–2021 · Deloitte Digital**

          Consultant — delivered responsive enterprise platforms and drove performance improvements through audits, analytics, and customer feedback.

          **2016–2017 · Infosys**

          Technology Analyst — managed enterprise e-commerce delivery and created reusable JavaScript and Angular components.

          **2012–2016 · Tata Consultancy Services**

          System Engineer — developed responsive enterprise web applications across the delivery lifecycle.
        styles:
          self: { textAlign: left }
      - type: FeaturedItem
        subtitle: Education & credentials
        text: |-
          **B.Tech, Computer Science & Engineering**

          SASTRA University · 2008–2012

          **Certifications**

          * ServiceNow Certified System Administrator (CSA)
          * Graph Developer — Professional
          * Graph Developer — Associate

          **Recent learning**

          AI Engineer Agentic Track — OpenAI Agents SDK, CrewAI, LangGraph, AutoGen, MCP, Python, tool calling, and multi-agent orchestration.
        styles:
          self: { textAlign: left }
    columns: 2
    spacingX: 64
    spacingY: 16
    styles:
      self:
        height: auto
        width: wide
        padding: [pt-12, pb-12, pl-4, pr-4]
  - type: FeaturedItemsSection
    subtitle: Connect
    colors: colors-f
    items:
      - type: FeaturedItem
        actions:
          - { type: Link, label: GitHub, url: 'https://github.com/pvpavankumar' }
        styles:
          self: { textAlign: left }
      - type: FeaturedItem
        actions:
          - { type: Link, label: Email, url: 'mailto:pasumarthi.kumar@gmail.com' }
        styles:
          self: { textAlign: left }
    columns: 2
    spacingX: 64
    spacingY: 16
    styles:
      self:
        height: auto
        width: wide
        padding: [pt-8, pb-16, pl-4, pr-4]
---

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
  - elementId: about-hero
    colors: colors-f
    backgroundSize: full
    title: Staff frontend engineering. Executive-level impact.
    subtitle: Architecture, technical leadership, and AI-enabled delivery for complex enterprise platforms.
    text: >+
      I’m **Venkata Pavan Kumar Pasumarthi**, a Staff Frontend Engineer and UI
      Engineering Leader based in Hyderabad, India. Across 13+ years at
      ServiceNow, Deloitte Digital, Infosys, and Tata Consultancy Services, I’ve
      designed scalable digital platforms and led engineering teams of up to 15.

      I combine hands-on architecture with clear technical decision-making,
      mentorship, product partnership, accessibility, performance engineering,
      and practical AI automation.
    actions:
      - { type: Link, label: Explore my projects, url: '/projects', showIcon: true, icon: briefcase, iconPosition: left }
      - { type: Link, label: Download résumé, url: '/venkata-pavan-kumar-resume.pdf', showIcon: true, icon: download, iconPosition: left }
    styles:
      self:
        height: auto
        width: wide
        margin: [mt-0, mb-0, ml-0, mr-0]
        padding: [pt-24, pb-24, pl-4, pr-4]
        textAlign: left
    type: HeroSection
  - type: FeaturedItemsSection
    elementId: leadership-impact
    colors: colors-f
    subtitle: Career impact at a glance
    items:
      - type: FeaturedItem
        title: 13+
        subtitle: Years in frontend engineering
        text: Enterprise platforms across product, consulting, and delivery organizations.
        styles:
          self: { textAlign: left }
      - type: FeaturedItem
        title: 15
        subtitle: Engineers led and mentored
        text: Technical direction, architecture reviews, quality standards, and career development.
        styles:
          self: { textAlign: left }
      - type: FeaturedItem
        title: 50%
        subtitle: Lower application latency
        text: Performance-led modernization of complex enterprise customer experiences.
        styles:
          self: { textAlign: left }
      - type: FeaturedItem
        title: 50%
        subtitle: Less manual presales effort
        text: GenAI-assisted workflows designed to augment expert decision-making.
        styles:
          self: { textAlign: left }
    columns: 4
    spacingX: 24
    spacingY: 24
    styles:
      self:
        width: wide
        padding: [pt-16, pb-16, pl-4, pr-4]
        textAlign: left
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
        elementId: experience-timeline
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
    elementId: connect-panel
    title: Let’s connect
    subtitle: Choose the most useful way to continue the conversation.
    colors: colors-f
    items:
      - type: FeaturedItem
        title: GitHub
        subtitle: Explore my code
        text: Review personal projects spanning full-stack platforms, frontend engineering, and applied AI.
        actions:
          - { type: Link, label: View GitHub, url: 'https://github.com/pvpavankumar', showIcon: true, icon: github, iconPosition: left }
        styles:
          self: { textAlign: left }
      - type: FeaturedItem
        title: LinkedIn
        subtitle: Connect professionally
        text: Follow my engineering journey and reach out about staff-level or leadership opportunities.
        actions:
          - { type: Link, label: Open LinkedIn, url: 'https://linkedin.com/in/venkata-pavan-kumar-pasumarthi-54929419', showIcon: true, icon: linkedin, iconPosition: left }
        styles:
          self: { textAlign: left }
      - type: FeaturedItem
        title: Email
        subtitle: Start a conversation
        text: Share the role, platform challenge, location, and remote-work expectations for a focused response.
        actions:
          - { type: Link, label: Email me, url: 'mailto:pasumarthi.kumar@gmail.com', showIcon: true, icon: mail, iconPosition: left }
        styles:
          self: { textAlign: left }
      - type: FeaturedItem
        title: Résumé
        subtitle: Review my experience
        text: Download a concise PDF covering my experience, technical strengths, leadership, and outcomes.
        actions:
          - { type: Link, label: Download PDF, url: '/venkata-pavan-kumar-resume.pdf', showIcon: true, icon: download, iconPosition: left }
        styles:
          self: { textAlign: left }
    columns: 4
    spacingX: 20
    spacingY: 20
    styles:
      self:
        height: auto
        width: wide
        padding: [pt-16, pb-16, pl-4, pr-4]
---

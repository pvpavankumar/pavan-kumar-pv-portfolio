---
type: PageLayout
title: Home
colors: colors-a
backgroundImage:
  type: BackgroundImage
  url: /images/bg1.jpg
  backgroundSize: cover
  backgroundPosition: center
  backgroundRepeat: no-repeat
  opacity: 75
sections:
  - elementId: home-hero
    colors: colors-f
    backgroundSize: full
    title: >-
      I architect fast, accessible enterprise experiences—and help engineering
      teams deliver them at scale.
    subtitle: >-
      I’m Venkata Pavan Kumar Pasumarthi, a Staff Frontend Engineer and UI
      Engineering Leader with 13+ years of experience across React, ServiceNow,
      SAP CPQ, digital platforms, and AI-enabled delivery. I combine hands-on
      architecture with technical leadership to turn complex customer journeys
      into reliable, measurable products.
    styles:
      self:
        height: auto
        width: wide
        margin: [mt-0, mb-0, ml-0, mr-0]
        padding: [pt-36, pb-48, pl-4, pr-4]
        flexDirection: row-reverse
        textAlign: left
    type: HeroSection
    actions:
      - type: Link
        label: Explore my work
        url: /projects
        showIcon: true
        icon: briefcase
        iconPosition: left
      - type: Link
        label: View my profile
        url: /info
        showIcon: true
        icon: user
        iconPosition: left
  - colors: colors-f
    type: FeaturedProjectsSection
    elementId: ''
    actions:
      - type: Link
        label: See all selected work
        url: /projects
    showDate: false
    showDescription: true
    showFeaturedImage: true
    showReadMoreLink: true
    variant: variant-b
    projects:
      - content/pages/projects/project-two.md
      - content/pages/projects/project-three.md
      - content/pages/projects/project-one.md
    styles:
      self:
        height: auto
        width: wide
        padding: [pt-24, pb-24, pl-4, pr-4]
        textAlign: left
    subtitle: Selected enterprise work
  - type: FeaturedItemsSection
    elementId: home-impact
    subtitle: Measurable impact
    colors: colors-f
    items:
      - { type: FeaturedItem, title: '50%', subtitle: 'Lower application latency', text: 'Performance-led platform modernization.', styles: { self: { textAlign: left } } }
      - { type: FeaturedItem, title: '30%', subtitle: 'Faster page loads', text: 'Bundle, rendering, and delivery optimization.', styles: { self: { textAlign: left } } }
      - { type: FeaturedItem, title: '25%', subtitle: 'Growth in mobile traffic', text: 'Responsive and accessible customer journeys.', styles: { self: { textAlign: left } } }
      - { type: FeaturedItem, title: '50%', subtitle: 'Less manual effort', text: 'Practical GenAI-assisted presales workflows.', styles: { self: { textAlign: left } } }
    columns: 4
    spacingX: 24
    spacingY: 24
    styles:
      self:
        width: wide
        padding: [pt-20, pb-20, pl-4, pr-4]
        textAlign: left
  - type: FeaturedItemsSection
    elementId: leadership-model
    title: How I create engineering impact
    subtitle: A practical operating model connecting architecture, teams, and measurable delivery.
    colors: colors-f
    items:
      - type: FeaturedItem
        title: '01'
        subtitle: Clarify the system
        text: Translate customer needs and platform constraints into architecture decisions, success measures, and a delivery path.
        styles:
          self: { textAlign: left }
      - type: FeaturedItem
        title: '02'
        subtitle: Raise engineering quality
        text: Establish reusable patterns, accessibility, performance budgets, automated testing, and review standards that scale.
        styles:
          self: { textAlign: left }
      - type: FeaturedItem
        title: '03'
        subtitle: Enable the team
        text: Mentor engineers, make trade-offs visible, align product and design, and use AI where it removes meaningful friction.
        styles:
          self: { textAlign: left }
    columns: 3
    spacingX: 28
    spacingY: 28
    styles:
      self:
        width: wide
        padding: [pt-24, pb-24, pl-4, pr-4]
        textAlign: left
  - type: LabelsSection
    elementId: home-capabilities
    title: Platform and leadership capabilities
    colors: colors-f
    items:
      - { type: Label, label: Frontend architecture }
      - { type: Label, label: React & Next.js }
      - { type: Label, label: ServiceNow }
      - { type: Label, label: SAP CPQ }
      - { type: Label, label: Performance engineering }
      - { type: Label, label: Accessibility }
      - { type: Label, label: Design systems }
      - { type: Label, label: GenAI automation }
      - { type: Label, label: Technical leadership }
    styles:
      self:
        width: wide
        padding: [pt-20, pb-20, pl-4, pr-4]
        textAlign: left
  - type: ContactSection
    colors: colors-f
    backgroundSize: full
    title: "Building a digital platform or growing an engineering team? Let’s talk."
    form:
      type: FormBlock
      elementId: contact-form
      fields:
        - name: name
          label: Name
          hideLabel: true
          placeholder: Your name
          isRequired: true
          width: 1/2
          type: TextFormControl
        - name: email
          label: Email
          hideLabel: true
          placeholder: Work email
          isRequired: true
          width: 1/2
          type: EmailFormControl
        - name: message
          label: Message
          hideLabel: true
          placeholder: Tell me about the opportunity or challenge
          isRequired: true
          width: full
          type: TextareaFormControl
      submitLabel: Send message
      styles:
        self:
          textAlign: center
    styles:
      self:
        height: auto
        width: narrow
        margin: [mt-0, mb-0, ml-0, mr-0]
        padding: [pt-24, pb-24, pr-4, pl-4]
        flexDirection: row
        textAlign: left
---

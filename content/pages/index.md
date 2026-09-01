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
  - elementId: ''
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
      - type: Link
        label: View my profile
        url: /info
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
  - type: TextSection
    variant: variant-a
    subtitle: Measurable impact
    colors: colors-f
    text: |
      **50% lower application latency · 30% faster page loads · 25% growth in mobile traffic · 50% less manual presales effort**

      These outcomes came from connecting frontend architecture, engineering quality, accessibility, customer insight, and practical AI automation.
    styles:
      self:
        width: narrow
        padding: [pt-24, pb-24, pl-4, pr-4]
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

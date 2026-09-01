---
type: PageLayout
title: Contact
colors: colors-a
backgroundImage:
  type: BackgroundImage
  url: /images/contact.jpg
  backgroundSize: cover
  backgroundPosition: center
  backgroundRepeat: no-repeat
  opacity: 60
sections:
  - type: HeroSection
    elementId: contact-intro
    colors: colors-f
    backgroundSize: full
    title: Let’s build digital platforms that perform—and last.
    subtitle: >-
      I’m open to conversations about Staff Frontend Engineer, Frontend
      Architect, UI Engineering Lead, and digital-platform leadership
      opportunities. If you’re modernizing an enterprise experience, growing an
      engineering team, or applying AI to a practical workflow, I’d be glad to
      connect.
    actions:
      - type: Link
        label: Email me
        url: 'mailto:pasumarthi.kumar@gmail.com'
        showIcon: true
        icon: mail
        iconPosition: left
      - type: Link
        label: View GitHub
        url: 'https://github.com/pvpavankumar'
        showIcon: true
        icon: github
        iconPosition: left
      - type: Link
        label: Connect on LinkedIn
        url: 'https://linkedin.com/in/venkata-pavan-kumar-pasumarthi-54929419'
        showIcon: true
        icon: linkedin
        iconPosition: left
      - type: Link
        label: Download résumé
        url: '/venkata-pavan-kumar-resume.pdf'
        showIcon: true
        icon: download
        iconPosition: left
    styles:
      self:
        height: auto
        width: narrow
        margin: [mt-0, mb-0, ml-0, mr-0]
        padding: [pt-24, pb-24, pl-4, pr-4]
        flexDirection: row
        textAlign: left
  - type: FeaturedItemsSection
    elementId: collaboration-options
    title: Where I can add value
    subtitle: Conversations are most useful when they begin with a concrete platform, product, or team challenge.
    colors: colors-f
    items:
      - { type: FeaturedItem, title: 'Architecture', subtitle: 'Modernize complex frontend platforms', text: 'Scalable React architecture, headless experiences, performance, accessibility, and integration strategy.', styles: { self: { textAlign: left } } }
      - { type: FeaturedItem, title: 'Leadership', subtitle: 'Grow engineering capability', text: 'Technical direction, mentoring, quality systems, architecture reviews, and cross-functional alignment.', styles: { self: { textAlign: left } } }
      - { type: FeaturedItem, title: 'AI delivery', subtitle: 'Apply AI to practical workflows', text: 'Agentic and generative AI solutions that reduce operational effort while preserving expert oversight.', styles: { self: { textAlign: left } } }
    columns: 3
    spacingX: 24
    spacingY: 24
    styles:
      self:
        width: wide
        padding: [pt-20, pb-20, pl-4, pr-4]
        textAlign: left
  - type: TextSection
    variant: variant-a
    subtitle: Contact details
    colors: colors-f
    text: |
      **Email:** [pasumarthi.kumar@gmail.com](mailto:pasumarthi.kumar@gmail.com)

      **Location:** Hyderabad, Telangana, India

      **GitHub:** [github.com/pvpavankumar](https://github.com/pvpavankumar)

      **LinkedIn:** [linkedin.com/in/venkata-pavan-kumar-pasumarthi-54929419](https://linkedin.com/in/venkata-pavan-kumar-pasumarthi-54929419)

      I welcome relevant full-time leadership and staff-engineering conversations. Please include the role, location or remote-work expectations, and a brief description of the product or platform challenge.
    styles:
      self:
        width: narrow
        padding: [pt-16, pb-24, pl-4, pr-4]
        textAlign: left
---

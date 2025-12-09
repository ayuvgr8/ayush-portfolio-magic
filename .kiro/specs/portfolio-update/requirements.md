# Requirements Document

## Introduction

This specification outlines the requirements for updating the existing Next.js portfolio application to reflect Ayush Verma's professional profile, experience, and achievements as an AI Product Manager. The portfolio is built with Next.js 14, React, TypeScript, Shadcn/UI, TailwindCSS, and Framer Motion, and requires updating the single configuration file (src/data/resume.tsx) along with associated assets.

## Glossary

- **Portfolio Application**: The Next.js-based web application that displays professional information
- **Resume Data**: The TypeScript configuration object in src/data/resume.tsx that contains all portfolio content
- **Asset Files**: Image files stored in the public directory (logos, profile pictures, etc.)
- **User**: Ayush Verma, the portfolio owner
- **Visitor**: Anyone viewing the portfolio website

## Requirements

### Requirement 1: Personal Information Update

**User Story:** As Ayush Verma, I want my portfolio to display my correct personal information, so that visitors can identify and contact me properly.

#### Acceptance Criteria

1. WHEN the Portfolio Application loads, THE Resume Data SHALL display "Ayush Verma" as the name
2. WHEN the Portfolio Application loads, THE Resume Data SHALL display "AV" as the initials
3. WHEN the Portfolio Application loads, THE Resume Data SHALL display "Waterloo, ON, Canada" as the location
4. WHEN the Portfolio Application loads, THE Resume Data SHALL include a professional summary highlighting AI Product Management expertise
5. WHEN a Visitor views the contact section, THE Resume Data SHALL display Ayush's email address
6. WHEN a Visitor views the contact section, THE Resume Data SHALL display links to LinkedIn, GitHub, and other professional social profiles

### Requirement 2: Professional Experience Display

**User Story:** As Ayush Verma, I want my work experience to be accurately displayed, so that visitors understand my professional background and achievements.

#### Acceptance Criteria

1. WHEN the Portfolio Application displays work experience, THE Resume Data SHALL include the AI Product Manager role at Atomic (May 2024 - Present)
2. WHEN the Portfolio Application displays work experience, THE Resume Data SHALL include the Product Manager Intern role at Atomic (Jan 2024 - Apr 2024)
3. WHEN the Portfolio Application displays work experience, THE Resume Data SHALL include the Product Manager role at Lime (May 2023 - Aug 2023)
4. WHEN the Portfolio Application displays work experience, THE Resume Data SHALL include the Product Manager role at Shopify (Sep 2022 - Dec 2022)
5. WHEN the Portfolio Application displays work experience, THE Resume Data SHALL include the Product Manager role at Splunk (Jan 2022 - Apr 2022)
6. WHEN the Portfolio Application displays work experience, THE Resume Data SHALL include the Product Manager role at NVIDIA (May 2021 - Aug 2021)
7. WHEN displaying each work experience, THE Resume Data SHALL include company name, role title, duration, location, and detailed description of responsibilities and achievements

### Requirement 3: Education Information Display

**User Story:** As Ayush Verma, I want my educational background to be displayed, so that visitors understand my academic qualifications.

#### Acceptance Criteria

1. WHEN the Portfolio Application displays education, THE Resume Data SHALL include University of Waterloo
2. WHEN displaying University of Waterloo, THE Resume Data SHALL show "Bachelor of Computer Science" as the degree
3. WHEN displaying University of Waterloo, THE Resume Data SHALL show the duration as "2020 - 2025"
4. WHEN the Portfolio Application displays education, THE Resume Data SHALL include Wilfrid Laurier University
5. WHEN displaying Wilfrid Laurier University, THE Resume Data SHALL show "Bachelor of Business Administration" as the degree
6. WHEN displaying Wilfrid Laurier University, THE Resume Data SHALL show the duration as "2020 - 2025"

### Requirement 4: Skills and Technologies Display

**User Story:** As Ayush Verma, I want my technical skills and product management competencies to be displayed, so that visitors understand my capabilities.

#### Acceptance Criteria

1. WHEN the Portfolio Application displays skills, THE Resume Data SHALL include Product Management skills (Product Strategy, Roadmapping, Stakeholder Management, User Research, Data Analysis)
2. WHEN the Portfolio Application displays skills, THE Resume Data SHALL include AI/ML technologies (Machine Learning, Natural Language Processing, Computer Vision, LLMs, Prompt Engineering)
3. WHEN the Portfolio Application displays skills, THE Resume Data SHALL include technical skills (Python, SQL, Figma, Jira, A/B Testing, Analytics)
4. WHEN the Portfolio Application displays skills, THE Resume Data SHALL include business skills (Go-to-Market Strategy, Pricing Strategy, Competitive Analysis)

### Requirement 5: Projects Showcase

**User Story:** As Ayush Verma, I want my key projects to be showcased, so that visitors can see examples of my work and impact.

#### Acceptance Criteria

1. WHEN the Portfolio Application displays projects, THE Resume Data SHALL include the AI-Powered Customer Support Chatbot project
2. WHEN the Portfolio Application displays projects, THE Resume Data SHALL include the Predictive Analytics Dashboard project
3. WHEN the Portfolio Application displays projects, THE Resume Data SHALL include the Mobile App Feature Launch project
4. WHEN displaying each project, THE Resume Data SHALL include project title, duration, description, technologies used, and measurable outcomes
5. WHERE applicable, WHEN displaying projects, THE Resume Data SHALL include links to live demos or repositories

### Requirement 6: Asset Management

**User Story:** As Ayush Verma, I want appropriate visual assets to be included, so that my portfolio has a professional appearance.

#### Acceptance Criteria

1. WHEN the Portfolio Application loads, THE Asset Files SHALL include a professional profile picture at /me.png
2. WHEN displaying work experience, THE Asset Files SHALL include company logos for Atomic, Lime, Shopify, Splunk, and NVIDIA
3. WHEN displaying education, THE Asset Files SHALL include university logos for University of Waterloo and Wilfrid Laurier University
4. WHEN the Portfolio Application uses an asset, THE Resume Data SHALL reference the correct file path in the public directory

### Requirement 7: Navigation and Structure

**User Story:** As a Visitor, I want to easily navigate through Ayush's portfolio, so that I can find relevant information quickly.

#### Acceptance Criteria

1. WHEN the Portfolio Application loads, THE Resume Data SHALL include a navigation bar with Home and Blog links
2. WHEN a Visitor clicks on navigation items, THE Portfolio Application SHALL navigate to the corresponding section
3. WHEN the Portfolio Application displays content, THE Resume Data SHALL organize information in logical sections (About, Experience, Education, Skills, Projects, Contact)

### Requirement 8: Responsive Design Maintenance

**User Story:** As a Visitor, I want the portfolio to work on any device, so that I can view it on mobile, tablet, or desktop.

#### Acceptance Criteria

1. WHEN a Visitor accesses the Portfolio Application on any device, THE Portfolio Application SHALL display content responsively
2. WHEN a Visitor resizes the browser window, THE Portfolio Application SHALL adapt the layout appropriately
3. WHEN the Portfolio Application displays on mobile devices, THE Resume Data SHALL remain readable and accessible

### Requirement 9: Professional Summary and Bio

**User Story:** As Ayush Verma, I want a compelling professional summary, so that visitors immediately understand my value proposition.

#### Acceptance Criteria

1. WHEN the Portfolio Application loads, THE Resume Data SHALL display a professional summary highlighting AI Product Management expertise
2. WHEN displaying the summary, THE Resume Data SHALL mention experience with AI/ML products, cross-functional leadership, and data-driven decision making
3. WHEN displaying the summary, THE Resume Data SHALL be concise (2-3 sentences) and impactful
4. WHEN displaying the bio, THE Resume Data SHALL include information about current role, educational background, and key achievements

### Requirement 10: Contact Information and Social Links

**User Story:** As a Visitor, I want to easily contact Ayush or connect on professional networks, so that I can reach out for opportunities or networking.

#### Acceptance Criteria

1. WHEN a Visitor views the contact section, THE Resume Data SHALL display a valid email address
2. WHEN a Visitor views the contact section, THE Resume Data SHALL include a LinkedIn profile link
3. WHEN a Visitor views the contact section, THE Resume Data SHALL include a GitHub profile link
4. WHERE applicable, WHEN a Visitor views the contact section, THE Resume Data SHALL include links to other professional profiles (Twitter/X, Medium, etc.)
5. WHEN a Visitor clicks on social links, THE Portfolio Application SHALL open the links in a new tab

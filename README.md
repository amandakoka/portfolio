# Amanda Koka Portfolio 

A personal portfolio built with React, TypeScript, Vite and Tailwind CSS.

## Features
- Responsive design
- Light/Dark mode
- Project showcase
- Contact form with email integration
- Downloadable CV

## Component Plan

- Navbar
- ThemeToggle
- Hero
- Projects
- ProjectCard
- Contact
- Footer

## Development Decisions

### Reusable Project Cards & Project Data

For the projects i originally hardcoded a project and realised the more projects i create the more repeated code thered be. So using a projectcard component would make it reusable. Then projects.tsx (parent component) loops through my project data and each project is passed to the projectcard (child component) through props.
I've used props in vue where they define data a child component needs from its parent. 
I thought of using a JSON file. However, because I'm using TypeScript, I can use a `.ts` file to store the project data and define an interface for what each project object is expected to have.
Like in Java, where an interface defines a contract, a TypeScript interface defines the structure of an object, e.g. `title: string`, `description: string`, `image: string`, etc. 
I also need a projectcardprops to defines whhat projectcard componet expects to receive:
project interface: what a project contains
projectcard props: what projectcard needs from its parent.

in this case projhectc ard needs the project object its self because its needs all info to display on the card.
So props are the data a child component receives from its parent. TypeScript can then check my project objects and props against their expected types and catch mistakes during development.
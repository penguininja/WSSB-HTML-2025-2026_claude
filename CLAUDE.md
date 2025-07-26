# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the WSSB Web Development Course curriculum for 2025-2026, an HTML education program. The repository contains HTML learning materials, examples, and lab exercises for students learning web development fundamentals.

## Repository Structure

- `course_outline.md` - Complete curriculum outline covering HTML essentials
- `unit-01-html-essentials/` - Introduction materials and basic HTML examples
- `unit-02/` - HTML essentials lessons with exercises and solutions
- Each lesson follows the pattern: `[lesson_number]_[topic].html` with corresponding `*_solution.html` files

## Development Context

This is a static HTML educational repository with no build process, testing framework, or JavaScript dependencies. The `package-lock.json` is minimal and contains no actual packages.

## File Naming Conventions

- Lesson files: `X.XX_TopicName.html` (e.g., `2.02_Headings.html`)
- Solution files: `X.XX_TopicName_solution.html`
- Example files: `topic-example.html`

## Content Standards

- All HTML files should be valid HTML5, but do not need to have doctype, body, or html tags
- Include educational comments explaining concepts and best practices
- All educational content including section headings for the lesson should be in comments, not h1-h6 tags
- The only HTML besides comments in the lesson should be examples
- Lab exercises should include clear instructions in HTML comments
- Lab solutions should have valid doctype, body, and html tags
- Solutions demonstrate proper semantic HTML structure and accessibility practices
- Focus on progressive learning from basic document structure to semantic elements

## Educational Focus Areas

The curriculum emphasizes:
- Semantic HTML structure and accessibility
- Progressive skill building from headings/paragraphs to forms and semantic elements
- Best practices for document structure and screen reader compatibility
- Hands-on labs with real-world examples (recipes, personal interests, etc.)

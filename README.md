# Expense Tracker
 A simple expense tracking application built with React that allows users to:
.View all expenses in a table
.Add new expenses via a form
.Filter expenses by title or description

# Core Features
Expense Table: Displays all expenses with columns for title, description, amount, and date

Add Expense Form: Form inputs for title, description, amount, and date

Search Functionality: Filters expenses in real-time as you type

# Key React Concepts Demonstrated
Props and Events
Form inputs use onChange events to update component state

The form uses onSubmit to handle submission

Search input uses onChange to filter expenses

State Management
expenses state array stores all expense objects

formData state object manages form input values

searchTerm state manages the search filter

Rendering
Conditional rendering shows either:

Filtered expense items when they exist

"No expenses" or "No matches" messages when appropriate

Dynamic table rows rendered from the expenses array

# Code Structure
Single component implementation for simplicity

Clear separation of concerns:

State management

Event handlers

Rendering logic

Efficient filtering using array methods

# How to Use
Fill out the form with expense details

Click "Submit" to add to the table

Use the search bar to filter expenses

View results in the table below

# Technical Requirements
React 16.8+ (uses Hooks)

Modern browser with ES6 support

# Future Enhancements
Edit/delete functionality for expenses

Category tagging for expenses

Local storage persistence

Visual charts for spending patterns
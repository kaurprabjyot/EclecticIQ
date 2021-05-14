# EclecticIQ Testing Assignment
# About
This is my attempt at the QA assignment for your company
# Requirements
NodeJs
# Instructions for OsX
- Clone the repo
    `git clone https://github.com/kaurprabjyot/eq.git`
- Once done, move into the repo folder
    `cd eq`
- Run the following command to install the requirements
    `npm install`
- Run the following command to run happy path spec only (read more about it below)
    `npm run cypress:open`

# Framework used
- Cypress is the framework used because this was expressly mentioned in the assignment

# Structure
   - cypress/integration/simpleTest - The spec files reside here
   - cypress/data - Fixtures for test data
   - cypress/pages - functions reside her
   - cypress/support - Custom commands reside here

# Specs
- test.js 
    -contain various scenarios where user want to get the value based on 
    - Filter and sorting the data
    - Sorting form complexity sorts from low to high 
    - Sorting on name sorts A to Z .
    - Case senstivness is getting ignored
    - Data reman intact while filtering and sorting the values

# Test Strategy
- Tests has been desired by looking overall data present 
    - Checks are made when they are logical to do like - we have 3 lows in complexity if after filtering all these 3 rows appear then no need to chcek the row.
    - On adding new col test will not break as locators are defined based on the css class and not the index value

# Improvement 
   The tests can be make some resilient against adding and deleting rows but it will take me much more time.

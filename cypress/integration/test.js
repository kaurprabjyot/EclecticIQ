import { filter,sortDataOption} from '../pages/statistics';
import { name,sortData,locators } from '../data/example.json';

describe('Filtering and sorting data', function() {
    it('Should display correct data when filtering on "M" and sorting on complexity', function()  {
        cy.navigateToApplication();  
        filter('M');
        sortDataOption(sortData.complexity);
        cy.get(locators.colName).first().should('have.text', name.sqlInjection)
        cy.get(locators.colComplexity).first().should('have.text', 'medium')
        cy.get(locators.colName).eq(1).should('have.text', name.manInTheMiddle)
        cy.get(locators.colComplexity).eq(1).should('have.text', 'high')
        
    })
    it('Should display correct data when sorting on number of cases', function()  {
        cy.navigateToApplication();
        sortDataOption(sortData.numberOfCases);
        cy.get(locators.colNumberOfCases).first().should('have.text', '9024')
        cy.get(locators.colNumberOfCases).eq(1).should('have.text', '29850')
        cy.get(locators.colNumberOfCases).eq(2).should('have.text', '95k')
        cy.get(locators.colNumberOfCases).eq(3).should('have.text', '1.25M')
        cy.get(locators.colNumberOfCases).eq(4).should('have.text', '25.12M')
        cy.get(locators.colNumberOfCases).eq(5).should('have.text', '32.85M')
    })
    it('Should filter data ignoring case-sensitivity', function()  {
        cy.navigateToApplication()
        filter('man')
        sortDataOption(sortData.name)
        cy.get(locators.row).should("have.length", 1)
        cy.get(locators.colName).first().should('have.text', name.manInTheMiddle)
        cy.get(locators.colNumberOfCases).first().should('have.text', '95k')
        cy.get(locators.colComplexity).first().should('have.text', 'high')
       
    })
    it('Should display data alphabetically when sorting by name', function()  {
        cy.navigateToApplication();
        filter('S');
        sortDataOption(sortData.name);
        cy.get(locators.colName).first().should('have.text', name.passwordAttack)   
        cy.get(locators.colName).eq(1).should('have.text', name.phishing)
        cy.get(locators.colName).eq(2).should('have.text', name.sessionHijack)   
        cy.get(locators.colName).eq(3).should('have.text', name.sqlInjection)
        cy.get(locators.colName).eq(4).should('have.text', name.xss)
    })
})

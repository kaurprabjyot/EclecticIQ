const locators = {
    filterInput : '[id=filter-input]',
}
export function filter(value) {
    const filterValue =  cy.get(locators.filterInput).should('be.visible'); 
    filterValue.clear()
    filterValue.type(value)
}
export function sortDataOption(sortValue) {
    cy.get('select')
    .select(sortValue)
  
}




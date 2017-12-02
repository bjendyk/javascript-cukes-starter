@example
Feature: As a developer, I want to write and run cukes to verify that my software is running fine

Scenario: Do a web search using duckduckgo.com
    Given I open duckduckgo
    When  I input "Tesla Roadster" into the search box
    And   I click the search button
    Then  I should see some results

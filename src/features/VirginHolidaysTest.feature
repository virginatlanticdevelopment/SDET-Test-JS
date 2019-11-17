Feature: Book a Virgin Holiday

    Background: Virgin Holiday Home Page
        Given I am on virgin holidays home page

    Scenario: Add a holiday to hotlist
        And I do a holiday search
        When I add a holiday to a hotlist
        Then I can see that a holiday added to the hotlist on top of the page

    Scenario: Search hotel options
        When I do a hotel search
        And I proceed to hotel options page
        Then I can see my board basis

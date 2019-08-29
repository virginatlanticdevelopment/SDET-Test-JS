  Feature:Homepage

  As a User
  I want to check the homepage functionalities
  So that I can book my  holidays  easily
  
    Scenario: Add a holiday to hotlist
      Given I am on virgin holidays home page
      And I do a holiday search
      When I add a holiday to a hotlist
      Then I can see that the holiday added to the hotlist on top of the page

    # Scenario: Search hotel options
    #   Given I am on virgin holidays
    #   When I do a hotel search
    #   And I proceed to hotel options page
    #   Then I ca see my board basis




Feature:

	@WEFOX-1
	Scenario: Technical QA Automation test
		Given I am on the Wefox login page
		When I login with "valid" credentials
		And I verify that the agent image is loaded
		And I click on the my contracts section
		And I check if contracts exist
		And I click on the profile section
		And I click on the personal details box
		And I export personal details data to JSON file
		And I click on logout
		Then I am redirected to the Wefox homepage


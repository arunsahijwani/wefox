var userDashboardSidebarPage = require('./user_dashboard_sidebar_page_object.js');
var utils = require('../utils');




var personalDetailsPage = {

    //Page object Elements
    firstNameField: element(by.id('first_name')),
    lastNameField: element(by.id('last_name')),
    streetField: element(by.id('street')),
    postalCodeField: element(by.id('zip_code')),
    cityField: element(by.id('city')),
    dateOfBirthField: element(by.id('birthdate')),
    emailField: element(by.id('email')),
    phoneNumberField: element(by.id('phone')),

    //Functions

    /**
    // * @desc Saves the user information in a JSON file and prints the output on the console
    //* @return {promise}
    //*/
    storingData: function(){
        var firstNameFieldValue=this.firstNameField;
        var lastNameFieldValue=this.lastNameField;
        var streetFieldValue=this.streetField;
        var postalCodeFieldValue= this.postalCodeField;
        var cityFieldValue= this.cityField;
        var dateOfBirthFieldValue= this.dateOfBirthField;
        var emailFieldValue= this.emailField;
        var phoneNumberFieldValue= this.phoneNumberField;

        return (firstNameFieldValue.getAttribute('value').then(function(firstName)
        {
            return (lastNameFieldValue.getAttribute('value').then(function(lastName)
            {
                return (streetFieldValue.getAttribute('value').then(function(streetName)
     {
                    return (postalCodeFieldValue.getAttribute('value').then(function(postalCode)
                    {
                        return (cityFieldValue.getAttribute('value').then(function(city)
                        {
                            return (dateOfBirthFieldValue.getAttribute('value').then(function(birthDate)
                            {
                                return (emailFieldValue.getAttribute('value').then(function(email)
                                {
                                    return (phoneNumberFieldValue.getAttribute('value').then(function(phoneNumber)
                                    {
                                        console.log("First Name: " +firstName);
                                        console.log("Last Name: " +lastName);
                                        console.log("Street Name: " +streetName);
                                        console.log("Postal Code: " +postalCode);
                                        console.log("City: " +city);
                                        console.log("Date Of Birth: " +birthDate);
                                        console.log("Email: " +email);
                                        console.log("Phone Number: " +phoneNumber);

                                        const fs=require('fs');

                                        let userDetails ={
                                            FirstName: firstName,
                                            LastName: lastName,
                                            StreetName: streetName,
                                            PostalCode: postalCode,
                                            City: city,
                                            DateOfBirth: birthDate,
                                            Email: email,
                                            PhoneNumber: phoneNumber

                                        };

                                        let data=JSON.stringify(userDetails, null, 2);
                                        fs.writeFile('userDetails.json', data, (err) => {
                                            if(err) throw err;
                                        console.log('Data written to userDetails.json file');
                                        })

                                    }))
                                }))
                            }))
                        }))
                    }))
                }))
            }))
        }))


    },
};

module.exports = personalDetailsPage;
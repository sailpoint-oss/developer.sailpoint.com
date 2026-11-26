# ServiceProviderConfiguration

# ServiceProviderConfiguration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **(optional)** `boolean` | This determines whether or not the SAML authentication flow is enabled for an org | [default to false]
**bypassIdp** | **(optional)** `boolean` | This allows basic login with the parameter prompt=true. This is often toggled on when debugging SAML authentication setup. When false, only org admins with MFA-enabled can bypass the IDP. | [default to false]
**samlConfigurationValid** | **(optional)** `boolean` | This indicates whether or not the SAML configuration is valid. | [default to false]
**federationProtocolDetails** | **(optional)** `Array<ServiceProviderConfigurationFederationProtocolDetailsInner>` | A list of the abstract implementations of the Federation Protocol details. Typically, this will include on SpDetails object and one IdpDetails object used in tandem to define a SAML integration between a customer\'s identity provider and a customer\'s SailPoint instance (i.e., the service provider). | [default to undefined]


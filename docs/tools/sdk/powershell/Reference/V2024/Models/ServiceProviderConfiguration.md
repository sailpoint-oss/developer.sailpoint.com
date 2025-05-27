---
id: v2024-service-provider-configuration
title: ServiceProviderConfiguration
pagination_label: ServiceProviderConfiguration
sidebar_label: ServiceProviderConfiguration
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ServiceProviderConfiguration', 'V2024ServiceProviderConfiguration'] 
slug: /tools/sdk/powershell/v2024/models/service-provider-configuration
tags: ['SDK', 'Software Development Kit', 'ServiceProviderConfiguration', 'V2024ServiceProviderConfiguration']
---


# ServiceProviderConfiguration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Enabled** | **Boolean** | This determines whether or not the SAML authentication flow is enabled for an org | [optional] [default to $false]
**BypassIdp** | **Boolean** | This allows basic login with the parameter prompt=true. This is often toggled on when debugging SAML authentication setup. When false, only org admins with MFA-enabled can bypass the IDP. | [optional] [default to $false]
**SamlConfigurationValid** | **Boolean** | This indicates whether or not the SAML configuration is valid. | [optional] [default to $false]
**FederationProtocolDetails** | [**[]ServiceProviderConfigurationFederationProtocolDetailsInner**](service-provider-configuration-federation-protocol-details-inner) | A list of the abstract implementations of the Federation Protocol details. Typically, this will include on SpDetails object and one IdpDetails object used in tandem to define a SAML integration between a customer's identity provider and a customer's SailPoint instance (i.e., the service provider). | [optional] 

## Examples

- Prepare the resource
```powershell
$ServiceProviderConfiguration = Initialize-V2024ServiceProviderConfiguration  -Enabled true `
 -BypassIdp true `
 -SamlConfigurationValid true `
 -FederationProtocolDetails [{role=SAML_IDP, entityId=http://www.okta.com/exktq4o24bmQA4fr60h7, cert=MIIDpDCCAoygAwIBAgIGAYhZ+b29MA0GCSqGSIb3DQEBCwUAMIGSMQswCQYDVQQGEwJVUzETMBEGA1UECAwKQ2FsaWZvcm5pYTEWMBQGA1UEBwwNU2FuIEZyYW5jaXNjbzENMAsGA1UECgwET2t0YTEUMBIGA1UECwwLU1NPUHJvdmlkZXIxEzARBgNVBAMMCmRldi0yMDY0NDUxHDAaBgkqhkiG9w0BCQEWDWluZm9Ab2t0YS5jb20wHhcNMjMwNTI2MjEzMDU5WhcNMzMwNTI2MjEzMTU5WjCBkjELMAkGA1UEBhMCVVMxEzARBgNVBAgMCkNhbGlmb3JuaWExFjAUBgNVBAcMDVNhbiBGcmFuY2lzY28xDTALBgNVBAoMBE9rdGExFDASBgNVBAsMC1NTT1Byb3ZpZGVyMRMwEQYDVQQDDApkZXYtMjA2NDQ1MRwwGgYJKoZIhvcNAQkBFg1pbmZvQG9rdGEuY29tMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAwvi1+WbF2ceGlLCrLl5PrG1lpj04IsrHX6OE666ObC2WFh+Nxvpxy+Vmzon9c9+akhK3bTv+9ifEoVc6tA1qWuCfXISAn9g81JqI68I1PGUbe6eF8pmOA18rjOrt7x94k4QukpR3+I8DfPJ+TynatltB51laLb8H4jchMafA4rDTjV/ZiYPxV0LMEIbprVyGuvBEhiEWha3wwVdDuJq996okX36YNS8PcGH+5CJ8c3YWZp/wrspgJmfCooMXeV+6zBpZfXqPpMWlUo0gcZqDOFgy3r4vkXehJdVYRlInMfDv04Lvy8VI1YAZClG/duO/6o9YVUFLjD9s+mQfhgaF5wIDAQABMA0GCSqGSIb3DQEBCwUAA4IBAQB1CTrA/pTHkarbhMHsdSFAjVoYWwdAfrssG99rIjwwr/CW9tavTC3keaoUmUeddcnLY4V/TfL07+xgQGHCBR88cnzG9h6rC9qWxt6C3nug3YDVQfkdCDgnW9A8QEvLeq/KVLoRccpJNEENb2Y5ESUXHi1+PtjkFBtvfSgZ4eEhVggirL0bJdWVm700hCnjb2iCGSbSX7WflfPi0GSmjht983caG9OwZDnDzNFt8qGWCxo4bNSThT00JnWEN/6f1BWNOt9YDrxqEyNclqhLL+RDqFsPBFIrQlsoXzqpWqCL8oS9UMNxbGATK2v3d5ueE9+SswBAFBhirCuqZw19Ri2W, loginUrlPost=https://dev-206445.oktapreview.com/app/tivolidev206445_acmeidntest_1/exktq4o24bmQA4fr60h7/sso/saml, loginUrlRedirect=https://dev-206445.oktapreview.com/app/tivolidev206445_acmeidntest_1/exktq4o24bmQA4fr60h7/sso/saml, logoutUrl=https://dev-206445.oktapreview.com/login/signout, nameId=urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress, binding=urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST, authnContext=urn:oasis:names:tc:SAML:2.0:ac:classes:PasswordProtectedTransport, includeAuthnContext=true, mappingAttribute=email, jitConfiguration={enabled=true, sourceId=2c9180897427f3a501745042afc83144, sourceAttributeMappings={firstName=okta.firstName, lastName=okta.lastName, email=okta.email}}, certificateExpirationDate=Thu May 26 21:31:59 GMT 2033, certificateName=EMAILADDRESS=info@okta.com, CN=dev-206445, OU=SSOProvider, O=Okta, L=San Francisco, ST=California, C=US}, {role=SAML_SP, entityId=https://acme.identitysoon.com/sp, alias=acme-sp, callbackUrl=https://acme.test-login.sailpoint.com/saml/SSO/alias/acme-sp, legacyAcsUrl=https://megapod-useast1-sso.identitysoon.com/sso/Consumer/metaAlias/acme/sp}]
```

- Convert the resource to JSON
```powershell
$ServiceProviderConfiguration | ConvertTo-JSON
```


[[Back to top]](#) 


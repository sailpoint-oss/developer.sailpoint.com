---
id: v1-transmittermetadata
title: Transmittermetadata
pagination_label: Transmittermetadata
sidebar_label: Transmittermetadata
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Transmittermetadata', 'V1Transmittermetadata'] 
slug: /tools/sdk/go/sharedsignalsframeworkssf/models/transmittermetadata
tags: ['SDK', 'Software Development Kit', 'Transmittermetadata', 'V1Transmittermetadata']
---

# Transmittermetadata

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SpecVersion** | Pointer to **string** | Version of the SSF specification supported. | [optional] 
**Issuer** | Pointer to **string** | Base URL of the transmitter (issuer). | [optional] 
**JwksUri** | Pointer to **string** | URL of the transmitter's JSON Web Key Set. | [optional] 
**DeliveryMethodsSupported** | Pointer to **[]string** | Supported delivery methods (e.g. push URN). | [optional] 
**ConfigurationEndpoint** | Pointer to **string** | Endpoint for stream configuration (create, read, update, replace, delete). | [optional] 
**StatusEndpoint** | Pointer to **string** | Endpoint for reading and updating stream status. | [optional] 
**VerificationEndpoint** | Pointer to **string** | Endpoint for receiver verification. | [optional] 
**AuthorizationSchemes** | Pointer to [**[]Authorizationscheme**](authorizationscheme) | Supported authorization schemes (e.g. OAuth2, Bearer). | [optional] 

## Methods

### NewTransmittermetadata

`func NewTransmittermetadata() *Transmittermetadata`

NewTransmittermetadata instantiates a new Transmittermetadata object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTransmittermetadataWithDefaults

`func NewTransmittermetadataWithDefaults() *Transmittermetadata`

NewTransmittermetadataWithDefaults instantiates a new Transmittermetadata object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSpecVersion

`func (o *Transmittermetadata) GetSpecVersion() string`

GetSpecVersion returns the SpecVersion field if non-nil, zero value otherwise.

### GetSpecVersionOk

`func (o *Transmittermetadata) GetSpecVersionOk() (*string, bool)`

GetSpecVersionOk returns a tuple with the SpecVersion field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSpecVersion

`func (o *Transmittermetadata) SetSpecVersion(v string)`

SetSpecVersion sets SpecVersion field to given value.

### HasSpecVersion

`func (o *Transmittermetadata) HasSpecVersion() bool`

HasSpecVersion returns a boolean if a field has been set.

### GetIssuer

`func (o *Transmittermetadata) GetIssuer() string`

GetIssuer returns the Issuer field if non-nil, zero value otherwise.

### GetIssuerOk

`func (o *Transmittermetadata) GetIssuerOk() (*string, bool)`

GetIssuerOk returns a tuple with the Issuer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIssuer

`func (o *Transmittermetadata) SetIssuer(v string)`

SetIssuer sets Issuer field to given value.

### HasIssuer

`func (o *Transmittermetadata) HasIssuer() bool`

HasIssuer returns a boolean if a field has been set.

### GetJwksUri

`func (o *Transmittermetadata) GetJwksUri() string`

GetJwksUri returns the JwksUri field if non-nil, zero value otherwise.

### GetJwksUriOk

`func (o *Transmittermetadata) GetJwksUriOk() (*string, bool)`

GetJwksUriOk returns a tuple with the JwksUri field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetJwksUri

`func (o *Transmittermetadata) SetJwksUri(v string)`

SetJwksUri sets JwksUri field to given value.

### HasJwksUri

`func (o *Transmittermetadata) HasJwksUri() bool`

HasJwksUri returns a boolean if a field has been set.

### GetDeliveryMethodsSupported

`func (o *Transmittermetadata) GetDeliveryMethodsSupported() []string`

GetDeliveryMethodsSupported returns the DeliveryMethodsSupported field if non-nil, zero value otherwise.

### GetDeliveryMethodsSupportedOk

`func (o *Transmittermetadata) GetDeliveryMethodsSupportedOk() (*[]string, bool)`

GetDeliveryMethodsSupportedOk returns a tuple with the DeliveryMethodsSupported field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeliveryMethodsSupported

`func (o *Transmittermetadata) SetDeliveryMethodsSupported(v []string)`

SetDeliveryMethodsSupported sets DeliveryMethodsSupported field to given value.

### HasDeliveryMethodsSupported

`func (o *Transmittermetadata) HasDeliveryMethodsSupported() bool`

HasDeliveryMethodsSupported returns a boolean if a field has been set.

### GetConfigurationEndpoint

`func (o *Transmittermetadata) GetConfigurationEndpoint() string`

GetConfigurationEndpoint returns the ConfigurationEndpoint field if non-nil, zero value otherwise.

### GetConfigurationEndpointOk

`func (o *Transmittermetadata) GetConfigurationEndpointOk() (*string, bool)`

GetConfigurationEndpointOk returns a tuple with the ConfigurationEndpoint field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfigurationEndpoint

`func (o *Transmittermetadata) SetConfigurationEndpoint(v string)`

SetConfigurationEndpoint sets ConfigurationEndpoint field to given value.

### HasConfigurationEndpoint

`func (o *Transmittermetadata) HasConfigurationEndpoint() bool`

HasConfigurationEndpoint returns a boolean if a field has been set.

### GetStatusEndpoint

`func (o *Transmittermetadata) GetStatusEndpoint() string`

GetStatusEndpoint returns the StatusEndpoint field if non-nil, zero value otherwise.

### GetStatusEndpointOk

`func (o *Transmittermetadata) GetStatusEndpointOk() (*string, bool)`

GetStatusEndpointOk returns a tuple with the StatusEndpoint field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatusEndpoint

`func (o *Transmittermetadata) SetStatusEndpoint(v string)`

SetStatusEndpoint sets StatusEndpoint field to given value.

### HasStatusEndpoint

`func (o *Transmittermetadata) HasStatusEndpoint() bool`

HasStatusEndpoint returns a boolean if a field has been set.

### GetVerificationEndpoint

`func (o *Transmittermetadata) GetVerificationEndpoint() string`

GetVerificationEndpoint returns the VerificationEndpoint field if non-nil, zero value otherwise.

### GetVerificationEndpointOk

`func (o *Transmittermetadata) GetVerificationEndpointOk() (*string, bool)`

GetVerificationEndpointOk returns a tuple with the VerificationEndpoint field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVerificationEndpoint

`func (o *Transmittermetadata) SetVerificationEndpoint(v string)`

SetVerificationEndpoint sets VerificationEndpoint field to given value.

### HasVerificationEndpoint

`func (o *Transmittermetadata) HasVerificationEndpoint() bool`

HasVerificationEndpoint returns a boolean if a field has been set.

### GetAuthorizationSchemes

`func (o *Transmittermetadata) GetAuthorizationSchemes() []Authorizationscheme`

GetAuthorizationSchemes returns the AuthorizationSchemes field if non-nil, zero value otherwise.

### GetAuthorizationSchemesOk

`func (o *Transmittermetadata) GetAuthorizationSchemesOk() (*[]Authorizationscheme, bool)`

GetAuthorizationSchemesOk returns a tuple with the AuthorizationSchemes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthorizationSchemes

`func (o *Transmittermetadata) SetAuthorizationSchemes(v []Authorizationscheme)`

SetAuthorizationSchemes sets AuthorizationSchemes field to given value.

### HasAuthorizationSchemes

`func (o *Transmittermetadata) HasAuthorizationSchemes() bool`

HasAuthorizationSchemes returns a boolean if a field has been set.



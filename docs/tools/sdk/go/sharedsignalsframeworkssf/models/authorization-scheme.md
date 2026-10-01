# AuthorizationScheme

# AuthorizationScheme

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SpecUrn** | Pointer to **string** | URN describing the authorization specification. OAuth 2.0: `urn:ietf:rfc:6749`; Bearer token: `urn:ietf:rfc:6750`.  | [optional] 

## Methods

### NewAuthorizationScheme

`func NewAuthorizationScheme() *AuthorizationScheme`

NewAuthorizationScheme instantiates a new AuthorizationScheme object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAuthorizationSchemeWithDefaults

`func NewAuthorizationSchemeWithDefaults() *AuthorizationScheme`

NewAuthorizationSchemeWithDefaults instantiates a new AuthorizationScheme object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSpecUrn

`func (o *AuthorizationScheme) GetSpecUrn() string`

GetSpecUrn returns the SpecUrn field if non-nil, zero value otherwise.

### GetSpecUrnOk

`func (o *AuthorizationScheme) GetSpecUrnOk() (*string, bool)`

GetSpecUrnOk returns a tuple with the SpecUrn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSpecUrn

`func (o *AuthorizationScheme) SetSpecUrn(v string)`

SetSpecUrn sets SpecUrn field to given value.

### HasSpecUrn

`func (o *AuthorizationScheme) HasSpecUrn() bool`

HasSpecUrn returns a boolean if a field has been set.



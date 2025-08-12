---
id: v2025-create-personal-access-token-request
title: CreatePersonalAccessTokenRequest
pagination_label: CreatePersonalAccessTokenRequest
sidebar_label: CreatePersonalAccessTokenRequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'CreatePersonalAccessTokenRequest', 'V2025CreatePersonalAccessTokenRequest'] 
slug: /tools/sdk/go/v2025/models/create-personal-access-token-request
tags: ['SDK', 'Software Development Kit', 'CreatePersonalAccessTokenRequest', 'V2025CreatePersonalAccessTokenRequest']
---

# CreatePersonalAccessTokenRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | The name of the personal access token (PAT) to be created. Cannot be the same as another PAT owned by the user for whom this PAT is being created. | 
**Scope** | Pointer to **[]string** | Scopes of the personal  access token. If no scope is specified, the token will be created with the default scope \"sp:scopes:all\". This means the personal access token will have all the rights of the owner who created it. | [optional] 
**AccessTokenValiditySeconds** | Pointer to **NullableInt32** | Number of seconds an access token is valid when generated using this Personal Access Token. If no value is specified, the token will be created with the default value of 43200. | [optional] 
**ExpirationDate** | Pointer to **NullableTime** | Date and time, down to the millisecond, when this personal access token will expire. If not provided, the token will expire 6 months after its creation date. The value must be a valid date-time string between the current date and 6 months from the creation date. | [optional] 

## Methods

### NewCreatePersonalAccessTokenRequest

`func NewCreatePersonalAccessTokenRequest(name string, ) *CreatePersonalAccessTokenRequest`

NewCreatePersonalAccessTokenRequest instantiates a new CreatePersonalAccessTokenRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreatePersonalAccessTokenRequestWithDefaults

`func NewCreatePersonalAccessTokenRequestWithDefaults() *CreatePersonalAccessTokenRequest`

NewCreatePersonalAccessTokenRequestWithDefaults instantiates a new CreatePersonalAccessTokenRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *CreatePersonalAccessTokenRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *CreatePersonalAccessTokenRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *CreatePersonalAccessTokenRequest) SetName(v string)`

SetName sets Name field to given value.


### GetScope

`func (o *CreatePersonalAccessTokenRequest) GetScope() []string`

GetScope returns the Scope field if non-nil, zero value otherwise.

### GetScopeOk

`func (o *CreatePersonalAccessTokenRequest) GetScopeOk() (*[]string, bool)`

GetScopeOk returns a tuple with the Scope field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScope

`func (o *CreatePersonalAccessTokenRequest) SetScope(v []string)`

SetScope sets Scope field to given value.

### HasScope

`func (o *CreatePersonalAccessTokenRequest) HasScope() bool`

HasScope returns a boolean if a field has been set.

### SetScopeNil

`func (o *CreatePersonalAccessTokenRequest) SetScopeNil(b bool)`

 SetScopeNil sets the value for Scope to be an explicit nil

### UnsetScope
`func (o *CreatePersonalAccessTokenRequest) UnsetScope()`

UnsetScope ensures that no value is present for Scope, not even an explicit nil
### GetAccessTokenValiditySeconds

`func (o *CreatePersonalAccessTokenRequest) GetAccessTokenValiditySeconds() int32`

GetAccessTokenValiditySeconds returns the AccessTokenValiditySeconds field if non-nil, zero value otherwise.

### GetAccessTokenValiditySecondsOk

`func (o *CreatePersonalAccessTokenRequest) GetAccessTokenValiditySecondsOk() (*int32, bool)`

GetAccessTokenValiditySecondsOk returns a tuple with the AccessTokenValiditySeconds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessTokenValiditySeconds

`func (o *CreatePersonalAccessTokenRequest) SetAccessTokenValiditySeconds(v int32)`

SetAccessTokenValiditySeconds sets AccessTokenValiditySeconds field to given value.

### HasAccessTokenValiditySeconds

`func (o *CreatePersonalAccessTokenRequest) HasAccessTokenValiditySeconds() bool`

HasAccessTokenValiditySeconds returns a boolean if a field has been set.

### SetAccessTokenValiditySecondsNil

`func (o *CreatePersonalAccessTokenRequest) SetAccessTokenValiditySecondsNil(b bool)`

 SetAccessTokenValiditySecondsNil sets the value for AccessTokenValiditySeconds to be an explicit nil

### UnsetAccessTokenValiditySeconds
`func (o *CreatePersonalAccessTokenRequest) UnsetAccessTokenValiditySeconds()`

UnsetAccessTokenValiditySeconds ensures that no value is present for AccessTokenValiditySeconds, not even an explicit nil
### GetExpirationDate

`func (o *CreatePersonalAccessTokenRequest) GetExpirationDate() SailPointTime`

GetExpirationDate returns the ExpirationDate field if non-nil, zero value otherwise.

### GetExpirationDateOk

`func (o *CreatePersonalAccessTokenRequest) GetExpirationDateOk() (*SailPointTime, bool)`

GetExpirationDateOk returns a tuple with the ExpirationDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpirationDate

`func (o *CreatePersonalAccessTokenRequest) SetExpirationDate(v SailPointTime)`

SetExpirationDate sets ExpirationDate field to given value.

### HasExpirationDate

`func (o *CreatePersonalAccessTokenRequest) HasExpirationDate() bool`

HasExpirationDate returns a boolean if a field has been set.

### SetExpirationDateNil

`func (o *CreatePersonalAccessTokenRequest) SetExpirationDateNil(b bool)`

 SetExpirationDateNil sets the value for ExpirationDate to be an explicit nil

### UnsetExpirationDate
`func (o *CreatePersonalAccessTokenRequest) UnsetExpirationDate()`

UnsetExpirationDate ensures that no value is present for ExpirationDate, not even an explicit nil


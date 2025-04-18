---
id: create-personal-access-token-response
title: CreatePersonalAccessTokenResponse
pagination_label: CreatePersonalAccessTokenResponse
sidebar_label: CreatePersonalAccessTokenResponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'CreatePersonalAccessTokenResponse', 'CreatePersonalAccessTokenResponse'] 
slug: /tools/sdk/go/v3/models/create-personal-access-token-response
tags: ['SDK', 'Software Development Kit', 'CreatePersonalAccessTokenResponse', 'CreatePersonalAccessTokenResponse']
---

# CreatePersonalAccessTokenResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | The ID of the personal access token (to be used as the username for Basic Auth). | 
**Secret** | **string** | The secret of the personal access token (to be used as the password for Basic Auth). | 
**Scope** | **[]string** | Scopes of the personal  access token. | 
**Name** | **string** | The name of the personal access token. Cannot be the same as other personal access tokens owned by a user. | 
**Owner** | [**PatOwner**](pat-owner) |  | 
**Created** | **SailPointTime** | The date and time, down to the millisecond, when this personal access token was created. | 
**AccessTokenValiditySeconds** | **int32** | Number of seconds an access token is valid when generated using this Personal Access Token. If no value is specified, the token will be created with the default value of 43200. | 

## Methods

### NewCreatePersonalAccessTokenResponse

`func NewCreatePersonalAccessTokenResponse(id string, secret string, scope []string, name string, owner PatOwner, created SailPointTime, accessTokenValiditySeconds int32, ) *CreatePersonalAccessTokenResponse`

NewCreatePersonalAccessTokenResponse instantiates a new CreatePersonalAccessTokenResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreatePersonalAccessTokenResponseWithDefaults

`func NewCreatePersonalAccessTokenResponseWithDefaults() *CreatePersonalAccessTokenResponse`

NewCreatePersonalAccessTokenResponseWithDefaults instantiates a new CreatePersonalAccessTokenResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *CreatePersonalAccessTokenResponse) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *CreatePersonalAccessTokenResponse) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *CreatePersonalAccessTokenResponse) SetId(v string)`

SetId sets Id field to given value.


### GetSecret

`func (o *CreatePersonalAccessTokenResponse) GetSecret() string`

GetSecret returns the Secret field if non-nil, zero value otherwise.

### GetSecretOk

`func (o *CreatePersonalAccessTokenResponse) GetSecretOk() (*string, bool)`

GetSecretOk returns a tuple with the Secret field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSecret

`func (o *CreatePersonalAccessTokenResponse) SetSecret(v string)`

SetSecret sets Secret field to given value.


### GetScope

`func (o *CreatePersonalAccessTokenResponse) GetScope() []string`

GetScope returns the Scope field if non-nil, zero value otherwise.

### GetScopeOk

`func (o *CreatePersonalAccessTokenResponse) GetScopeOk() (*[]string, bool)`

GetScopeOk returns a tuple with the Scope field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScope

`func (o *CreatePersonalAccessTokenResponse) SetScope(v []string)`

SetScope sets Scope field to given value.


### SetScopeNil

`func (o *CreatePersonalAccessTokenResponse) SetScopeNil(b bool)`

 SetScopeNil sets the value for Scope to be an explicit nil

### UnsetScope
`func (o *CreatePersonalAccessTokenResponse) UnsetScope()`

UnsetScope ensures that no value is present for Scope, not even an explicit nil
### GetName

`func (o *CreatePersonalAccessTokenResponse) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *CreatePersonalAccessTokenResponse) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *CreatePersonalAccessTokenResponse) SetName(v string)`

SetName sets Name field to given value.


### GetOwner

`func (o *CreatePersonalAccessTokenResponse) GetOwner() PatOwner`

GetOwner returns the Owner field if non-nil, zero value otherwise.

### GetOwnerOk

`func (o *CreatePersonalAccessTokenResponse) GetOwnerOk() (*PatOwner, bool)`

GetOwnerOk returns a tuple with the Owner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwner

`func (o *CreatePersonalAccessTokenResponse) SetOwner(v PatOwner)`

SetOwner sets Owner field to given value.


### GetCreated

`func (o *CreatePersonalAccessTokenResponse) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *CreatePersonalAccessTokenResponse) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *CreatePersonalAccessTokenResponse) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.


### GetAccessTokenValiditySeconds

`func (o *CreatePersonalAccessTokenResponse) GetAccessTokenValiditySeconds() int32`

GetAccessTokenValiditySeconds returns the AccessTokenValiditySeconds field if non-nil, zero value otherwise.

### GetAccessTokenValiditySecondsOk

`func (o *CreatePersonalAccessTokenResponse) GetAccessTokenValiditySecondsOk() (*int32, bool)`

GetAccessTokenValiditySecondsOk returns a tuple with the AccessTokenValiditySeconds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessTokenValiditySeconds

`func (o *CreatePersonalAccessTokenResponse) SetAccessTokenValiditySeconds(v int32)`

SetAccessTokenValiditySeconds sets AccessTokenValiditySeconds field to given value.




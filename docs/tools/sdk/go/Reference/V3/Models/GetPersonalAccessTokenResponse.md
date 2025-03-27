---
id: get-personal-access-token-response
title: GetPersonalAccessTokenResponse
pagination_label: GetPersonalAccessTokenResponse
sidebar_label: GetPersonalAccessTokenResponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'GetPersonalAccessTokenResponse', 'GetPersonalAccessTokenResponse'] 
slug: /tools/sdk/go/v3/models/get-personal-access-token-response
tags: ['SDK', 'Software Development Kit', 'GetPersonalAccessTokenResponse', 'GetPersonalAccessTokenResponse']
---

# GetPersonalAccessTokenResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | The ID of the personal access token (to be used as the username for Basic Auth). | 
**Name** | **string** | The name of the personal access token. Cannot be the same as other personal access tokens owned by a user. | 
**Scope** | **[]string** | Scopes of the personal  access token. | 
**Owner** | [**PatOwner**](pat-owner) |  | 
**Created** | **time.Time** | The date and time, down to the millisecond, when this personal access token was created. | 
**LastUsed** | Pointer to **NullableTime** | The date and time, down to the millisecond, when this personal access token was last used to generate an access token. This timestamp does not get updated on every PAT usage, but only once a day. This property can be useful for identifying which PATs are no longer actively used and can be removed. | [optional] 
**Managed** | Pointer to **bool** | If true, this token is managed by the SailPoint platform, and is not visible in the user interface. For example, Workflows will create managed personal access tokens for users who create workflows. | [optional] [default to false]

## Methods

### NewGetPersonalAccessTokenResponse

`func NewGetPersonalAccessTokenResponse(id string, name string, scope []string, owner PatOwner, created time.Time, ) *GetPersonalAccessTokenResponse`

NewGetPersonalAccessTokenResponse instantiates a new GetPersonalAccessTokenResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetPersonalAccessTokenResponseWithDefaults

`func NewGetPersonalAccessTokenResponseWithDefaults() *GetPersonalAccessTokenResponse`

NewGetPersonalAccessTokenResponseWithDefaults instantiates a new GetPersonalAccessTokenResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *GetPersonalAccessTokenResponse) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *GetPersonalAccessTokenResponse) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *GetPersonalAccessTokenResponse) SetId(v string)`

SetId sets Id field to given value.


### GetName

`func (o *GetPersonalAccessTokenResponse) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *GetPersonalAccessTokenResponse) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *GetPersonalAccessTokenResponse) SetName(v string)`

SetName sets Name field to given value.


### GetScope

`func (o *GetPersonalAccessTokenResponse) GetScope() []string`

GetScope returns the Scope field if non-nil, zero value otherwise.

### GetScopeOk

`func (o *GetPersonalAccessTokenResponse) GetScopeOk() (*[]string, bool)`

GetScopeOk returns a tuple with the Scope field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScope

`func (o *GetPersonalAccessTokenResponse) SetScope(v []string)`

SetScope sets Scope field to given value.


### SetScopeNil

`func (o *GetPersonalAccessTokenResponse) SetScopeNil(b bool)`

 SetScopeNil sets the value for Scope to be an explicit nil

### UnsetScope
`func (o *GetPersonalAccessTokenResponse) UnsetScope()`

UnsetScope ensures that no value is present for Scope, not even an explicit nil
### GetOwner

`func (o *GetPersonalAccessTokenResponse) GetOwner() PatOwner`

GetOwner returns the Owner field if non-nil, zero value otherwise.

### GetOwnerOk

`func (o *GetPersonalAccessTokenResponse) GetOwnerOk() (*PatOwner, bool)`

GetOwnerOk returns a tuple with the Owner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwner

`func (o *GetPersonalAccessTokenResponse) SetOwner(v PatOwner)`

SetOwner sets Owner field to given value.


### GetCreated

`func (o *GetPersonalAccessTokenResponse) GetCreated() time.Time`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *GetPersonalAccessTokenResponse) GetCreatedOk() (*time.Time, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *GetPersonalAccessTokenResponse) SetCreated(v time.Time)`

SetCreated sets Created field to given value.


### GetLastUsed

`func (o *GetPersonalAccessTokenResponse) GetLastUsed() time.Time`

GetLastUsed returns the LastUsed field if non-nil, zero value otherwise.

### GetLastUsedOk

`func (o *GetPersonalAccessTokenResponse) GetLastUsedOk() (*time.Time, bool)`

GetLastUsedOk returns a tuple with the LastUsed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastUsed

`func (o *GetPersonalAccessTokenResponse) SetLastUsed(v time.Time)`

SetLastUsed sets LastUsed field to given value.

### HasLastUsed

`func (o *GetPersonalAccessTokenResponse) HasLastUsed() bool`

HasLastUsed returns a boolean if a field has been set.

### SetLastUsedNil

`func (o *GetPersonalAccessTokenResponse) SetLastUsedNil(b bool)`

 SetLastUsedNil sets the value for LastUsed to be an explicit nil

### UnsetLastUsed
`func (o *GetPersonalAccessTokenResponse) UnsetLastUsed()`

UnsetLastUsed ensures that no value is present for LastUsed, not even an explicit nil
### GetManaged

`func (o *GetPersonalAccessTokenResponse) GetManaged() bool`

GetManaged returns the Managed field if non-nil, zero value otherwise.

### GetManagedOk

`func (o *GetPersonalAccessTokenResponse) GetManagedOk() (*bool, bool)`

GetManagedOk returns a tuple with the Managed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManaged

`func (o *GetPersonalAccessTokenResponse) SetManaged(v bool)`

SetManaged sets Managed field to given value.

### HasManaged

`func (o *GetPersonalAccessTokenResponse) HasManaged() bool`

HasManaged returns a boolean if a field has been set.



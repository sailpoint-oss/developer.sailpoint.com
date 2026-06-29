---
id: v1-createpersonalaccesstokenresponse
title: Createpersonalaccesstokenresponse
pagination_label: Createpersonalaccesstokenresponse
sidebar_label: Createpersonalaccesstokenresponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Createpersonalaccesstokenresponse', 'V1Createpersonalaccesstokenresponse'] 
slug: /tools/sdk/go/personalaccesstokens/models/createpersonalaccesstokenresponse
tags: ['SDK', 'Software Development Kit', 'Createpersonalaccesstokenresponse', 'V1Createpersonalaccesstokenresponse']
---

# Createpersonalaccesstokenresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | The ID of the personal access token (to be used as the username for Basic Auth). | 
**Secret** | **string** | The secret of the personal access token (to be used as the password for Basic Auth). | 
**Scope** | **[]string** | Scopes of the personal  access token. | 
**Name** | **string** | The name of the personal access token. Cannot be the same as other personal access tokens owned by a user. | 
**Owner** | [**Patowner**](patowner) |  | 
**Created** | **SailPointTime** | The date and time, down to the millisecond, when this personal access token was created. | 
**AccessTokenValiditySeconds** | **int32** | Number of seconds an access token is valid when generated using this Personal Access Token. If no value is specified, the token will be created with the default value of 43200. | 
**ExpirationDate** | **SailPointTime** | Date and time, down to the millisecond, when this personal access token will expire. If not provided, the token will expire 6 months after its creation date. The value must be a valid date-time string between the current date and 6 months from the creation date. | 

## Methods

### NewCreatepersonalaccesstokenresponse

`func NewCreatepersonalaccesstokenresponse(id string, secret string, scope []string, name string, owner Patowner, created SailPointTime, accessTokenValiditySeconds int32, expirationDate SailPointTime, ) *Createpersonalaccesstokenresponse`

NewCreatepersonalaccesstokenresponse instantiates a new Createpersonalaccesstokenresponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreatepersonalaccesstokenresponseWithDefaults

`func NewCreatepersonalaccesstokenresponseWithDefaults() *Createpersonalaccesstokenresponse`

NewCreatepersonalaccesstokenresponseWithDefaults instantiates a new Createpersonalaccesstokenresponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Createpersonalaccesstokenresponse) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Createpersonalaccesstokenresponse) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Createpersonalaccesstokenresponse) SetId(v string)`

SetId sets Id field to given value.


### GetSecret

`func (o *Createpersonalaccesstokenresponse) GetSecret() string`

GetSecret returns the Secret field if non-nil, zero value otherwise.

### GetSecretOk

`func (o *Createpersonalaccesstokenresponse) GetSecretOk() (*string, bool)`

GetSecretOk returns a tuple with the Secret field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSecret

`func (o *Createpersonalaccesstokenresponse) SetSecret(v string)`

SetSecret sets Secret field to given value.


### GetScope

`func (o *Createpersonalaccesstokenresponse) GetScope() []string`

GetScope returns the Scope field if non-nil, zero value otherwise.

### GetScopeOk

`func (o *Createpersonalaccesstokenresponse) GetScopeOk() (*[]string, bool)`

GetScopeOk returns a tuple with the Scope field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScope

`func (o *Createpersonalaccesstokenresponse) SetScope(v []string)`

SetScope sets Scope field to given value.


### SetScopeNil

`func (o *Createpersonalaccesstokenresponse) SetScopeNil(b bool)`

 SetScopeNil sets the value for Scope to be an explicit nil

### UnsetScope
`func (o *Createpersonalaccesstokenresponse) UnsetScope()`

UnsetScope ensures that no value is present for Scope, not even an explicit nil
### GetName

`func (o *Createpersonalaccesstokenresponse) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Createpersonalaccesstokenresponse) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Createpersonalaccesstokenresponse) SetName(v string)`

SetName sets Name field to given value.


### GetOwner

`func (o *Createpersonalaccesstokenresponse) GetOwner() Patowner`

GetOwner returns the Owner field if non-nil, zero value otherwise.

### GetOwnerOk

`func (o *Createpersonalaccesstokenresponse) GetOwnerOk() (*Patowner, bool)`

GetOwnerOk returns a tuple with the Owner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwner

`func (o *Createpersonalaccesstokenresponse) SetOwner(v Patowner)`

SetOwner sets Owner field to given value.


### GetCreated

`func (o *Createpersonalaccesstokenresponse) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Createpersonalaccesstokenresponse) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Createpersonalaccesstokenresponse) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.


### GetAccessTokenValiditySeconds

`func (o *Createpersonalaccesstokenresponse) GetAccessTokenValiditySeconds() int32`

GetAccessTokenValiditySeconds returns the AccessTokenValiditySeconds field if non-nil, zero value otherwise.

### GetAccessTokenValiditySecondsOk

`func (o *Createpersonalaccesstokenresponse) GetAccessTokenValiditySecondsOk() (*int32, bool)`

GetAccessTokenValiditySecondsOk returns a tuple with the AccessTokenValiditySeconds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessTokenValiditySeconds

`func (o *Createpersonalaccesstokenresponse) SetAccessTokenValiditySeconds(v int32)`

SetAccessTokenValiditySeconds sets AccessTokenValiditySeconds field to given value.


### GetExpirationDate

`func (o *Createpersonalaccesstokenresponse) GetExpirationDate() SailPointTime`

GetExpirationDate returns the ExpirationDate field if non-nil, zero value otherwise.

### GetExpirationDateOk

`func (o *Createpersonalaccesstokenresponse) GetExpirationDateOk() (*SailPointTime, bool)`

GetExpirationDateOk returns a tuple with the ExpirationDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpirationDate

`func (o *Createpersonalaccesstokenresponse) SetExpirationDate(v SailPointTime)`

SetExpirationDate sets ExpirationDate field to given value.




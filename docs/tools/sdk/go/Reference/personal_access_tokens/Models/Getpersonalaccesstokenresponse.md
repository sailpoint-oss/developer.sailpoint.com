---
id: v1-getpersonalaccesstokenresponse
title: Getpersonalaccesstokenresponse
pagination_label: Getpersonalaccesstokenresponse
sidebar_label: Getpersonalaccesstokenresponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Getpersonalaccesstokenresponse', 'V1Getpersonalaccesstokenresponse'] 
slug: /tools/sdk/go/personalaccesstokens/models/getpersonalaccesstokenresponse
tags: ['SDK', 'Software Development Kit', 'Getpersonalaccesstokenresponse', 'V1Getpersonalaccesstokenresponse']
---

# Getpersonalaccesstokenresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | The ID of the personal access token (to be used as the username for Basic Auth). | 
**Name** | **string** | The name of the personal access token. Cannot be the same as other personal access tokens owned by a user. | 
**Scope** | **[]string** | Scopes of the personal  access token. | 
**Owner** | [**Patowner**](patowner) |  | 
**Created** | **SailPointTime** | The date and time, down to the millisecond, when this personal access token was created. | 
**LastUsed** | Pointer to **NullableTime** | The date and time, down to the millisecond, when this personal access token was last used to generate an access token. This timestamp does not get updated on every PAT usage, but only once a day. This property can be useful for identifying which PATs are no longer actively used and can be removed. | [optional] 
**Managed** | Pointer to **bool** | If true, this token is managed by the SailPoint platform, and is not visible in the user interface. For example, Workflows will create managed personal access tokens for users who create workflows. | [optional] [default to false]
**AccessTokenValiditySeconds** | Pointer to **int32** | Number of seconds an access token is valid when generated using this Personal Access Token. If no value is specified, the token will be created with the default value of 43200. | [optional] [default to 43200]
**ExpirationDate** | Pointer to **NullableTime** | Date and time, down to the millisecond, when this personal access token will expire. **Important:** When `expirationDate` is `null` or empty, the token will never expire (and `userAwareTokenNeverExpires` will be `true`). When `expirationDate` is provided, this value must be a future date. There is no upper limit on how far in the future the expiration date can be set. | [optional] 
**UserAwareTokenNeverExpires** | Pointer to **bool** | Indicates that the user who created or updated this Personal Access Token is aware of and acknowledges the security implications of creating a token that will never expire. When `true`, this flag confirms that the user understood the security risks associated with non-expiring tokens at the time of creation or update. **Security Awareness:** This field serves as a record that the user acknowledged: * Tokens that never expire pose a greater security risk if compromised * Non-expiring tokens should be used only when necessary and with appropriate security measures * Regular rotation and monitoring of non-expiring tokens is recommended **Behavior:** * When `true`: Indicates that the user acknowledged they were creating a token that will never expire. When `expirationDate` is `null`, the token will never expire. * When `false`: The token follows normal expiration rules based on the `expirationDate` field and `accessTokenValiditySeconds` setting. | [optional] [default to false]

## Methods

### NewGetpersonalaccesstokenresponse

`func NewGetpersonalaccesstokenresponse(id string, name string, scope []string, owner Patowner, created SailPointTime, ) *Getpersonalaccesstokenresponse`

NewGetpersonalaccesstokenresponse instantiates a new Getpersonalaccesstokenresponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetpersonalaccesstokenresponseWithDefaults

`func NewGetpersonalaccesstokenresponseWithDefaults() *Getpersonalaccesstokenresponse`

NewGetpersonalaccesstokenresponseWithDefaults instantiates a new Getpersonalaccesstokenresponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Getpersonalaccesstokenresponse) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Getpersonalaccesstokenresponse) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Getpersonalaccesstokenresponse) SetId(v string)`

SetId sets Id field to given value.


### GetName

`func (o *Getpersonalaccesstokenresponse) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Getpersonalaccesstokenresponse) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Getpersonalaccesstokenresponse) SetName(v string)`

SetName sets Name field to given value.


### GetScope

`func (o *Getpersonalaccesstokenresponse) GetScope() []string`

GetScope returns the Scope field if non-nil, zero value otherwise.

### GetScopeOk

`func (o *Getpersonalaccesstokenresponse) GetScopeOk() (*[]string, bool)`

GetScopeOk returns a tuple with the Scope field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScope

`func (o *Getpersonalaccesstokenresponse) SetScope(v []string)`

SetScope sets Scope field to given value.


### SetScopeNil

`func (o *Getpersonalaccesstokenresponse) SetScopeNil(b bool)`

 SetScopeNil sets the value for Scope to be an explicit nil

### UnsetScope
`func (o *Getpersonalaccesstokenresponse) UnsetScope()`

UnsetScope ensures that no value is present for Scope, not even an explicit nil
### GetOwner

`func (o *Getpersonalaccesstokenresponse) GetOwner() Patowner`

GetOwner returns the Owner field if non-nil, zero value otherwise.

### GetOwnerOk

`func (o *Getpersonalaccesstokenresponse) GetOwnerOk() (*Patowner, bool)`

GetOwnerOk returns a tuple with the Owner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwner

`func (o *Getpersonalaccesstokenresponse) SetOwner(v Patowner)`

SetOwner sets Owner field to given value.


### GetCreated

`func (o *Getpersonalaccesstokenresponse) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Getpersonalaccesstokenresponse) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Getpersonalaccesstokenresponse) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.


### GetLastUsed

`func (o *Getpersonalaccesstokenresponse) GetLastUsed() SailPointTime`

GetLastUsed returns the LastUsed field if non-nil, zero value otherwise.

### GetLastUsedOk

`func (o *Getpersonalaccesstokenresponse) GetLastUsedOk() (*SailPointTime, bool)`

GetLastUsedOk returns a tuple with the LastUsed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastUsed

`func (o *Getpersonalaccesstokenresponse) SetLastUsed(v SailPointTime)`

SetLastUsed sets LastUsed field to given value.

### HasLastUsed

`func (o *Getpersonalaccesstokenresponse) HasLastUsed() bool`

HasLastUsed returns a boolean if a field has been set.

### SetLastUsedNil

`func (o *Getpersonalaccesstokenresponse) SetLastUsedNil(b bool)`

 SetLastUsedNil sets the value for LastUsed to be an explicit nil

### UnsetLastUsed
`func (o *Getpersonalaccesstokenresponse) UnsetLastUsed()`

UnsetLastUsed ensures that no value is present for LastUsed, not even an explicit nil
### GetManaged

`func (o *Getpersonalaccesstokenresponse) GetManaged() bool`

GetManaged returns the Managed field if non-nil, zero value otherwise.

### GetManagedOk

`func (o *Getpersonalaccesstokenresponse) GetManagedOk() (*bool, bool)`

GetManagedOk returns a tuple with the Managed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManaged

`func (o *Getpersonalaccesstokenresponse) SetManaged(v bool)`

SetManaged sets Managed field to given value.

### HasManaged

`func (o *Getpersonalaccesstokenresponse) HasManaged() bool`

HasManaged returns a boolean if a field has been set.

### GetAccessTokenValiditySeconds

`func (o *Getpersonalaccesstokenresponse) GetAccessTokenValiditySeconds() int32`

GetAccessTokenValiditySeconds returns the AccessTokenValiditySeconds field if non-nil, zero value otherwise.

### GetAccessTokenValiditySecondsOk

`func (o *Getpersonalaccesstokenresponse) GetAccessTokenValiditySecondsOk() (*int32, bool)`

GetAccessTokenValiditySecondsOk returns a tuple with the AccessTokenValiditySeconds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessTokenValiditySeconds

`func (o *Getpersonalaccesstokenresponse) SetAccessTokenValiditySeconds(v int32)`

SetAccessTokenValiditySeconds sets AccessTokenValiditySeconds field to given value.

### HasAccessTokenValiditySeconds

`func (o *Getpersonalaccesstokenresponse) HasAccessTokenValiditySeconds() bool`

HasAccessTokenValiditySeconds returns a boolean if a field has been set.

### GetExpirationDate

`func (o *Getpersonalaccesstokenresponse) GetExpirationDate() SailPointTime`

GetExpirationDate returns the ExpirationDate field if non-nil, zero value otherwise.

### GetExpirationDateOk

`func (o *Getpersonalaccesstokenresponse) GetExpirationDateOk() (*SailPointTime, bool)`

GetExpirationDateOk returns a tuple with the ExpirationDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpirationDate

`func (o *Getpersonalaccesstokenresponse) SetExpirationDate(v SailPointTime)`

SetExpirationDate sets ExpirationDate field to given value.

### HasExpirationDate

`func (o *Getpersonalaccesstokenresponse) HasExpirationDate() bool`

HasExpirationDate returns a boolean if a field has been set.

### SetExpirationDateNil

`func (o *Getpersonalaccesstokenresponse) SetExpirationDateNil(b bool)`

 SetExpirationDateNil sets the value for ExpirationDate to be an explicit nil

### UnsetExpirationDate
`func (o *Getpersonalaccesstokenresponse) UnsetExpirationDate()`

UnsetExpirationDate ensures that no value is present for ExpirationDate, not even an explicit nil
### GetUserAwareTokenNeverExpires

`func (o *Getpersonalaccesstokenresponse) GetUserAwareTokenNeverExpires() bool`

GetUserAwareTokenNeverExpires returns the UserAwareTokenNeverExpires field if non-nil, zero value otherwise.

### GetUserAwareTokenNeverExpiresOk

`func (o *Getpersonalaccesstokenresponse) GetUserAwareTokenNeverExpiresOk() (*bool, bool)`

GetUserAwareTokenNeverExpiresOk returns a tuple with the UserAwareTokenNeverExpires field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserAwareTokenNeverExpires

`func (o *Getpersonalaccesstokenresponse) SetUserAwareTokenNeverExpires(v bool)`

SetUserAwareTokenNeverExpires sets UserAwareTokenNeverExpires field to given value.

### HasUserAwareTokenNeverExpires

`func (o *Getpersonalaccesstokenresponse) HasUserAwareTokenNeverExpires() bool`

HasUserAwareTokenNeverExpires returns a boolean if a field has been set.



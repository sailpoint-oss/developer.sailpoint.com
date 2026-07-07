---
id: v1-createpersonalaccesstokenrequest
title: Createpersonalaccesstokenrequest
pagination_label: Createpersonalaccesstokenrequest
sidebar_label: Createpersonalaccesstokenrequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Createpersonalaccesstokenrequest', 'V1Createpersonalaccesstokenrequest'] 
slug: /tools/sdk/go/personalaccesstokens/models/createpersonalaccesstokenrequest
tags: ['SDK', 'Software Development Kit', 'Createpersonalaccesstokenrequest', 'V1Createpersonalaccesstokenrequest']
---

# Createpersonalaccesstokenrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | The name of the personal access token (PAT) to be created. Cannot be the same as another PAT owned by the user for whom this PAT is being created. | 
**Scope** | Pointer to **[]string** | Scopes of the personal  access token. If no scope is specified, the token will be created with the default scope \"sp:scopes:all\". This means the personal access token will have all the rights of the owner who created it. | [optional] 
**AccessTokenValiditySeconds** | Pointer to **NullableInt32** | Number of seconds an access token is valid when generated using this Personal Access Token. If no value is specified, the token will be created with the default value of 43200. | [optional] 
**ExpirationDate** | Pointer to **NullableTime** | Date and time, down to the millisecond, when this personal access token will expire. **Important:** When `expirationDate` is `null` or empty (not included in the request body), the token will never expire. **Required Validation:** If `expirationDate` is `null` or empty, `userAwareTokenNeverExpires` must be set to `true`. This is a required validation rule. **Valid Values (dependent on `userAwareTokenNeverExpires`):** * **When `userAwareTokenNeverExpires` is `true` (or required to be `true`):** `expirationDate` can be `null` or omitted from the request body. When `expirationDate` is `null` or empty, the token will never expire. * **When `userAwareTokenNeverExpires` is `false` or omitted:** `expirationDate` must be provided and must be a valid date-time string representing a future date (after the current date/time). There is no upper limit on how far in the future the expiration date can be set. `expirationDate` cannot be `null` in this case. **Validation Rules:** * **If `expirationDate` is `null` or not included in the request body:** `userAwareTokenNeverExpires` must be set to `true` (required). The token will never expire. * **If `expirationDate` is provided and is not `null`:** `userAwareTokenNeverExpires` can be omitted. | [optional] 
**UserAwareTokenNeverExpires** | Pointer to **NullableBool** | Indicates that the user creating this Personal Access Token is aware of and acknowledges the security implications of creating a token that will never expire. When set to `true`, this flag confirms that the user understands the security risks associated with non-expiring tokens. **Security Awareness:** Setting this field to `true` serves as an explicit acknowledgment that the user creating the token understands: * Tokens that never expire pose a greater security risk if compromised * Non-expiring tokens should be used only when necessary and with appropriate security measures * Regular rotation and monitoring of non-expiring tokens is recommended **Required Validation:** If `expirationDate` is `null` or empty (not included in the request body), `userAwareTokenNeverExpires` must be set to `true`. This is a required validation rule. **Validation Rules:** * **If `expirationDate` is `null` or not included in the request body:** `userAwareTokenNeverExpires` must be set to `true` (required). * **If `expirationDate` is provided and is not `null`:** `userAwareTokenNeverExpires` can be omitted. **Behavior:** * When set to `true`: Indicates that the user acknowledges they are creating a token that will never expire. When `expirationDate` is `null` or empty, the token will never expire. * When set to `false` or not specified (and `expirationDate` is provided): The token will follow normal expiration rules based on the `expirationDate` field and `accessTokenValiditySeconds` setting. | [optional] [default to false]

## Methods

### NewCreatepersonalaccesstokenrequest

`func NewCreatepersonalaccesstokenrequest(name string, ) *Createpersonalaccesstokenrequest`

NewCreatepersonalaccesstokenrequest instantiates a new Createpersonalaccesstokenrequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreatepersonalaccesstokenrequestWithDefaults

`func NewCreatepersonalaccesstokenrequestWithDefaults() *Createpersonalaccesstokenrequest`

NewCreatepersonalaccesstokenrequestWithDefaults instantiates a new Createpersonalaccesstokenrequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *Createpersonalaccesstokenrequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Createpersonalaccesstokenrequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Createpersonalaccesstokenrequest) SetName(v string)`

SetName sets Name field to given value.


### GetScope

`func (o *Createpersonalaccesstokenrequest) GetScope() []string`

GetScope returns the Scope field if non-nil, zero value otherwise.

### GetScopeOk

`func (o *Createpersonalaccesstokenrequest) GetScopeOk() (*[]string, bool)`

GetScopeOk returns a tuple with the Scope field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScope

`func (o *Createpersonalaccesstokenrequest) SetScope(v []string)`

SetScope sets Scope field to given value.

### HasScope

`func (o *Createpersonalaccesstokenrequest) HasScope() bool`

HasScope returns a boolean if a field has been set.

### SetScopeNil

`func (o *Createpersonalaccesstokenrequest) SetScopeNil(b bool)`

 SetScopeNil sets the value for Scope to be an explicit nil

### UnsetScope
`func (o *Createpersonalaccesstokenrequest) UnsetScope()`

UnsetScope ensures that no value is present for Scope, not even an explicit nil
### GetAccessTokenValiditySeconds

`func (o *Createpersonalaccesstokenrequest) GetAccessTokenValiditySeconds() int32`

GetAccessTokenValiditySeconds returns the AccessTokenValiditySeconds field if non-nil, zero value otherwise.

### GetAccessTokenValiditySecondsOk

`func (o *Createpersonalaccesstokenrequest) GetAccessTokenValiditySecondsOk() (*int32, bool)`

GetAccessTokenValiditySecondsOk returns a tuple with the AccessTokenValiditySeconds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessTokenValiditySeconds

`func (o *Createpersonalaccesstokenrequest) SetAccessTokenValiditySeconds(v int32)`

SetAccessTokenValiditySeconds sets AccessTokenValiditySeconds field to given value.

### HasAccessTokenValiditySeconds

`func (o *Createpersonalaccesstokenrequest) HasAccessTokenValiditySeconds() bool`

HasAccessTokenValiditySeconds returns a boolean if a field has been set.

### SetAccessTokenValiditySecondsNil

`func (o *Createpersonalaccesstokenrequest) SetAccessTokenValiditySecondsNil(b bool)`

 SetAccessTokenValiditySecondsNil sets the value for AccessTokenValiditySeconds to be an explicit nil

### UnsetAccessTokenValiditySeconds
`func (o *Createpersonalaccesstokenrequest) UnsetAccessTokenValiditySeconds()`

UnsetAccessTokenValiditySeconds ensures that no value is present for AccessTokenValiditySeconds, not even an explicit nil
### GetExpirationDate

`func (o *Createpersonalaccesstokenrequest) GetExpirationDate() SailPointTime`

GetExpirationDate returns the ExpirationDate field if non-nil, zero value otherwise.

### GetExpirationDateOk

`func (o *Createpersonalaccesstokenrequest) GetExpirationDateOk() (*SailPointTime, bool)`

GetExpirationDateOk returns a tuple with the ExpirationDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpirationDate

`func (o *Createpersonalaccesstokenrequest) SetExpirationDate(v SailPointTime)`

SetExpirationDate sets ExpirationDate field to given value.

### HasExpirationDate

`func (o *Createpersonalaccesstokenrequest) HasExpirationDate() bool`

HasExpirationDate returns a boolean if a field has been set.

### SetExpirationDateNil

`func (o *Createpersonalaccesstokenrequest) SetExpirationDateNil(b bool)`

 SetExpirationDateNil sets the value for ExpirationDate to be an explicit nil

### UnsetExpirationDate
`func (o *Createpersonalaccesstokenrequest) UnsetExpirationDate()`

UnsetExpirationDate ensures that no value is present for ExpirationDate, not even an explicit nil
### GetUserAwareTokenNeverExpires

`func (o *Createpersonalaccesstokenrequest) GetUserAwareTokenNeverExpires() bool`

GetUserAwareTokenNeverExpires returns the UserAwareTokenNeverExpires field if non-nil, zero value otherwise.

### GetUserAwareTokenNeverExpiresOk

`func (o *Createpersonalaccesstokenrequest) GetUserAwareTokenNeverExpiresOk() (*bool, bool)`

GetUserAwareTokenNeverExpiresOk returns a tuple with the UserAwareTokenNeverExpires field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserAwareTokenNeverExpires

`func (o *Createpersonalaccesstokenrequest) SetUserAwareTokenNeverExpires(v bool)`

SetUserAwareTokenNeverExpires sets UserAwareTokenNeverExpires field to given value.

### HasUserAwareTokenNeverExpires

`func (o *Createpersonalaccesstokenrequest) HasUserAwareTokenNeverExpires() bool`

HasUserAwareTokenNeverExpires returns a boolean if a field has been set.

### SetUserAwareTokenNeverExpiresNil

`func (o *Createpersonalaccesstokenrequest) SetUserAwareTokenNeverExpiresNil(b bool)`

 SetUserAwareTokenNeverExpiresNil sets the value for UserAwareTokenNeverExpires to be an explicit nil

### UnsetUserAwareTokenNeverExpires
`func (o *Createpersonalaccesstokenrequest) UnsetUserAwareTokenNeverExpires()`

UnsetUserAwareTokenNeverExpires ensures that no value is present for UserAwareTokenNeverExpires, not even an explicit nil


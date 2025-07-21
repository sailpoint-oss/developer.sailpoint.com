---
id: v2024-auth-user
title: AuthUser
pagination_label: AuthUser
sidebar_label: AuthUser
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AuthUser', 'V2024AuthUser'] 
slug: /tools/sdk/go/v2024/models/auth-user
tags: ['SDK', 'Software Development Kit', 'AuthUser', 'V2024AuthUser']
---

# AuthUser

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Tenant** | Pointer to **string** | Tenant name. | [optional] 
**Id** | Pointer to **string** | Identity ID. | [optional] 
**Uid** | Pointer to **string** | Identity's unique identitifier. | [optional] 
**Profile** | Pointer to **string** | ID of the auth profile associated with the auth user. | [optional] 
**IdentificationNumber** | Pointer to **NullableString** | Auth user's employee number. | [optional] 
**Email** | Pointer to **NullableString** | Auth user's email. | [optional] 
**Phone** | Pointer to **NullableString** | Auth user's phone number. | [optional] 
**WorkPhone** | Pointer to **NullableString** | Auth user's work phone number. | [optional] 
**PersonalEmail** | Pointer to **NullableString** | Auth user's personal email. | [optional] 
**Firstname** | Pointer to **NullableString** | Auth user's first name. | [optional] 
**Lastname** | Pointer to **NullableString** | Auth user's last name. | [optional] 
**DisplayName** | Pointer to **string** | Auth user's name in displayed format. | [optional] 
**Alias** | Pointer to **string** | Auth user's alias. | [optional] 
**LastPasswordChangeDate** | Pointer to **NullableTime** | Date of last password change. | [optional] 
**LastLoginTimestamp** | Pointer to **int64** | Timestamp of the last login (long type value). | [optional] 
**CurrentLoginTimestamp** | Pointer to **int64** | Timestamp of the current login (long type value). | [optional] 
**LastUnlockTimestamp** | Pointer to **NullableTime** | The date and time when the user was last unlocked. | [optional] 
**Capabilities** | Pointer to **[]string** | Array of the auth user's capabilities. | [optional] 

## Methods

### NewAuthUser

`func NewAuthUser() *AuthUser`

NewAuthUser instantiates a new AuthUser object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAuthUserWithDefaults

`func NewAuthUserWithDefaults() *AuthUser`

NewAuthUserWithDefaults instantiates a new AuthUser object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTenant

`func (o *AuthUser) GetTenant() string`

GetTenant returns the Tenant field if non-nil, zero value otherwise.

### GetTenantOk

`func (o *AuthUser) GetTenantOk() (*string, bool)`

GetTenantOk returns a tuple with the Tenant field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTenant

`func (o *AuthUser) SetTenant(v string)`

SetTenant sets Tenant field to given value.

### HasTenant

`func (o *AuthUser) HasTenant() bool`

HasTenant returns a boolean if a field has been set.

### GetId

`func (o *AuthUser) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *AuthUser) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *AuthUser) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *AuthUser) HasId() bool`

HasId returns a boolean if a field has been set.

### GetUid

`func (o *AuthUser) GetUid() string`

GetUid returns the Uid field if non-nil, zero value otherwise.

### GetUidOk

`func (o *AuthUser) GetUidOk() (*string, bool)`

GetUidOk returns a tuple with the Uid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUid

`func (o *AuthUser) SetUid(v string)`

SetUid sets Uid field to given value.

### HasUid

`func (o *AuthUser) HasUid() bool`

HasUid returns a boolean if a field has been set.

### GetProfile

`func (o *AuthUser) GetProfile() string`

GetProfile returns the Profile field if non-nil, zero value otherwise.

### GetProfileOk

`func (o *AuthUser) GetProfileOk() (*string, bool)`

GetProfileOk returns a tuple with the Profile field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfile

`func (o *AuthUser) SetProfile(v string)`

SetProfile sets Profile field to given value.

### HasProfile

`func (o *AuthUser) HasProfile() bool`

HasProfile returns a boolean if a field has been set.

### GetIdentificationNumber

`func (o *AuthUser) GetIdentificationNumber() string`

GetIdentificationNumber returns the IdentificationNumber field if non-nil, zero value otherwise.

### GetIdentificationNumberOk

`func (o *AuthUser) GetIdentificationNumberOk() (*string, bool)`

GetIdentificationNumberOk returns a tuple with the IdentificationNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentificationNumber

`func (o *AuthUser) SetIdentificationNumber(v string)`

SetIdentificationNumber sets IdentificationNumber field to given value.

### HasIdentificationNumber

`func (o *AuthUser) HasIdentificationNumber() bool`

HasIdentificationNumber returns a boolean if a field has been set.

### SetIdentificationNumberNil

`func (o *AuthUser) SetIdentificationNumberNil(b bool)`

 SetIdentificationNumberNil sets the value for IdentificationNumber to be an explicit nil

### UnsetIdentificationNumber
`func (o *AuthUser) UnsetIdentificationNumber()`

UnsetIdentificationNumber ensures that no value is present for IdentificationNumber, not even an explicit nil
### GetEmail

`func (o *AuthUser) GetEmail() string`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *AuthUser) GetEmailOk() (*string, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *AuthUser) SetEmail(v string)`

SetEmail sets Email field to given value.

### HasEmail

`func (o *AuthUser) HasEmail() bool`

HasEmail returns a boolean if a field has been set.

### SetEmailNil

`func (o *AuthUser) SetEmailNil(b bool)`

 SetEmailNil sets the value for Email to be an explicit nil

### UnsetEmail
`func (o *AuthUser) UnsetEmail()`

UnsetEmail ensures that no value is present for Email, not even an explicit nil
### GetPhone

`func (o *AuthUser) GetPhone() string`

GetPhone returns the Phone field if non-nil, zero value otherwise.

### GetPhoneOk

`func (o *AuthUser) GetPhoneOk() (*string, bool)`

GetPhoneOk returns a tuple with the Phone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPhone

`func (o *AuthUser) SetPhone(v string)`

SetPhone sets Phone field to given value.

### HasPhone

`func (o *AuthUser) HasPhone() bool`

HasPhone returns a boolean if a field has been set.

### SetPhoneNil

`func (o *AuthUser) SetPhoneNil(b bool)`

 SetPhoneNil sets the value for Phone to be an explicit nil

### UnsetPhone
`func (o *AuthUser) UnsetPhone()`

UnsetPhone ensures that no value is present for Phone, not even an explicit nil
### GetWorkPhone

`func (o *AuthUser) GetWorkPhone() string`

GetWorkPhone returns the WorkPhone field if non-nil, zero value otherwise.

### GetWorkPhoneOk

`func (o *AuthUser) GetWorkPhoneOk() (*string, bool)`

GetWorkPhoneOk returns a tuple with the WorkPhone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWorkPhone

`func (o *AuthUser) SetWorkPhone(v string)`

SetWorkPhone sets WorkPhone field to given value.

### HasWorkPhone

`func (o *AuthUser) HasWorkPhone() bool`

HasWorkPhone returns a boolean if a field has been set.

### SetWorkPhoneNil

`func (o *AuthUser) SetWorkPhoneNil(b bool)`

 SetWorkPhoneNil sets the value for WorkPhone to be an explicit nil

### UnsetWorkPhone
`func (o *AuthUser) UnsetWorkPhone()`

UnsetWorkPhone ensures that no value is present for WorkPhone, not even an explicit nil
### GetPersonalEmail

`func (o *AuthUser) GetPersonalEmail() string`

GetPersonalEmail returns the PersonalEmail field if non-nil, zero value otherwise.

### GetPersonalEmailOk

`func (o *AuthUser) GetPersonalEmailOk() (*string, bool)`

GetPersonalEmailOk returns a tuple with the PersonalEmail field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPersonalEmail

`func (o *AuthUser) SetPersonalEmail(v string)`

SetPersonalEmail sets PersonalEmail field to given value.

### HasPersonalEmail

`func (o *AuthUser) HasPersonalEmail() bool`

HasPersonalEmail returns a boolean if a field has been set.

### SetPersonalEmailNil

`func (o *AuthUser) SetPersonalEmailNil(b bool)`

 SetPersonalEmailNil sets the value for PersonalEmail to be an explicit nil

### UnsetPersonalEmail
`func (o *AuthUser) UnsetPersonalEmail()`

UnsetPersonalEmail ensures that no value is present for PersonalEmail, not even an explicit nil
### GetFirstname

`func (o *AuthUser) GetFirstname() string`

GetFirstname returns the Firstname field if non-nil, zero value otherwise.

### GetFirstnameOk

`func (o *AuthUser) GetFirstnameOk() (*string, bool)`

GetFirstnameOk returns a tuple with the Firstname field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFirstname

`func (o *AuthUser) SetFirstname(v string)`

SetFirstname sets Firstname field to given value.

### HasFirstname

`func (o *AuthUser) HasFirstname() bool`

HasFirstname returns a boolean if a field has been set.

### SetFirstnameNil

`func (o *AuthUser) SetFirstnameNil(b bool)`

 SetFirstnameNil sets the value for Firstname to be an explicit nil

### UnsetFirstname
`func (o *AuthUser) UnsetFirstname()`

UnsetFirstname ensures that no value is present for Firstname, not even an explicit nil
### GetLastname

`func (o *AuthUser) GetLastname() string`

GetLastname returns the Lastname field if non-nil, zero value otherwise.

### GetLastnameOk

`func (o *AuthUser) GetLastnameOk() (*string, bool)`

GetLastnameOk returns a tuple with the Lastname field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastname

`func (o *AuthUser) SetLastname(v string)`

SetLastname sets Lastname field to given value.

### HasLastname

`func (o *AuthUser) HasLastname() bool`

HasLastname returns a boolean if a field has been set.

### SetLastnameNil

`func (o *AuthUser) SetLastnameNil(b bool)`

 SetLastnameNil sets the value for Lastname to be an explicit nil

### UnsetLastname
`func (o *AuthUser) UnsetLastname()`

UnsetLastname ensures that no value is present for Lastname, not even an explicit nil
### GetDisplayName

`func (o *AuthUser) GetDisplayName() string`

GetDisplayName returns the DisplayName field if non-nil, zero value otherwise.

### GetDisplayNameOk

`func (o *AuthUser) GetDisplayNameOk() (*string, bool)`

GetDisplayNameOk returns a tuple with the DisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayName

`func (o *AuthUser) SetDisplayName(v string)`

SetDisplayName sets DisplayName field to given value.

### HasDisplayName

`func (o *AuthUser) HasDisplayName() bool`

HasDisplayName returns a boolean if a field has been set.

### GetAlias

`func (o *AuthUser) GetAlias() string`

GetAlias returns the Alias field if non-nil, zero value otherwise.

### GetAliasOk

`func (o *AuthUser) GetAliasOk() (*string, bool)`

GetAliasOk returns a tuple with the Alias field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlias

`func (o *AuthUser) SetAlias(v string)`

SetAlias sets Alias field to given value.

### HasAlias

`func (o *AuthUser) HasAlias() bool`

HasAlias returns a boolean if a field has been set.

### GetLastPasswordChangeDate

`func (o *AuthUser) GetLastPasswordChangeDate() SailPointTime`

GetLastPasswordChangeDate returns the LastPasswordChangeDate field if non-nil, zero value otherwise.

### GetLastPasswordChangeDateOk

`func (o *AuthUser) GetLastPasswordChangeDateOk() (*SailPointTime, bool)`

GetLastPasswordChangeDateOk returns a tuple with the LastPasswordChangeDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastPasswordChangeDate

`func (o *AuthUser) SetLastPasswordChangeDate(v SailPointTime)`

SetLastPasswordChangeDate sets LastPasswordChangeDate field to given value.

### HasLastPasswordChangeDate

`func (o *AuthUser) HasLastPasswordChangeDate() bool`

HasLastPasswordChangeDate returns a boolean if a field has been set.

### SetLastPasswordChangeDateNil

`func (o *AuthUser) SetLastPasswordChangeDateNil(b bool)`

 SetLastPasswordChangeDateNil sets the value for LastPasswordChangeDate to be an explicit nil

### UnsetLastPasswordChangeDate
`func (o *AuthUser) UnsetLastPasswordChangeDate()`

UnsetLastPasswordChangeDate ensures that no value is present for LastPasswordChangeDate, not even an explicit nil
### GetLastLoginTimestamp

`func (o *AuthUser) GetLastLoginTimestamp() int64`

GetLastLoginTimestamp returns the LastLoginTimestamp field if non-nil, zero value otherwise.

### GetLastLoginTimestampOk

`func (o *AuthUser) GetLastLoginTimestampOk() (*int64, bool)`

GetLastLoginTimestampOk returns a tuple with the LastLoginTimestamp field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastLoginTimestamp

`func (o *AuthUser) SetLastLoginTimestamp(v int64)`

SetLastLoginTimestamp sets LastLoginTimestamp field to given value.

### HasLastLoginTimestamp

`func (o *AuthUser) HasLastLoginTimestamp() bool`

HasLastLoginTimestamp returns a boolean if a field has been set.

### GetCurrentLoginTimestamp

`func (o *AuthUser) GetCurrentLoginTimestamp() int64`

GetCurrentLoginTimestamp returns the CurrentLoginTimestamp field if non-nil, zero value otherwise.

### GetCurrentLoginTimestampOk

`func (o *AuthUser) GetCurrentLoginTimestampOk() (*int64, bool)`

GetCurrentLoginTimestampOk returns a tuple with the CurrentLoginTimestamp field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrentLoginTimestamp

`func (o *AuthUser) SetCurrentLoginTimestamp(v int64)`

SetCurrentLoginTimestamp sets CurrentLoginTimestamp field to given value.

### HasCurrentLoginTimestamp

`func (o *AuthUser) HasCurrentLoginTimestamp() bool`

HasCurrentLoginTimestamp returns a boolean if a field has been set.

### GetLastUnlockTimestamp

`func (o *AuthUser) GetLastUnlockTimestamp() SailPointTime`

GetLastUnlockTimestamp returns the LastUnlockTimestamp field if non-nil, zero value otherwise.

### GetLastUnlockTimestampOk

`func (o *AuthUser) GetLastUnlockTimestampOk() (*SailPointTime, bool)`

GetLastUnlockTimestampOk returns a tuple with the LastUnlockTimestamp field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastUnlockTimestamp

`func (o *AuthUser) SetLastUnlockTimestamp(v SailPointTime)`

SetLastUnlockTimestamp sets LastUnlockTimestamp field to given value.

### HasLastUnlockTimestamp

`func (o *AuthUser) HasLastUnlockTimestamp() bool`

HasLastUnlockTimestamp returns a boolean if a field has been set.

### SetLastUnlockTimestampNil

`func (o *AuthUser) SetLastUnlockTimestampNil(b bool)`

 SetLastUnlockTimestampNil sets the value for LastUnlockTimestamp to be an explicit nil

### UnsetLastUnlockTimestamp
`func (o *AuthUser) UnsetLastUnlockTimestamp()`

UnsetLastUnlockTimestamp ensures that no value is present for LastUnlockTimestamp, not even an explicit nil
### GetCapabilities

`func (o *AuthUser) GetCapabilities() []string`

GetCapabilities returns the Capabilities field if non-nil, zero value otherwise.

### GetCapabilitiesOk

`func (o *AuthUser) GetCapabilitiesOk() (*[]string, bool)`

GetCapabilitiesOk returns a tuple with the Capabilities field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCapabilities

`func (o *AuthUser) SetCapabilities(v []string)`

SetCapabilities sets Capabilities field to given value.

### HasCapabilities

`func (o *AuthUser) HasCapabilities() bool`

HasCapabilities returns a boolean if a field has been set.

### SetCapabilitiesNil

`func (o *AuthUser) SetCapabilitiesNil(b bool)`

 SetCapabilitiesNil sets the value for Capabilities to be an explicit nil

### UnsetCapabilities
`func (o *AuthUser) UnsetCapabilities()`

UnsetCapabilities ensures that no value is present for Capabilities, not even an explicit nil


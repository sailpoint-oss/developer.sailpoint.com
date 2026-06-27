---
id: v1-authuser
title: Authuser
pagination_label: Authuser
sidebar_label: Authuser
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Authuser', 'V1Authuser'] 
slug: /tools/sdk/go/authusers/models/authuser
tags: ['SDK', 'Software Development Kit', 'Authuser', 'V1Authuser']
---

# Authuser

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

### NewAuthuser

`func NewAuthuser() *Authuser`

NewAuthuser instantiates a new Authuser object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAuthuserWithDefaults

`func NewAuthuserWithDefaults() *Authuser`

NewAuthuserWithDefaults instantiates a new Authuser object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTenant

`func (o *Authuser) GetTenant() string`

GetTenant returns the Tenant field if non-nil, zero value otherwise.

### GetTenantOk

`func (o *Authuser) GetTenantOk() (*string, bool)`

GetTenantOk returns a tuple with the Tenant field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTenant

`func (o *Authuser) SetTenant(v string)`

SetTenant sets Tenant field to given value.

### HasTenant

`func (o *Authuser) HasTenant() bool`

HasTenant returns a boolean if a field has been set.

### GetId

`func (o *Authuser) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Authuser) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Authuser) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Authuser) HasId() bool`

HasId returns a boolean if a field has been set.

### GetUid

`func (o *Authuser) GetUid() string`

GetUid returns the Uid field if non-nil, zero value otherwise.

### GetUidOk

`func (o *Authuser) GetUidOk() (*string, bool)`

GetUidOk returns a tuple with the Uid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUid

`func (o *Authuser) SetUid(v string)`

SetUid sets Uid field to given value.

### HasUid

`func (o *Authuser) HasUid() bool`

HasUid returns a boolean if a field has been set.

### GetProfile

`func (o *Authuser) GetProfile() string`

GetProfile returns the Profile field if non-nil, zero value otherwise.

### GetProfileOk

`func (o *Authuser) GetProfileOk() (*string, bool)`

GetProfileOk returns a tuple with the Profile field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfile

`func (o *Authuser) SetProfile(v string)`

SetProfile sets Profile field to given value.

### HasProfile

`func (o *Authuser) HasProfile() bool`

HasProfile returns a boolean if a field has been set.

### GetIdentificationNumber

`func (o *Authuser) GetIdentificationNumber() string`

GetIdentificationNumber returns the IdentificationNumber field if non-nil, zero value otherwise.

### GetIdentificationNumberOk

`func (o *Authuser) GetIdentificationNumberOk() (*string, bool)`

GetIdentificationNumberOk returns a tuple with the IdentificationNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentificationNumber

`func (o *Authuser) SetIdentificationNumber(v string)`

SetIdentificationNumber sets IdentificationNumber field to given value.

### HasIdentificationNumber

`func (o *Authuser) HasIdentificationNumber() bool`

HasIdentificationNumber returns a boolean if a field has been set.

### SetIdentificationNumberNil

`func (o *Authuser) SetIdentificationNumberNil(b bool)`

 SetIdentificationNumberNil sets the value for IdentificationNumber to be an explicit nil

### UnsetIdentificationNumber
`func (o *Authuser) UnsetIdentificationNumber()`

UnsetIdentificationNumber ensures that no value is present for IdentificationNumber, not even an explicit nil
### GetEmail

`func (o *Authuser) GetEmail() string`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *Authuser) GetEmailOk() (*string, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *Authuser) SetEmail(v string)`

SetEmail sets Email field to given value.

### HasEmail

`func (o *Authuser) HasEmail() bool`

HasEmail returns a boolean if a field has been set.

### SetEmailNil

`func (o *Authuser) SetEmailNil(b bool)`

 SetEmailNil sets the value for Email to be an explicit nil

### UnsetEmail
`func (o *Authuser) UnsetEmail()`

UnsetEmail ensures that no value is present for Email, not even an explicit nil
### GetPhone

`func (o *Authuser) GetPhone() string`

GetPhone returns the Phone field if non-nil, zero value otherwise.

### GetPhoneOk

`func (o *Authuser) GetPhoneOk() (*string, bool)`

GetPhoneOk returns a tuple with the Phone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPhone

`func (o *Authuser) SetPhone(v string)`

SetPhone sets Phone field to given value.

### HasPhone

`func (o *Authuser) HasPhone() bool`

HasPhone returns a boolean if a field has been set.

### SetPhoneNil

`func (o *Authuser) SetPhoneNil(b bool)`

 SetPhoneNil sets the value for Phone to be an explicit nil

### UnsetPhone
`func (o *Authuser) UnsetPhone()`

UnsetPhone ensures that no value is present for Phone, not even an explicit nil
### GetWorkPhone

`func (o *Authuser) GetWorkPhone() string`

GetWorkPhone returns the WorkPhone field if non-nil, zero value otherwise.

### GetWorkPhoneOk

`func (o *Authuser) GetWorkPhoneOk() (*string, bool)`

GetWorkPhoneOk returns a tuple with the WorkPhone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWorkPhone

`func (o *Authuser) SetWorkPhone(v string)`

SetWorkPhone sets WorkPhone field to given value.

### HasWorkPhone

`func (o *Authuser) HasWorkPhone() bool`

HasWorkPhone returns a boolean if a field has been set.

### SetWorkPhoneNil

`func (o *Authuser) SetWorkPhoneNil(b bool)`

 SetWorkPhoneNil sets the value for WorkPhone to be an explicit nil

### UnsetWorkPhone
`func (o *Authuser) UnsetWorkPhone()`

UnsetWorkPhone ensures that no value is present for WorkPhone, not even an explicit nil
### GetPersonalEmail

`func (o *Authuser) GetPersonalEmail() string`

GetPersonalEmail returns the PersonalEmail field if non-nil, zero value otherwise.

### GetPersonalEmailOk

`func (o *Authuser) GetPersonalEmailOk() (*string, bool)`

GetPersonalEmailOk returns a tuple with the PersonalEmail field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPersonalEmail

`func (o *Authuser) SetPersonalEmail(v string)`

SetPersonalEmail sets PersonalEmail field to given value.

### HasPersonalEmail

`func (o *Authuser) HasPersonalEmail() bool`

HasPersonalEmail returns a boolean if a field has been set.

### SetPersonalEmailNil

`func (o *Authuser) SetPersonalEmailNil(b bool)`

 SetPersonalEmailNil sets the value for PersonalEmail to be an explicit nil

### UnsetPersonalEmail
`func (o *Authuser) UnsetPersonalEmail()`

UnsetPersonalEmail ensures that no value is present for PersonalEmail, not even an explicit nil
### GetFirstname

`func (o *Authuser) GetFirstname() string`

GetFirstname returns the Firstname field if non-nil, zero value otherwise.

### GetFirstnameOk

`func (o *Authuser) GetFirstnameOk() (*string, bool)`

GetFirstnameOk returns a tuple with the Firstname field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFirstname

`func (o *Authuser) SetFirstname(v string)`

SetFirstname sets Firstname field to given value.

### HasFirstname

`func (o *Authuser) HasFirstname() bool`

HasFirstname returns a boolean if a field has been set.

### SetFirstnameNil

`func (o *Authuser) SetFirstnameNil(b bool)`

 SetFirstnameNil sets the value for Firstname to be an explicit nil

### UnsetFirstname
`func (o *Authuser) UnsetFirstname()`

UnsetFirstname ensures that no value is present for Firstname, not even an explicit nil
### GetLastname

`func (o *Authuser) GetLastname() string`

GetLastname returns the Lastname field if non-nil, zero value otherwise.

### GetLastnameOk

`func (o *Authuser) GetLastnameOk() (*string, bool)`

GetLastnameOk returns a tuple with the Lastname field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastname

`func (o *Authuser) SetLastname(v string)`

SetLastname sets Lastname field to given value.

### HasLastname

`func (o *Authuser) HasLastname() bool`

HasLastname returns a boolean if a field has been set.

### SetLastnameNil

`func (o *Authuser) SetLastnameNil(b bool)`

 SetLastnameNil sets the value for Lastname to be an explicit nil

### UnsetLastname
`func (o *Authuser) UnsetLastname()`

UnsetLastname ensures that no value is present for Lastname, not even an explicit nil
### GetDisplayName

`func (o *Authuser) GetDisplayName() string`

GetDisplayName returns the DisplayName field if non-nil, zero value otherwise.

### GetDisplayNameOk

`func (o *Authuser) GetDisplayNameOk() (*string, bool)`

GetDisplayNameOk returns a tuple with the DisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayName

`func (o *Authuser) SetDisplayName(v string)`

SetDisplayName sets DisplayName field to given value.

### HasDisplayName

`func (o *Authuser) HasDisplayName() bool`

HasDisplayName returns a boolean if a field has been set.

### GetAlias

`func (o *Authuser) GetAlias() string`

GetAlias returns the Alias field if non-nil, zero value otherwise.

### GetAliasOk

`func (o *Authuser) GetAliasOk() (*string, bool)`

GetAliasOk returns a tuple with the Alias field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlias

`func (o *Authuser) SetAlias(v string)`

SetAlias sets Alias field to given value.

### HasAlias

`func (o *Authuser) HasAlias() bool`

HasAlias returns a boolean if a field has been set.

### GetLastPasswordChangeDate

`func (o *Authuser) GetLastPasswordChangeDate() SailPointTime`

GetLastPasswordChangeDate returns the LastPasswordChangeDate field if non-nil, zero value otherwise.

### GetLastPasswordChangeDateOk

`func (o *Authuser) GetLastPasswordChangeDateOk() (*SailPointTime, bool)`

GetLastPasswordChangeDateOk returns a tuple with the LastPasswordChangeDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastPasswordChangeDate

`func (o *Authuser) SetLastPasswordChangeDate(v SailPointTime)`

SetLastPasswordChangeDate sets LastPasswordChangeDate field to given value.

### HasLastPasswordChangeDate

`func (o *Authuser) HasLastPasswordChangeDate() bool`

HasLastPasswordChangeDate returns a boolean if a field has been set.

### SetLastPasswordChangeDateNil

`func (o *Authuser) SetLastPasswordChangeDateNil(b bool)`

 SetLastPasswordChangeDateNil sets the value for LastPasswordChangeDate to be an explicit nil

### UnsetLastPasswordChangeDate
`func (o *Authuser) UnsetLastPasswordChangeDate()`

UnsetLastPasswordChangeDate ensures that no value is present for LastPasswordChangeDate, not even an explicit nil
### GetLastLoginTimestamp

`func (o *Authuser) GetLastLoginTimestamp() int64`

GetLastLoginTimestamp returns the LastLoginTimestamp field if non-nil, zero value otherwise.

### GetLastLoginTimestampOk

`func (o *Authuser) GetLastLoginTimestampOk() (*int64, bool)`

GetLastLoginTimestampOk returns a tuple with the LastLoginTimestamp field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastLoginTimestamp

`func (o *Authuser) SetLastLoginTimestamp(v int64)`

SetLastLoginTimestamp sets LastLoginTimestamp field to given value.

### HasLastLoginTimestamp

`func (o *Authuser) HasLastLoginTimestamp() bool`

HasLastLoginTimestamp returns a boolean if a field has been set.

### GetCurrentLoginTimestamp

`func (o *Authuser) GetCurrentLoginTimestamp() int64`

GetCurrentLoginTimestamp returns the CurrentLoginTimestamp field if non-nil, zero value otherwise.

### GetCurrentLoginTimestampOk

`func (o *Authuser) GetCurrentLoginTimestampOk() (*int64, bool)`

GetCurrentLoginTimestampOk returns a tuple with the CurrentLoginTimestamp field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrentLoginTimestamp

`func (o *Authuser) SetCurrentLoginTimestamp(v int64)`

SetCurrentLoginTimestamp sets CurrentLoginTimestamp field to given value.

### HasCurrentLoginTimestamp

`func (o *Authuser) HasCurrentLoginTimestamp() bool`

HasCurrentLoginTimestamp returns a boolean if a field has been set.

### GetLastUnlockTimestamp

`func (o *Authuser) GetLastUnlockTimestamp() SailPointTime`

GetLastUnlockTimestamp returns the LastUnlockTimestamp field if non-nil, zero value otherwise.

### GetLastUnlockTimestampOk

`func (o *Authuser) GetLastUnlockTimestampOk() (*SailPointTime, bool)`

GetLastUnlockTimestampOk returns a tuple with the LastUnlockTimestamp field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastUnlockTimestamp

`func (o *Authuser) SetLastUnlockTimestamp(v SailPointTime)`

SetLastUnlockTimestamp sets LastUnlockTimestamp field to given value.

### HasLastUnlockTimestamp

`func (o *Authuser) HasLastUnlockTimestamp() bool`

HasLastUnlockTimestamp returns a boolean if a field has been set.

### SetLastUnlockTimestampNil

`func (o *Authuser) SetLastUnlockTimestampNil(b bool)`

 SetLastUnlockTimestampNil sets the value for LastUnlockTimestamp to be an explicit nil

### UnsetLastUnlockTimestamp
`func (o *Authuser) UnsetLastUnlockTimestamp()`

UnsetLastUnlockTimestamp ensures that no value is present for LastUnlockTimestamp, not even an explicit nil
### GetCapabilities

`func (o *Authuser) GetCapabilities() []string`

GetCapabilities returns the Capabilities field if non-nil, zero value otherwise.

### GetCapabilitiesOk

`func (o *Authuser) GetCapabilitiesOk() (*[]string, bool)`

GetCapabilitiesOk returns a tuple with the Capabilities field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCapabilities

`func (o *Authuser) SetCapabilities(v []string)`

SetCapabilities sets Capabilities field to given value.

### HasCapabilities

`func (o *Authuser) HasCapabilities() bool`

HasCapabilities returns a boolean if a field has been set.

### SetCapabilitiesNil

`func (o *Authuser) SetCapabilitiesNil(b bool)`

 SetCapabilitiesNil sets the value for Capabilities to be an explicit nil

### UnsetCapabilities
`func (o *Authuser) UnsetCapabilities()`

UnsetCapabilities ensures that no value is present for Capabilities, not even an explicit nil


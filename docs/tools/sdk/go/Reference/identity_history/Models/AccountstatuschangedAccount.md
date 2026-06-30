---
id: v1-accountstatuschanged-account
title: AccountstatuschangedAccount
pagination_label: AccountstatuschangedAccount
sidebar_label: AccountstatuschangedAccount
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccountstatuschangedAccount', 'V1AccountstatuschangedAccount'] 
slug: /tools/sdk/go/identityhistory/models/accountstatuschanged-account
tags: ['SDK', 'Software Development Kit', 'AccountstatuschangedAccount', 'V1AccountstatuschangedAccount']
---

# AccountstatuschangedAccount

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | the ID of the account in the database | [optional] 
**NativeIdentity** | Pointer to **string** | the native identifier of the account | [optional] 
**DisplayName** | Pointer to **string** | the display name of the account | [optional] 
**SourceId** | Pointer to **string** | the ID of the source for this account | [optional] 
**SourceName** | Pointer to **string** | the name of the source for this account | [optional] 
**EntitlementCount** | Pointer to **int32** | the number of entitlements on this account | [optional] 
**AccessType** | Pointer to **string** | this value is always \"account\" | [optional] 

## Methods

### NewAccountstatuschangedAccount

`func NewAccountstatuschangedAccount() *AccountstatuschangedAccount`

NewAccountstatuschangedAccount instantiates a new AccountstatuschangedAccount object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountstatuschangedAccountWithDefaults

`func NewAccountstatuschangedAccountWithDefaults() *AccountstatuschangedAccount`

NewAccountstatuschangedAccountWithDefaults instantiates a new AccountstatuschangedAccount object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *AccountstatuschangedAccount) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *AccountstatuschangedAccount) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *AccountstatuschangedAccount) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *AccountstatuschangedAccount) HasId() bool`

HasId returns a boolean if a field has been set.

### GetNativeIdentity

`func (o *AccountstatuschangedAccount) GetNativeIdentity() string`

GetNativeIdentity returns the NativeIdentity field if non-nil, zero value otherwise.

### GetNativeIdentityOk

`func (o *AccountstatuschangedAccount) GetNativeIdentityOk() (*string, bool)`

GetNativeIdentityOk returns a tuple with the NativeIdentity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNativeIdentity

`func (o *AccountstatuschangedAccount) SetNativeIdentity(v string)`

SetNativeIdentity sets NativeIdentity field to given value.

### HasNativeIdentity

`func (o *AccountstatuschangedAccount) HasNativeIdentity() bool`

HasNativeIdentity returns a boolean if a field has been set.

### GetDisplayName

`func (o *AccountstatuschangedAccount) GetDisplayName() string`

GetDisplayName returns the DisplayName field if non-nil, zero value otherwise.

### GetDisplayNameOk

`func (o *AccountstatuschangedAccount) GetDisplayNameOk() (*string, bool)`

GetDisplayNameOk returns a tuple with the DisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayName

`func (o *AccountstatuschangedAccount) SetDisplayName(v string)`

SetDisplayName sets DisplayName field to given value.

### HasDisplayName

`func (o *AccountstatuschangedAccount) HasDisplayName() bool`

HasDisplayName returns a boolean if a field has been set.

### GetSourceId

`func (o *AccountstatuschangedAccount) GetSourceId() string`

GetSourceId returns the SourceId field if non-nil, zero value otherwise.

### GetSourceIdOk

`func (o *AccountstatuschangedAccount) GetSourceIdOk() (*string, bool)`

GetSourceIdOk returns a tuple with the SourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceId

`func (o *AccountstatuschangedAccount) SetSourceId(v string)`

SetSourceId sets SourceId field to given value.

### HasSourceId

`func (o *AccountstatuschangedAccount) HasSourceId() bool`

HasSourceId returns a boolean if a field has been set.

### GetSourceName

`func (o *AccountstatuschangedAccount) GetSourceName() string`

GetSourceName returns the SourceName field if non-nil, zero value otherwise.

### GetSourceNameOk

`func (o *AccountstatuschangedAccount) GetSourceNameOk() (*string, bool)`

GetSourceNameOk returns a tuple with the SourceName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceName

`func (o *AccountstatuschangedAccount) SetSourceName(v string)`

SetSourceName sets SourceName field to given value.

### HasSourceName

`func (o *AccountstatuschangedAccount) HasSourceName() bool`

HasSourceName returns a boolean if a field has been set.

### GetEntitlementCount

`func (o *AccountstatuschangedAccount) GetEntitlementCount() int32`

GetEntitlementCount returns the EntitlementCount field if non-nil, zero value otherwise.

### GetEntitlementCountOk

`func (o *AccountstatuschangedAccount) GetEntitlementCountOk() (*int32, bool)`

GetEntitlementCountOk returns a tuple with the EntitlementCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntitlementCount

`func (o *AccountstatuschangedAccount) SetEntitlementCount(v int32)`

SetEntitlementCount sets EntitlementCount field to given value.

### HasEntitlementCount

`func (o *AccountstatuschangedAccount) HasEntitlementCount() bool`

HasEntitlementCount returns a boolean if a field has been set.

### GetAccessType

`func (o *AccountstatuschangedAccount) GetAccessType() string`

GetAccessType returns the AccessType field if non-nil, zero value otherwise.

### GetAccessTypeOk

`func (o *AccountstatuschangedAccount) GetAccessTypeOk() (*string, bool)`

GetAccessTypeOk returns a tuple with the AccessType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessType

`func (o *AccountstatuschangedAccount) SetAccessType(v string)`

SetAccessType sets AccessType field to given value.

### HasAccessType

`func (o *AccountstatuschangedAccount) HasAccessType() bool`

HasAccessType returns a boolean if a field has been set.



---
id: v2024-access-requested-account
title: AccessRequestedAccount
pagination_label: AccessRequestedAccount
sidebar_label: AccessRequestedAccount
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccessRequestedAccount', 'V2024AccessRequestedAccount'] 
slug: /tools/sdk/go/v2024/models/access-requested-account
tags: ['SDK', 'Software Development Kit', 'AccessRequestedAccount', 'V2024AccessRequestedAccount']
---

# AccessRequestedAccount

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

### NewAccessRequestedAccount

`func NewAccessRequestedAccount() *AccessRequestedAccount`

NewAccessRequestedAccount instantiates a new AccessRequestedAccount object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessRequestedAccountWithDefaults

`func NewAccessRequestedAccountWithDefaults() *AccessRequestedAccount`

NewAccessRequestedAccountWithDefaults instantiates a new AccessRequestedAccount object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *AccessRequestedAccount) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *AccessRequestedAccount) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *AccessRequestedAccount) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *AccessRequestedAccount) HasId() bool`

HasId returns a boolean if a field has been set.

### GetNativeIdentity

`func (o *AccessRequestedAccount) GetNativeIdentity() string`

GetNativeIdentity returns the NativeIdentity field if non-nil, zero value otherwise.

### GetNativeIdentityOk

`func (o *AccessRequestedAccount) GetNativeIdentityOk() (*string, bool)`

GetNativeIdentityOk returns a tuple with the NativeIdentity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNativeIdentity

`func (o *AccessRequestedAccount) SetNativeIdentity(v string)`

SetNativeIdentity sets NativeIdentity field to given value.

### HasNativeIdentity

`func (o *AccessRequestedAccount) HasNativeIdentity() bool`

HasNativeIdentity returns a boolean if a field has been set.

### GetDisplayName

`func (o *AccessRequestedAccount) GetDisplayName() string`

GetDisplayName returns the DisplayName field if non-nil, zero value otherwise.

### GetDisplayNameOk

`func (o *AccessRequestedAccount) GetDisplayNameOk() (*string, bool)`

GetDisplayNameOk returns a tuple with the DisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayName

`func (o *AccessRequestedAccount) SetDisplayName(v string)`

SetDisplayName sets DisplayName field to given value.

### HasDisplayName

`func (o *AccessRequestedAccount) HasDisplayName() bool`

HasDisplayName returns a boolean if a field has been set.

### GetSourceId

`func (o *AccessRequestedAccount) GetSourceId() string`

GetSourceId returns the SourceId field if non-nil, zero value otherwise.

### GetSourceIdOk

`func (o *AccessRequestedAccount) GetSourceIdOk() (*string, bool)`

GetSourceIdOk returns a tuple with the SourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceId

`func (o *AccessRequestedAccount) SetSourceId(v string)`

SetSourceId sets SourceId field to given value.

### HasSourceId

`func (o *AccessRequestedAccount) HasSourceId() bool`

HasSourceId returns a boolean if a field has been set.

### GetSourceName

`func (o *AccessRequestedAccount) GetSourceName() string`

GetSourceName returns the SourceName field if non-nil, zero value otherwise.

### GetSourceNameOk

`func (o *AccessRequestedAccount) GetSourceNameOk() (*string, bool)`

GetSourceNameOk returns a tuple with the SourceName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceName

`func (o *AccessRequestedAccount) SetSourceName(v string)`

SetSourceName sets SourceName field to given value.

### HasSourceName

`func (o *AccessRequestedAccount) HasSourceName() bool`

HasSourceName returns a boolean if a field has been set.

### GetEntitlementCount

`func (o *AccessRequestedAccount) GetEntitlementCount() int32`

GetEntitlementCount returns the EntitlementCount field if non-nil, zero value otherwise.

### GetEntitlementCountOk

`func (o *AccessRequestedAccount) GetEntitlementCountOk() (*int32, bool)`

GetEntitlementCountOk returns a tuple with the EntitlementCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntitlementCount

`func (o *AccessRequestedAccount) SetEntitlementCount(v int32)`

SetEntitlementCount sets EntitlementCount field to given value.

### HasEntitlementCount

`func (o *AccessRequestedAccount) HasEntitlementCount() bool`

HasEntitlementCount returns a boolean if a field has been set.

### GetAccessType

`func (o *AccessRequestedAccount) GetAccessType() string`

GetAccessType returns the AccessType field if non-nil, zero value otherwise.

### GetAccessTypeOk

`func (o *AccessRequestedAccount) GetAccessTypeOk() (*string, bool)`

GetAccessTypeOk returns a tuple with the AccessType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessType

`func (o *AccessRequestedAccount) SetAccessType(v string)`

SetAccessType sets AccessType field to given value.

### HasAccessType

`func (o *AccessRequestedAccount) HasAccessType() bool`

HasAccessType returns a boolean if a field has been set.



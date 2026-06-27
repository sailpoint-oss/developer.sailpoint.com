---
id: v1-accessitemaccountresponse
title: Accessitemaccountresponse
pagination_label: Accessitemaccountresponse
sidebar_label: Accessitemaccountresponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Accessitemaccountresponse', 'V1Accessitemaccountresponse'] 
slug: /tools/sdk/go/identityhistory/models/accessitemaccountresponse
tags: ['SDK', 'Software Development Kit', 'Accessitemaccountresponse', 'V1Accessitemaccountresponse']
---

# Accessitemaccountresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | the access item id | [optional] 
**AccessType** | Pointer to **string** | the access item type. account in this case | [optional] 
**DisplayName** | Pointer to **string** | the display name of the identity | [optional] 
**SourceName** | Pointer to **string** | the name of the source | [optional] 
**NativeIdentity** | **string** | the native identifier used to uniquely identify an acccount | 
**SourceId** | Pointer to **string** | the id of the source | [optional] 
**EntitlementCount** | Pointer to **int32** | the number of entitlements the account will create | [optional] 

## Methods

### NewAccessitemaccountresponse

`func NewAccessitemaccountresponse(nativeIdentity string, ) *Accessitemaccountresponse`

NewAccessitemaccountresponse instantiates a new Accessitemaccountresponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessitemaccountresponseWithDefaults

`func NewAccessitemaccountresponseWithDefaults() *Accessitemaccountresponse`

NewAccessitemaccountresponseWithDefaults instantiates a new Accessitemaccountresponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Accessitemaccountresponse) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Accessitemaccountresponse) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Accessitemaccountresponse) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Accessitemaccountresponse) HasId() bool`

HasId returns a boolean if a field has been set.

### GetAccessType

`func (o *Accessitemaccountresponse) GetAccessType() string`

GetAccessType returns the AccessType field if non-nil, zero value otherwise.

### GetAccessTypeOk

`func (o *Accessitemaccountresponse) GetAccessTypeOk() (*string, bool)`

GetAccessTypeOk returns a tuple with the AccessType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessType

`func (o *Accessitemaccountresponse) SetAccessType(v string)`

SetAccessType sets AccessType field to given value.

### HasAccessType

`func (o *Accessitemaccountresponse) HasAccessType() bool`

HasAccessType returns a boolean if a field has been set.

### GetDisplayName

`func (o *Accessitemaccountresponse) GetDisplayName() string`

GetDisplayName returns the DisplayName field if non-nil, zero value otherwise.

### GetDisplayNameOk

`func (o *Accessitemaccountresponse) GetDisplayNameOk() (*string, bool)`

GetDisplayNameOk returns a tuple with the DisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayName

`func (o *Accessitemaccountresponse) SetDisplayName(v string)`

SetDisplayName sets DisplayName field to given value.

### HasDisplayName

`func (o *Accessitemaccountresponse) HasDisplayName() bool`

HasDisplayName returns a boolean if a field has been set.

### GetSourceName

`func (o *Accessitemaccountresponse) GetSourceName() string`

GetSourceName returns the SourceName field if non-nil, zero value otherwise.

### GetSourceNameOk

`func (o *Accessitemaccountresponse) GetSourceNameOk() (*string, bool)`

GetSourceNameOk returns a tuple with the SourceName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceName

`func (o *Accessitemaccountresponse) SetSourceName(v string)`

SetSourceName sets SourceName field to given value.

### HasSourceName

`func (o *Accessitemaccountresponse) HasSourceName() bool`

HasSourceName returns a boolean if a field has been set.

### GetNativeIdentity

`func (o *Accessitemaccountresponse) GetNativeIdentity() string`

GetNativeIdentity returns the NativeIdentity field if non-nil, zero value otherwise.

### GetNativeIdentityOk

`func (o *Accessitemaccountresponse) GetNativeIdentityOk() (*string, bool)`

GetNativeIdentityOk returns a tuple with the NativeIdentity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNativeIdentity

`func (o *Accessitemaccountresponse) SetNativeIdentity(v string)`

SetNativeIdentity sets NativeIdentity field to given value.


### GetSourceId

`func (o *Accessitemaccountresponse) GetSourceId() string`

GetSourceId returns the SourceId field if non-nil, zero value otherwise.

### GetSourceIdOk

`func (o *Accessitemaccountresponse) GetSourceIdOk() (*string, bool)`

GetSourceIdOk returns a tuple with the SourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceId

`func (o *Accessitemaccountresponse) SetSourceId(v string)`

SetSourceId sets SourceId field to given value.

### HasSourceId

`func (o *Accessitemaccountresponse) HasSourceId() bool`

HasSourceId returns a boolean if a field has been set.

### GetEntitlementCount

`func (o *Accessitemaccountresponse) GetEntitlementCount() int32`

GetEntitlementCount returns the EntitlementCount field if non-nil, zero value otherwise.

### GetEntitlementCountOk

`func (o *Accessitemaccountresponse) GetEntitlementCountOk() (*int32, bool)`

GetEntitlementCountOk returns a tuple with the EntitlementCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntitlementCount

`func (o *Accessitemaccountresponse) SetEntitlementCount(v int32)`

SetEntitlementCount sets EntitlementCount field to given value.

### HasEntitlementCount

`func (o *Accessitemaccountresponse) HasEntitlementCount() bool`

HasEntitlementCount returns a boolean if a field has been set.



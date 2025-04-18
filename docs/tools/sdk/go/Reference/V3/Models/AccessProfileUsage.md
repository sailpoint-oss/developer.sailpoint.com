---
id: access-profile-usage
title: AccessProfileUsage
pagination_label: AccessProfileUsage
sidebar_label: AccessProfileUsage
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccessProfileUsage', 'AccessProfileUsage'] 
slug: /tools/sdk/go/v3/models/access-profile-usage
tags: ['SDK', 'Software Development Kit', 'AccessProfileUsage', 'AccessProfileUsage']
---

# AccessProfileUsage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccessProfileId** | Pointer to **string** | ID of the Access Profile that is in use | [optional] 
**UsedBy** | Pointer to [**[]AccessProfileUsageUsedByInner**](access-profile-usage-used-by-inner) | List of references to objects which are using the indicated Access Profile | [optional] 

## Methods

### NewAccessProfileUsage

`func NewAccessProfileUsage() *AccessProfileUsage`

NewAccessProfileUsage instantiates a new AccessProfileUsage object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessProfileUsageWithDefaults

`func NewAccessProfileUsageWithDefaults() *AccessProfileUsage`

NewAccessProfileUsageWithDefaults instantiates a new AccessProfileUsage object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccessProfileId

`func (o *AccessProfileUsage) GetAccessProfileId() string`

GetAccessProfileId returns the AccessProfileId field if non-nil, zero value otherwise.

### GetAccessProfileIdOk

`func (o *AccessProfileUsage) GetAccessProfileIdOk() (*string, bool)`

GetAccessProfileIdOk returns a tuple with the AccessProfileId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessProfileId

`func (o *AccessProfileUsage) SetAccessProfileId(v string)`

SetAccessProfileId sets AccessProfileId field to given value.

### HasAccessProfileId

`func (o *AccessProfileUsage) HasAccessProfileId() bool`

HasAccessProfileId returns a boolean if a field has been set.

### GetUsedBy

`func (o *AccessProfileUsage) GetUsedBy() []AccessProfileUsageUsedByInner`

GetUsedBy returns the UsedBy field if non-nil, zero value otherwise.

### GetUsedByOk

`func (o *AccessProfileUsage) GetUsedByOk() (*[]AccessProfileUsageUsedByInner, bool)`

GetUsedByOk returns a tuple with the UsedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUsedBy

`func (o *AccessProfileUsage) SetUsedBy(v []AccessProfileUsageUsedByInner)`

SetUsedBy sets UsedBy field to given value.

### HasUsedBy

`func (o *AccessProfileUsage) HasUsedBy() bool`

HasUsedBy returns a boolean if a field has been set.



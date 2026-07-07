---
id: v1-accessprofilebulkdeleterequest
title: Accessprofilebulkdeleterequest
pagination_label: Accessprofilebulkdeleterequest
sidebar_label: Accessprofilebulkdeleterequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Accessprofilebulkdeleterequest', 'V1Accessprofilebulkdeleterequest'] 
slug: /tools/sdk/go/accessprofiles/models/accessprofilebulkdeleterequest
tags: ['SDK', 'Software Development Kit', 'Accessprofilebulkdeleterequest', 'V1Accessprofilebulkdeleterequest']
---

# Accessprofilebulkdeleterequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccessProfileIds** | Pointer to **[]string** | List of IDs of Access Profiles to be deleted. | [optional] 
**BestEffortOnly** | Pointer to **bool** | If **true**, silently skip over any of the specified Access Profiles if they cannot be deleted because they are in use. If **false**, no deletions will be attempted if any of the Access Profiles are in use. | [optional] 

## Methods

### NewAccessprofilebulkdeleterequest

`func NewAccessprofilebulkdeleterequest() *Accessprofilebulkdeleterequest`

NewAccessprofilebulkdeleterequest instantiates a new Accessprofilebulkdeleterequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessprofilebulkdeleterequestWithDefaults

`func NewAccessprofilebulkdeleterequestWithDefaults() *Accessprofilebulkdeleterequest`

NewAccessprofilebulkdeleterequestWithDefaults instantiates a new Accessprofilebulkdeleterequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccessProfileIds

`func (o *Accessprofilebulkdeleterequest) GetAccessProfileIds() []string`

GetAccessProfileIds returns the AccessProfileIds field if non-nil, zero value otherwise.

### GetAccessProfileIdsOk

`func (o *Accessprofilebulkdeleterequest) GetAccessProfileIdsOk() (*[]string, bool)`

GetAccessProfileIdsOk returns a tuple with the AccessProfileIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessProfileIds

`func (o *Accessprofilebulkdeleterequest) SetAccessProfileIds(v []string)`

SetAccessProfileIds sets AccessProfileIds field to given value.

### HasAccessProfileIds

`func (o *Accessprofilebulkdeleterequest) HasAccessProfileIds() bool`

HasAccessProfileIds returns a boolean if a field has been set.

### GetBestEffortOnly

`func (o *Accessprofilebulkdeleterequest) GetBestEffortOnly() bool`

GetBestEffortOnly returns the BestEffortOnly field if non-nil, zero value otherwise.

### GetBestEffortOnlyOk

`func (o *Accessprofilebulkdeleterequest) GetBestEffortOnlyOk() (*bool, bool)`

GetBestEffortOnlyOk returns a tuple with the BestEffortOnly field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBestEffortOnly

`func (o *Accessprofilebulkdeleterequest) SetBestEffortOnly(v bool)`

SetBestEffortOnly sets BestEffortOnly field to given value.

### HasBestEffortOnly

`func (o *Accessprofilebulkdeleterequest) HasBestEffortOnly() bool`

HasBestEffortOnly returns a boolean if a field has been set.



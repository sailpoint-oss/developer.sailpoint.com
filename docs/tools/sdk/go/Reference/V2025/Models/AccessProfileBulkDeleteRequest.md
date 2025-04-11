---
id: v2025-access-profile-bulk-delete-request
title: AccessProfileBulkDeleteRequest
pagination_label: AccessProfileBulkDeleteRequest
sidebar_label: AccessProfileBulkDeleteRequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccessProfileBulkDeleteRequest', 'V2025AccessProfileBulkDeleteRequest'] 
slug: /tools/sdk/go/v2025/models/access-profile-bulk-delete-request
tags: ['SDK', 'Software Development Kit', 'AccessProfileBulkDeleteRequest', 'V2025AccessProfileBulkDeleteRequest']
---

# AccessProfileBulkDeleteRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccessProfileIds** | Pointer to **[]string** | List of IDs of Access Profiles to be deleted. | [optional] 
**BestEffortOnly** | Pointer to **bool** | If **true**, silently skip over any of the specified Access Profiles if they cannot be deleted because they are in use. If **false**, no deletions will be attempted if any of the Access Profiles are in use. | [optional] 

## Methods

### NewAccessProfileBulkDeleteRequest

`func NewAccessProfileBulkDeleteRequest() *AccessProfileBulkDeleteRequest`

NewAccessProfileBulkDeleteRequest instantiates a new AccessProfileBulkDeleteRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessProfileBulkDeleteRequestWithDefaults

`func NewAccessProfileBulkDeleteRequestWithDefaults() *AccessProfileBulkDeleteRequest`

NewAccessProfileBulkDeleteRequestWithDefaults instantiates a new AccessProfileBulkDeleteRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccessProfileIds

`func (o *AccessProfileBulkDeleteRequest) GetAccessProfileIds() []string`

GetAccessProfileIds returns the AccessProfileIds field if non-nil, zero value otherwise.

### GetAccessProfileIdsOk

`func (o *AccessProfileBulkDeleteRequest) GetAccessProfileIdsOk() (*[]string, bool)`

GetAccessProfileIdsOk returns a tuple with the AccessProfileIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessProfileIds

`func (o *AccessProfileBulkDeleteRequest) SetAccessProfileIds(v []string)`

SetAccessProfileIds sets AccessProfileIds field to given value.

### HasAccessProfileIds

`func (o *AccessProfileBulkDeleteRequest) HasAccessProfileIds() bool`

HasAccessProfileIds returns a boolean if a field has been set.

### GetBestEffortOnly

`func (o *AccessProfileBulkDeleteRequest) GetBestEffortOnly() bool`

GetBestEffortOnly returns the BestEffortOnly field if non-nil, zero value otherwise.

### GetBestEffortOnlyOk

`func (o *AccessProfileBulkDeleteRequest) GetBestEffortOnlyOk() (*bool, bool)`

GetBestEffortOnlyOk returns a tuple with the BestEffortOnly field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBestEffortOnly

`func (o *AccessProfileBulkDeleteRequest) SetBestEffortOnly(v bool)`

SetBestEffortOnly sets BestEffortOnly field to given value.

### HasBestEffortOnly

`func (o *AccessProfileBulkDeleteRequest) HasBestEffortOnly() bool`

HasBestEffortOnly returns a boolean if a field has been set.



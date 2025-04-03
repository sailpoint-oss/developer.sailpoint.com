---
id: v2025-access-request-response
title: AccessRequestResponse
pagination_label: AccessRequestResponse
sidebar_label: AccessRequestResponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccessRequestResponse', 'V2025AccessRequestResponse'] 
slug: /tools/sdk/go/v2025/models/access-request-response
tags: ['SDK', 'Software Development Kit', 'AccessRequestResponse', 'V2025AccessRequestResponse']
---

# AccessRequestResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**NewRequests** | Pointer to [**[]AccessRequestTracking**](access-request-tracking) | A list of new access request tracking data mapped to the values requested. | [optional] 
**ExistingRequests** | Pointer to [**[]AccessRequestTracking**](access-request-tracking) | A list of existing access request tracking data mapped to the values requested.  This indicates access has already been requested for this item. | [optional] 

## Methods

### NewAccessRequestResponse

`func NewAccessRequestResponse() *AccessRequestResponse`

NewAccessRequestResponse instantiates a new AccessRequestResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessRequestResponseWithDefaults

`func NewAccessRequestResponseWithDefaults() *AccessRequestResponse`

NewAccessRequestResponseWithDefaults instantiates a new AccessRequestResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetNewRequests

`func (o *AccessRequestResponse) GetNewRequests() []AccessRequestTracking`

GetNewRequests returns the NewRequests field if non-nil, zero value otherwise.

### GetNewRequestsOk

`func (o *AccessRequestResponse) GetNewRequestsOk() (*[]AccessRequestTracking, bool)`

GetNewRequestsOk returns a tuple with the NewRequests field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNewRequests

`func (o *AccessRequestResponse) SetNewRequests(v []AccessRequestTracking)`

SetNewRequests sets NewRequests field to given value.

### HasNewRequests

`func (o *AccessRequestResponse) HasNewRequests() bool`

HasNewRequests returns a boolean if a field has been set.

### GetExistingRequests

`func (o *AccessRequestResponse) GetExistingRequests() []AccessRequestTracking`

GetExistingRequests returns the ExistingRequests field if non-nil, zero value otherwise.

### GetExistingRequestsOk

`func (o *AccessRequestResponse) GetExistingRequestsOk() (*[]AccessRequestTracking, bool)`

GetExistingRequestsOk returns a tuple with the ExistingRequests field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExistingRequests

`func (o *AccessRequestResponse) SetExistingRequests(v []AccessRequestTracking)`

SetExistingRequests sets ExistingRequests field to given value.

### HasExistingRequests

`func (o *AccessRequestResponse) HasExistingRequests() bool`

HasExistingRequests returns a boolean if a field has been set.



---
id: v2024-access-request-dynamic-approver
title: AccessRequestDynamicApprover
pagination_label: AccessRequestDynamicApprover
sidebar_label: AccessRequestDynamicApprover
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccessRequestDynamicApprover', 'V2024AccessRequestDynamicApprover'] 
slug: /tools/sdk/go/v2024/models/access-request-dynamic-approver
tags: ['SDK', 'Software Development Kit', 'AccessRequestDynamicApprover', 'V2024AccessRequestDynamicApprover']
---

# AccessRequestDynamicApprover

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccessRequestId** | **string** | The unique ID of the access request object. Can be used with the [access request status endpoint](https://developer.sailpoint.com/idn/api/beta/list-access-request-status) to get the status of the request.  | 
**RequestedFor** | [**[]AccessItemRequestedForDto**](access-item-requested-for-dto) | Identities access was requested for. | 
**RequestedItems** | [**[]AccessRequestDynamicApproverRequestedItemsInner**](access-request-dynamic-approver-requested-items-inner) | The access items that are being requested. | 
**RequestedBy** | [**AccessItemRequesterDto**](access-item-requester-dto) |  | 

## Methods

### NewAccessRequestDynamicApprover

`func NewAccessRequestDynamicApprover(accessRequestId string, requestedFor []AccessItemRequestedForDto, requestedItems []AccessRequestDynamicApproverRequestedItemsInner, requestedBy AccessItemRequesterDto, ) *AccessRequestDynamicApprover`

NewAccessRequestDynamicApprover instantiates a new AccessRequestDynamicApprover object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessRequestDynamicApproverWithDefaults

`func NewAccessRequestDynamicApproverWithDefaults() *AccessRequestDynamicApprover`

NewAccessRequestDynamicApproverWithDefaults instantiates a new AccessRequestDynamicApprover object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccessRequestId

`func (o *AccessRequestDynamicApprover) GetAccessRequestId() string`

GetAccessRequestId returns the AccessRequestId field if non-nil, zero value otherwise.

### GetAccessRequestIdOk

`func (o *AccessRequestDynamicApprover) GetAccessRequestIdOk() (*string, bool)`

GetAccessRequestIdOk returns a tuple with the AccessRequestId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessRequestId

`func (o *AccessRequestDynamicApprover) SetAccessRequestId(v string)`

SetAccessRequestId sets AccessRequestId field to given value.


### GetRequestedFor

`func (o *AccessRequestDynamicApprover) GetRequestedFor() []AccessItemRequestedForDto`

GetRequestedFor returns the RequestedFor field if non-nil, zero value otherwise.

### GetRequestedForOk

`func (o *AccessRequestDynamicApprover) GetRequestedForOk() (*[]AccessItemRequestedForDto, bool)`

GetRequestedForOk returns a tuple with the RequestedFor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestedFor

`func (o *AccessRequestDynamicApprover) SetRequestedFor(v []AccessItemRequestedForDto)`

SetRequestedFor sets RequestedFor field to given value.


### GetRequestedItems

`func (o *AccessRequestDynamicApprover) GetRequestedItems() []AccessRequestDynamicApproverRequestedItemsInner`

GetRequestedItems returns the RequestedItems field if non-nil, zero value otherwise.

### GetRequestedItemsOk

`func (o *AccessRequestDynamicApprover) GetRequestedItemsOk() (*[]AccessRequestDynamicApproverRequestedItemsInner, bool)`

GetRequestedItemsOk returns a tuple with the RequestedItems field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestedItems

`func (o *AccessRequestDynamicApprover) SetRequestedItems(v []AccessRequestDynamicApproverRequestedItemsInner)`

SetRequestedItems sets RequestedItems field to given value.


### GetRequestedBy

`func (o *AccessRequestDynamicApprover) GetRequestedBy() AccessItemRequesterDto`

GetRequestedBy returns the RequestedBy field if non-nil, zero value otherwise.

### GetRequestedByOk

`func (o *AccessRequestDynamicApprover) GetRequestedByOk() (*AccessItemRequesterDto, bool)`

GetRequestedByOk returns a tuple with the RequestedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestedBy

`func (o *AccessRequestDynamicApprover) SetRequestedBy(v AccessItemRequesterDto)`

SetRequestedBy sets RequestedBy field to given value.




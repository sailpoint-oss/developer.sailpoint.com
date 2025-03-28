---
id: beta-access-request-dynamic-approver
title: AccessRequestDynamicApprover
pagination_label: AccessRequestDynamicApprover
sidebar_label: AccessRequestDynamicApprover
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccessRequestDynamicApprover', 'BetaAccessRequestDynamicApprover'] 
slug: /tools/sdk/go/beta/models/access-request-dynamic-approver
tags: ['SDK', 'Software Development Kit', 'AccessRequestDynamicApprover', 'BetaAccessRequestDynamicApprover']
---

# AccessRequestDynamicApprover

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccessRequestId** | **string** | Unique ID of the access request object. You can use this ID with the [Access Request Status endpoint](https://developer.sailpoint.com/idn/api/beta/list-access-request-status) to get the request&#39;s status. | 
**RequestedFor** | [**[]AccessItemRequestedForDto1**](access-item-requested-for-dto1) | Identities access was requested for. | 
**RequestedItems** | [**[]AccessRequestDynamicApproverRequestedItemsInner**](access-request-dynamic-approver-requested-items-inner) | Requested access items. | 
**RequestedBy** | [**AccessItemRequesterDto1**](access-item-requester-dto1) |  | 

## Methods

### NewAccessRequestDynamicApprover

`func NewAccessRequestDynamicApprover(accessRequestId string, requestedFor []AccessItemRequestedForDto1, requestedItems []AccessRequestDynamicApproverRequestedItemsInner, requestedBy AccessItemRequesterDto1, ) *AccessRequestDynamicApprover`

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

`func (o *AccessRequestDynamicApprover) GetRequestedFor() []AccessItemRequestedForDto1`

GetRequestedFor returns the RequestedFor field if non-nil, zero value otherwise.

### GetRequestedForOk

`func (o *AccessRequestDynamicApprover) GetRequestedForOk() (*[]AccessItemRequestedForDto1, bool)`

GetRequestedForOk returns a tuple with the RequestedFor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestedFor

`func (o *AccessRequestDynamicApprover) SetRequestedFor(v []AccessItemRequestedForDto1)`

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

`func (o *AccessRequestDynamicApprover) GetRequestedBy() AccessItemRequesterDto1`

GetRequestedBy returns the RequestedBy field if non-nil, zero value otherwise.

### GetRequestedByOk

`func (o *AccessRequestDynamicApprover) GetRequestedByOk() (*AccessItemRequesterDto1, bool)`

GetRequestedByOk returns a tuple with the RequestedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestedBy

`func (o *AccessRequestDynamicApprover) SetRequestedBy(v AccessItemRequesterDto1)`

SetRequestedBy sets RequestedBy field to given value.




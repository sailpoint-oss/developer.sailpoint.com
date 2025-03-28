---
id: beta-access-request-pre-approval
title: AccessRequestPreApproval
pagination_label: AccessRequestPreApproval
sidebar_label: AccessRequestPreApproval
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccessRequestPreApproval', 'BetaAccessRequestPreApproval'] 
slug: /tools/sdk/go/beta/models/access-request-pre-approval
tags: ['SDK', 'Software Development Kit', 'AccessRequestPreApproval', 'BetaAccessRequestPreApproval']
---

# AccessRequestPreApproval

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccessRequestId** | **string** | Access request&#39;s unique ID. | 
**RequestedFor** | [**[]AccessItemRequestedForDto1**](access-item-requested-for-dto1) | Identities whom access was requested for. | 
**RequestedItems** | [**[]AccessRequestPreApprovalRequestedItemsInner**](access-request-pre-approval-requested-items-inner) | Details about each requested access item. | 
**RequestedBy** | [**AccessItemRequesterDto1**](access-item-requester-dto1) |  | 

## Methods

### NewAccessRequestPreApproval

`func NewAccessRequestPreApproval(accessRequestId string, requestedFor []AccessItemRequestedForDto1, requestedItems []AccessRequestPreApprovalRequestedItemsInner, requestedBy AccessItemRequesterDto1, ) *AccessRequestPreApproval`

NewAccessRequestPreApproval instantiates a new AccessRequestPreApproval object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessRequestPreApprovalWithDefaults

`func NewAccessRequestPreApprovalWithDefaults() *AccessRequestPreApproval`

NewAccessRequestPreApprovalWithDefaults instantiates a new AccessRequestPreApproval object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccessRequestId

`func (o *AccessRequestPreApproval) GetAccessRequestId() string`

GetAccessRequestId returns the AccessRequestId field if non-nil, zero value otherwise.

### GetAccessRequestIdOk

`func (o *AccessRequestPreApproval) GetAccessRequestIdOk() (*string, bool)`

GetAccessRequestIdOk returns a tuple with the AccessRequestId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessRequestId

`func (o *AccessRequestPreApproval) SetAccessRequestId(v string)`

SetAccessRequestId sets AccessRequestId field to given value.


### GetRequestedFor

`func (o *AccessRequestPreApproval) GetRequestedFor() []AccessItemRequestedForDto1`

GetRequestedFor returns the RequestedFor field if non-nil, zero value otherwise.

### GetRequestedForOk

`func (o *AccessRequestPreApproval) GetRequestedForOk() (*[]AccessItemRequestedForDto1, bool)`

GetRequestedForOk returns a tuple with the RequestedFor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestedFor

`func (o *AccessRequestPreApproval) SetRequestedFor(v []AccessItemRequestedForDto1)`

SetRequestedFor sets RequestedFor field to given value.


### GetRequestedItems

`func (o *AccessRequestPreApproval) GetRequestedItems() []AccessRequestPreApprovalRequestedItemsInner`

GetRequestedItems returns the RequestedItems field if non-nil, zero value otherwise.

### GetRequestedItemsOk

`func (o *AccessRequestPreApproval) GetRequestedItemsOk() (*[]AccessRequestPreApprovalRequestedItemsInner, bool)`

GetRequestedItemsOk returns a tuple with the RequestedItems field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestedItems

`func (o *AccessRequestPreApproval) SetRequestedItems(v []AccessRequestPreApprovalRequestedItemsInner)`

SetRequestedItems sets RequestedItems field to given value.


### GetRequestedBy

`func (o *AccessRequestPreApproval) GetRequestedBy() AccessItemRequesterDto1`

GetRequestedBy returns the RequestedBy field if non-nil, zero value otherwise.

### GetRequestedByOk

`func (o *AccessRequestPreApproval) GetRequestedByOk() (*AccessItemRequesterDto1, bool)`

GetRequestedByOk returns a tuple with the RequestedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestedBy

`func (o *AccessRequestPreApproval) SetRequestedBy(v AccessItemRequesterDto1)`

SetRequestedBy sets RequestedBy field to given value.




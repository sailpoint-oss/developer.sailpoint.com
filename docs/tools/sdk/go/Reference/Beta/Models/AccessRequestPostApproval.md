---
id: beta-access-request-post-approval
title: AccessRequestPostApproval
pagination_label: AccessRequestPostApproval
sidebar_label: AccessRequestPostApproval
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccessRequestPostApproval', 'BetaAccessRequestPostApproval'] 
slug: /tools/sdk/go/beta/models/access-request-post-approval
tags: ['SDK', 'Software Development Kit', 'AccessRequestPostApproval', 'BetaAccessRequestPostApproval']
---

# AccessRequestPostApproval

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccessRequestId** | **string** | Access request&#39;s unique ID. | 
**RequestedFor** | [**[]AccessItemRequestedForDto1**](access-item-requested-for-dto1) | Identities whom access was requested for. | 
**RequestedItemsStatus** | [**[]AccessRequestPostApprovalRequestedItemsStatusInner**](access-request-post-approval-requested-items-status-inner) | Details about the outcome of each requested access item. | 
**RequestedBy** | [**AccessItemRequesterDto1**](access-item-requester-dto1) |  | 

## Methods

### NewAccessRequestPostApproval

`func NewAccessRequestPostApproval(accessRequestId string, requestedFor []AccessItemRequestedForDto1, requestedItemsStatus []AccessRequestPostApprovalRequestedItemsStatusInner, requestedBy AccessItemRequesterDto1, ) *AccessRequestPostApproval`

NewAccessRequestPostApproval instantiates a new AccessRequestPostApproval object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessRequestPostApprovalWithDefaults

`func NewAccessRequestPostApprovalWithDefaults() *AccessRequestPostApproval`

NewAccessRequestPostApprovalWithDefaults instantiates a new AccessRequestPostApproval object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccessRequestId

`func (o *AccessRequestPostApproval) GetAccessRequestId() string`

GetAccessRequestId returns the AccessRequestId field if non-nil, zero value otherwise.

### GetAccessRequestIdOk

`func (o *AccessRequestPostApproval) GetAccessRequestIdOk() (*string, bool)`

GetAccessRequestIdOk returns a tuple with the AccessRequestId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessRequestId

`func (o *AccessRequestPostApproval) SetAccessRequestId(v string)`

SetAccessRequestId sets AccessRequestId field to given value.


### GetRequestedFor

`func (o *AccessRequestPostApproval) GetRequestedFor() []AccessItemRequestedForDto1`

GetRequestedFor returns the RequestedFor field if non-nil, zero value otherwise.

### GetRequestedForOk

`func (o *AccessRequestPostApproval) GetRequestedForOk() (*[]AccessItemRequestedForDto1, bool)`

GetRequestedForOk returns a tuple with the RequestedFor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestedFor

`func (o *AccessRequestPostApproval) SetRequestedFor(v []AccessItemRequestedForDto1)`

SetRequestedFor sets RequestedFor field to given value.


### GetRequestedItemsStatus

`func (o *AccessRequestPostApproval) GetRequestedItemsStatus() []AccessRequestPostApprovalRequestedItemsStatusInner`

GetRequestedItemsStatus returns the RequestedItemsStatus field if non-nil, zero value otherwise.

### GetRequestedItemsStatusOk

`func (o *AccessRequestPostApproval) GetRequestedItemsStatusOk() (*[]AccessRequestPostApprovalRequestedItemsStatusInner, bool)`

GetRequestedItemsStatusOk returns a tuple with the RequestedItemsStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestedItemsStatus

`func (o *AccessRequestPostApproval) SetRequestedItemsStatus(v []AccessRequestPostApprovalRequestedItemsStatusInner)`

SetRequestedItemsStatus sets RequestedItemsStatus field to given value.


### GetRequestedBy

`func (o *AccessRequestPostApproval) GetRequestedBy() AccessItemRequesterDto1`

GetRequestedBy returns the RequestedBy field if non-nil, zero value otherwise.

### GetRequestedByOk

`func (o *AccessRequestPostApproval) GetRequestedByOk() (*AccessItemRequesterDto1, bool)`

GetRequestedByOk returns a tuple with the RequestedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestedBy

`func (o *AccessRequestPostApproval) SetRequestedBy(v AccessItemRequesterDto1)`

SetRequestedBy sets RequestedBy field to given value.




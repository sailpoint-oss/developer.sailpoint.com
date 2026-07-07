---
id: v1-accessrequestpostapproval
title: Accessrequestpostapproval
pagination_label: Accessrequestpostapproval
sidebar_label: Accessrequestpostapproval
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Accessrequestpostapproval', 'V1Accessrequestpostapproval'] 
slug: /tools/sdk/go/triggers/models/accessrequestpostapproval
tags: ['SDK', 'Software Development Kit', 'Accessrequestpostapproval', 'V1Accessrequestpostapproval']
---

# Accessrequestpostapproval

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccessRequestId** | **string** | The unique ID of the access request. | 
**RequestedFor** | [**[]Accessitemrequestedfordto**](accessitemrequestedfordto) | Identities access was requested for. | 
**RequestedItemsStatus** | [**[]AccessrequestpostapprovalRequestedItemsStatusInner**](accessrequestpostapproval-requested-items-status-inner) | Details on the outcome of each access item. | 
**RequestedBy** | [**Accessitemrequesterdto**](accessitemrequesterdto) |  | 

## Methods

### NewAccessrequestpostapproval

`func NewAccessrequestpostapproval(accessRequestId string, requestedFor []Accessitemrequestedfordto, requestedItemsStatus []AccessrequestpostapprovalRequestedItemsStatusInner, requestedBy Accessitemrequesterdto, ) *Accessrequestpostapproval`

NewAccessrequestpostapproval instantiates a new Accessrequestpostapproval object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessrequestpostapprovalWithDefaults

`func NewAccessrequestpostapprovalWithDefaults() *Accessrequestpostapproval`

NewAccessrequestpostapprovalWithDefaults instantiates a new Accessrequestpostapproval object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccessRequestId

`func (o *Accessrequestpostapproval) GetAccessRequestId() string`

GetAccessRequestId returns the AccessRequestId field if non-nil, zero value otherwise.

### GetAccessRequestIdOk

`func (o *Accessrequestpostapproval) GetAccessRequestIdOk() (*string, bool)`

GetAccessRequestIdOk returns a tuple with the AccessRequestId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessRequestId

`func (o *Accessrequestpostapproval) SetAccessRequestId(v string)`

SetAccessRequestId sets AccessRequestId field to given value.


### GetRequestedFor

`func (o *Accessrequestpostapproval) GetRequestedFor() []Accessitemrequestedfordto`

GetRequestedFor returns the RequestedFor field if non-nil, zero value otherwise.

### GetRequestedForOk

`func (o *Accessrequestpostapproval) GetRequestedForOk() (*[]Accessitemrequestedfordto, bool)`

GetRequestedForOk returns a tuple with the RequestedFor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestedFor

`func (o *Accessrequestpostapproval) SetRequestedFor(v []Accessitemrequestedfordto)`

SetRequestedFor sets RequestedFor field to given value.


### GetRequestedItemsStatus

`func (o *Accessrequestpostapproval) GetRequestedItemsStatus() []AccessrequestpostapprovalRequestedItemsStatusInner`

GetRequestedItemsStatus returns the RequestedItemsStatus field if non-nil, zero value otherwise.

### GetRequestedItemsStatusOk

`func (o *Accessrequestpostapproval) GetRequestedItemsStatusOk() (*[]AccessrequestpostapprovalRequestedItemsStatusInner, bool)`

GetRequestedItemsStatusOk returns a tuple with the RequestedItemsStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestedItemsStatus

`func (o *Accessrequestpostapproval) SetRequestedItemsStatus(v []AccessrequestpostapprovalRequestedItemsStatusInner)`

SetRequestedItemsStatus sets RequestedItemsStatus field to given value.


### GetRequestedBy

`func (o *Accessrequestpostapproval) GetRequestedBy() Accessitemrequesterdto`

GetRequestedBy returns the RequestedBy field if non-nil, zero value otherwise.

### GetRequestedByOk

`func (o *Accessrequestpostapproval) GetRequestedByOk() (*Accessitemrequesterdto, bool)`

GetRequestedByOk returns a tuple with the RequestedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestedBy

`func (o *Accessrequestpostapproval) SetRequestedBy(v Accessitemrequesterdto)`

SetRequestedBy sets RequestedBy field to given value.




---
id: v1-accessrequestpreapproval
title: Accessrequestpreapproval
pagination_label: Accessrequestpreapproval
sidebar_label: Accessrequestpreapproval
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Accessrequestpreapproval', 'V1Accessrequestpreapproval'] 
slug: /tools/sdk/go/triggers/models/accessrequestpreapproval
tags: ['SDK', 'Software Development Kit', 'Accessrequestpreapproval', 'V1Accessrequestpreapproval']
---

# Accessrequestpreapproval

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccessRequestId** | **string** | The unique ID of the access request. | 
**RequestedFor** | [**[]Accessitemrequestedfordto**](accessitemrequestedfordto) | Identities access was requested for. | 
**RequestedItems** | [**[]AccessrequestpreapprovalRequestedItemsInner**](accessrequestpreapproval-requested-items-inner) | Details of the access items being requested. | 
**RequestedBy** | [**Accessitemrequesterdto**](accessitemrequesterdto) |  | 

## Methods

### NewAccessrequestpreapproval

`func NewAccessrequestpreapproval(accessRequestId string, requestedFor []Accessitemrequestedfordto, requestedItems []AccessrequestpreapprovalRequestedItemsInner, requestedBy Accessitemrequesterdto, ) *Accessrequestpreapproval`

NewAccessrequestpreapproval instantiates a new Accessrequestpreapproval object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessrequestpreapprovalWithDefaults

`func NewAccessrequestpreapprovalWithDefaults() *Accessrequestpreapproval`

NewAccessrequestpreapprovalWithDefaults instantiates a new Accessrequestpreapproval object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccessRequestId

`func (o *Accessrequestpreapproval) GetAccessRequestId() string`

GetAccessRequestId returns the AccessRequestId field if non-nil, zero value otherwise.

### GetAccessRequestIdOk

`func (o *Accessrequestpreapproval) GetAccessRequestIdOk() (*string, bool)`

GetAccessRequestIdOk returns a tuple with the AccessRequestId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessRequestId

`func (o *Accessrequestpreapproval) SetAccessRequestId(v string)`

SetAccessRequestId sets AccessRequestId field to given value.


### GetRequestedFor

`func (o *Accessrequestpreapproval) GetRequestedFor() []Accessitemrequestedfordto`

GetRequestedFor returns the RequestedFor field if non-nil, zero value otherwise.

### GetRequestedForOk

`func (o *Accessrequestpreapproval) GetRequestedForOk() (*[]Accessitemrequestedfordto, bool)`

GetRequestedForOk returns a tuple with the RequestedFor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestedFor

`func (o *Accessrequestpreapproval) SetRequestedFor(v []Accessitemrequestedfordto)`

SetRequestedFor sets RequestedFor field to given value.


### GetRequestedItems

`func (o *Accessrequestpreapproval) GetRequestedItems() []AccessrequestpreapprovalRequestedItemsInner`

GetRequestedItems returns the RequestedItems field if non-nil, zero value otherwise.

### GetRequestedItemsOk

`func (o *Accessrequestpreapproval) GetRequestedItemsOk() (*[]AccessrequestpreapprovalRequestedItemsInner, bool)`

GetRequestedItemsOk returns a tuple with the RequestedItems field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestedItems

`func (o *Accessrequestpreapproval) SetRequestedItems(v []AccessrequestpreapprovalRequestedItemsInner)`

SetRequestedItems sets RequestedItems field to given value.


### GetRequestedBy

`func (o *Accessrequestpreapproval) GetRequestedBy() Accessitemrequesterdto`

GetRequestedBy returns the RequestedBy field if non-nil, zero value otherwise.

### GetRequestedByOk

`func (o *Accessrequestpreapproval) GetRequestedByOk() (*Accessitemrequesterdto, bool)`

GetRequestedByOk returns a tuple with the RequestedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestedBy

`func (o *Accessrequestpreapproval) SetRequestedBy(v Accessitemrequesterdto)`

SetRequestedBy sets RequestedBy field to given value.




---
id: v1-accessrequestdynamicapprover
title: Accessrequestdynamicapprover
pagination_label: Accessrequestdynamicapprover
sidebar_label: Accessrequestdynamicapprover
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Accessrequestdynamicapprover', 'V1Accessrequestdynamicapprover'] 
slug: /tools/sdk/go/triggers/models/accessrequestdynamicapprover
tags: ['SDK', 'Software Development Kit', 'Accessrequestdynamicapprover', 'V1Accessrequestdynamicapprover']
---

# Accessrequestdynamicapprover

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccessRequestId** | **string** | The unique ID of the access request object. Can be used with the [access request status endpoint](https://developer.sailpoint.com/idn/api/beta/list-access-request-status) to get the status of the request.  | 
**RequestedFor** | [**[]Accessitemrequestedfordto**](accessitemrequestedfordto) | Identities access was requested for. | 
**RequestedItems** | [**[]AccessrequestdynamicapproverRequestedItemsInner**](accessrequestdynamicapprover-requested-items-inner) | The access items that are being requested. | 
**RequestedBy** | [**Accessitemrequesterdto**](accessitemrequesterdto) |  | 

## Methods

### NewAccessrequestdynamicapprover

`func NewAccessrequestdynamicapprover(accessRequestId string, requestedFor []Accessitemrequestedfordto, requestedItems []AccessrequestdynamicapproverRequestedItemsInner, requestedBy Accessitemrequesterdto, ) *Accessrequestdynamicapprover`

NewAccessrequestdynamicapprover instantiates a new Accessrequestdynamicapprover object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessrequestdynamicapproverWithDefaults

`func NewAccessrequestdynamicapproverWithDefaults() *Accessrequestdynamicapprover`

NewAccessrequestdynamicapproverWithDefaults instantiates a new Accessrequestdynamicapprover object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccessRequestId

`func (o *Accessrequestdynamicapprover) GetAccessRequestId() string`

GetAccessRequestId returns the AccessRequestId field if non-nil, zero value otherwise.

### GetAccessRequestIdOk

`func (o *Accessrequestdynamicapprover) GetAccessRequestIdOk() (*string, bool)`

GetAccessRequestIdOk returns a tuple with the AccessRequestId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessRequestId

`func (o *Accessrequestdynamicapprover) SetAccessRequestId(v string)`

SetAccessRequestId sets AccessRequestId field to given value.


### GetRequestedFor

`func (o *Accessrequestdynamicapprover) GetRequestedFor() []Accessitemrequestedfordto`

GetRequestedFor returns the RequestedFor field if non-nil, zero value otherwise.

### GetRequestedForOk

`func (o *Accessrequestdynamicapprover) GetRequestedForOk() (*[]Accessitemrequestedfordto, bool)`

GetRequestedForOk returns a tuple with the RequestedFor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestedFor

`func (o *Accessrequestdynamicapprover) SetRequestedFor(v []Accessitemrequestedfordto)`

SetRequestedFor sets RequestedFor field to given value.


### GetRequestedItems

`func (o *Accessrequestdynamicapprover) GetRequestedItems() []AccessrequestdynamicapproverRequestedItemsInner`

GetRequestedItems returns the RequestedItems field if non-nil, zero value otherwise.

### GetRequestedItemsOk

`func (o *Accessrequestdynamicapprover) GetRequestedItemsOk() (*[]AccessrequestdynamicapproverRequestedItemsInner, bool)`

GetRequestedItemsOk returns a tuple with the RequestedItems field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestedItems

`func (o *Accessrequestdynamicapprover) SetRequestedItems(v []AccessrequestdynamicapproverRequestedItemsInner)`

SetRequestedItems sets RequestedItems field to given value.


### GetRequestedBy

`func (o *Accessrequestdynamicapprover) GetRequestedBy() Accessitemrequesterdto`

GetRequestedBy returns the RequestedBy field if non-nil, zero value otherwise.

### GetRequestedByOk

`func (o *Accessrequestdynamicapprover) GetRequestedByOk() (*Accessitemrequesterdto, bool)`

GetRequestedByOk returns a tuple with the RequestedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestedBy

`func (o *Accessrequestdynamicapprover) SetRequestedBy(v Accessitemrequesterdto)`

SetRequestedBy sets RequestedBy field to given value.




---
id: v1-accessrequesttracking
title: Accessrequesttracking
pagination_label: Accessrequesttracking
sidebar_label: Accessrequesttracking
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Accessrequesttracking', 'V1Accessrequesttracking'] 
slug: /tools/sdk/go/accessrequests/models/accessrequesttracking
tags: ['SDK', 'Software Development Kit', 'Accessrequesttracking', 'V1Accessrequesttracking']
---

# Accessrequesttracking

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RequestedFor** | Pointer to **string** | The identity id in which the access request is for. | [optional] 
**RequestedItemsDetails** | Pointer to [**[]Requesteditemdetails**](requesteditemdetails) | The details of the item requested. | [optional] 
**AttributesHash** | Pointer to **int32** | a hash representation of the access requested, useful for longer term tracking client side. | [optional] 
**AccessRequestIds** | Pointer to **[]string** | a list of access request identifiers, generally only one will be populated, but high volume requested may result in multiple ids. | [optional] 

## Methods

### NewAccessrequesttracking

`func NewAccessrequesttracking() *Accessrequesttracking`

NewAccessrequesttracking instantiates a new Accessrequesttracking object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessrequesttrackingWithDefaults

`func NewAccessrequesttrackingWithDefaults() *Accessrequesttracking`

NewAccessrequesttrackingWithDefaults instantiates a new Accessrequesttracking object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRequestedFor

`func (o *Accessrequesttracking) GetRequestedFor() string`

GetRequestedFor returns the RequestedFor field if non-nil, zero value otherwise.

### GetRequestedForOk

`func (o *Accessrequesttracking) GetRequestedForOk() (*string, bool)`

GetRequestedForOk returns a tuple with the RequestedFor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestedFor

`func (o *Accessrequesttracking) SetRequestedFor(v string)`

SetRequestedFor sets RequestedFor field to given value.

### HasRequestedFor

`func (o *Accessrequesttracking) HasRequestedFor() bool`

HasRequestedFor returns a boolean if a field has been set.

### GetRequestedItemsDetails

`func (o *Accessrequesttracking) GetRequestedItemsDetails() []Requesteditemdetails`

GetRequestedItemsDetails returns the RequestedItemsDetails field if non-nil, zero value otherwise.

### GetRequestedItemsDetailsOk

`func (o *Accessrequesttracking) GetRequestedItemsDetailsOk() (*[]Requesteditemdetails, bool)`

GetRequestedItemsDetailsOk returns a tuple with the RequestedItemsDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestedItemsDetails

`func (o *Accessrequesttracking) SetRequestedItemsDetails(v []Requesteditemdetails)`

SetRequestedItemsDetails sets RequestedItemsDetails field to given value.

### HasRequestedItemsDetails

`func (o *Accessrequesttracking) HasRequestedItemsDetails() bool`

HasRequestedItemsDetails returns a boolean if a field has been set.

### GetAttributesHash

`func (o *Accessrequesttracking) GetAttributesHash() int32`

GetAttributesHash returns the AttributesHash field if non-nil, zero value otherwise.

### GetAttributesHashOk

`func (o *Accessrequesttracking) GetAttributesHashOk() (*int32, bool)`

GetAttributesHashOk returns a tuple with the AttributesHash field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributesHash

`func (o *Accessrequesttracking) SetAttributesHash(v int32)`

SetAttributesHash sets AttributesHash field to given value.

### HasAttributesHash

`func (o *Accessrequesttracking) HasAttributesHash() bool`

HasAttributesHash returns a boolean if a field has been set.

### GetAccessRequestIds

`func (o *Accessrequesttracking) GetAccessRequestIds() []string`

GetAccessRequestIds returns the AccessRequestIds field if non-nil, zero value otherwise.

### GetAccessRequestIdsOk

`func (o *Accessrequesttracking) GetAccessRequestIdsOk() (*[]string, bool)`

GetAccessRequestIdsOk returns a tuple with the AccessRequestIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessRequestIds

`func (o *Accessrequesttracking) SetAccessRequestIds(v []string)`

SetAccessRequestIds sets AccessRequestIds field to given value.

### HasAccessRequestIds

`func (o *Accessrequesttracking) HasAccessRequestIds() bool`

HasAccessRequestIds returns a boolean if a field has been set.



---
id: access-request-tracking
title: AccessRequestTracking
pagination_label: AccessRequestTracking
sidebar_label: AccessRequestTracking
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccessRequestTracking', 'AccessRequestTracking'] 
slug: /tools/sdk/go/v3/models/access-request-tracking
tags: ['SDK', 'Software Development Kit', 'AccessRequestTracking', 'AccessRequestTracking']
---

# AccessRequestTracking

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RequestedFor** | Pointer to **string** | The identity id in which the access request is for. | [optional] 
**RequestedItemsDetails** | Pointer to [**[]RequestedItemDetails**](requested-item-details) | The details of the item requested. | [optional] 
**AttributesHash** | Pointer to **int32** | a hash representation of the access requested, useful for longer term tracking client side. | [optional] 
**AccessRequestIds** | Pointer to **[]string** | a list of access request identifiers, generally only one will be populated, but high volume requested may result in multiple ids. | [optional] 

## Methods

### NewAccessRequestTracking

`func NewAccessRequestTracking() *AccessRequestTracking`

NewAccessRequestTracking instantiates a new AccessRequestTracking object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessRequestTrackingWithDefaults

`func NewAccessRequestTrackingWithDefaults() *AccessRequestTracking`

NewAccessRequestTrackingWithDefaults instantiates a new AccessRequestTracking object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRequestedFor

`func (o *AccessRequestTracking) GetRequestedFor() string`

GetRequestedFor returns the RequestedFor field if non-nil, zero value otherwise.

### GetRequestedForOk

`func (o *AccessRequestTracking) GetRequestedForOk() (*string, bool)`

GetRequestedForOk returns a tuple with the RequestedFor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestedFor

`func (o *AccessRequestTracking) SetRequestedFor(v string)`

SetRequestedFor sets RequestedFor field to given value.

### HasRequestedFor

`func (o *AccessRequestTracking) HasRequestedFor() bool`

HasRequestedFor returns a boolean if a field has been set.

### GetRequestedItemsDetails

`func (o *AccessRequestTracking) GetRequestedItemsDetails() []RequestedItemDetails`

GetRequestedItemsDetails returns the RequestedItemsDetails field if non-nil, zero value otherwise.

### GetRequestedItemsDetailsOk

`func (o *AccessRequestTracking) GetRequestedItemsDetailsOk() (*[]RequestedItemDetails, bool)`

GetRequestedItemsDetailsOk returns a tuple with the RequestedItemsDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestedItemsDetails

`func (o *AccessRequestTracking) SetRequestedItemsDetails(v []RequestedItemDetails)`

SetRequestedItemsDetails sets RequestedItemsDetails field to given value.

### HasRequestedItemsDetails

`func (o *AccessRequestTracking) HasRequestedItemsDetails() bool`

HasRequestedItemsDetails returns a boolean if a field has been set.

### GetAttributesHash

`func (o *AccessRequestTracking) GetAttributesHash() int32`

GetAttributesHash returns the AttributesHash field if non-nil, zero value otherwise.

### GetAttributesHashOk

`func (o *AccessRequestTracking) GetAttributesHashOk() (*int32, bool)`

GetAttributesHashOk returns a tuple with the AttributesHash field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributesHash

`func (o *AccessRequestTracking) SetAttributesHash(v int32)`

SetAttributesHash sets AttributesHash field to given value.

### HasAttributesHash

`func (o *AccessRequestTracking) HasAttributesHash() bool`

HasAttributesHash returns a boolean if a field has been set.

### GetAccessRequestIds

`func (o *AccessRequestTracking) GetAccessRequestIds() []string`

GetAccessRequestIds returns the AccessRequestIds field if non-nil, zero value otherwise.

### GetAccessRequestIdsOk

`func (o *AccessRequestTracking) GetAccessRequestIdsOk() (*[]string, bool)`

GetAccessRequestIdsOk returns a tuple with the AccessRequestIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessRequestIds

`func (o *AccessRequestTracking) SetAccessRequestIds(v []string)`

SetAccessRequestIds sets AccessRequestIds field to given value.

### HasAccessRequestIds

`func (o *AccessRequestTracking) HasAccessRequestIds() bool`

HasAccessRequestIds returns a boolean if a field has been set.



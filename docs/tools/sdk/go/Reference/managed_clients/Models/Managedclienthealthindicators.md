---
id: v1-managedclienthealthindicators
title: Managedclienthealthindicators
pagination_label: Managedclienthealthindicators
sidebar_label: Managedclienthealthindicators
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Managedclienthealthindicators', 'V1Managedclienthealthindicators'] 
slug: /tools/sdk/go/managedclients/models/managedclienthealthindicators
tags: ['SDK', 'Software Development Kit', 'Managedclienthealthindicators', 'V1Managedclienthealthindicators']
---

# Managedclienthealthindicators

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Body** | [**ManagedclienthealthindicatorsBody**](managedclienthealthindicators-body) |  | 
**Status** | **string** | Top-level status of the Managed Client | 
**Type** | **string** | Type of the Managed Client | 
**Timestamp** | **SailPointTime** | Timestamp when this report was generated | 

## Methods

### NewManagedclienthealthindicators

`func NewManagedclienthealthindicators(body ManagedclienthealthindicatorsBody, status string, type_ string, timestamp SailPointTime, ) *Managedclienthealthindicators`

NewManagedclienthealthindicators instantiates a new Managedclienthealthindicators object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewManagedclienthealthindicatorsWithDefaults

`func NewManagedclienthealthindicatorsWithDefaults() *Managedclienthealthindicators`

NewManagedclienthealthindicatorsWithDefaults instantiates a new Managedclienthealthindicators object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBody

`func (o *Managedclienthealthindicators) GetBody() ManagedclienthealthindicatorsBody`

GetBody returns the Body field if non-nil, zero value otherwise.

### GetBodyOk

`func (o *Managedclienthealthindicators) GetBodyOk() (*ManagedclienthealthindicatorsBody, bool)`

GetBodyOk returns a tuple with the Body field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBody

`func (o *Managedclienthealthindicators) SetBody(v ManagedclienthealthindicatorsBody)`

SetBody sets Body field to given value.


### GetStatus

`func (o *Managedclienthealthindicators) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *Managedclienthealthindicators) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *Managedclienthealthindicators) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetType

`func (o *Managedclienthealthindicators) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Managedclienthealthindicators) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Managedclienthealthindicators) SetType(v string)`

SetType sets Type field to given value.


### GetTimestamp

`func (o *Managedclienthealthindicators) GetTimestamp() SailPointTime`

GetTimestamp returns the Timestamp field if non-nil, zero value otherwise.

### GetTimestampOk

`func (o *Managedclienthealthindicators) GetTimestampOk() (*SailPointTime, bool)`

GetTimestampOk returns a tuple with the Timestamp field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimestamp

`func (o *Managedclienthealthindicators) SetTimestamp(v SailPointTime)`

SetTimestamp sets Timestamp field to given value.




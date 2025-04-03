---
id: v2025-common-access-id-status
title: CommonAccessIDStatus
pagination_label: CommonAccessIDStatus
sidebar_label: CommonAccessIDStatus
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'CommonAccessIDStatus', 'V2025CommonAccessIDStatus'] 
slug: /tools/sdk/go/v2025/models/common-access-id-status
tags: ['SDK', 'Software Development Kit', 'CommonAccessIDStatus', 'V2025CommonAccessIDStatus']
---

# CommonAccessIDStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ConfirmedIds** | Pointer to **[]string** | List of confirmed common access ids. | [optional] 
**DeniedIds** | Pointer to **[]string** | List of denied common access ids. | [optional] 

## Methods

### NewCommonAccessIDStatus

`func NewCommonAccessIDStatus() *CommonAccessIDStatus`

NewCommonAccessIDStatus instantiates a new CommonAccessIDStatus object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCommonAccessIDStatusWithDefaults

`func NewCommonAccessIDStatusWithDefaults() *CommonAccessIDStatus`

NewCommonAccessIDStatusWithDefaults instantiates a new CommonAccessIDStatus object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetConfirmedIds

`func (o *CommonAccessIDStatus) GetConfirmedIds() []string`

GetConfirmedIds returns the ConfirmedIds field if non-nil, zero value otherwise.

### GetConfirmedIdsOk

`func (o *CommonAccessIDStatus) GetConfirmedIdsOk() (*[]string, bool)`

GetConfirmedIdsOk returns a tuple with the ConfirmedIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfirmedIds

`func (o *CommonAccessIDStatus) SetConfirmedIds(v []string)`

SetConfirmedIds sets ConfirmedIds field to given value.

### HasConfirmedIds

`func (o *CommonAccessIDStatus) HasConfirmedIds() bool`

HasConfirmedIds returns a boolean if a field has been set.

### GetDeniedIds

`func (o *CommonAccessIDStatus) GetDeniedIds() []string`

GetDeniedIds returns the DeniedIds field if non-nil, zero value otherwise.

### GetDeniedIdsOk

`func (o *CommonAccessIDStatus) GetDeniedIdsOk() (*[]string, bool)`

GetDeniedIdsOk returns a tuple with the DeniedIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeniedIds

`func (o *CommonAccessIDStatus) SetDeniedIds(v []string)`

SetDeniedIds sets DeniedIds field to given value.

### HasDeniedIds

`func (o *CommonAccessIDStatus) HasDeniedIds() bool`

HasDeniedIds returns a boolean if a field has been set.



---
id: v1-sedbatchrecord
title: Sedbatchrecord
pagination_label: Sedbatchrecord
sidebar_label: Sedbatchrecord
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Sedbatchrecord', 'V1Sedbatchrecord'] 
slug: /tools/sdk/go/suggestedentitlementdescription/models/sedbatchrecord
tags: ['SDK', 'Software Development Kit', 'Sedbatchrecord', 'V1Sedbatchrecord']
---

# Sedbatchrecord

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TenantId** | Pointer to **string** | The tenant ID associated with the batch. | [optional] 
**BatchId** | Pointer to **string** | The unique ID of the batch. | [optional] 
**Name** | Pointer to **NullableString** | The name of the batch. | [optional] 
**ProcessedState** | Pointer to **NullableString** | The current state of the batch (e.g., submitted, materialized, completed). | [optional] 
**RequestedBy** | Pointer to **string** | The ID of the user who requested the batch. | [optional] 
**MaterializedCount** | Pointer to **int32** | The number of items materialized in the batch. | [optional] 
**ProcessedCount** | Pointer to **int32** | The number of items processed in the batch. | [optional] 
**CreatedAt** | Pointer to **SailPointTime** | The timestamp when the batch was created. | [optional] 
**UpdatedAt** | Pointer to **NullableTime** | The timestamp when the batch was last updated. | [optional] 

## Methods

### NewSedbatchrecord

`func NewSedbatchrecord() *Sedbatchrecord`

NewSedbatchrecord instantiates a new Sedbatchrecord object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSedbatchrecordWithDefaults

`func NewSedbatchrecordWithDefaults() *Sedbatchrecord`

NewSedbatchrecordWithDefaults instantiates a new Sedbatchrecord object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTenantId

`func (o *Sedbatchrecord) GetTenantId() string`

GetTenantId returns the TenantId field if non-nil, zero value otherwise.

### GetTenantIdOk

`func (o *Sedbatchrecord) GetTenantIdOk() (*string, bool)`

GetTenantIdOk returns a tuple with the TenantId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTenantId

`func (o *Sedbatchrecord) SetTenantId(v string)`

SetTenantId sets TenantId field to given value.

### HasTenantId

`func (o *Sedbatchrecord) HasTenantId() bool`

HasTenantId returns a boolean if a field has been set.

### GetBatchId

`func (o *Sedbatchrecord) GetBatchId() string`

GetBatchId returns the BatchId field if non-nil, zero value otherwise.

### GetBatchIdOk

`func (o *Sedbatchrecord) GetBatchIdOk() (*string, bool)`

GetBatchIdOk returns a tuple with the BatchId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBatchId

`func (o *Sedbatchrecord) SetBatchId(v string)`

SetBatchId sets BatchId field to given value.

### HasBatchId

`func (o *Sedbatchrecord) HasBatchId() bool`

HasBatchId returns a boolean if a field has been set.

### GetName

`func (o *Sedbatchrecord) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Sedbatchrecord) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Sedbatchrecord) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Sedbatchrecord) HasName() bool`

HasName returns a boolean if a field has been set.

### SetNameNil

`func (o *Sedbatchrecord) SetNameNil(b bool)`

 SetNameNil sets the value for Name to be an explicit nil

### UnsetName
`func (o *Sedbatchrecord) UnsetName()`

UnsetName ensures that no value is present for Name, not even an explicit nil
### GetProcessedState

`func (o *Sedbatchrecord) GetProcessedState() string`

GetProcessedState returns the ProcessedState field if non-nil, zero value otherwise.

### GetProcessedStateOk

`func (o *Sedbatchrecord) GetProcessedStateOk() (*string, bool)`

GetProcessedStateOk returns a tuple with the ProcessedState field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProcessedState

`func (o *Sedbatchrecord) SetProcessedState(v string)`

SetProcessedState sets ProcessedState field to given value.

### HasProcessedState

`func (o *Sedbatchrecord) HasProcessedState() bool`

HasProcessedState returns a boolean if a field has been set.

### SetProcessedStateNil

`func (o *Sedbatchrecord) SetProcessedStateNil(b bool)`

 SetProcessedStateNil sets the value for ProcessedState to be an explicit nil

### UnsetProcessedState
`func (o *Sedbatchrecord) UnsetProcessedState()`

UnsetProcessedState ensures that no value is present for ProcessedState, not even an explicit nil
### GetRequestedBy

`func (o *Sedbatchrecord) GetRequestedBy() string`

GetRequestedBy returns the RequestedBy field if non-nil, zero value otherwise.

### GetRequestedByOk

`func (o *Sedbatchrecord) GetRequestedByOk() (*string, bool)`

GetRequestedByOk returns a tuple with the RequestedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestedBy

`func (o *Sedbatchrecord) SetRequestedBy(v string)`

SetRequestedBy sets RequestedBy field to given value.

### HasRequestedBy

`func (o *Sedbatchrecord) HasRequestedBy() bool`

HasRequestedBy returns a boolean if a field has been set.

### GetMaterializedCount

`func (o *Sedbatchrecord) GetMaterializedCount() int32`

GetMaterializedCount returns the MaterializedCount field if non-nil, zero value otherwise.

### GetMaterializedCountOk

`func (o *Sedbatchrecord) GetMaterializedCountOk() (*int32, bool)`

GetMaterializedCountOk returns a tuple with the MaterializedCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaterializedCount

`func (o *Sedbatchrecord) SetMaterializedCount(v int32)`

SetMaterializedCount sets MaterializedCount field to given value.

### HasMaterializedCount

`func (o *Sedbatchrecord) HasMaterializedCount() bool`

HasMaterializedCount returns a boolean if a field has been set.

### GetProcessedCount

`func (o *Sedbatchrecord) GetProcessedCount() int32`

GetProcessedCount returns the ProcessedCount field if non-nil, zero value otherwise.

### GetProcessedCountOk

`func (o *Sedbatchrecord) GetProcessedCountOk() (*int32, bool)`

GetProcessedCountOk returns a tuple with the ProcessedCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProcessedCount

`func (o *Sedbatchrecord) SetProcessedCount(v int32)`

SetProcessedCount sets ProcessedCount field to given value.

### HasProcessedCount

`func (o *Sedbatchrecord) HasProcessedCount() bool`

HasProcessedCount returns a boolean if a field has been set.

### GetCreatedAt

`func (o *Sedbatchrecord) GetCreatedAt() SailPointTime`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *Sedbatchrecord) GetCreatedAtOk() (*SailPointTime, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *Sedbatchrecord) SetCreatedAt(v SailPointTime)`

SetCreatedAt sets CreatedAt field to given value.

### HasCreatedAt

`func (o *Sedbatchrecord) HasCreatedAt() bool`

HasCreatedAt returns a boolean if a field has been set.

### GetUpdatedAt

`func (o *Sedbatchrecord) GetUpdatedAt() SailPointTime`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *Sedbatchrecord) GetUpdatedAtOk() (*SailPointTime, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *Sedbatchrecord) SetUpdatedAt(v SailPointTime)`

SetUpdatedAt sets UpdatedAt field to given value.

### HasUpdatedAt

`func (o *Sedbatchrecord) HasUpdatedAt() bool`

HasUpdatedAt returns a boolean if a field has been set.

### SetUpdatedAtNil

`func (o *Sedbatchrecord) SetUpdatedAtNil(b bool)`

 SetUpdatedAtNil sets the value for UpdatedAt to be an explicit nil

### UnsetUpdatedAt
`func (o *Sedbatchrecord) UnsetUpdatedAt()`

UnsetUpdatedAt ensures that no value is present for UpdatedAt, not even an explicit nil


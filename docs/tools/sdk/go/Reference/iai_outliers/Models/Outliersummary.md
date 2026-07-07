---
id: v1-outliersummary
title: Outliersummary
pagination_label: Outliersummary
sidebar_label: Outliersummary
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Outliersummary', 'V1Outliersummary'] 
slug: /tools/sdk/go/iaioutliers/models/outliersummary
tags: ['SDK', 'Software Development Kit', 'Outliersummary', 'V1Outliersummary']
---

# Outliersummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** | The type of outlier summary | [optional] 
**SnapshotDate** | Pointer to **SailPointTime** | The date the bulk outlier detection ran/snapshot was created | [optional] 
**TotalOutliers** | Pointer to **int32** | Total number of outliers for the customer making the request | [optional] 
**TotalIdentities** | Pointer to **int32** | Total number of identities for the customer making the request | [optional] 
**TotalIgnored** | Pointer to **int32** |  | [optional] [default to 0]

## Methods

### NewOutliersummary

`func NewOutliersummary() *Outliersummary`

NewOutliersummary instantiates a new Outliersummary object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewOutliersummaryWithDefaults

`func NewOutliersummaryWithDefaults() *Outliersummary`

NewOutliersummaryWithDefaults instantiates a new Outliersummary object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *Outliersummary) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Outliersummary) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Outliersummary) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *Outliersummary) HasType() bool`

HasType returns a boolean if a field has been set.

### GetSnapshotDate

`func (o *Outliersummary) GetSnapshotDate() SailPointTime`

GetSnapshotDate returns the SnapshotDate field if non-nil, zero value otherwise.

### GetSnapshotDateOk

`func (o *Outliersummary) GetSnapshotDateOk() (*SailPointTime, bool)`

GetSnapshotDateOk returns a tuple with the SnapshotDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSnapshotDate

`func (o *Outliersummary) SetSnapshotDate(v SailPointTime)`

SetSnapshotDate sets SnapshotDate field to given value.

### HasSnapshotDate

`func (o *Outliersummary) HasSnapshotDate() bool`

HasSnapshotDate returns a boolean if a field has been set.

### GetTotalOutliers

`func (o *Outliersummary) GetTotalOutliers() int32`

GetTotalOutliers returns the TotalOutliers field if non-nil, zero value otherwise.

### GetTotalOutliersOk

`func (o *Outliersummary) GetTotalOutliersOk() (*int32, bool)`

GetTotalOutliersOk returns a tuple with the TotalOutliers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalOutliers

`func (o *Outliersummary) SetTotalOutliers(v int32)`

SetTotalOutliers sets TotalOutliers field to given value.

### HasTotalOutliers

`func (o *Outliersummary) HasTotalOutliers() bool`

HasTotalOutliers returns a boolean if a field has been set.

### GetTotalIdentities

`func (o *Outliersummary) GetTotalIdentities() int32`

GetTotalIdentities returns the TotalIdentities field if non-nil, zero value otherwise.

### GetTotalIdentitiesOk

`func (o *Outliersummary) GetTotalIdentitiesOk() (*int32, bool)`

GetTotalIdentitiesOk returns a tuple with the TotalIdentities field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalIdentities

`func (o *Outliersummary) SetTotalIdentities(v int32)`

SetTotalIdentities sets TotalIdentities field to given value.

### HasTotalIdentities

`func (o *Outliersummary) HasTotalIdentities() bool`

HasTotalIdentities returns a boolean if a field has been set.

### GetTotalIgnored

`func (o *Outliersummary) GetTotalIgnored() int32`

GetTotalIgnored returns the TotalIgnored field if non-nil, zero value otherwise.

### GetTotalIgnoredOk

`func (o *Outliersummary) GetTotalIgnoredOk() (*int32, bool)`

GetTotalIgnoredOk returns a tuple with the TotalIgnored field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalIgnored

`func (o *Outliersummary) SetTotalIgnored(v int32)`

SetTotalIgnored sets TotalIgnored field to given value.

### HasTotalIgnored

`func (o *Outliersummary) HasTotalIgnored() bool`

HasTotalIgnored returns a boolean if a field has been set.



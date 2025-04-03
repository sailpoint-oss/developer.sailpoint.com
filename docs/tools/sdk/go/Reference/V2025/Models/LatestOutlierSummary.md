---
id: v2025-latest-outlier-summary
title: LatestOutlierSummary
pagination_label: LatestOutlierSummary
sidebar_label: LatestOutlierSummary
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'LatestOutlierSummary', 'V2025LatestOutlierSummary'] 
slug: /tools/sdk/go/v2025/models/latest-outlier-summary
tags: ['SDK', 'Software Development Kit', 'LatestOutlierSummary', 'V2025LatestOutlierSummary']
---

# LatestOutlierSummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** | The type of outlier summary | [optional] 
**SnapshotDate** | Pointer to **SailPointTime** | The date the bulk outlier detection ran/snapshot was created | [optional] 
**TotalOutliers** | Pointer to **int32** | Total number of outliers for the customer making the request | [optional] 
**TotalIdentities** | Pointer to **int32** | Total number of identities for the customer making the request | [optional] 
**TotalIgnored** | Pointer to **int32** | Total number of ignored outliers | [optional] 

## Methods

### NewLatestOutlierSummary

`func NewLatestOutlierSummary() *LatestOutlierSummary`

NewLatestOutlierSummary instantiates a new LatestOutlierSummary object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewLatestOutlierSummaryWithDefaults

`func NewLatestOutlierSummaryWithDefaults() *LatestOutlierSummary`

NewLatestOutlierSummaryWithDefaults instantiates a new LatestOutlierSummary object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *LatestOutlierSummary) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *LatestOutlierSummary) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *LatestOutlierSummary) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *LatestOutlierSummary) HasType() bool`

HasType returns a boolean if a field has been set.

### GetSnapshotDate

`func (o *LatestOutlierSummary) GetSnapshotDate() SailPointTime`

GetSnapshotDate returns the SnapshotDate field if non-nil, zero value otherwise.

### GetSnapshotDateOk

`func (o *LatestOutlierSummary) GetSnapshotDateOk() (*SailPointTime, bool)`

GetSnapshotDateOk returns a tuple with the SnapshotDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSnapshotDate

`func (o *LatestOutlierSummary) SetSnapshotDate(v SailPointTime)`

SetSnapshotDate sets SnapshotDate field to given value.

### HasSnapshotDate

`func (o *LatestOutlierSummary) HasSnapshotDate() bool`

HasSnapshotDate returns a boolean if a field has been set.

### GetTotalOutliers

`func (o *LatestOutlierSummary) GetTotalOutliers() int32`

GetTotalOutliers returns the TotalOutliers field if non-nil, zero value otherwise.

### GetTotalOutliersOk

`func (o *LatestOutlierSummary) GetTotalOutliersOk() (*int32, bool)`

GetTotalOutliersOk returns a tuple with the TotalOutliers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalOutliers

`func (o *LatestOutlierSummary) SetTotalOutliers(v int32)`

SetTotalOutliers sets TotalOutliers field to given value.

### HasTotalOutliers

`func (o *LatestOutlierSummary) HasTotalOutliers() bool`

HasTotalOutliers returns a boolean if a field has been set.

### GetTotalIdentities

`func (o *LatestOutlierSummary) GetTotalIdentities() int32`

GetTotalIdentities returns the TotalIdentities field if non-nil, zero value otherwise.

### GetTotalIdentitiesOk

`func (o *LatestOutlierSummary) GetTotalIdentitiesOk() (*int32, bool)`

GetTotalIdentitiesOk returns a tuple with the TotalIdentities field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalIdentities

`func (o *LatestOutlierSummary) SetTotalIdentities(v int32)`

SetTotalIdentities sets TotalIdentities field to given value.

### HasTotalIdentities

`func (o *LatestOutlierSummary) HasTotalIdentities() bool`

HasTotalIdentities returns a boolean if a field has been set.

### GetTotalIgnored

`func (o *LatestOutlierSummary) GetTotalIgnored() int32`

GetTotalIgnored returns the TotalIgnored field if non-nil, zero value otherwise.

### GetTotalIgnoredOk

`func (o *LatestOutlierSummary) GetTotalIgnoredOk() (*int32, bool)`

GetTotalIgnoredOk returns a tuple with the TotalIgnored field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalIgnored

`func (o *LatestOutlierSummary) SetTotalIgnored(v int32)`

SetTotalIgnored sets TotalIgnored field to given value.

### HasTotalIgnored

`func (o *LatestOutlierSummary) HasTotalIgnored() bool`

HasTotalIgnored returns a boolean if a field has been set.



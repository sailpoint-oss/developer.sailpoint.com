---
id: beta-outlier-summary
title: OutlierSummary
pagination_label: OutlierSummary
sidebar_label: OutlierSummary
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'OutlierSummary', 'BetaOutlierSummary'] 
slug: /tools/sdk/go/beta/models/outlier-summary
tags: ['SDK', 'Software Development Kit', 'OutlierSummary', 'BetaOutlierSummary']
---

# OutlierSummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** | The type of outlier summary | [optional] 
**SnapshotDate** | Pointer to **time.Time** | The date the bulk outlier detection ran/snapshot was created | [optional] 
**TotalOutliers** | Pointer to **int32** | Total number of outliers for the customer making the request | [optional] 
**TotalIdentities** | Pointer to **int32** | Total number of identities for the customer making the request | [optional] 
**TotalIgnored** | Pointer to **int32** |  | [optional] [default to 0]

## Methods

### NewOutlierSummary

`func NewOutlierSummary() *OutlierSummary`

NewOutlierSummary instantiates a new OutlierSummary object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewOutlierSummaryWithDefaults

`func NewOutlierSummaryWithDefaults() *OutlierSummary`

NewOutlierSummaryWithDefaults instantiates a new OutlierSummary object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *OutlierSummary) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *OutlierSummary) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *OutlierSummary) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *OutlierSummary) HasType() bool`

HasType returns a boolean if a field has been set.

### GetSnapshotDate

`func (o *OutlierSummary) GetSnapshotDate() time.Time`

GetSnapshotDate returns the SnapshotDate field if non-nil, zero value otherwise.

### GetSnapshotDateOk

`func (o *OutlierSummary) GetSnapshotDateOk() (*time.Time, bool)`

GetSnapshotDateOk returns a tuple with the SnapshotDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSnapshotDate

`func (o *OutlierSummary) SetSnapshotDate(v time.Time)`

SetSnapshotDate sets SnapshotDate field to given value.

### HasSnapshotDate

`func (o *OutlierSummary) HasSnapshotDate() bool`

HasSnapshotDate returns a boolean if a field has been set.

### GetTotalOutliers

`func (o *OutlierSummary) GetTotalOutliers() int32`

GetTotalOutliers returns the TotalOutliers field if non-nil, zero value otherwise.

### GetTotalOutliersOk

`func (o *OutlierSummary) GetTotalOutliersOk() (*int32, bool)`

GetTotalOutliersOk returns a tuple with the TotalOutliers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalOutliers

`func (o *OutlierSummary) SetTotalOutliers(v int32)`

SetTotalOutliers sets TotalOutliers field to given value.

### HasTotalOutliers

`func (o *OutlierSummary) HasTotalOutliers() bool`

HasTotalOutliers returns a boolean if a field has been set.

### GetTotalIdentities

`func (o *OutlierSummary) GetTotalIdentities() int32`

GetTotalIdentities returns the TotalIdentities field if non-nil, zero value otherwise.

### GetTotalIdentitiesOk

`func (o *OutlierSummary) GetTotalIdentitiesOk() (*int32, bool)`

GetTotalIdentitiesOk returns a tuple with the TotalIdentities field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalIdentities

`func (o *OutlierSummary) SetTotalIdentities(v int32)`

SetTotalIdentities sets TotalIdentities field to given value.

### HasTotalIdentities

`func (o *OutlierSummary) HasTotalIdentities() bool`

HasTotalIdentities returns a boolean if a field has been set.

### GetTotalIgnored

`func (o *OutlierSummary) GetTotalIgnored() int32`

GetTotalIgnored returns the TotalIgnored field if non-nil, zero value otherwise.

### GetTotalIgnoredOk

`func (o *OutlierSummary) GetTotalIgnoredOk() (*int32, bool)`

GetTotalIgnoredOk returns a tuple with the TotalIgnored field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalIgnored

`func (o *OutlierSummary) SetTotalIgnored(v int32)`

SetTotalIgnored sets TotalIgnored field to given value.

### HasTotalIgnored

`func (o *OutlierSummary) HasTotalIgnored() bool`

HasTotalIgnored returns a boolean if a field has been set.



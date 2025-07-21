---
id: v2024-sp-config-export-results
title: SpConfigExportResults
pagination_label: SpConfigExportResults
sidebar_label: SpConfigExportResults
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SpConfigExportResults', 'V2024SpConfigExportResults'] 
slug: /tools/sdk/go/v2024/models/sp-config-export-results
tags: ['SDK', 'Software Development Kit', 'SpConfigExportResults', 'V2024SpConfigExportResults']
---

# SpConfigExportResults

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Version** | Pointer to **int32** | Current version of the export results object. | [optional] 
**Timestamp** | Pointer to **SailPointTime** | Time the export was completed. | [optional] 
**Tenant** | Pointer to **string** | Name of the tenant where this export originated. | [optional] 
**Description** | Pointer to **string** | Optional user defined description/name for export job. | [optional] 
**Options** | Pointer to [**ExportOptions1**](export-options1) |  | [optional] 
**Objects** | Pointer to [**[]ConfigObject**](config-object) |  | [optional] 

## Methods

### NewSpConfigExportResults

`func NewSpConfigExportResults() *SpConfigExportResults`

NewSpConfigExportResults instantiates a new SpConfigExportResults object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSpConfigExportResultsWithDefaults

`func NewSpConfigExportResultsWithDefaults() *SpConfigExportResults`

NewSpConfigExportResultsWithDefaults instantiates a new SpConfigExportResults object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetVersion

`func (o *SpConfigExportResults) GetVersion() int32`

GetVersion returns the Version field if non-nil, zero value otherwise.

### GetVersionOk

`func (o *SpConfigExportResults) GetVersionOk() (*int32, bool)`

GetVersionOk returns a tuple with the Version field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVersion

`func (o *SpConfigExportResults) SetVersion(v int32)`

SetVersion sets Version field to given value.

### HasVersion

`func (o *SpConfigExportResults) HasVersion() bool`

HasVersion returns a boolean if a field has been set.

### GetTimestamp

`func (o *SpConfigExportResults) GetTimestamp() SailPointTime`

GetTimestamp returns the Timestamp field if non-nil, zero value otherwise.

### GetTimestampOk

`func (o *SpConfigExportResults) GetTimestampOk() (*SailPointTime, bool)`

GetTimestampOk returns a tuple with the Timestamp field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimestamp

`func (o *SpConfigExportResults) SetTimestamp(v SailPointTime)`

SetTimestamp sets Timestamp field to given value.

### HasTimestamp

`func (o *SpConfigExportResults) HasTimestamp() bool`

HasTimestamp returns a boolean if a field has been set.

### GetTenant

`func (o *SpConfigExportResults) GetTenant() string`

GetTenant returns the Tenant field if non-nil, zero value otherwise.

### GetTenantOk

`func (o *SpConfigExportResults) GetTenantOk() (*string, bool)`

GetTenantOk returns a tuple with the Tenant field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTenant

`func (o *SpConfigExportResults) SetTenant(v string)`

SetTenant sets Tenant field to given value.

### HasTenant

`func (o *SpConfigExportResults) HasTenant() bool`

HasTenant returns a boolean if a field has been set.

### GetDescription

`func (o *SpConfigExportResults) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *SpConfigExportResults) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *SpConfigExportResults) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *SpConfigExportResults) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetOptions

`func (o *SpConfigExportResults) GetOptions() ExportOptions1`

GetOptions returns the Options field if non-nil, zero value otherwise.

### GetOptionsOk

`func (o *SpConfigExportResults) GetOptionsOk() (*ExportOptions1, bool)`

GetOptionsOk returns a tuple with the Options field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOptions

`func (o *SpConfigExportResults) SetOptions(v ExportOptions1)`

SetOptions sets Options field to given value.

### HasOptions

`func (o *SpConfigExportResults) HasOptions() bool`

HasOptions returns a boolean if a field has been set.

### GetObjects

`func (o *SpConfigExportResults) GetObjects() []ConfigObject`

GetObjects returns the Objects field if non-nil, zero value otherwise.

### GetObjectsOk

`func (o *SpConfigExportResults) GetObjectsOk() (*[]ConfigObject, bool)`

GetObjectsOk returns a tuple with the Objects field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetObjects

`func (o *SpConfigExportResults) SetObjects(v []ConfigObject)`

SetObjects sets Objects field to given value.

### HasObjects

`func (o *SpConfigExportResults) HasObjects() bool`

HasObjects returns a boolean if a field has been set.



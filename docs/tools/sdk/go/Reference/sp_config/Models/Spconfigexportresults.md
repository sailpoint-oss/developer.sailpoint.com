---
id: v1-spconfigexportresults
title: Spconfigexportresults
pagination_label: Spconfigexportresults
sidebar_label: Spconfigexportresults
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Spconfigexportresults', 'V1Spconfigexportresults'] 
slug: /tools/sdk/go/spconfig/models/spconfigexportresults
tags: ['SDK', 'Software Development Kit', 'Spconfigexportresults', 'V1Spconfigexportresults']
---

# Spconfigexportresults

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Version** | Pointer to **int32** | Current version of the export results object. | [optional] 
**Timestamp** | Pointer to **SailPointTime** | Time the export was completed. | [optional] 
**Tenant** | Pointer to **string** | Name of the tenant where this export originated. | [optional] 
**Description** | Pointer to **string** | Optional user defined description/name for export job. | [optional] 
**Options** | Pointer to [**Exportoptions**](exportoptions) |  | [optional] 
**Objects** | Pointer to [**[]Configobject**](configobject) |  | [optional] 

## Methods

### NewSpconfigexportresults

`func NewSpconfigexportresults() *Spconfigexportresults`

NewSpconfigexportresults instantiates a new Spconfigexportresults object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSpconfigexportresultsWithDefaults

`func NewSpconfigexportresultsWithDefaults() *Spconfigexportresults`

NewSpconfigexportresultsWithDefaults instantiates a new Spconfigexportresults object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetVersion

`func (o *Spconfigexportresults) GetVersion() int32`

GetVersion returns the Version field if non-nil, zero value otherwise.

### GetVersionOk

`func (o *Spconfigexportresults) GetVersionOk() (*int32, bool)`

GetVersionOk returns a tuple with the Version field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVersion

`func (o *Spconfigexportresults) SetVersion(v int32)`

SetVersion sets Version field to given value.

### HasVersion

`func (o *Spconfigexportresults) HasVersion() bool`

HasVersion returns a boolean if a field has been set.

### GetTimestamp

`func (o *Spconfigexportresults) GetTimestamp() SailPointTime`

GetTimestamp returns the Timestamp field if non-nil, zero value otherwise.

### GetTimestampOk

`func (o *Spconfigexportresults) GetTimestampOk() (*SailPointTime, bool)`

GetTimestampOk returns a tuple with the Timestamp field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimestamp

`func (o *Spconfigexportresults) SetTimestamp(v SailPointTime)`

SetTimestamp sets Timestamp field to given value.

### HasTimestamp

`func (o *Spconfigexportresults) HasTimestamp() bool`

HasTimestamp returns a boolean if a field has been set.

### GetTenant

`func (o *Spconfigexportresults) GetTenant() string`

GetTenant returns the Tenant field if non-nil, zero value otherwise.

### GetTenantOk

`func (o *Spconfigexportresults) GetTenantOk() (*string, bool)`

GetTenantOk returns a tuple with the Tenant field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTenant

`func (o *Spconfigexportresults) SetTenant(v string)`

SetTenant sets Tenant field to given value.

### HasTenant

`func (o *Spconfigexportresults) HasTenant() bool`

HasTenant returns a boolean if a field has been set.

### GetDescription

`func (o *Spconfigexportresults) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Spconfigexportresults) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Spconfigexportresults) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Spconfigexportresults) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetOptions

`func (o *Spconfigexportresults) GetOptions() Exportoptions`

GetOptions returns the Options field if non-nil, zero value otherwise.

### GetOptionsOk

`func (o *Spconfigexportresults) GetOptionsOk() (*Exportoptions, bool)`

GetOptionsOk returns a tuple with the Options field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOptions

`func (o *Spconfigexportresults) SetOptions(v Exportoptions)`

SetOptions sets Options field to given value.

### HasOptions

`func (o *Spconfigexportresults) HasOptions() bool`

HasOptions returns a boolean if a field has been set.

### GetObjects

`func (o *Spconfigexportresults) GetObjects() []Configobject`

GetObjects returns the Objects field if non-nil, zero value otherwise.

### GetObjectsOk

`func (o *Spconfigexportresults) GetObjectsOk() (*[]Configobject, bool)`

GetObjectsOk returns a tuple with the Objects field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetObjects

`func (o *Spconfigexportresults) SetObjects(v []Configobject)`

SetObjects sets Objects field to given value.

### HasObjects

`func (o *Spconfigexportresults) HasObjects() bool`

HasObjects returns a boolean if a field has been set.



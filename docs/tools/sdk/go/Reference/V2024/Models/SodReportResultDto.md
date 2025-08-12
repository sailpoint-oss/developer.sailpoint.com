---
id: v2024-sod-report-result-dto
title: SodReportResultDto
pagination_label: SodReportResultDto
sidebar_label: SodReportResultDto
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SodReportResultDto', 'V2024SodReportResultDto'] 
slug: /tools/sdk/go/v2024/models/sod-report-result-dto
tags: ['SDK', 'Software Development Kit', 'SodReportResultDto', 'V2024SodReportResultDto']
---

# SodReportResultDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** | SOD policy violation report result DTO type. | [optional] 
**Id** | Pointer to **string** | SOD policy violation report result ID. | [optional] 
**Name** | Pointer to **string** | Human-readable name of the SOD policy violation report result. | [optional] 

## Methods

### NewSodReportResultDto

`func NewSodReportResultDto() *SodReportResultDto`

NewSodReportResultDto instantiates a new SodReportResultDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSodReportResultDtoWithDefaults

`func NewSodReportResultDtoWithDefaults() *SodReportResultDto`

NewSodReportResultDtoWithDefaults instantiates a new SodReportResultDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *SodReportResultDto) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *SodReportResultDto) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *SodReportResultDto) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *SodReportResultDto) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *SodReportResultDto) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *SodReportResultDto) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *SodReportResultDto) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *SodReportResultDto) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *SodReportResultDto) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *SodReportResultDto) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *SodReportResultDto) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *SodReportResultDto) HasName() bool`

HasName returns a boolean if a field has been set.



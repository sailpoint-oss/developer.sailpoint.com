---
id: v1-reportresultreference
title: Reportresultreference
pagination_label: Reportresultreference
sidebar_label: Reportresultreference
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Reportresultreference', 'V1Reportresultreference'] 
slug: /tools/sdk/go/sodpolicies/models/reportresultreference
tags: ['SDK', 'Software Development Kit', 'Reportresultreference', 'V1Reportresultreference']
---

# Reportresultreference

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** | SOD policy violation report result DTO type. | [optional] 
**Id** | Pointer to **string** | SOD policy violation report result ID. | [optional] 
**Name** | Pointer to **string** | Human-readable name of the SOD policy violation report result. | [optional] 
**Status** | Pointer to **string** | Status of a SOD policy violation report. | [optional] 

## Methods

### NewReportresultreference

`func NewReportresultreference() *Reportresultreference`

NewReportresultreference instantiates a new Reportresultreference object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReportresultreferenceWithDefaults

`func NewReportresultreferenceWithDefaults() *Reportresultreference`

NewReportresultreferenceWithDefaults instantiates a new Reportresultreference object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *Reportresultreference) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Reportresultreference) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Reportresultreference) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *Reportresultreference) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *Reportresultreference) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Reportresultreference) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Reportresultreference) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Reportresultreference) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *Reportresultreference) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Reportresultreference) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Reportresultreference) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Reportresultreference) HasName() bool`

HasName returns a boolean if a field has been set.

### GetStatus

`func (o *Reportresultreference) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *Reportresultreference) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *Reportresultreference) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *Reportresultreference) HasStatus() bool`

HasStatus returns a boolean if a field has been set.


